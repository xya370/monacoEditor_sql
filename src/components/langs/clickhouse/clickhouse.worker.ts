import {worker, Position } from 'monaco-editor'
import * as EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js';
import { ICreateData } from '../baseSQLWorker';
import { ClickHouseSqlWorker } from './clickhouseWorker';

self.onmessage = () => {
	// ignore the first message
	EditorWorker.initialize((ctx: worker.IWorkerContext, createData: ICreateData) => {
		return new ClickHouseSqlWorker(ctx, createData);
	});
};