import { languages } from 'monaco-editor/esm/vs/editor/editor.api';

interface ILang extends languages.ILanguageExtensionPoint {
	loader: () => Promise<ILangImpl>;
}

interface ILangImpl {
	conf: languages.LanguageConfiguration;
	language: languages.IMonarchLanguage;
}

const languageDefinitions: { [languageId: string]: ILang } = {};
const lazyLanguageLoaders: { [languageId: string]: LazyLanguageLoader } = {};

class LazyLanguageLoader {
  public static getOrCreate(languageId: string): LazyLanguageLoader {
		if (!lazyLanguageLoaders[languageId]) {
			lazyLanguageLoaders[languageId] = new LazyLanguageLoader(languageId);
		}
		return lazyLanguageLoaders[languageId];
	}

	private readonly _languageId: string;
	private _loadingTriggered: boolean;
	private _lazyLoadPromise: Promise<ILangImpl>;
	private _lazyLoadPromiseResolve!: (value: ILangImpl) => void;
	private _lazyLoadPromiseReject!: (err: any) => void;

	constructor(languageId: string) {
		this._languageId = languageId;
		this._loadingTriggered = false;
		this._lazyLoadPromise = new Promise((resolve, reject) => {
			this._lazyLoadPromiseResolve = resolve;
			this._lazyLoadPromiseReject = reject;
		});
	}

	public whenLoaded(): Promise<ILangImpl> {
		return this._lazyLoadPromise;
	}

	public load(): Promise<ILangImpl> {
		if (!this._loadingTriggered) {
			this._loadingTriggered = true;
			languageDefinitions[this._languageId].loader().then(
				(mod) => this._lazyLoadPromiseResolve(mod),
				(err) => this._lazyLoadPromiseReject(err)
			);
		}
		return this._lazyLoadPromise;
	}
}

export async function loadLanguage(languageId: string): Promise<void> {
	await LazyLanguageLoader.getOrCreate(languageId).load();
}

export function registerLanguage(def: ILang): void {
	const languageId = def.id;

	languageDefinitions[languageId] = def;
	languages.register(def);

	const lazyLanguageLoader = LazyLanguageLoader.getOrCreate(languageId);

	languages.setMonarchTokensProvider(
		languageId,
		lazyLanguageLoader.whenLoaded().then((mod) => mod.language)
	);

	languages.onLanguage(languageId, async () => {
		const mod = await lazyLanguageLoader.load();
		languages.setLanguageConfiguration(languageId, mod.conf);
	});
}