import {worker, Position } from 'monaco-editor'
import { ClickHouseSql } from '@/parser/clickHouse';
import { BaseSQLWorker, ICreateData } from '@/components/langs/baseSQLWorker';

export class ClickHouseSqlWorker extends BaseSQLWorker {
	protected _ctx: worker.IWorkerContext;
	protected parser: ClickHouseSql;
	constructor(ctx: worker.IWorkerContext, createData: ICreateData) {
		super(ctx, createData);
		this._ctx = ctx;
		this.parser = new ClickHouseSql();
	}
}

export function create(ctx: worker.IWorkerContext, createData: ICreateData): ClickHouseSqlWorker {
	return new ClickHouseSqlWorker(ctx, createData);
}