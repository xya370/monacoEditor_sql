import { SingleStatementContext} from '@/lib/clickhouse/ClickHouseParser'
import {ClickHouseParserListener} from '@/lib/clickhouse/ClickHouseParserListener'
import { SplitListener } from '../common/splitListener';


export class ClickHouseSqlParserListener extends SplitListener<SingleStatementContext>
implements ClickHouseParserListener
{
  exitSingleStatement(ctx: SingleStatementContext) {
      this._statementsContext.push(ctx);
  }
}