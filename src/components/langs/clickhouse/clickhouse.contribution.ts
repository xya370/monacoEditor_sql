// export const clickHouseLanguageDefinition = {
//   aliases: ['Clickhouse', 'ClickHouse'],
//   extensions: [],
//   id: 'clickhouse',
//   loader: () => import('./clickhouse'),
// }

import { registerLanguage } from '@/components/langs/_.contribution.ts';
import { setupLanguageFeatures } from '@/components/langs/setupLanguageFeatures';

registerLanguage({
	id:'clickHouseSql',
	extensions: ['.clickHouseSql'],
	aliases: ['ClickHouseSql', 'clickhouse', 'ClickHouse', 'clickHouse'],
	loader: () => import('./clickhouse')
});

setupLanguageFeatures('clickHouseSql', {
	completionItems: true,
	diagnostics: true
});