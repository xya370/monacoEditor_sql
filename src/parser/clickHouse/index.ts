// import *  as antlr4 from 'antlr4ng';
import {CharStreams,CommonTokenStream, Token} from 'antlr4ng'
import { CandidatesCollection } from 'antlr4-c3';
import { ClickHouseLexer } from '@/lib/clickhouse/ClickHouseLexer';
import { ClickHouseParser} from '@/lib/clickhouse/ClickHouseParser';
import { BasicSQL } from '../common/basicSQL';
import { Suggestions, EntityContextType, SyntaxSuggestion } from '../common/types';
import { StmtContextType } from '../common/entityCollector';
import { ClickHouseSqlParserListener } from './clickHouseSplitListener';
import { ClickHouseEntityCollector } from './clickHouseEntityCollector';
export { ClickHouseEntityCollector, ClickHouseSqlParserListener };

export class ClickHouseSql extends BasicSQL<ClickHouseLexer, ProgramContext, ClickHouseParser> {
  protected createLexerFromCharStream(charStreams: CharStream) {
    return new ClickHouseLexer(charStreams);
  }
  protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
    return new ClickHouseParser(tokenStream);
  }

  protected preferredRules: Set<number> = new Set([
    ClickHouseParser.RULE_dbSchemaName, // db or schema name
    ClickHouseParser.RULE_dbSchemaNameCreate, // db or schema name that will be created
    ClickHouseParser.RULE_tableName, // table name
    ClickHouseParser.RULE_tableNameCreate, // table name that will be created
    ClickHouseParser.RULE_viewName, // view name
    ClickHouseParser.RULE_viewNameCreate, // view name that will be created
    ClickHouseParser.RULE_functionNameForDDL, // function name
    ClickHouseParser.RULE_functionNameForInvoke, // function name
    ClickHouseParser.RULE_functionNameCreate, // function name that will be created
    ClickHouseParser.RULE_columnName,
    ClickHouseParser.RULE_columnNameCreate,
  ]);
  protected get splitListener() {
    return new ClickHouseSqlParserListener();
  }

  protected createEntityCollector(input: string, caretTokenIndex?: number) {
      return new ClickHouseEntityCollector(input, caretTokenIndex);
  }
  protected processCandidates(
      candidates: CandidatesCollection,
      allTokens: Token[],
      caretTokenIndex: number,
      tokenIndexOffset: number
  ): Suggestions<Token> {
    const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
    const keywords: string[] = [];
    for(const candidate of candidates.rules) {
      const [ruleType, candidateRule] = candidate;
      const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
      const tokenRanges = allTokens.slice(
        startTokenIndex,
        caretTokenIndex + tokenIndexOffset + 1
      );
      let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
      switch(type) {
        case ClickHouseParser.RULE_catalogRef: {
          syntaxContextType = EntityContextType.CATALOG;
          break;
        }
        case ClickHouseParser.RULE_catalogNameCreate: {
          syntaxContextType = EntityContextType.CATALOG_CREATE;
            break;
        }
        case ClickHouseParser.RULE_schemaRef: {
            syntaxContextType = EntityContextType.DATABASE;
            break;
        }
        case ClickHouseParser.RULE_schemaNameCreate: {
          syntaxContextType = EntityContextType.DATABASE_CREATE;
          break;
        }
        case ClickHouseParser.RULE_tableRef: {
            syntaxContextType = EntityContextType.TABLE;
            break;
        }
        case ClickHouseParser.RULE_tableNameCreate: {
            syntaxContextType = EntityContextType.TABLE_CREATE;
            break;
        }
        case ClickHouseParser.RULE_viewRef: {
            syntaxContextType = EntityContextType.VIEW;
            break;
        }
        case ClickHouseParser.RULE_viewNameCreate: {
            syntaxContextType = EntityContextType.VIEW_CREATE;
            break;
        }
        case ClickHouseParser.RULE_functionName: {
            syntaxContextType = EntityContextType.FUNCTION;
            break;
        }
        case ClickHouseParser.RULE_functionNameCreate: {
            syntaxContextType = EntityContextType.FUNCTION_CREATE;
            break;
        }
        case ClickHouseParser.RULE_columnNameCreate: {
            syntaxContextType = EntityContextType.COLUMN_CREATE;
            break;
        }
        case ClickHouseParser.RULE_columnRef: {
            syntaxContextType = EntityContextType.COLUMN;
            break;
        }
        default:
      }
      if (syntaxContextType) {
        originalSyntaxSuggestions.push({
            syntaxContextType,
            wordRanges: tokenRanges,
        });
      }
    }
    for (let candidate of candidates.tokens) {
      const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
      const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
      if (displayName && symbolicName && symbolicName.startsWith('KW_')) {
          const keyword =
              displayName.startsWith("'") && displayName.endsWith("'")
                  ? displayName.slice(1, -1)
                  : displayName;
          keywords.push(keyword);
      }
    }
    return {
        syntax: originalSyntaxSuggestions,
        keywords,
    };
  }
}
// console.log(antlr4)
// export class ClickHouseSqlParse {
//   private createLexer(input: string) {
//     const inputStream = CharStreams.fromString(input);
//     const lexer = new ClickHouseLexer(inputStream);
//     return lexer
//   }
//   private createParser (input: string) {
//     const lexer = this.createLexer(input);
//     const tokens = new CommonTokenStream(lexer);
//     const parser = new ClickHouseParser(tokens);
//     return parser
//   }
//   parse (sql: string) {
//     const parser = this.createParser(sql)
//     console.log(parser)
//     const parseTree = parser.selectStatement();
//     return parseTree;
//   }
// }