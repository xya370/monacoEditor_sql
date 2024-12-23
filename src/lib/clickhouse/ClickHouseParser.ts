// Generated from dt-sql-parser/src/grammar/clickhouse/ClickHouseParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { ClickHouseParserListener } from "./ClickHouseParserListener.js";
import { ClickHouseParserVisitor } from "./ClickHouseParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class ClickHouseParser extends antlr.Parser {
    public static readonly ADD = 1;
    public static readonly AFTER = 2;
    public static readonly ALIAS = 3;
    public static readonly ALL = 4;
    public static readonly ALTER = 5;
    public static readonly AND = 6;
    public static readonly ANTI = 7;
    public static readonly ANY = 8;
    public static readonly ARRAY = 9;
    public static readonly AS = 10;
    public static readonly ASCENDING = 11;
    public static readonly ASOF = 12;
    public static readonly AST = 13;
    public static readonly ASYNC = 14;
    public static readonly ATTACH = 15;
    public static readonly BETWEEN = 16;
    public static readonly BOTH = 17;
    public static readonly BY = 18;
    public static readonly CASE = 19;
    public static readonly CAST = 20;
    public static readonly CHECK = 21;
    public static readonly CLEAR = 22;
    public static readonly CLUSTER = 23;
    public static readonly CODEC = 24;
    public static readonly COLLATE = 25;
    public static readonly COLUMN = 26;
    public static readonly COMMENT = 27;
    public static readonly CONSTRAINT = 28;
    public static readonly CREATE = 29;
    public static readonly CROSS = 30;
    public static readonly CUBE = 31;
    public static readonly CURRENT = 32;
    public static readonly DATABASE = 33;
    public static readonly DATABASES = 34;
    public static readonly DATE = 35;
    public static readonly DAY = 36;
    public static readonly DEDUPLICATE = 37;
    public static readonly DEFAULT = 38;
    public static readonly DELAY = 39;
    public static readonly DELETE = 40;
    public static readonly DESC = 41;
    public static readonly DESCENDING = 42;
    public static readonly DESCRIBE = 43;
    public static readonly DETACH = 44;
    public static readonly DICTIONARIES = 45;
    public static readonly DICTIONARY = 46;
    public static readonly DISK = 47;
    public static readonly DISTINCT = 48;
    public static readonly DISTRIBUTED = 49;
    public static readonly DROP = 50;
    public static readonly ELSE = 51;
    public static readonly END = 52;
    public static readonly ENGINE = 53;
    public static readonly EVENTS = 54;
    public static readonly EXISTS = 55;
    public static readonly EXPLAIN = 56;
    public static readonly EXPRESSION = 57;
    public static readonly EXTRACT = 58;
    public static readonly FETCHES = 59;
    public static readonly FINAL = 60;
    public static readonly FIRST = 61;
    public static readonly FLUSH = 62;
    public static readonly FOLLOWING = 63;
    public static readonly FOR = 64;
    public static readonly FORMAT = 65;
    public static readonly FREEZE = 66;
    public static readonly FROM = 67;
    public static readonly FULL = 68;
    public static readonly FUNCTION = 69;
    public static readonly GLOBAL = 70;
    public static readonly GRANULARITY = 71;
    public static readonly GROUP = 72;
    public static readonly HAVING = 73;
    public static readonly HIERARCHICAL = 74;
    public static readonly HOUR = 75;
    public static readonly ID = 76;
    public static readonly IF = 77;
    public static readonly ILIKE = 78;
    public static readonly IN = 79;
    public static readonly INDEX = 80;
    public static readonly INF = 81;
    public static readonly INJECTIVE = 82;
    public static readonly INNER = 83;
    public static readonly INSERT = 84;
    public static readonly INTERVAL = 85;
    public static readonly INTO = 86;
    public static readonly IS = 87;
    public static readonly IS_OBJECT_ID = 88;
    public static readonly JOIN = 89;
    public static readonly KEY = 90;
    public static readonly KILL = 91;
    public static readonly LAST = 92;
    public static readonly LAYOUT = 93;
    public static readonly LEADING = 94;
    public static readonly LEFT = 95;
    public static readonly LIFETIME = 96;
    public static readonly LIKE = 97;
    public static readonly LIMIT = 98;
    public static readonly LIVE = 99;
    public static readonly LOCAL = 100;
    public static readonly LOGS = 101;
    public static readonly MATERIALIZE = 102;
    public static readonly MATERIALIZED = 103;
    public static readonly MAX = 104;
    public static readonly MERGES = 105;
    public static readonly MIN = 106;
    public static readonly MINUTE = 107;
    public static readonly MODIFY = 108;
    public static readonly MONTH = 109;
    public static readonly MOVE = 110;
    public static readonly MUTATION = 111;
    public static readonly NAN_SQL = 112;
    public static readonly NO = 113;
    public static readonly NOT = 114;
    public static readonly NULL_SQL = 115;
    public static readonly NULLS = 116;
    public static readonly OFFSET = 117;
    public static readonly ON = 118;
    public static readonly OPTIMIZE = 119;
    public static readonly OR = 120;
    public static readonly ORDER = 121;
    public static readonly OUTER = 122;
    public static readonly OUTFILE = 123;
    public static readonly OVER = 124;
    public static readonly PARTITION = 125;
    public static readonly POPULATE = 126;
    public static readonly PRECEDING = 127;
    public static readonly PREWHERE = 128;
    public static readonly PRIMARY = 129;
    public static readonly PROJECTION = 130;
    public static readonly QUARTER = 131;
    public static readonly RANGE = 132;
    public static readonly RELOAD = 133;
    public static readonly REMOVE = 134;
    public static readonly RENAME = 135;
    public static readonly REPLACE = 136;
    public static readonly REPLICA = 137;
    public static readonly REPLICATED = 138;
    public static readonly RIGHT = 139;
    public static readonly ROLLUP = 140;
    public static readonly ROW = 141;
    public static readonly ROWS = 142;
    public static readonly SAMPLE = 143;
    public static readonly SECOND = 144;
    public static readonly SELECT = 145;
    public static readonly SEMI = 146;
    public static readonly SENDS = 147;
    public static readonly SET = 148;
    public static readonly SETTINGS = 149;
    public static readonly SHOW = 150;
    public static readonly SOURCE = 151;
    public static readonly START = 152;
    public static readonly STOP = 153;
    public static readonly SUBSTRING = 154;
    public static readonly SYNC = 155;
    public static readonly SYNTAX = 156;
    public static readonly SYSTEM = 157;
    public static readonly TABLE = 158;
    public static readonly TABLES = 159;
    public static readonly TEMPORARY = 160;
    public static readonly TEST = 161;
    public static readonly THEN = 162;
    public static readonly TIES = 163;
    public static readonly TIMEOUT = 164;
    public static readonly TIMESTAMP = 165;
    public static readonly TO = 166;
    public static readonly TOP = 167;
    public static readonly TOTALS = 168;
    public static readonly TRAILING = 169;
    public static readonly TRIM = 170;
    public static readonly TRUNCATE = 171;
    public static readonly TTL = 172;
    public static readonly TYPE = 173;
    public static readonly UNBOUNDED = 174;
    public static readonly UNION = 175;
    public static readonly UPDATE = 176;
    public static readonly USE = 177;
    public static readonly USING = 178;
    public static readonly UUID = 179;
    public static readonly VALUES = 180;
    public static readonly VIEW = 181;
    public static readonly VOLUME = 182;
    public static readonly WATCH = 183;
    public static readonly WEEK = 184;
    public static readonly WHEN = 185;
    public static readonly WHERE = 186;
    public static readonly WINDOW = 187;
    public static readonly WITH = 188;
    public static readonly YEAR = 189;
    public static readonly JSON_FALSE = 190;
    public static readonly JSON_TRUE = 191;
    public static readonly IDENTIFIER = 192;
    public static readonly FLOATING_LITERAL = 193;
    public static readonly OCTAL_LITERAL = 194;
    public static readonly DECIMAL_LITERAL = 195;
    public static readonly HEXADECIMAL_LITERAL = 196;
    public static readonly STRING_LITERAL = 197;
    public static readonly ARROW = 198;
    public static readonly ASTERISK = 199;
    public static readonly BACKQUOTE = 200;
    public static readonly BACKSLASH = 201;
    public static readonly COLON = 202;
    public static readonly COMMA = 203;
    public static readonly CONCAT = 204;
    public static readonly DASH = 205;
    public static readonly DOT = 206;
    public static readonly EQ_DOUBLE = 207;
    public static readonly EQ_SINGLE = 208;
    public static readonly GE = 209;
    public static readonly GT = 210;
    public static readonly LBRACE = 211;
    public static readonly LBRACKET = 212;
    public static readonly LE = 213;
    public static readonly LPAREN = 214;
    public static readonly LT = 215;
    public static readonly NOT_EQ = 216;
    public static readonly PERCENT = 217;
    public static readonly PLUS = 218;
    public static readonly QUERY = 219;
    public static readonly QUOTE_DOUBLE = 220;
    public static readonly QUOTE_SINGLE = 221;
    public static readonly RBRACE = 222;
    public static readonly RBRACKET = 223;
    public static readonly RPAREN = 224;
    public static readonly SEMICOLON = 225;
    public static readonly SLASH = 226;
    public static readonly UNDERSCORE = 227;
    public static readonly MULTI_LINE_COMMENT = 228;
    public static readonly SINGLE_LINE_COMMENT = 229;
    public static readonly WHITESPACE = 230;
    public static readonly RULE_program = 0;
    public static readonly RULE_query = 1;
    public static readonly RULE_ctes = 2;
    public static readonly RULE_namedQuery = 3;
    public static readonly RULE_columnAliases = 4;
    public static readonly RULE_alterStmt = 5;
    public static readonly RULE_alterTableClause = 6;
    public static readonly RULE_assignmentExprList = 7;
    public static readonly RULE_assignmentExpr = 8;
    public static readonly RULE_tableColumnPropertyType = 9;
    public static readonly RULE_partitionClause = 10;
    public static readonly RULE_attachStmt = 11;
    public static readonly RULE_checkStmt = 12;
    public static readonly RULE_createStmt = 13;
    public static readonly RULE_dictionarySchemaClause = 14;
    public static readonly RULE_dictionaryAttrDfnt = 15;
    public static readonly RULE_dictionaryEngineClause = 16;
    public static readonly RULE_dictionaryPrimaryKeyClause = 17;
    public static readonly RULE_dictionaryArgExpr = 18;
    public static readonly RULE_sourceClause = 19;
    public static readonly RULE_lifetimeClause = 20;
    public static readonly RULE_layoutClause = 21;
    public static readonly RULE_rangeClause = 22;
    public static readonly RULE_dictionarySettingsClause = 23;
    public static readonly RULE_clusterClause = 24;
    public static readonly RULE_uuidClause = 25;
    public static readonly RULE_destinationClause = 26;
    public static readonly RULE_subqueryClause = 27;
    public static readonly RULE_tableSchemaClause = 28;
    public static readonly RULE_engineClause = 29;
    public static readonly RULE_partitionByClause = 30;
    public static readonly RULE_primaryKeyClause = 31;
    public static readonly RULE_sampleByClause = 32;
    public static readonly RULE_ttlClause = 33;
    public static readonly RULE_engineExpr = 34;
    public static readonly RULE_tableElementExpr = 35;
    public static readonly RULE_tableColumnDfnt = 36;
    public static readonly RULE_tableColumnPropertyExpr = 37;
    public static readonly RULE_tableIndexDfnt = 38;
    public static readonly RULE_tableProjectionDfnt = 39;
    public static readonly RULE_codecExpr = 40;
    public static readonly RULE_codecArgExpr = 41;
    public static readonly RULE_ttlExpr = 42;
    public static readonly RULE_describeStmt = 43;
    public static readonly RULE_dropStmt = 44;
    public static readonly RULE_existsStmt = 45;
    public static readonly RULE_explainStmt = 46;
    public static readonly RULE_insertStmt = 47;
    public static readonly RULE_columnsClause = 48;
    public static readonly RULE_dataClause = 49;
    public static readonly RULE_assignmentValues = 50;
    public static readonly RULE_assignmentValue = 51;
    public static readonly RULE_killStmt = 52;
    public static readonly RULE_optimizeStmt = 53;
    public static readonly RULE_renameStmt = 54;
    public static readonly RULE_projectionSelectStmt = 55;
    public static readonly RULE_selectUnionStmt = 56;
    public static readonly RULE_selectStmtWithParens = 57;
    public static readonly RULE_selectStmt = 58;
    public static readonly RULE_withClause = 59;
    public static readonly RULE_topClause = 60;
    public static readonly RULE_fromClause = 61;
    public static readonly RULE_arrayJoinClause = 62;
    public static readonly RULE_windowClause = 63;
    public static readonly RULE_prewhereClause = 64;
    public static readonly RULE_whereClause = 65;
    public static readonly RULE_groupByClause = 66;
    public static readonly RULE_havingClause = 67;
    public static readonly RULE_orderByClause = 68;
    public static readonly RULE_projectionOrderByClause = 69;
    public static readonly RULE_limitByClause = 70;
    public static readonly RULE_limitClause = 71;
    public static readonly RULE_settingsClause = 72;
    public static readonly RULE_joinExpr = 73;
    public static readonly RULE_joinOp = 74;
    public static readonly RULE_joinOpCross = 75;
    public static readonly RULE_joinConstraintClause = 76;
    public static readonly RULE_sampleClause = 77;
    public static readonly RULE_limitExpr = 78;
    public static readonly RULE_orderExprList = 79;
    public static readonly RULE_orderExpr = 80;
    public static readonly RULE_ratioExpr = 81;
    public static readonly RULE_settingExprList = 82;
    public static readonly RULE_settingExpr = 83;
    public static readonly RULE_windowExpr = 84;
    public static readonly RULE_winPartitionByClause = 85;
    public static readonly RULE_winOrderByClause = 86;
    public static readonly RULE_winFrameClause = 87;
    public static readonly RULE_winFrameExtend = 88;
    public static readonly RULE_winFrameBound = 89;
    public static readonly RULE_setStmt = 90;
    public static readonly RULE_showStmt = 91;
    public static readonly RULE_systemStmt = 92;
    public static readonly RULE_truncateStmt = 93;
    public static readonly RULE_useStmt = 94;
    public static readonly RULE_watchStmt = 95;
    public static readonly RULE_columnTypeExpr = 96;
    public static readonly RULE_columnExprList = 97;
    public static readonly RULE_columnsExpr = 98;
    public static readonly RULE_columnExpr = 99;
    public static readonly RULE_columnArgList = 100;
    public static readonly RULE_columnArgExpr = 101;
    public static readonly RULE_columnLambdaExpr = 102;
    public static readonly RULE_columnIdentifier = 103;
    public static readonly RULE_nestedIdentifier = 104;
    public static readonly RULE_tableExpr = 105;
    public static readonly RULE_tableFunctionExpr = 106;
    public static readonly RULE_tableIdentifier = 107;
    public static readonly RULE_tableArgList = 108;
    public static readonly RULE_tableArgExpr = 109;
    public static readonly RULE_databaseIdentifier = 110;
    public static readonly RULE_floatingLiteral = 111;
    public static readonly RULE_numberLiteral = 112;
    public static readonly RULE_literal = 113;
    public static readonly RULE_interval = 114;
    public static readonly RULE_keyword = 115;
    public static readonly RULE_keywordForAlias = 116;
    public static readonly RULE_alias = 117;
    public static readonly RULE_identifier = 118;
    public static readonly RULE_identifierOrNull = 119;
    public static readonly RULE_enumValue = 120;

    public static readonly literalNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, "'false'", "'true'", null, null, null, null, null, 
        null, "'->'", "'*'", "'`'", "'\\'", "':'", "','", "'||'", "'-'", 
        "'.'", "'=='", "'='", "'>='", "'>'", "'{'", "'['", "'<='", "'('", 
        "'<'", null, "'%'", "'+'", "'?'", "'\"'", "'''", "'}'", "']'", "')'", 
        "';'", "'/'", "'_'"
    ];

    public static readonly symbolicNames = [
        null, "ADD", "AFTER", "ALIAS", "ALL", "ALTER", "AND", "ANTI", "ANY", 
        "ARRAY", "AS", "ASCENDING", "ASOF", "AST", "ASYNC", "ATTACH", "BETWEEN", 
        "BOTH", "BY", "CASE", "CAST", "CHECK", "CLEAR", "CLUSTER", "CODEC", 
        "COLLATE", "COLUMN", "COMMENT", "CONSTRAINT", "CREATE", "CROSS", 
        "CUBE", "CURRENT", "DATABASE", "DATABASES", "DATE", "DAY", "DEDUPLICATE", 
        "DEFAULT", "DELAY", "DELETE", "DESC", "DESCENDING", "DESCRIBE", 
        "DETACH", "DICTIONARIES", "DICTIONARY", "DISK", "DISTINCT", "DISTRIBUTED", 
        "DROP", "ELSE", "END", "ENGINE", "EVENTS", "EXISTS", "EXPLAIN", 
        "EXPRESSION", "EXTRACT", "FETCHES", "FINAL", "FIRST", "FLUSH", "FOLLOWING", 
        "FOR", "FORMAT", "FREEZE", "FROM", "FULL", "FUNCTION", "GLOBAL", 
        "GRANULARITY", "GROUP", "HAVING", "HIERARCHICAL", "HOUR", "ID", 
        "IF", "ILIKE", "IN", "INDEX", "INF", "INJECTIVE", "INNER", "INSERT", 
        "INTERVAL", "INTO", "IS", "IS_OBJECT_ID", "JOIN", "KEY", "KILL", 
        "LAST", "LAYOUT", "LEADING", "LEFT", "LIFETIME", "LIKE", "LIMIT", 
        "LIVE", "LOCAL", "LOGS", "MATERIALIZE", "MATERIALIZED", "MAX", "MERGES", 
        "MIN", "MINUTE", "MODIFY", "MONTH", "MOVE", "MUTATION", "NAN_SQL", 
        "NO", "NOT", "NULL_SQL", "NULLS", "OFFSET", "ON", "OPTIMIZE", "OR", 
        "ORDER", "OUTER", "OUTFILE", "OVER", "PARTITION", "POPULATE", "PRECEDING", 
        "PREWHERE", "PRIMARY", "PROJECTION", "QUARTER", "RANGE", "RELOAD", 
        "REMOVE", "RENAME", "REPLACE", "REPLICA", "REPLICATED", "RIGHT", 
        "ROLLUP", "ROW", "ROWS", "SAMPLE", "SECOND", "SELECT", "SEMI", "SENDS", 
        "SET", "SETTINGS", "SHOW", "SOURCE", "START", "STOP", "SUBSTRING", 
        "SYNC", "SYNTAX", "SYSTEM", "TABLE", "TABLES", "TEMPORARY", "TEST", 
        "THEN", "TIES", "TIMEOUT", "TIMESTAMP", "TO", "TOP", "TOTALS", "TRAILING", 
        "TRIM", "TRUNCATE", "TTL", "TYPE", "UNBOUNDED", "UNION", "UPDATE", 
        "USE", "USING", "UUID", "VALUES", "VIEW", "VOLUME", "WATCH", "WEEK", 
        "WHEN", "WHERE", "WINDOW", "WITH", "YEAR", "JSON_FALSE", "JSON_TRUE", 
        "IDENTIFIER", "FLOATING_LITERAL", "OCTAL_LITERAL", "DECIMAL_LITERAL", 
        "HEXADECIMAL_LITERAL", "STRING_LITERAL", "ARROW", "ASTERISK", "BACKQUOTE", 
        "BACKSLASH", "COLON", "COMMA", "CONCAT", "DASH", "DOT", "EQ_DOUBLE", 
        "EQ_SINGLE", "GE", "GT", "LBRACE", "LBRACKET", "LE", "LPAREN", "LT", 
        "NOT_EQ", "PERCENT", "PLUS", "QUERY", "QUOTE_DOUBLE", "QUOTE_SINGLE", 
        "RBRACE", "RBRACKET", "RPAREN", "SEMICOLON", "SLASH", "UNDERSCORE", 
        "MULTI_LINE_COMMENT", "SINGLE_LINE_COMMENT", "WHITESPACE"
    ];
    public static readonly ruleNames = [
        "program", "query", "ctes", "namedQuery", "columnAliases", "alterStmt", 
        "alterTableClause", "assignmentExprList", "assignmentExpr", "tableColumnPropertyType", 
        "partitionClause", "attachStmt", "checkStmt", "createStmt", "dictionarySchemaClause", 
        "dictionaryAttrDfnt", "dictionaryEngineClause", "dictionaryPrimaryKeyClause", 
        "dictionaryArgExpr", "sourceClause", "lifetimeClause", "layoutClause", 
        "rangeClause", "dictionarySettingsClause", "clusterClause", "uuidClause", 
        "destinationClause", "subqueryClause", "tableSchemaClause", "engineClause", 
        "partitionByClause", "primaryKeyClause", "sampleByClause", "ttlClause", 
        "engineExpr", "tableElementExpr", "tableColumnDfnt", "tableColumnPropertyExpr", 
        "tableIndexDfnt", "tableProjectionDfnt", "codecExpr", "codecArgExpr", 
        "ttlExpr", "describeStmt", "dropStmt", "existsStmt", "explainStmt", 
        "insertStmt", "columnsClause", "dataClause", "assignmentValues", 
        "assignmentValue", "killStmt", "optimizeStmt", "renameStmt", "projectionSelectStmt", 
        "selectUnionStmt", "selectStmtWithParens", "selectStmt", "withClause", 
        "topClause", "fromClause", "arrayJoinClause", "windowClause", "prewhereClause", 
        "whereClause", "groupByClause", "havingClause", "orderByClause", 
        "projectionOrderByClause", "limitByClause", "limitClause", "settingsClause", 
        "joinExpr", "joinOp", "joinOpCross", "joinConstraintClause", "sampleClause", 
        "limitExpr", "orderExprList", "orderExpr", "ratioExpr", "settingExprList", 
        "settingExpr", "windowExpr", "winPartitionByClause", "winOrderByClause", 
        "winFrameClause", "winFrameExtend", "winFrameBound", "setStmt", 
        "showStmt", "systemStmt", "truncateStmt", "useStmt", "watchStmt", 
        "columnTypeExpr", "columnExprList", "columnsExpr", "columnExpr", 
        "columnArgList", "columnArgExpr", "columnLambdaExpr", "columnIdentifier", 
        "nestedIdentifier", "tableExpr", "tableFunctionExpr", "tableIdentifier", 
        "tableArgList", "tableArgExpr", "databaseIdentifier", "floatingLiteral", 
        "numberLiteral", "literal", "interval", "keyword", "keywordForAlias", 
        "alias", "identifier", "identifierOrNull", "enumValue",
    ];

    public get grammarFileName(): string { return "ClickHouseParser.g4"; }
    public get literalNames(): (string | null)[] { return ClickHouseParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return ClickHouseParser.symbolicNames; }
    public get ruleNames(): string[] { return ClickHouseParser.ruleNames; }
    public get serializedATN(): number[] { return ClickHouseParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, ClickHouseParser._ATN, ClickHouseParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, ClickHouseParser.RULE_program);
        let _la: number;
        try {
            this.state = 256;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.ALTER:
            case ClickHouseParser.ATTACH:
            case ClickHouseParser.CHECK:
            case ClickHouseParser.CREATE:
            case ClickHouseParser.DESC:
            case ClickHouseParser.DESCRIBE:
            case ClickHouseParser.DETACH:
            case ClickHouseParser.DROP:
            case ClickHouseParser.EXISTS:
            case ClickHouseParser.EXPLAIN:
            case ClickHouseParser.KILL:
            case ClickHouseParser.OPTIMIZE:
            case ClickHouseParser.RENAME:
            case ClickHouseParser.REPLACE:
            case ClickHouseParser.SELECT:
            case ClickHouseParser.SET:
            case ClickHouseParser.SHOW:
            case ClickHouseParser.SYSTEM:
            case ClickHouseParser.TRUNCATE:
            case ClickHouseParser.USE:
            case ClickHouseParser.WATCH:
            case ClickHouseParser.WITH:
            case ClickHouseParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 242;
                this.query();
                this.state = 246;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 86) {
                    {
                    this.state = 243;
                    this.match(ClickHouseParser.INTO);
                    this.state = 244;
                    this.match(ClickHouseParser.OUTFILE);
                    this.state = 245;
                    this.match(ClickHouseParser.STRING_LITERAL);
                    }
                }

                this.state = 250;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 65) {
                    {
                    this.state = 248;
                    this.match(ClickHouseParser.FORMAT);
                    this.state = 249;
                    this.identifierOrNull();
                    }
                }

                this.state = 253;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 225) {
                    {
                    this.state = 252;
                    this.match(ClickHouseParser.SEMICOLON);
                    }
                }

                }
                break;
            case ClickHouseParser.INSERT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 255;
                this.insertStmt();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public query(): QueryContext {
        let localContext = new QueryContext(this.context, this.state);
        this.enterRule(localContext, 2, ClickHouseParser.RULE_query);
        try {
            this.state = 280;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 258;
                this.alterStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 259;
                this.attachStmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 260;
                this.checkStmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 261;
                this.createStmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 262;
                this.describeStmt();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 263;
                this.dropStmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 264;
                this.existsStmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 265;
                this.explainStmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 266;
                this.killStmt();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 267;
                this.optimizeStmt();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 268;
                this.renameStmt();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 269;
                this.selectUnionStmt();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 270;
                this.setStmt();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 271;
                this.showStmt();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 272;
                this.systemStmt();
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 273;
                this.truncateStmt();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 274;
                this.useStmt();
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 275;
                this.watchStmt();
                }
                break;
            case 19:
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 277;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
                case 1:
                    {
                    this.state = 276;
                    this.ctes();
                    }
                    break;
                }
                this.state = 279;
                this.selectStmt();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ctes(): CtesContext {
        let localContext = new CtesContext(this.context, this.state);
        this.enterRule(localContext, 4, ClickHouseParser.RULE_ctes);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 282;
            this.match(ClickHouseParser.WITH);
            this.state = 283;
            this.namedQuery();
            this.state = 288;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 203) {
                {
                {
                this.state = 284;
                this.match(ClickHouseParser.COMMA);
                this.state = 285;
                this.namedQuery();
                }
                }
                this.state = 290;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public namedQuery(): NamedQueryContext {
        let localContext = new NamedQueryContext(this.context, this.state);
        this.enterRule(localContext, 6, ClickHouseParser.RULE_namedQuery);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 291;
            localContext._name = this.identifier();
            this.state = 293;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 214) {
                {
                this.state = 292;
                this.columnAliases();
                }
            }

            this.state = 295;
            this.match(ClickHouseParser.AS);
            this.state = 296;
            this.match(ClickHouseParser.LPAREN);
            this.state = 297;
            this.query();
            this.state = 298;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnAliases(): ColumnAliasesContext {
        let localContext = new ColumnAliasesContext(this.context, this.state);
        this.enterRule(localContext, 8, ClickHouseParser.RULE_columnAliases);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 300;
            this.match(ClickHouseParser.LPAREN);
            this.state = 301;
            this.identifier();
            this.state = 306;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 203) {
                {
                {
                this.state = 302;
                this.match(ClickHouseParser.COMMA);
                this.state = 303;
                this.identifier();
                }
                }
                this.state = 308;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 309;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterStmt(): AlterStmtContext {
        let localContext = new AlterStmtContext(this.context, this.state);
        this.enterRule(localContext, 10, ClickHouseParser.RULE_alterStmt);
        let _la: number;
        try {
            localContext = new AlterTableStmtContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 311;
            this.match(ClickHouseParser.ALTER);
            this.state = 312;
            this.match(ClickHouseParser.TABLE);
            this.state = 313;
            this.tableIdentifier();
            this.state = 315;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 314;
                this.clusterClause();
                }
            }

            this.state = 317;
            this.alterTableClause();
            this.state = 322;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 203) {
                {
                {
                this.state = 318;
                this.match(ClickHouseParser.COMMA);
                this.state = 319;
                this.alterTableClause();
                }
                }
                this.state = 324;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alterTableClause(): AlterTableClauseContext {
        let localContext = new AlterTableClauseContext(this.context, this.state);
        this.enterRule(localContext, 12, ClickHouseParser.RULE_alterTableClause);
        let _la: number;
        try {
            this.state = 539;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
            case 1:
                localContext = new AlterTableClauseAddColumnContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 325;
                this.match(ClickHouseParser.ADD);
                this.state = 326;
                this.match(ClickHouseParser.COLUMN);
                this.state = 330;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
                case 1:
                    {
                    this.state = 327;
                    this.match(ClickHouseParser.IF);
                    this.state = 328;
                    this.match(ClickHouseParser.NOT);
                    this.state = 329;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 332;
                this.tableColumnDfnt();
                this.state = 335;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2) {
                    {
                    this.state = 333;
                    this.match(ClickHouseParser.AFTER);
                    this.state = 334;
                    this.nestedIdentifier();
                    }
                }

                }
                break;
            case 2:
                localContext = new AlterTableClauseAddIndexContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 337;
                this.match(ClickHouseParser.ADD);
                this.state = 338;
                this.match(ClickHouseParser.INDEX);
                this.state = 342;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
                case 1:
                    {
                    this.state = 339;
                    this.match(ClickHouseParser.IF);
                    this.state = 340;
                    this.match(ClickHouseParser.NOT);
                    this.state = 341;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 344;
                this.tableIndexDfnt();
                this.state = 347;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2) {
                    {
                    this.state = 345;
                    this.match(ClickHouseParser.AFTER);
                    this.state = 346;
                    this.nestedIdentifier();
                    }
                }

                }
                break;
            case 3:
                localContext = new AlterTableClauseAddProjectionContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 349;
                this.match(ClickHouseParser.ADD);
                this.state = 350;
                this.match(ClickHouseParser.PROJECTION);
                this.state = 354;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context) ) {
                case 1:
                    {
                    this.state = 351;
                    this.match(ClickHouseParser.IF);
                    this.state = 352;
                    this.match(ClickHouseParser.NOT);
                    this.state = 353;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 356;
                this.tableProjectionDfnt();
                this.state = 359;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 2) {
                    {
                    this.state = 357;
                    this.match(ClickHouseParser.AFTER);
                    this.state = 358;
                    this.nestedIdentifier();
                    }
                }

                }
                break;
            case 4:
                localContext = new AlterTableClauseAttachContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 361;
                this.match(ClickHouseParser.ATTACH);
                this.state = 362;
                this.partitionClause();
                this.state = 365;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 67) {
                    {
                    this.state = 363;
                    this.match(ClickHouseParser.FROM);
                    this.state = 364;
                    this.tableIdentifier();
                    }
                }

                }
                break;
            case 5:
                localContext = new AlterTableClauseClearColumnContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 367;
                this.match(ClickHouseParser.CLEAR);
                this.state = 368;
                this.match(ClickHouseParser.COLUMN);
                this.state = 371;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
                case 1:
                    {
                    this.state = 369;
                    this.match(ClickHouseParser.IF);
                    this.state = 370;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 373;
                this.nestedIdentifier();
                this.state = 376;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 79) {
                    {
                    this.state = 374;
                    this.match(ClickHouseParser.IN);
                    this.state = 375;
                    this.partitionClause();
                    }
                }

                }
                break;
            case 6:
                localContext = new AlterTableClauseClearIndexContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 378;
                this.match(ClickHouseParser.CLEAR);
                this.state = 379;
                this.match(ClickHouseParser.INDEX);
                this.state = 382;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
                case 1:
                    {
                    this.state = 380;
                    this.match(ClickHouseParser.IF);
                    this.state = 381;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 384;
                this.nestedIdentifier();
                this.state = 387;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 79) {
                    {
                    this.state = 385;
                    this.match(ClickHouseParser.IN);
                    this.state = 386;
                    this.partitionClause();
                    }
                }

                }
                break;
            case 7:
                localContext = new AlterTableClauseClearProjectionContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 389;
                this.match(ClickHouseParser.CLEAR);
                this.state = 390;
                this.match(ClickHouseParser.PROJECTION);
                this.state = 393;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
                case 1:
                    {
                    this.state = 391;
                    this.match(ClickHouseParser.IF);
                    this.state = 392;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 395;
                this.nestedIdentifier();
                this.state = 398;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 79) {
                    {
                    this.state = 396;
                    this.match(ClickHouseParser.IN);
                    this.state = 397;
                    this.partitionClause();
                    }
                }

                }
                break;
            case 8:
                localContext = new AlterTableClauseCommentContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 400;
                this.match(ClickHouseParser.COMMENT);
                this.state = 401;
                this.match(ClickHouseParser.COLUMN);
                this.state = 404;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
                case 1:
                    {
                    this.state = 402;
                    this.match(ClickHouseParser.IF);
                    this.state = 403;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 406;
                this.nestedIdentifier();
                this.state = 407;
                this.match(ClickHouseParser.STRING_LITERAL);
                }
                break;
            case 9:
                localContext = new AlterTableClauseDeleteContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 409;
                this.match(ClickHouseParser.DELETE);
                this.state = 410;
                this.match(ClickHouseParser.WHERE);
                this.state = 411;
                this.columnExpr(0);
                }
                break;
            case 10:
                localContext = new AlterTableClauseDetachContext(localContext);
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 412;
                this.match(ClickHouseParser.DETACH);
                this.state = 413;
                this.partitionClause();
                }
                break;
            case 11:
                localContext = new AlterTableClauseDropColumnContext(localContext);
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 414;
                this.match(ClickHouseParser.DROP);
                this.state = 415;
                this.match(ClickHouseParser.COLUMN);
                this.state = 418;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
                case 1:
                    {
                    this.state = 416;
                    this.match(ClickHouseParser.IF);
                    this.state = 417;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 420;
                this.nestedIdentifier();
                }
                break;
            case 12:
                localContext = new AlterTableClauseDropIndexContext(localContext);
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 421;
                this.match(ClickHouseParser.DROP);
                this.state = 422;
                this.match(ClickHouseParser.INDEX);
                this.state = 425;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
                case 1:
                    {
                    this.state = 423;
                    this.match(ClickHouseParser.IF);
                    this.state = 424;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 427;
                this.nestedIdentifier();
                }
                break;
            case 13:
                localContext = new AlterTableClauseDropProjectionContext(localContext);
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 428;
                this.match(ClickHouseParser.DROP);
                this.state = 429;
                this.match(ClickHouseParser.PROJECTION);
                this.state = 432;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
                case 1:
                    {
                    this.state = 430;
                    this.match(ClickHouseParser.IF);
                    this.state = 431;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 434;
                this.nestedIdentifier();
                }
                break;
            case 14:
                localContext = new AlterTableClauseDropPartitionContext(localContext);
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 435;
                this.match(ClickHouseParser.DROP);
                this.state = 436;
                this.partitionClause();
                }
                break;
            case 15:
                localContext = new AlterTableClauseFreezePartitionContext(localContext);
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 437;
                this.match(ClickHouseParser.FREEZE);
                this.state = 439;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 125) {
                    {
                    this.state = 438;
                    this.partitionClause();
                    }
                }

                }
                break;
            case 16:
                localContext = new AlterTableClauseMaterializeIndexContext(localContext);
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 441;
                this.match(ClickHouseParser.MATERIALIZE);
                this.state = 442;
                this.match(ClickHouseParser.INDEX);
                this.state = 445;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
                case 1:
                    {
                    this.state = 443;
                    this.match(ClickHouseParser.IF);
                    this.state = 444;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 447;
                this.nestedIdentifier();
                this.state = 450;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 79) {
                    {
                    this.state = 448;
                    this.match(ClickHouseParser.IN);
                    this.state = 449;
                    this.partitionClause();
                    }
                }

                }
                break;
            case 17:
                localContext = new AlterTableClauseMaterializeProjectionContext(localContext);
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 452;
                this.match(ClickHouseParser.MATERIALIZE);
                this.state = 453;
                this.match(ClickHouseParser.PROJECTION);
                this.state = 456;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
                case 1:
                    {
                    this.state = 454;
                    this.match(ClickHouseParser.IF);
                    this.state = 455;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 458;
                this.nestedIdentifier();
                this.state = 461;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 79) {
                    {
                    this.state = 459;
                    this.match(ClickHouseParser.IN);
                    this.state = 460;
                    this.partitionClause();
                    }
                }

                }
                break;
            case 18:
                localContext = new AlterTableClauseModifyCodecContext(localContext);
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 463;
                this.match(ClickHouseParser.MODIFY);
                this.state = 464;
                this.match(ClickHouseParser.COLUMN);
                this.state = 467;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
                case 1:
                    {
                    this.state = 465;
                    this.match(ClickHouseParser.IF);
                    this.state = 466;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 469;
                this.nestedIdentifier();
                this.state = 470;
                this.codecExpr();
                }
                break;
            case 19:
                localContext = new AlterTableClauseModifyCommentContext(localContext);
                this.enterOuterAlt(localContext, 19);
                {
                this.state = 472;
                this.match(ClickHouseParser.MODIFY);
                this.state = 473;
                this.match(ClickHouseParser.COLUMN);
                this.state = 476;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
                case 1:
                    {
                    this.state = 474;
                    this.match(ClickHouseParser.IF);
                    this.state = 475;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 478;
                this.nestedIdentifier();
                this.state = 479;
                this.match(ClickHouseParser.COMMENT);
                this.state = 480;
                this.match(ClickHouseParser.STRING_LITERAL);
                }
                break;
            case 20:
                localContext = new AlterTableClauseModifyRemoveContext(localContext);
                this.enterOuterAlt(localContext, 20);
                {
                this.state = 482;
                this.match(ClickHouseParser.MODIFY);
                this.state = 483;
                this.match(ClickHouseParser.COLUMN);
                this.state = 486;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 35, this.context) ) {
                case 1:
                    {
                    this.state = 484;
                    this.match(ClickHouseParser.IF);
                    this.state = 485;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 488;
                this.nestedIdentifier();
                this.state = 489;
                this.match(ClickHouseParser.REMOVE);
                this.state = 490;
                this.tableColumnPropertyType();
                }
                break;
            case 21:
                localContext = new AlterTableClauseModifyContext(localContext);
                this.enterOuterAlt(localContext, 21);
                {
                this.state = 492;
                this.match(ClickHouseParser.MODIFY);
                this.state = 493;
                this.match(ClickHouseParser.COLUMN);
                this.state = 496;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
                case 1:
                    {
                    this.state = 494;
                    this.match(ClickHouseParser.IF);
                    this.state = 495;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 498;
                this.tableColumnDfnt();
                }
                break;
            case 22:
                localContext = new AlterTableClauseModifyOrderByContext(localContext);
                this.enterOuterAlt(localContext, 22);
                {
                this.state = 499;
                this.match(ClickHouseParser.MODIFY);
                this.state = 500;
                this.match(ClickHouseParser.ORDER);
                this.state = 501;
                this.match(ClickHouseParser.BY);
                this.state = 502;
                this.columnExpr(0);
                }
                break;
            case 23:
                localContext = new AlterTableClauseModifyTTLContext(localContext);
                this.enterOuterAlt(localContext, 23);
                {
                this.state = 503;
                this.match(ClickHouseParser.MODIFY);
                this.state = 504;
                this.ttlClause();
                }
                break;
            case 24:
                localContext = new AlterTableClauseMovePartitionContext(localContext);
                this.enterOuterAlt(localContext, 24);
                {
                this.state = 505;
                this.match(ClickHouseParser.MOVE);
                this.state = 506;
                this.partitionClause();
                this.state = 516;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
                case 1:
                    {
                    this.state = 507;
                    this.match(ClickHouseParser.TO);
                    this.state = 508;
                    this.match(ClickHouseParser.DISK);
                    this.state = 509;
                    this.match(ClickHouseParser.STRING_LITERAL);
                    }
                    break;
                case 2:
                    {
                    this.state = 510;
                    this.match(ClickHouseParser.TO);
                    this.state = 511;
                    this.match(ClickHouseParser.VOLUME);
                    this.state = 512;
                    this.match(ClickHouseParser.STRING_LITERAL);
                    }
                    break;
                case 3:
                    {
                    this.state = 513;
                    this.match(ClickHouseParser.TO);
                    this.state = 514;
                    this.match(ClickHouseParser.TABLE);
                    this.state = 515;
                    this.tableIdentifier();
                    }
                    break;
                }
                }
                break;
            case 25:
                localContext = new AlterTableClauseRemoveTTLContext(localContext);
                this.enterOuterAlt(localContext, 25);
                {
                this.state = 518;
                this.match(ClickHouseParser.REMOVE);
                this.state = 519;
                this.match(ClickHouseParser.TTL);
                }
                break;
            case 26:
                localContext = new AlterTableClauseRenameContext(localContext);
                this.enterOuterAlt(localContext, 26);
                {
                this.state = 520;
                this.match(ClickHouseParser.RENAME);
                this.state = 521;
                this.match(ClickHouseParser.COLUMN);
                this.state = 524;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
                case 1:
                    {
                    this.state = 522;
                    this.match(ClickHouseParser.IF);
                    this.state = 523;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 526;
                this.nestedIdentifier();
                this.state = 527;
                this.match(ClickHouseParser.TO);
                this.state = 528;
                this.nestedIdentifier();
                }
                break;
            case 27:
                localContext = new AlterTableClauseReplaceContext(localContext);
                this.enterOuterAlt(localContext, 27);
                {
                this.state = 530;
                this.match(ClickHouseParser.REPLACE);
                this.state = 531;
                this.partitionClause();
                this.state = 532;
                this.match(ClickHouseParser.FROM);
                this.state = 533;
                this.tableIdentifier();
                }
                break;
            case 28:
                localContext = new AlterTableClauseUpdateContext(localContext);
                this.enterOuterAlt(localContext, 28);
                {
                this.state = 535;
                this.match(ClickHouseParser.UPDATE);
                this.state = 536;
                this.assignmentExprList();
                this.state = 537;
                this.whereClause();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentExprList(): AssignmentExprListContext {
        let localContext = new AssignmentExprListContext(this.context, this.state);
        this.enterRule(localContext, 14, ClickHouseParser.RULE_assignmentExprList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 541;
            this.assignmentExpr();
            this.state = 546;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 203) {
                {
                {
                this.state = 542;
                this.match(ClickHouseParser.COMMA);
                this.state = 543;
                this.assignmentExpr();
                }
                }
                this.state = 548;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentExpr(): AssignmentExprContext {
        let localContext = new AssignmentExprContext(this.context, this.state);
        this.enterRule(localContext, 16, ClickHouseParser.RULE_assignmentExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 549;
            this.nestedIdentifier();
            this.state = 550;
            this.match(ClickHouseParser.EQ_SINGLE);
            this.state = 551;
            this.columnExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableColumnPropertyType(): TableColumnPropertyTypeContext {
        let localContext = new TableColumnPropertyTypeContext(this.context, this.state);
        this.enterRule(localContext, 18, ClickHouseParser.RULE_tableColumnPropertyType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 553;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 150994952) !== 0) || _la === 38 || _la === 103 || _la === 172)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionClause(): PartitionClauseContext {
        let localContext = new PartitionClauseContext(this.context, this.state);
        this.enterRule(localContext, 20, ClickHouseParser.RULE_partitionClause);
        try {
            this.state = 560;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 41, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 555;
                this.match(ClickHouseParser.PARTITION);
                this.state = 556;
                this.columnExpr(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 557;
                this.match(ClickHouseParser.PARTITION);
                this.state = 558;
                this.match(ClickHouseParser.ID);
                this.state = 559;
                this.match(ClickHouseParser.STRING_LITERAL);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public attachStmt(): AttachStmtContext {
        let localContext = new AttachStmtContext(this.context, this.state);
        this.enterRule(localContext, 22, ClickHouseParser.RULE_attachStmt);
        let _la: number;
        try {
            localContext = new AttachDictionaryStmtContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 562;
            this.match(ClickHouseParser.ATTACH);
            this.state = 563;
            this.match(ClickHouseParser.DICTIONARY);
            this.state = 564;
            this.tableIdentifier();
            this.state = 566;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 565;
                this.clusterClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public checkStmt(): CheckStmtContext {
        let localContext = new CheckStmtContext(this.context, this.state);
        this.enterRule(localContext, 24, ClickHouseParser.RULE_checkStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 568;
            this.match(ClickHouseParser.CHECK);
            this.state = 569;
            this.match(ClickHouseParser.TABLE);
            this.state = 570;
            this.tableIdentifier();
            this.state = 572;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 125) {
                {
                this.state = 571;
                this.partitionClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createStmt(): CreateStmtContext {
        let localContext = new CreateStmtContext(this.context, this.state);
        this.enterRule(localContext, 26, ClickHouseParser.RULE_createStmt);
        let _la: number;
        try {
            this.state = 727;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 79, this.context) ) {
            case 1:
                localContext = new CreateDatabaseStmtContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 574;
                _la = this.tokenStream.LA(1);
                if(!(_la === 15 || _la === 29)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 575;
                this.match(ClickHouseParser.DATABASE);
                this.state = 579;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
                case 1:
                    {
                    this.state = 576;
                    this.match(ClickHouseParser.IF);
                    this.state = 577;
                    this.match(ClickHouseParser.NOT);
                    this.state = 578;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 581;
                this.databaseIdentifier();
                this.state = 583;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                    this.state = 582;
                    this.clusterClause();
                    }
                }

                this.state = 586;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 53) {
                    {
                    this.state = 585;
                    this.engineExpr();
                    }
                }

                }
                break;
            case 2:
                localContext = new CreateDictionaryStmtContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 595;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.ATTACH:
                    {
                    this.state = 588;
                    this.match(ClickHouseParser.ATTACH);
                    }
                    break;
                case ClickHouseParser.CREATE:
                    {
                    this.state = 589;
                    this.match(ClickHouseParser.CREATE);
                    this.state = 592;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 120) {
                        {
                        this.state = 590;
                        this.match(ClickHouseParser.OR);
                        this.state = 591;
                        this.match(ClickHouseParser.REPLACE);
                        }
                    }

                    }
                    break;
                case ClickHouseParser.REPLACE:
                    {
                    this.state = 594;
                    this.match(ClickHouseParser.REPLACE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 597;
                this.match(ClickHouseParser.DICTIONARY);
                this.state = 601;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
                case 1:
                    {
                    this.state = 598;
                    this.match(ClickHouseParser.IF);
                    this.state = 599;
                    this.match(ClickHouseParser.NOT);
                    this.state = 600;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 603;
                this.tableIdentifier();
                this.state = 605;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 179) {
                    {
                    this.state = 604;
                    this.uuidClause();
                    }
                }

                this.state = 608;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                    this.state = 607;
                    this.clusterClause();
                    }
                }

                this.state = 610;
                this.dictionarySchemaClause();
                this.state = 611;
                this.dictionaryEngineClause();
                }
                break;
            case 3:
                localContext = new CreateLiveViewStmtContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 613;
                _la = this.tokenStream.LA(1);
                if(!(_la === 15 || _la === 29)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 614;
                this.match(ClickHouseParser.LIVE);
                this.state = 615;
                this.match(ClickHouseParser.VIEW);
                this.state = 619;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
                case 1:
                    {
                    this.state = 616;
                    this.match(ClickHouseParser.IF);
                    this.state = 617;
                    this.match(ClickHouseParser.NOT);
                    this.state = 618;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 621;
                this.tableIdentifier();
                this.state = 623;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 179) {
                    {
                    this.state = 622;
                    this.uuidClause();
                    }
                }

                this.state = 626;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                    this.state = 625;
                    this.clusterClause();
                    }
                }

                this.state = 633;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 188) {
                    {
                    this.state = 628;
                    this.match(ClickHouseParser.WITH);
                    this.state = 629;
                    this.match(ClickHouseParser.TIMEOUT);
                    this.state = 631;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 195) {
                        {
                        this.state = 630;
                        this.match(ClickHouseParser.DECIMAL_LITERAL);
                        }
                    }

                    }
                }

                this.state = 636;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 166) {
                    {
                    this.state = 635;
                    this.destinationClause();
                    }
                }

                this.state = 639;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
                case 1:
                    {
                    this.state = 638;
                    this.tableSchemaClause();
                    }
                    break;
                }
                this.state = 641;
                this.subqueryClause();
                }
                break;
            case 4:
                localContext = new CreateMaterializedViewStmtContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 643;
                _la = this.tokenStream.LA(1);
                if(!(_la === 15 || _la === 29)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 644;
                this.match(ClickHouseParser.MATERIALIZED);
                this.state = 645;
                this.match(ClickHouseParser.VIEW);
                this.state = 649;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
                case 1:
                    {
                    this.state = 646;
                    this.match(ClickHouseParser.IF);
                    this.state = 647;
                    this.match(ClickHouseParser.NOT);
                    this.state = 648;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 651;
                this.tableIdentifier();
                this.state = 653;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 179) {
                    {
                    this.state = 652;
                    this.uuidClause();
                    }
                }

                this.state = 656;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                    this.state = 655;
                    this.clusterClause();
                    }
                }

                this.state = 659;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 10 || _la === 214) {
                    {
                    this.state = 658;
                    this.tableSchemaClause();
                    }
                }

                this.state = 666;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.TO:
                    {
                    this.state = 661;
                    this.destinationClause();
                    }
                    break;
                case ClickHouseParser.ENGINE:
                    {
                    this.state = 662;
                    this.engineClause();
                    this.state = 664;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 126) {
                        {
                        this.state = 663;
                        this.match(ClickHouseParser.POPULATE);
                        }
                    }

                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 668;
                this.subqueryClause();
                }
                break;
            case 5:
                localContext = new CreateTableStmtContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 677;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.ATTACH:
                    {
                    this.state = 670;
                    this.match(ClickHouseParser.ATTACH);
                    }
                    break;
                case ClickHouseParser.CREATE:
                    {
                    this.state = 671;
                    this.match(ClickHouseParser.CREATE);
                    this.state = 674;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 120) {
                        {
                        this.state = 672;
                        this.match(ClickHouseParser.OR);
                        this.state = 673;
                        this.match(ClickHouseParser.REPLACE);
                        }
                    }

                    }
                    break;
                case ClickHouseParser.REPLACE:
                    {
                    this.state = 676;
                    this.match(ClickHouseParser.REPLACE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 680;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 160) {
                    {
                    this.state = 679;
                    this.match(ClickHouseParser.TEMPORARY);
                    }
                }

                this.state = 682;
                this.match(ClickHouseParser.TABLE);
                this.state = 686;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 68, this.context) ) {
                case 1:
                    {
                    this.state = 683;
                    this.match(ClickHouseParser.IF);
                    this.state = 684;
                    this.match(ClickHouseParser.NOT);
                    this.state = 685;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 688;
                this.tableIdentifier();
                this.state = 690;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 179) {
                    {
                    this.state = 689;
                    this.uuidClause();
                    }
                }

                this.state = 693;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                    this.state = 692;
                    this.clusterClause();
                    }
                }

                this.state = 696;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
                case 1:
                    {
                    this.state = 695;
                    this.tableSchemaClause();
                    }
                    break;
                }
                this.state = 699;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 53) {
                    {
                    this.state = 698;
                    this.engineClause();
                    }
                }

                this.state = 702;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 10) {
                    {
                    this.state = 701;
                    this.subqueryClause();
                    }
                }

                }
                break;
            case 6:
                localContext = new CreateViewStmtContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 704;
                _la = this.tokenStream.LA(1);
                if(!(_la === 15 || _la === 29)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 707;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 120) {
                    {
                    this.state = 705;
                    this.match(ClickHouseParser.OR);
                    this.state = 706;
                    this.match(ClickHouseParser.REPLACE);
                    }
                }

                this.state = 709;
                this.match(ClickHouseParser.VIEW);
                this.state = 713;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
                case 1:
                    {
                    this.state = 710;
                    this.match(ClickHouseParser.IF);
                    this.state = 711;
                    this.match(ClickHouseParser.NOT);
                    this.state = 712;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 715;
                this.tableIdentifier();
                this.state = 717;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 179) {
                    {
                    this.state = 716;
                    this.uuidClause();
                    }
                }

                this.state = 720;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                    this.state = 719;
                    this.clusterClause();
                    }
                }

                this.state = 723;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 78, this.context) ) {
                case 1:
                    {
                    this.state = 722;
                    this.tableSchemaClause();
                    }
                    break;
                }
                this.state = 725;
                this.subqueryClause();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionarySchemaClause(): DictionarySchemaClauseContext {
        let localContext = new DictionarySchemaClauseContext(this.context, this.state);
        this.enterRule(localContext, 28, ClickHouseParser.RULE_dictionarySchemaClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 729;
            this.match(ClickHouseParser.LPAREN);
            this.state = 730;
            this.dictionaryAttrDfnt();
            this.state = 735;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 203) {
                {
                {
                this.state = 731;
                this.match(ClickHouseParser.COMMA);
                this.state = 732;
                this.dictionaryAttrDfnt();
                }
                }
                this.state = 737;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 738;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionaryAttrDfnt(): DictionaryAttrDfntContext {
        let localContext = new DictionaryAttrDfntContext(this.context, this.state);
        this.enterRule(localContext, 30, ClickHouseParser.RULE_dictionaryAttrDfnt);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 740;
            this.identifier();
            this.state = 741;
            this.columnTypeExpr();
            this.state = 763;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 82, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 761;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
                    case 1:
                        {
                        this.state = 742;
                        if (!(!localContext.attrs.count("default"))) {
                            throw this.createFailedPredicateException("!$attrs.count(\"default\")");
                        }
                        this.state = 743;
                        this.match(ClickHouseParser.DEFAULT);
                        this.state = 744;
                        this.literal();
                        localContext.attrs.insert("default");
                        }
                        break;
                    case 2:
                        {
                        this.state = 747;
                        if (!(!localContext.attrs.count("expression"))) {
                            throw this.createFailedPredicateException("!$attrs.count(\"expression\")");
                        }
                        this.state = 748;
                        this.match(ClickHouseParser.EXPRESSION);
                        this.state = 749;
                        this.columnExpr(0);
                        localContext.attrs.insert("expression");
                        }
                        break;
                    case 3:
                        {
                        this.state = 752;
                        if (!(!localContext.attrs.count("hierarchical"))) {
                            throw this.createFailedPredicateException("!$attrs.count(\"hierarchical\")");
                        }
                        this.state = 753;
                        this.match(ClickHouseParser.HIERARCHICAL);
                        localContext.attrs.insert("hierarchical");
                        }
                        break;
                    case 4:
                        {
                        this.state = 755;
                        if (!(!localContext.attrs.count("injective"))) {
                            throw this.createFailedPredicateException("!$attrs.count(\"injective\")");
                        }
                        this.state = 756;
                        this.match(ClickHouseParser.INJECTIVE);
                        localContext.attrs.insert("injective");
                        }
                        break;
                    case 5:
                        {
                        this.state = 758;
                        if (!(!localContext.attrs.count("is_object_id"))) {
                            throw this.createFailedPredicateException("!$attrs.count(\"is_object_id\")");
                        }
                        this.state = 759;
                        this.match(ClickHouseParser.IS_OBJECT_ID);
                        localContext.attrs.insert("is_object_id");
                        }
                        break;
                    }
                    }
                }
                this.state = 765;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 82, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionaryEngineClause(): DictionaryEngineClauseContext {
        let localContext = new DictionaryEngineClauseContext(this.context, this.state);
        this.enterRule(localContext, 32, ClickHouseParser.RULE_dictionaryEngineClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 767;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 83, this.context) ) {
            case 1:
                {
                this.state = 766;
                this.dictionaryPrimaryKeyClause();
                }
                break;
            }
            this.state = 791;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 789;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context) ) {
                    case 1:
                        {
                        this.state = 769;
                        if (!(!localContext.clauses.count("source"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"source\")");
                        }
                        this.state = 770;
                        this.sourceClause();
                        localContext.clauses.insert("source");
                        }
                        break;
                    case 2:
                        {
                        this.state = 773;
                        if (!(!localContext.clauses.count("lifetime"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"lifetime\")");
                        }
                        this.state = 774;
                        this.lifetimeClause();
                        localContext.clauses.insert("lifetime");
                        }
                        break;
                    case 3:
                        {
                        this.state = 777;
                        if (!(!localContext.clauses.count("layout"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"layout\")");
                        }
                        this.state = 778;
                        this.layoutClause();
                        localContext.clauses.insert("layout");
                        }
                        break;
                    case 4:
                        {
                        this.state = 781;
                        if (!(!localContext.clauses.count("range"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"range\")");
                        }
                        this.state = 782;
                        this.rangeClause();
                        localContext.clauses.insert("range");
                        }
                        break;
                    case 5:
                        {
                        this.state = 785;
                        if (!(!localContext.clauses.count("settings"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"settings\")");
                        }
                        this.state = 786;
                        this.dictionarySettingsClause();
                        localContext.clauses.insert("settings");
                        }
                        break;
                    }
                    }
                }
                this.state = 793;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionaryPrimaryKeyClause(): DictionaryPrimaryKeyClauseContext {
        let localContext = new DictionaryPrimaryKeyClauseContext(this.context, this.state);
        this.enterRule(localContext, 34, ClickHouseParser.RULE_dictionaryPrimaryKeyClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 794;
            this.match(ClickHouseParser.PRIMARY);
            this.state = 795;
            this.match(ClickHouseParser.KEY);
            this.state = 796;
            this.columnExprList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionaryArgExpr(): DictionaryArgExprContext {
        let localContext = new DictionaryArgExprContext(this.context, this.state);
        this.enterRule(localContext, 36, ClickHouseParser.RULE_dictionaryArgExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 798;
            this.identifier();
            this.state = 805;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.AFTER:
            case ClickHouseParser.ALIAS:
            case ClickHouseParser.ALL:
            case ClickHouseParser.ALTER:
            case ClickHouseParser.AND:
            case ClickHouseParser.ANTI:
            case ClickHouseParser.ANY:
            case ClickHouseParser.ARRAY:
            case ClickHouseParser.AS:
            case ClickHouseParser.ASCENDING:
            case ClickHouseParser.ASOF:
            case ClickHouseParser.AST:
            case ClickHouseParser.ASYNC:
            case ClickHouseParser.ATTACH:
            case ClickHouseParser.BETWEEN:
            case ClickHouseParser.BOTH:
            case ClickHouseParser.BY:
            case ClickHouseParser.CASE:
            case ClickHouseParser.CAST:
            case ClickHouseParser.CHECK:
            case ClickHouseParser.CLEAR:
            case ClickHouseParser.CLUSTER:
            case ClickHouseParser.CODEC:
            case ClickHouseParser.COLLATE:
            case ClickHouseParser.COLUMN:
            case ClickHouseParser.COMMENT:
            case ClickHouseParser.CONSTRAINT:
            case ClickHouseParser.CREATE:
            case ClickHouseParser.CROSS:
            case ClickHouseParser.CUBE:
            case ClickHouseParser.CURRENT:
            case ClickHouseParser.DATABASE:
            case ClickHouseParser.DATABASES:
            case ClickHouseParser.DATE:
            case ClickHouseParser.DAY:
            case ClickHouseParser.DEDUPLICATE:
            case ClickHouseParser.DEFAULT:
            case ClickHouseParser.DELAY:
            case ClickHouseParser.DELETE:
            case ClickHouseParser.DESC:
            case ClickHouseParser.DESCENDING:
            case ClickHouseParser.DESCRIBE:
            case ClickHouseParser.DETACH:
            case ClickHouseParser.DICTIONARIES:
            case ClickHouseParser.DICTIONARY:
            case ClickHouseParser.DISK:
            case ClickHouseParser.DISTINCT:
            case ClickHouseParser.DISTRIBUTED:
            case ClickHouseParser.DROP:
            case ClickHouseParser.ELSE:
            case ClickHouseParser.END:
            case ClickHouseParser.ENGINE:
            case ClickHouseParser.EVENTS:
            case ClickHouseParser.EXISTS:
            case ClickHouseParser.EXPLAIN:
            case ClickHouseParser.EXPRESSION:
            case ClickHouseParser.EXTRACT:
            case ClickHouseParser.FETCHES:
            case ClickHouseParser.FINAL:
            case ClickHouseParser.FIRST:
            case ClickHouseParser.FLUSH:
            case ClickHouseParser.FOLLOWING:
            case ClickHouseParser.FOR:
            case ClickHouseParser.FORMAT:
            case ClickHouseParser.FREEZE:
            case ClickHouseParser.FROM:
            case ClickHouseParser.FULL:
            case ClickHouseParser.FUNCTION:
            case ClickHouseParser.GLOBAL:
            case ClickHouseParser.GRANULARITY:
            case ClickHouseParser.GROUP:
            case ClickHouseParser.HAVING:
            case ClickHouseParser.HIERARCHICAL:
            case ClickHouseParser.HOUR:
            case ClickHouseParser.ID:
            case ClickHouseParser.IF:
            case ClickHouseParser.ILIKE:
            case ClickHouseParser.IN:
            case ClickHouseParser.INDEX:
            case ClickHouseParser.INJECTIVE:
            case ClickHouseParser.INNER:
            case ClickHouseParser.INSERT:
            case ClickHouseParser.INTERVAL:
            case ClickHouseParser.INTO:
            case ClickHouseParser.IS:
            case ClickHouseParser.IS_OBJECT_ID:
            case ClickHouseParser.JOIN:
            case ClickHouseParser.KEY:
            case ClickHouseParser.KILL:
            case ClickHouseParser.LAST:
            case ClickHouseParser.LAYOUT:
            case ClickHouseParser.LEADING:
            case ClickHouseParser.LEFT:
            case ClickHouseParser.LIFETIME:
            case ClickHouseParser.LIKE:
            case ClickHouseParser.LIMIT:
            case ClickHouseParser.LIVE:
            case ClickHouseParser.LOCAL:
            case ClickHouseParser.LOGS:
            case ClickHouseParser.MATERIALIZE:
            case ClickHouseParser.MATERIALIZED:
            case ClickHouseParser.MAX:
            case ClickHouseParser.MERGES:
            case ClickHouseParser.MIN:
            case ClickHouseParser.MINUTE:
            case ClickHouseParser.MODIFY:
            case ClickHouseParser.MONTH:
            case ClickHouseParser.MOVE:
            case ClickHouseParser.MUTATION:
            case ClickHouseParser.NO:
            case ClickHouseParser.NOT:
            case ClickHouseParser.NULLS:
            case ClickHouseParser.OFFSET:
            case ClickHouseParser.ON:
            case ClickHouseParser.OPTIMIZE:
            case ClickHouseParser.OR:
            case ClickHouseParser.ORDER:
            case ClickHouseParser.OUTER:
            case ClickHouseParser.OUTFILE:
            case ClickHouseParser.OVER:
            case ClickHouseParser.PARTITION:
            case ClickHouseParser.POPULATE:
            case ClickHouseParser.PRECEDING:
            case ClickHouseParser.PREWHERE:
            case ClickHouseParser.PRIMARY:
            case ClickHouseParser.QUARTER:
            case ClickHouseParser.RANGE:
            case ClickHouseParser.RELOAD:
            case ClickHouseParser.REMOVE:
            case ClickHouseParser.RENAME:
            case ClickHouseParser.REPLACE:
            case ClickHouseParser.REPLICA:
            case ClickHouseParser.REPLICATED:
            case ClickHouseParser.RIGHT:
            case ClickHouseParser.ROLLUP:
            case ClickHouseParser.ROW:
            case ClickHouseParser.ROWS:
            case ClickHouseParser.SAMPLE:
            case ClickHouseParser.SECOND:
            case ClickHouseParser.SELECT:
            case ClickHouseParser.SEMI:
            case ClickHouseParser.SENDS:
            case ClickHouseParser.SET:
            case ClickHouseParser.SETTINGS:
            case ClickHouseParser.SHOW:
            case ClickHouseParser.SOURCE:
            case ClickHouseParser.START:
            case ClickHouseParser.STOP:
            case ClickHouseParser.SUBSTRING:
            case ClickHouseParser.SYNC:
            case ClickHouseParser.SYNTAX:
            case ClickHouseParser.SYSTEM:
            case ClickHouseParser.TABLE:
            case ClickHouseParser.TABLES:
            case ClickHouseParser.TEMPORARY:
            case ClickHouseParser.TEST:
            case ClickHouseParser.THEN:
            case ClickHouseParser.TIES:
            case ClickHouseParser.TIMEOUT:
            case ClickHouseParser.TIMESTAMP:
            case ClickHouseParser.TO:
            case ClickHouseParser.TOP:
            case ClickHouseParser.TOTALS:
            case ClickHouseParser.TRAILING:
            case ClickHouseParser.TRIM:
            case ClickHouseParser.TRUNCATE:
            case ClickHouseParser.TTL:
            case ClickHouseParser.TYPE:
            case ClickHouseParser.UNBOUNDED:
            case ClickHouseParser.UNION:
            case ClickHouseParser.UPDATE:
            case ClickHouseParser.USE:
            case ClickHouseParser.USING:
            case ClickHouseParser.UUID:
            case ClickHouseParser.VALUES:
            case ClickHouseParser.VIEW:
            case ClickHouseParser.VOLUME:
            case ClickHouseParser.WATCH:
            case ClickHouseParser.WEEK:
            case ClickHouseParser.WHEN:
            case ClickHouseParser.WHERE:
            case ClickHouseParser.WINDOW:
            case ClickHouseParser.WITH:
            case ClickHouseParser.YEAR:
            case ClickHouseParser.JSON_FALSE:
            case ClickHouseParser.JSON_TRUE:
            case ClickHouseParser.IDENTIFIER:
                {
                this.state = 799;
                this.identifier();
                this.state = 802;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 214) {
                    {
                    this.state = 800;
                    this.match(ClickHouseParser.LPAREN);
                    this.state = 801;
                    this.match(ClickHouseParser.RPAREN);
                    }
                }

                }
                break;
            case ClickHouseParser.INF:
            case ClickHouseParser.NAN_SQL:
            case ClickHouseParser.NULL_SQL:
            case ClickHouseParser.FLOATING_LITERAL:
            case ClickHouseParser.OCTAL_LITERAL:
            case ClickHouseParser.DECIMAL_LITERAL:
            case ClickHouseParser.HEXADECIMAL_LITERAL:
            case ClickHouseParser.STRING_LITERAL:
            case ClickHouseParser.DASH:
            case ClickHouseParser.DOT:
            case ClickHouseParser.PLUS:
                {
                this.state = 804;
                this.literal();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sourceClause(): SourceClauseContext {
        let localContext = new SourceClauseContext(this.context, this.state);
        this.enterRule(localContext, 38, ClickHouseParser.RULE_sourceClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 807;
            this.match(ClickHouseParser.SOURCE);
            this.state = 808;
            this.match(ClickHouseParser.LPAREN);
            this.state = 809;
            this.identifier();
            this.state = 810;
            this.match(ClickHouseParser.LPAREN);
            this.state = 814;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & 4294967295) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 4294967295) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4294934527) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4294819839) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1073741823) !== 0)) {
                {
                {
                this.state = 811;
                this.dictionaryArgExpr();
                }
                }
                this.state = 816;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 817;
            this.match(ClickHouseParser.RPAREN);
            this.state = 818;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lifetimeClause(): LifetimeClauseContext {
        let localContext = new LifetimeClauseContext(this.context, this.state);
        this.enterRule(localContext, 40, ClickHouseParser.RULE_lifetimeClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 820;
            this.match(ClickHouseParser.LIFETIME);
            this.state = 821;
            this.match(ClickHouseParser.LPAREN);
            this.state = 831;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.DECIMAL_LITERAL:
                {
                this.state = 822;
                this.match(ClickHouseParser.DECIMAL_LITERAL);
                }
                break;
            case ClickHouseParser.MIN:
                {
                this.state = 823;
                this.match(ClickHouseParser.MIN);
                this.state = 824;
                this.match(ClickHouseParser.DECIMAL_LITERAL);
                this.state = 825;
                this.match(ClickHouseParser.MAX);
                this.state = 826;
                this.match(ClickHouseParser.DECIMAL_LITERAL);
                }
                break;
            case ClickHouseParser.MAX:
                {
                this.state = 827;
                this.match(ClickHouseParser.MAX);
                this.state = 828;
                this.match(ClickHouseParser.DECIMAL_LITERAL);
                this.state = 829;
                this.match(ClickHouseParser.MIN);
                this.state = 830;
                this.match(ClickHouseParser.DECIMAL_LITERAL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 833;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public layoutClause(): LayoutClauseContext {
        let localContext = new LayoutClauseContext(this.context, this.state);
        this.enterRule(localContext, 42, ClickHouseParser.RULE_layoutClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 835;
            this.match(ClickHouseParser.LAYOUT);
            this.state = 836;
            this.match(ClickHouseParser.LPAREN);
            this.state = 837;
            this.identifier();
            this.state = 838;
            this.match(ClickHouseParser.LPAREN);
            this.state = 842;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & 4294967295) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 4294967295) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4294934527) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4294819839) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1073741823) !== 0)) {
                {
                {
                this.state = 839;
                this.dictionaryArgExpr();
                }
                }
                this.state = 844;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 845;
            this.match(ClickHouseParser.RPAREN);
            this.state = 846;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public rangeClause(): RangeClauseContext {
        let localContext = new RangeClauseContext(this.context, this.state);
        this.enterRule(localContext, 44, ClickHouseParser.RULE_rangeClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 848;
            this.match(ClickHouseParser.RANGE);
            this.state = 849;
            this.match(ClickHouseParser.LPAREN);
            this.state = 860;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.MIN:
                {
                this.state = 850;
                this.match(ClickHouseParser.MIN);
                this.state = 851;
                this.identifier();
                this.state = 852;
                this.match(ClickHouseParser.MAX);
                this.state = 853;
                this.identifier();
                }
                break;
            case ClickHouseParser.MAX:
                {
                this.state = 855;
                this.match(ClickHouseParser.MAX);
                this.state = 856;
                this.identifier();
                this.state = 857;
                this.match(ClickHouseParser.MIN);
                this.state = 858;
                this.identifier();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 862;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dictionarySettingsClause(): DictionarySettingsClauseContext {
        let localContext = new DictionarySettingsClauseContext(this.context, this.state);
        this.enterRule(localContext, 46, ClickHouseParser.RULE_dictionarySettingsClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 864;
            this.match(ClickHouseParser.SETTINGS);
            this.state = 865;
            this.match(ClickHouseParser.LPAREN);
            this.state = 866;
            this.settingExprList();
            this.state = 867;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public clusterClause(): ClusterClauseContext {
        let localContext = new ClusterClauseContext(this.context, this.state);
        this.enterRule(localContext, 48, ClickHouseParser.RULE_clusterClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 869;
            this.match(ClickHouseParser.ON);
            this.state = 870;
            this.match(ClickHouseParser.CLUSTER);
            this.state = 873;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.AFTER:
            case ClickHouseParser.ALIAS:
            case ClickHouseParser.ALL:
            case ClickHouseParser.ALTER:
            case ClickHouseParser.AND:
            case ClickHouseParser.ANTI:
            case ClickHouseParser.ANY:
            case ClickHouseParser.ARRAY:
            case ClickHouseParser.AS:
            case ClickHouseParser.ASCENDING:
            case ClickHouseParser.ASOF:
            case ClickHouseParser.AST:
            case ClickHouseParser.ASYNC:
            case ClickHouseParser.ATTACH:
            case ClickHouseParser.BETWEEN:
            case ClickHouseParser.BOTH:
            case ClickHouseParser.BY:
            case ClickHouseParser.CASE:
            case ClickHouseParser.CAST:
            case ClickHouseParser.CHECK:
            case ClickHouseParser.CLEAR:
            case ClickHouseParser.CLUSTER:
            case ClickHouseParser.CODEC:
            case ClickHouseParser.COLLATE:
            case ClickHouseParser.COLUMN:
            case ClickHouseParser.COMMENT:
            case ClickHouseParser.CONSTRAINT:
            case ClickHouseParser.CREATE:
            case ClickHouseParser.CROSS:
            case ClickHouseParser.CUBE:
            case ClickHouseParser.CURRENT:
            case ClickHouseParser.DATABASE:
            case ClickHouseParser.DATABASES:
            case ClickHouseParser.DATE:
            case ClickHouseParser.DAY:
            case ClickHouseParser.DEDUPLICATE:
            case ClickHouseParser.DEFAULT:
            case ClickHouseParser.DELAY:
            case ClickHouseParser.DELETE:
            case ClickHouseParser.DESC:
            case ClickHouseParser.DESCENDING:
            case ClickHouseParser.DESCRIBE:
            case ClickHouseParser.DETACH:
            case ClickHouseParser.DICTIONARIES:
            case ClickHouseParser.DICTIONARY:
            case ClickHouseParser.DISK:
            case ClickHouseParser.DISTINCT:
            case ClickHouseParser.DISTRIBUTED:
            case ClickHouseParser.DROP:
            case ClickHouseParser.ELSE:
            case ClickHouseParser.END:
            case ClickHouseParser.ENGINE:
            case ClickHouseParser.EVENTS:
            case ClickHouseParser.EXISTS:
            case ClickHouseParser.EXPLAIN:
            case ClickHouseParser.EXPRESSION:
            case ClickHouseParser.EXTRACT:
            case ClickHouseParser.FETCHES:
            case ClickHouseParser.FINAL:
            case ClickHouseParser.FIRST:
            case ClickHouseParser.FLUSH:
            case ClickHouseParser.FOLLOWING:
            case ClickHouseParser.FOR:
            case ClickHouseParser.FORMAT:
            case ClickHouseParser.FREEZE:
            case ClickHouseParser.FROM:
            case ClickHouseParser.FULL:
            case ClickHouseParser.FUNCTION:
            case ClickHouseParser.GLOBAL:
            case ClickHouseParser.GRANULARITY:
            case ClickHouseParser.GROUP:
            case ClickHouseParser.HAVING:
            case ClickHouseParser.HIERARCHICAL:
            case ClickHouseParser.HOUR:
            case ClickHouseParser.ID:
            case ClickHouseParser.IF:
            case ClickHouseParser.ILIKE:
            case ClickHouseParser.IN:
            case ClickHouseParser.INDEX:
            case ClickHouseParser.INJECTIVE:
            case ClickHouseParser.INNER:
            case ClickHouseParser.INSERT:
            case ClickHouseParser.INTERVAL:
            case ClickHouseParser.INTO:
            case ClickHouseParser.IS:
            case ClickHouseParser.IS_OBJECT_ID:
            case ClickHouseParser.JOIN:
            case ClickHouseParser.KEY:
            case ClickHouseParser.KILL:
            case ClickHouseParser.LAST:
            case ClickHouseParser.LAYOUT:
            case ClickHouseParser.LEADING:
            case ClickHouseParser.LEFT:
            case ClickHouseParser.LIFETIME:
            case ClickHouseParser.LIKE:
            case ClickHouseParser.LIMIT:
            case ClickHouseParser.LIVE:
            case ClickHouseParser.LOCAL:
            case ClickHouseParser.LOGS:
            case ClickHouseParser.MATERIALIZE:
            case ClickHouseParser.MATERIALIZED:
            case ClickHouseParser.MAX:
            case ClickHouseParser.MERGES:
            case ClickHouseParser.MIN:
            case ClickHouseParser.MINUTE:
            case ClickHouseParser.MODIFY:
            case ClickHouseParser.MONTH:
            case ClickHouseParser.MOVE:
            case ClickHouseParser.MUTATION:
            case ClickHouseParser.NO:
            case ClickHouseParser.NOT:
            case ClickHouseParser.NULLS:
            case ClickHouseParser.OFFSET:
            case ClickHouseParser.ON:
            case ClickHouseParser.OPTIMIZE:
            case ClickHouseParser.OR:
            case ClickHouseParser.ORDER:
            case ClickHouseParser.OUTER:
            case ClickHouseParser.OUTFILE:
            case ClickHouseParser.OVER:
            case ClickHouseParser.PARTITION:
            case ClickHouseParser.POPULATE:
            case ClickHouseParser.PRECEDING:
            case ClickHouseParser.PREWHERE:
            case ClickHouseParser.PRIMARY:
            case ClickHouseParser.QUARTER:
            case ClickHouseParser.RANGE:
            case ClickHouseParser.RELOAD:
            case ClickHouseParser.REMOVE:
            case ClickHouseParser.RENAME:
            case ClickHouseParser.REPLACE:
            case ClickHouseParser.REPLICA:
            case ClickHouseParser.REPLICATED:
            case ClickHouseParser.RIGHT:
            case ClickHouseParser.ROLLUP:
            case ClickHouseParser.ROW:
            case ClickHouseParser.ROWS:
            case ClickHouseParser.SAMPLE:
            case ClickHouseParser.SECOND:
            case ClickHouseParser.SELECT:
            case ClickHouseParser.SEMI:
            case ClickHouseParser.SENDS:
            case ClickHouseParser.SET:
            case ClickHouseParser.SETTINGS:
            case ClickHouseParser.SHOW:
            case ClickHouseParser.SOURCE:
            case ClickHouseParser.START:
            case ClickHouseParser.STOP:
            case ClickHouseParser.SUBSTRING:
            case ClickHouseParser.SYNC:
            case ClickHouseParser.SYNTAX:
            case ClickHouseParser.SYSTEM:
            case ClickHouseParser.TABLE:
            case ClickHouseParser.TABLES:
            case ClickHouseParser.TEMPORARY:
            case ClickHouseParser.TEST:
            case ClickHouseParser.THEN:
            case ClickHouseParser.TIES:
            case ClickHouseParser.TIMEOUT:
            case ClickHouseParser.TIMESTAMP:
            case ClickHouseParser.TO:
            case ClickHouseParser.TOP:
            case ClickHouseParser.TOTALS:
            case ClickHouseParser.TRAILING:
            case ClickHouseParser.TRIM:
            case ClickHouseParser.TRUNCATE:
            case ClickHouseParser.TTL:
            case ClickHouseParser.TYPE:
            case ClickHouseParser.UNBOUNDED:
            case ClickHouseParser.UNION:
            case ClickHouseParser.UPDATE:
            case ClickHouseParser.USE:
            case ClickHouseParser.USING:
            case ClickHouseParser.UUID:
            case ClickHouseParser.VALUES:
            case ClickHouseParser.VIEW:
            case ClickHouseParser.VOLUME:
            case ClickHouseParser.WATCH:
            case ClickHouseParser.WEEK:
            case ClickHouseParser.WHEN:
            case ClickHouseParser.WHERE:
            case ClickHouseParser.WINDOW:
            case ClickHouseParser.WITH:
            case ClickHouseParser.YEAR:
            case ClickHouseParser.JSON_FALSE:
            case ClickHouseParser.JSON_TRUE:
            case ClickHouseParser.IDENTIFIER:
                {
                this.state = 871;
                this.identifier();
                }
                break;
            case ClickHouseParser.STRING_LITERAL:
                {
                this.state = 872;
                this.match(ClickHouseParser.STRING_LITERAL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public uuidClause(): UuidClauseContext {
        let localContext = new UuidClauseContext(this.context, this.state);
        this.enterRule(localContext, 50, ClickHouseParser.RULE_uuidClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 875;
            this.match(ClickHouseParser.UUID);
            this.state = 876;
            this.match(ClickHouseParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public destinationClause(): DestinationClauseContext {
        let localContext = new DestinationClauseContext(this.context, this.state);
        this.enterRule(localContext, 52, ClickHouseParser.RULE_destinationClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 878;
            this.match(ClickHouseParser.TO);
            this.state = 879;
            this.tableIdentifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public subqueryClause(): SubqueryClauseContext {
        let localContext = new SubqueryClauseContext(this.context, this.state);
        this.enterRule(localContext, 54, ClickHouseParser.RULE_subqueryClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 881;
            this.match(ClickHouseParser.AS);
            this.state = 882;
            this.selectUnionStmt();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableSchemaClause(): TableSchemaClauseContext {
        let localContext = new TableSchemaClauseContext(this.context, this.state);
        this.enterRule(localContext, 56, ClickHouseParser.RULE_tableSchemaClause);
        let _la: number;
        try {
            this.state = 899;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 94, this.context) ) {
            case 1:
                localContext = new SchemaDescriptionClauseContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 884;
                this.match(ClickHouseParser.LPAREN);
                this.state = 885;
                this.tableElementExpr();
                this.state = 890;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                    {
                    this.state = 886;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 887;
                    this.tableElementExpr();
                    }
                    }
                    this.state = 892;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 893;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 2:
                localContext = new SchemaAsTableClauseContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 895;
                this.match(ClickHouseParser.AS);
                this.state = 896;
                this.tableIdentifier();
                }
                break;
            case 3:
                localContext = new SchemaAsFunctionClauseContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 897;
                this.match(ClickHouseParser.AS);
                this.state = 898;
                this.tableFunctionExpr();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public engineClause(): EngineClauseContext {
        let localContext = new EngineClauseContext(this.context, this.state);
        this.enterRule(localContext, 58, ClickHouseParser.RULE_engineClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 901;
            this.engineExpr();
            this.state = 928;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    this.state = 926;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 95, this.context) ) {
                    case 1:
                        {
                        this.state = 902;
                        if (!(!localContext.clauses.count("orderByClause"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"orderByClause\")");
                        }
                        this.state = 903;
                        this.orderByClause();
                        localContext.clauses.insert("orderByClause");
                        }
                        break;
                    case 2:
                        {
                        this.state = 906;
                        if (!(!localContext.clauses.count("partitionByClause"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"partitionByClause\")");
                        }
                        this.state = 907;
                        this.partitionByClause();
                        localContext.clauses.insert("partitionByClause");
                        }
                        break;
                    case 3:
                        {
                        this.state = 910;
                        if (!(!localContext.clauses.count("primaryKeyClause"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"primaryKeyClause\")");
                        }
                        this.state = 911;
                        this.primaryKeyClause();
                        localContext.clauses.insert("primaryKeyClause");
                        }
                        break;
                    case 4:
                        {
                        this.state = 914;
                        if (!(!localContext.clauses.count("sampleByClause"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"sampleByClause\")");
                        }
                        this.state = 915;
                        this.sampleByClause();
                        localContext.clauses.insert("sampleByClause");
                        }
                        break;
                    case 5:
                        {
                        this.state = 918;
                        if (!(!localContext.clauses.count("ttlClause"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"ttlClause\")");
                        }
                        this.state = 919;
                        this.ttlClause();
                        localContext.clauses.insert("ttlClause");
                        }
                        break;
                    case 6:
                        {
                        this.state = 922;
                        if (!(!localContext.clauses.count("settingsClause"))) {
                            throw this.createFailedPredicateException("!$clauses.count(\"settingsClause\")");
                        }
                        this.state = 923;
                        this.settingsClause();
                        localContext.clauses.insert("settingsClause");
                        }
                        break;
                    }
                    }
                }
                this.state = 930;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public partitionByClause(): PartitionByClauseContext {
        let localContext = new PartitionByClauseContext(this.context, this.state);
        this.enterRule(localContext, 60, ClickHouseParser.RULE_partitionByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 931;
            this.match(ClickHouseParser.PARTITION);
            this.state = 932;
            this.match(ClickHouseParser.BY);
            this.state = 933;
            this.columnExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primaryKeyClause(): PrimaryKeyClauseContext {
        let localContext = new PrimaryKeyClauseContext(this.context, this.state);
        this.enterRule(localContext, 62, ClickHouseParser.RULE_primaryKeyClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 935;
            this.match(ClickHouseParser.PRIMARY);
            this.state = 936;
            this.match(ClickHouseParser.KEY);
            this.state = 937;
            this.columnExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sampleByClause(): SampleByClauseContext {
        let localContext = new SampleByClauseContext(this.context, this.state);
        this.enterRule(localContext, 64, ClickHouseParser.RULE_sampleByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 939;
            this.match(ClickHouseParser.SAMPLE);
            this.state = 940;
            this.match(ClickHouseParser.BY);
            this.state = 941;
            this.columnExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ttlClause(): TtlClauseContext {
        let localContext = new TtlClauseContext(this.context, this.state);
        this.enterRule(localContext, 66, ClickHouseParser.RULE_ttlClause);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 943;
            this.match(ClickHouseParser.TTL);
            this.state = 944;
            this.ttlExpr();
            this.state = 949;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 945;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 946;
                    this.ttlExpr();
                    }
                    }
                }
                this.state = 951;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public engineExpr(): EngineExprContext {
        let localContext = new EngineExprContext(this.context, this.state);
        this.enterRule(localContext, 68, ClickHouseParser.RULE_engineExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 952;
            this.match(ClickHouseParser.ENGINE);
            this.state = 954;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 208) {
                {
                this.state = 953;
                this.match(ClickHouseParser.EQ_SINGLE);
                }
            }

            this.state = 956;
            this.identifierOrNull();
            this.state = 962;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context) ) {
            case 1:
                {
                this.state = 957;
                this.match(ClickHouseParser.LPAREN);
                this.state = 959;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967291) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 72376511) !== 0)) {
                    {
                    this.state = 958;
                    this.columnExprList();
                    }
                }

                this.state = 961;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableElementExpr(): TableElementExprContext {
        let localContext = new TableElementExprContext(this.context, this.state);
        this.enterRule(localContext, 70, ClickHouseParser.RULE_tableElementExpr);
        try {
            this.state = 974;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                localContext = new TableElementExprColumnContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 964;
                this.tableColumnDfnt();
                }
                break;
            case 2:
                localContext = new TableElementExprConstraintContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 965;
                this.match(ClickHouseParser.CONSTRAINT);
                this.state = 966;
                this.identifier();
                this.state = 967;
                this.match(ClickHouseParser.CHECK);
                this.state = 968;
                this.columnExpr(0);
                }
                break;
            case 3:
                localContext = new TableElementExprIndexContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 970;
                this.match(ClickHouseParser.INDEX);
                this.state = 971;
                this.tableIndexDfnt();
                }
                break;
            case 4:
                localContext = new TableElementExprProjectionContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 972;
                this.match(ClickHouseParser.PROJECTION);
                this.state = 973;
                this.tableProjectionDfnt();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableColumnDfnt(): TableColumnDfntContext {
        let localContext = new TableColumnDfntContext(this.context, this.state);
        this.enterRule(localContext, 72, ClickHouseParser.RULE_tableColumnDfnt);
        let _la: number;
        try {
            this.state = 1008;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 110, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 976;
                this.nestedIdentifier();
                this.state = 977;
                this.columnTypeExpr();
                this.state = 979;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 3 || _la === 38 || _la === 103) {
                    {
                    this.state = 978;
                    this.tableColumnPropertyExpr();
                    }
                }

                this.state = 983;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27) {
                    {
                    this.state = 981;
                    this.match(ClickHouseParser.COMMENT);
                    this.state = 982;
                    this.match(ClickHouseParser.STRING_LITERAL);
                    }
                }

                this.state = 986;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                    this.state = 985;
                    this.codecExpr();
                    }
                }

                this.state = 990;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 172) {
                    {
                    this.state = 988;
                    this.match(ClickHouseParser.TTL);
                    this.state = 989;
                    this.columnExpr(0);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 992;
                this.nestedIdentifier();
                this.state = 994;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 106, this.context) ) {
                case 1:
                    {
                    this.state = 993;
                    this.columnTypeExpr();
                    }
                    break;
                }
                this.state = 996;
                this.tableColumnPropertyExpr();
                this.state = 999;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 27) {
                    {
                    this.state = 997;
                    this.match(ClickHouseParser.COMMENT);
                    this.state = 998;
                    this.match(ClickHouseParser.STRING_LITERAL);
                    }
                }

                this.state = 1002;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                    this.state = 1001;
                    this.codecExpr();
                    }
                }

                this.state = 1006;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 172) {
                    {
                    this.state = 1004;
                    this.match(ClickHouseParser.TTL);
                    this.state = 1005;
                    this.columnExpr(0);
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableColumnPropertyExpr(): TableColumnPropertyExprContext {
        let localContext = new TableColumnPropertyExprContext(this.context, this.state);
        this.enterRule(localContext, 74, ClickHouseParser.RULE_tableColumnPropertyExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1010;
            _la = this.tokenStream.LA(1);
            if(!(_la === 3 || _la === 38 || _la === 103)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1011;
            this.columnExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableIndexDfnt(): TableIndexDfntContext {
        let localContext = new TableIndexDfntContext(this.context, this.state);
        this.enterRule(localContext, 76, ClickHouseParser.RULE_tableIndexDfnt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1013;
            this.nestedIdentifier();
            this.state = 1014;
            this.columnExpr(0);
            this.state = 1015;
            this.match(ClickHouseParser.TYPE);
            this.state = 1016;
            this.columnTypeExpr();
            this.state = 1017;
            this.match(ClickHouseParser.GRANULARITY);
            this.state = 1018;
            this.match(ClickHouseParser.DECIMAL_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableProjectionDfnt(): TableProjectionDfntContext {
        let localContext = new TableProjectionDfntContext(this.context, this.state);
        this.enterRule(localContext, 78, ClickHouseParser.RULE_tableProjectionDfnt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1020;
            this.nestedIdentifier();
            this.state = 1021;
            this.projectionSelectStmt();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public codecExpr(): CodecExprContext {
        let localContext = new CodecExprContext(this.context, this.state);
        this.enterRule(localContext, 80, ClickHouseParser.RULE_codecExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1023;
            this.match(ClickHouseParser.CODEC);
            this.state = 1024;
            this.match(ClickHouseParser.LPAREN);
            this.state = 1025;
            this.codecArgExpr();
            this.state = 1030;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 203) {
                {
                {
                this.state = 1026;
                this.match(ClickHouseParser.COMMA);
                this.state = 1027;
                this.codecArgExpr();
                }
                }
                this.state = 1032;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1033;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public codecArgExpr(): CodecArgExprContext {
        let localContext = new CodecArgExprContext(this.context, this.state);
        this.enterRule(localContext, 82, ClickHouseParser.RULE_codecArgExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1035;
            this.identifier();
            this.state = 1041;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 214) {
                {
                this.state = 1036;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1038;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967291) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 72376511) !== 0)) {
                    {
                    this.state = 1037;
                    this.columnExprList();
                    }
                }

                this.state = 1040;
                this.match(ClickHouseParser.RPAREN);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ttlExpr(): TtlExprContext {
        let localContext = new TtlExprContext(this.context, this.state);
        this.enterRule(localContext, 84, ClickHouseParser.RULE_ttlExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1043;
            this.columnExpr(0);
            this.state = 1051;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 114, this.context) ) {
            case 1:
                {
                this.state = 1044;
                this.match(ClickHouseParser.DELETE);
                }
                break;
            case 2:
                {
                this.state = 1045;
                this.match(ClickHouseParser.TO);
                this.state = 1046;
                this.match(ClickHouseParser.DISK);
                this.state = 1047;
                this.match(ClickHouseParser.STRING_LITERAL);
                }
                break;
            case 3:
                {
                this.state = 1048;
                this.match(ClickHouseParser.TO);
                this.state = 1049;
                this.match(ClickHouseParser.VOLUME);
                this.state = 1050;
                this.match(ClickHouseParser.STRING_LITERAL);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public describeStmt(): DescribeStmtContext {
        let localContext = new DescribeStmtContext(this.context, this.state);
        this.enterRule(localContext, 86, ClickHouseParser.RULE_describeStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1053;
            _la = this.tokenStream.LA(1);
            if(!(_la === 41 || _la === 43)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1055;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
            case 1:
                {
                this.state = 1054;
                this.match(ClickHouseParser.TABLE);
                }
                break;
            }
            this.state = 1057;
            this.tableExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dropStmt(): DropStmtContext {
        let localContext = new DropStmtContext(this.context, this.state);
        this.enterRule(localContext, 88, ClickHouseParser.RULE_dropStmt);
        let _la: number;
        try {
            this.state = 1090;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 123, this.context) ) {
            case 1:
                localContext = new DropDatabaseStmtContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1059;
                _la = this.tokenStream.LA(1);
                if(!(_la === 44 || _la === 50)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1060;
                this.match(ClickHouseParser.DATABASE);
                this.state = 1063;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 116, this.context) ) {
                case 1:
                    {
                    this.state = 1061;
                    this.match(ClickHouseParser.IF);
                    this.state = 1062;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 1065;
                this.databaseIdentifier();
                this.state = 1067;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                    this.state = 1066;
                    this.clusterClause();
                    }
                }

                }
                break;
            case 2:
                localContext = new DropTableStmtContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1069;
                _la = this.tokenStream.LA(1);
                if(!(_la === 44 || _la === 50)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1076;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.DICTIONARY:
                    {
                    this.state = 1070;
                    this.match(ClickHouseParser.DICTIONARY);
                    }
                    break;
                case ClickHouseParser.TABLE:
                case ClickHouseParser.TEMPORARY:
                    {
                    this.state = 1072;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 160) {
                        {
                        this.state = 1071;
                        this.match(ClickHouseParser.TEMPORARY);
                        }
                    }

                    this.state = 1074;
                    this.match(ClickHouseParser.TABLE);
                    }
                    break;
                case ClickHouseParser.VIEW:
                    {
                    this.state = 1075;
                    this.match(ClickHouseParser.VIEW);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1080;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
                case 1:
                    {
                    this.state = 1078;
                    this.match(ClickHouseParser.IF);
                    this.state = 1079;
                    this.match(ClickHouseParser.EXISTS);
                    }
                    break;
                }
                this.state = 1082;
                this.tableIdentifier();
                this.state = 1084;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 118) {
                    {
                    this.state = 1083;
                    this.clusterClause();
                    }
                }

                this.state = 1088;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 113) {
                    {
                    this.state = 1086;
                    this.match(ClickHouseParser.NO);
                    this.state = 1087;
                    this.match(ClickHouseParser.DELAY);
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public existsStmt(): ExistsStmtContext {
        let localContext = new ExistsStmtContext(this.context, this.state);
        this.enterRule(localContext, 90, ClickHouseParser.RULE_existsStmt);
        let _la: number;
        try {
            this.state = 1105;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context) ) {
            case 1:
                localContext = new ExistsDatabaseStmtContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1092;
                this.match(ClickHouseParser.EXISTS);
                this.state = 1093;
                this.match(ClickHouseParser.DATABASE);
                this.state = 1094;
                this.databaseIdentifier();
                }
                break;
            case 2:
                localContext = new ExistsTableStmtContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1095;
                this.match(ClickHouseParser.EXISTS);
                this.state = 1102;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 125, this.context) ) {
                case 1:
                    {
                    this.state = 1096;
                    this.match(ClickHouseParser.DICTIONARY);
                    }
                    break;
                case 2:
                    {
                    this.state = 1098;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 160) {
                        {
                        this.state = 1097;
                        this.match(ClickHouseParser.TEMPORARY);
                        }
                    }

                    this.state = 1100;
                    this.match(ClickHouseParser.TABLE);
                    }
                    break;
                case 3:
                    {
                    this.state = 1101;
                    this.match(ClickHouseParser.VIEW);
                    }
                    break;
                }
                this.state = 1104;
                this.tableIdentifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public explainStmt(): ExplainStmtContext {
        let localContext = new ExplainStmtContext(this.context, this.state);
        this.enterRule(localContext, 92, ClickHouseParser.RULE_explainStmt);
        try {
            this.state = 1113;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context) ) {
            case 1:
                localContext = new ExplainASTStmtContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1107;
                this.match(ClickHouseParser.EXPLAIN);
                this.state = 1108;
                this.match(ClickHouseParser.AST);
                this.state = 1109;
                this.query();
                }
                break;
            case 2:
                localContext = new ExplainSyntaxStmtContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1110;
                this.match(ClickHouseParser.EXPLAIN);
                this.state = 1111;
                this.match(ClickHouseParser.SYNTAX);
                this.state = 1112;
                this.query();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public insertStmt(): InsertStmtContext {
        let localContext = new InsertStmtContext(this.context, this.state);
        this.enterRule(localContext, 94, ClickHouseParser.RULE_insertStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1115;
            this.match(ClickHouseParser.INSERT);
            this.state = 1116;
            this.match(ClickHouseParser.INTO);
            this.state = 1118;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 128, this.context) ) {
            case 1:
                {
                this.state = 1117;
                this.match(ClickHouseParser.TABLE);
                }
                break;
            }
            this.state = 1123;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context) ) {
            case 1:
                {
                this.state = 1120;
                this.tableIdentifier();
                }
                break;
            case 2:
                {
                this.state = 1121;
                this.match(ClickHouseParser.FUNCTION);
                this.state = 1122;
                this.tableFunctionExpr();
                }
                break;
            }
            this.state = 1126;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context) ) {
            case 1:
                {
                this.state = 1125;
                this.columnsClause();
                }
                break;
            }
            this.state = 1128;
            this.dataClause();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnsClause(): ColumnsClauseContext {
        let localContext = new ColumnsClauseContext(this.context, this.state);
        this.enterRule(localContext, 96, ClickHouseParser.RULE_columnsClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1130;
            this.match(ClickHouseParser.LPAREN);
            this.state = 1131;
            this.nestedIdentifier();
            this.state = 1136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 203) {
                {
                {
                this.state = 1132;
                this.match(ClickHouseParser.COMMA);
                this.state = 1133;
                this.nestedIdentifier();
                }
                }
                this.state = 1138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1139;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dataClause(): DataClauseContext {
        let localContext = new DataClauseContext(this.context, this.state);
        this.enterRule(localContext, 98, ClickHouseParser.RULE_dataClause);
        let _la: number;
        try {
            this.state = 1158;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.FORMAT:
                localContext = new DataClauseFormatContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1141;
                this.match(ClickHouseParser.FORMAT);
                this.state = 1142;
                this.identifier();
                }
                break;
            case ClickHouseParser.VALUES:
                localContext = new DataClauseValuesContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1143;
                this.match(ClickHouseParser.VALUES);
                this.state = 1144;
                this.assignmentValues();
                this.state = 1149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                    {
                    this.state = 1145;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 1146;
                    this.assignmentValues();
                    }
                    }
                    this.state = 1151;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case ClickHouseParser.SELECT:
            case ClickHouseParser.WITH:
            case ClickHouseParser.LPAREN:
                localContext = new DataClauseSelectContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1152;
                this.selectUnionStmt();
                this.state = 1154;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 225) {
                    {
                    this.state = 1153;
                    this.match(ClickHouseParser.SEMICOLON);
                    }
                }

                this.state = 1156;
                this.match(ClickHouseParser.EOF);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentValues(): AssignmentValuesContext {
        let localContext = new AssignmentValuesContext(this.context, this.state);
        this.enterRule(localContext, 100, ClickHouseParser.RULE_assignmentValues);
        let _la: number;
        try {
            this.state = 1173;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 136, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1160;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1161;
                this.assignmentValue();
                this.state = 1166;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                    {
                    this.state = 1162;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 1163;
                    this.assignmentValue();
                    }
                    }
                    this.state = 1168;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1169;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1171;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1172;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentValue(): AssignmentValueContext {
        let localContext = new AssignmentValueContext(this.context, this.state);
        this.enterRule(localContext, 102, ClickHouseParser.RULE_assignmentValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1175;
            this.literal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public killStmt(): KillStmtContext {
        let localContext = new KillStmtContext(this.context, this.state);
        this.enterRule(localContext, 104, ClickHouseParser.RULE_killStmt);
        let _la: number;
        try {
            localContext = new KillMutationStmtContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1177;
            this.match(ClickHouseParser.KILL);
            this.state = 1178;
            this.match(ClickHouseParser.MUTATION);
            this.state = 1180;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 1179;
                this.clusterClause();
                }
            }

            this.state = 1182;
            this.whereClause();
            this.state = 1184;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14 || _la === 155 || _la === 161) {
                {
                this.state = 1183;
                _la = this.tokenStream.LA(1);
                if(!(_la === 14 || _la === 155 || _la === 161)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public optimizeStmt(): OptimizeStmtContext {
        let localContext = new OptimizeStmtContext(this.context, this.state);
        this.enterRule(localContext, 106, ClickHouseParser.RULE_optimizeStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1186;
            this.match(ClickHouseParser.OPTIMIZE);
            this.state = 1187;
            this.match(ClickHouseParser.TABLE);
            this.state = 1188;
            this.tableIdentifier();
            this.state = 1190;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 1189;
                this.clusterClause();
                }
            }

            this.state = 1193;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 125) {
                {
                this.state = 1192;
                this.partitionClause();
                }
            }

            this.state = 1196;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 1195;
                this.match(ClickHouseParser.FINAL);
                }
            }

            this.state = 1199;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 37) {
                {
                this.state = 1198;
                this.match(ClickHouseParser.DEDUPLICATE);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public renameStmt(): RenameStmtContext {
        let localContext = new RenameStmtContext(this.context, this.state);
        this.enterRule(localContext, 108, ClickHouseParser.RULE_renameStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1201;
            this.match(ClickHouseParser.RENAME);
            this.state = 1202;
            this.match(ClickHouseParser.TABLE);
            this.state = 1203;
            this.tableIdentifier();
            this.state = 1204;
            this.match(ClickHouseParser.TO);
            this.state = 1205;
            this.tableIdentifier();
            this.state = 1213;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 203) {
                {
                {
                this.state = 1206;
                this.match(ClickHouseParser.COMMA);
                this.state = 1207;
                this.tableIdentifier();
                this.state = 1208;
                this.match(ClickHouseParser.TO);
                this.state = 1209;
                this.tableIdentifier();
                }
                }
                this.state = 1215;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1217;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 1216;
                this.clusterClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public projectionSelectStmt(): ProjectionSelectStmtContext {
        let localContext = new ProjectionSelectStmtContext(this.context, this.state);
        this.enterRule(localContext, 110, ClickHouseParser.RULE_projectionSelectStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1219;
            this.match(ClickHouseParser.LPAREN);
            this.state = 1221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 188) {
                {
                this.state = 1220;
                this.withClause();
                }
            }

            this.state = 1223;
            this.match(ClickHouseParser.SELECT);
            this.state = 1224;
            this.columnExprList();
            this.state = 1226;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 72) {
                {
                this.state = 1225;
                this.groupByClause();
                }
            }

            this.state = 1229;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 121) {
                {
                this.state = 1228;
                this.projectionOrderByClause();
                }
            }

            this.state = 1231;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        let localContext = new SelectUnionStmtContext(this.context, this.state);
        this.enterRule(localContext, 112, ClickHouseParser.RULE_selectUnionStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1233;
            this.selectStmtWithParens();
            this.state = 1239;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 175) {
                {
                {
                this.state = 1234;
                this.match(ClickHouseParser.UNION);
                this.state = 1235;
                this.match(ClickHouseParser.ALL);
                this.state = 1236;
                this.selectStmtWithParens();
                }
                }
                this.state = 1241;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectStmtWithParens(): SelectStmtWithParensContext {
        let localContext = new SelectStmtWithParensContext(this.context, this.state);
        this.enterRule(localContext, 114, ClickHouseParser.RULE_selectStmtWithParens);
        try {
            this.state = 1247;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.SELECT:
            case ClickHouseParser.WITH:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1242;
                this.selectStmt();
                }
                break;
            case ClickHouseParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1243;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1244;
                this.selectUnionStmt();
                this.state = 1245;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public selectStmt(): SelectStmtContext {
        let localContext = new SelectStmtContext(this.context, this.state);
        this.enterRule(localContext, 116, ClickHouseParser.RULE_selectStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 188) {
                {
                this.state = 1249;
                this.withClause();
                }
            }

            this.state = 1252;
            this.match(ClickHouseParser.SELECT);
            this.state = 1254;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 151, this.context) ) {
            case 1:
                {
                this.state = 1253;
                this.match(ClickHouseParser.DISTINCT);
                }
                break;
            }
            this.state = 1257;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 152, this.context) ) {
            case 1:
                {
                this.state = 1256;
                this.topClause();
                }
                break;
            }
            this.state = 1259;
            this.columnExprList();
            this.state = 1261;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 67) {
                {
                this.state = 1260;
                this.fromClause();
                }
            }

            this.state = 1264;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9 || _la === 83 || _la === 95) {
                {
                this.state = 1263;
                this.arrayJoinClause();
                }
            }

            this.state = 1267;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 187) {
                {
                this.state = 1266;
                this.windowClause();
                }
            }

            this.state = 1270;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 128) {
                {
                this.state = 1269;
                this.prewhereClause();
                }
            }

            this.state = 1273;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 186) {
                {
                this.state = 1272;
                this.whereClause();
                }
            }

            this.state = 1276;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 72) {
                {
                this.state = 1275;
                this.groupByClause();
                }
            }

            this.state = 1280;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 159, this.context) ) {
            case 1:
                {
                this.state = 1278;
                this.match(ClickHouseParser.WITH);
                this.state = 1279;
                _la = this.tokenStream.LA(1);
                if(!(_la === 31 || _la === 140)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1284;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 188) {
                {
                this.state = 1282;
                this.match(ClickHouseParser.WITH);
                this.state = 1283;
                this.match(ClickHouseParser.TOTALS);
                }
            }

            this.state = 1287;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 73) {
                {
                this.state = 1286;
                this.havingClause();
                }
            }

            this.state = 1290;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 121) {
                {
                this.state = 1289;
                this.orderByClause();
                }
            }

            this.state = 1293;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 163, this.context) ) {
            case 1:
                {
                this.state = 1292;
                this.limitByClause();
                }
                break;
            }
            this.state = 1296;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 98) {
                {
                this.state = 1295;
                this.limitClause();
                }
            }

            this.state = 1299;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 149) {
                {
                this.state = 1298;
                this.settingsClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public withClause(): WithClauseContext {
        let localContext = new WithClauseContext(this.context, this.state);
        this.enterRule(localContext, 118, ClickHouseParser.RULE_withClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1301;
            this.match(ClickHouseParser.WITH);
            this.state = 1302;
            this.columnExprList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public topClause(): TopClauseContext {
        let localContext = new TopClauseContext(this.context, this.state);
        this.enterRule(localContext, 120, ClickHouseParser.RULE_topClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1304;
            this.match(ClickHouseParser.TOP);
            this.state = 1305;
            this.match(ClickHouseParser.DECIMAL_LITERAL);
            this.state = 1308;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context) ) {
            case 1:
                {
                this.state = 1306;
                this.match(ClickHouseParser.WITH);
                this.state = 1307;
                this.match(ClickHouseParser.TIES);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fromClause(): FromClauseContext {
        let localContext = new FromClauseContext(this.context, this.state);
        this.enterRule(localContext, 122, ClickHouseParser.RULE_fromClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1310;
            this.match(ClickHouseParser.FROM);
            this.state = 1311;
            this.joinExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayJoinClause(): ArrayJoinClauseContext {
        let localContext = new ArrayJoinClauseContext(this.context, this.state);
        this.enterRule(localContext, 124, ClickHouseParser.RULE_arrayJoinClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1314;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 83 || _la === 95) {
                {
                this.state = 1313;
                _la = this.tokenStream.LA(1);
                if(!(_la === 83 || _la === 95)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 1316;
            this.match(ClickHouseParser.ARRAY);
            this.state = 1317;
            this.match(ClickHouseParser.JOIN);
            this.state = 1318;
            this.columnExprList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowClause(): WindowClauseContext {
        let localContext = new WindowClauseContext(this.context, this.state);
        this.enterRule(localContext, 126, ClickHouseParser.RULE_windowClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1320;
            this.match(ClickHouseParser.WINDOW);
            this.state = 1321;
            this.identifier();
            this.state = 1322;
            this.match(ClickHouseParser.AS);
            this.state = 1323;
            this.match(ClickHouseParser.LPAREN);
            this.state = 1324;
            this.windowExpr();
            this.state = 1325;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public prewhereClause(): PrewhereClauseContext {
        let localContext = new PrewhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 128, ClickHouseParser.RULE_prewhereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1327;
            this.match(ClickHouseParser.PREWHERE);
            this.state = 1328;
            this.columnExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whereClause(): WhereClauseContext {
        let localContext = new WhereClauseContext(this.context, this.state);
        this.enterRule(localContext, 130, ClickHouseParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1330;
            this.match(ClickHouseParser.WHERE);
            this.state = 1331;
            this.columnExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupByClause(): GroupByClauseContext {
        let localContext = new GroupByClauseContext(this.context, this.state);
        this.enterRule(localContext, 132, ClickHouseParser.RULE_groupByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1333;
            this.match(ClickHouseParser.GROUP);
            this.state = 1334;
            this.match(ClickHouseParser.BY);
            this.state = 1341;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 168, this.context) ) {
            case 1:
                {
                this.state = 1335;
                _la = this.tokenStream.LA(1);
                if(!(_la === 31 || _la === 140)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1336;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1337;
                this.columnExprList();
                this.state = 1338;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 2:
                {
                this.state = 1340;
                this.columnExprList();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public havingClause(): HavingClauseContext {
        let localContext = new HavingClauseContext(this.context, this.state);
        this.enterRule(localContext, 134, ClickHouseParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1343;
            this.match(ClickHouseParser.HAVING);
            this.state = 1344;
            this.columnExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderByClause(): OrderByClauseContext {
        let localContext = new OrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 136, ClickHouseParser.RULE_orderByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1346;
            this.match(ClickHouseParser.ORDER);
            this.state = 1347;
            this.match(ClickHouseParser.BY);
            this.state = 1348;
            this.orderExprList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public projectionOrderByClause(): ProjectionOrderByClauseContext {
        let localContext = new ProjectionOrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 138, ClickHouseParser.RULE_projectionOrderByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1350;
            this.match(ClickHouseParser.ORDER);
            this.state = 1351;
            this.match(ClickHouseParser.BY);
            this.state = 1352;
            this.columnExprList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitByClause(): LimitByClauseContext {
        let localContext = new LimitByClauseContext(this.context, this.state);
        this.enterRule(localContext, 140, ClickHouseParser.RULE_limitByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1354;
            this.match(ClickHouseParser.LIMIT);
            this.state = 1355;
            this.limitExpr();
            this.state = 1356;
            this.match(ClickHouseParser.BY);
            this.state = 1357;
            this.columnExprList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitClause(): LimitClauseContext {
        let localContext = new LimitClauseContext(this.context, this.state);
        this.enterRule(localContext, 142, ClickHouseParser.RULE_limitClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1359;
            this.match(ClickHouseParser.LIMIT);
            this.state = 1360;
            this.limitExpr();
            this.state = 1363;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 188) {
                {
                this.state = 1361;
                this.match(ClickHouseParser.WITH);
                this.state = 1362;
                this.match(ClickHouseParser.TIES);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public settingsClause(): SettingsClauseContext {
        let localContext = new SettingsClauseContext(this.context, this.state);
        this.enterRule(localContext, 144, ClickHouseParser.RULE_settingsClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1365;
            this.match(ClickHouseParser.SETTINGS);
            this.state = 1366;
            this.settingExprList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public joinExpr(): JoinExprContext;
    public joinExpr(_p: number): JoinExprContext;
    public joinExpr(_p?: number): JoinExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new JoinExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 146;
        this.enterRecursionRule(localContext, 146, ClickHouseParser.RULE_joinExpr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1380;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 172, this.context) ) {
            case 1:
                {
                localContext = new JoinExprTableContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1369;
                this.tableExpr(0);
                this.state = 1371;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 170, this.context) ) {
                case 1:
                    {
                    this.state = 1370;
                    this.match(ClickHouseParser.FINAL);
                    }
                    break;
                }
                this.state = 1374;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 171, this.context) ) {
                case 1:
                    {
                    this.state = 1373;
                    this.sampleClause();
                    }
                    break;
                }
                }
                break;
            case 2:
                {
                localContext = new JoinExprParensContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1376;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1377;
                this.joinExpr(0);
                this.state = 1378;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1399;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 176, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1397;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 175, this.context) ) {
                    case 1:
                        {
                        localContext = new JoinExprCrossOpContext(new JoinExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_joinExpr);
                        this.state = 1382;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1383;
                        this.joinOpCross();
                        this.state = 1384;
                        this.joinExpr(4);
                        }
                        break;
                    case 2:
                        {
                        localContext = new JoinExprOpContext(new JoinExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_joinExpr);
                        this.state = 1386;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1388;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 70 || _la === 100) {
                            {
                            this.state = 1387;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 70 || _la === 100)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                        }

                        this.state = 1391;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4496) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 134250497) !== 0) || _la === 139 || _la === 146) {
                            {
                            this.state = 1390;
                            this.joinOp();
                            }
                        }

                        this.state = 1393;
                        this.match(ClickHouseParser.JOIN);
                        this.state = 1394;
                        this.joinExpr(0);
                        this.state = 1395;
                        this.joinConstraintClause();
                        }
                        break;
                    }
                    }
                }
                this.state = 1401;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 176, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public joinOp(): JoinOpContext {
        let localContext = new JoinOpContext(this.context, this.state);
        this.enterRule(localContext, 148, ClickHouseParser.RULE_joinOp);
        let _la: number;
        try {
            this.state = 1445;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 190, this.context) ) {
            case 1:
                localContext = new JoinOpInnerContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1411;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 179, this.context) ) {
                case 1:
                    {
                    this.state = 1403;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4368) !== 0)) {
                        {
                        this.state = 1402;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4368) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                    }

                    this.state = 1405;
                    this.match(ClickHouseParser.INNER);
                    }
                    break;
                case 2:
                    {
                    this.state = 1406;
                    this.match(ClickHouseParser.INNER);
                    this.state = 1408;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4368) !== 0)) {
                        {
                        this.state = 1407;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4368) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                    }

                    }
                    break;
                case 3:
                    {
                    this.state = 1410;
                    _la = this.tokenStream.LA(1);
                    if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4368) !== 0))) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    break;
                }
                }
                break;
            case 2:
                localContext = new JoinOpLeftRightContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1427;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 184, this.context) ) {
                case 1:
                    {
                    this.state = 1414;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4496) !== 0) || _la === 146) {
                        {
                        this.state = 1413;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4496) !== 0) || _la === 146)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                    }

                    this.state = 1416;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 95 || _la === 139)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1418;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 122) {
                        {
                        this.state = 1417;
                        this.match(ClickHouseParser.OUTER);
                        }
                    }

                    }
                    break;
                case 2:
                    {
                    this.state = 1420;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 95 || _la === 139)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1422;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 122) {
                        {
                        this.state = 1421;
                        this.match(ClickHouseParser.OUTER);
                        }
                    }

                    this.state = 1425;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4496) !== 0) || _la === 146) {
                        {
                        this.state = 1424;
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4496) !== 0) || _la === 146)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                    }

                    }
                    break;
                }
                }
                break;
            case 3:
                localContext = new JoinOpFullContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1443;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 189, this.context) ) {
                case 1:
                    {
                    this.state = 1430;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 4 || _la === 8) {
                        {
                        this.state = 1429;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 4 || _la === 8)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                    }

                    this.state = 1432;
                    this.match(ClickHouseParser.FULL);
                    this.state = 1434;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 122) {
                        {
                        this.state = 1433;
                        this.match(ClickHouseParser.OUTER);
                        }
                    }

                    }
                    break;
                case 2:
                    {
                    this.state = 1436;
                    this.match(ClickHouseParser.FULL);
                    this.state = 1438;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 122) {
                        {
                        this.state = 1437;
                        this.match(ClickHouseParser.OUTER);
                        }
                    }

                    this.state = 1441;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 4 || _la === 8) {
                        {
                        this.state = 1440;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 4 || _la === 8)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                    }

                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinOpCross(): JoinOpCrossContext {
        let localContext = new JoinOpCrossContext(this.context, this.state);
        this.enterRule(localContext, 150, ClickHouseParser.RULE_joinOpCross);
        let _la: number;
        try {
            this.state = 1453;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.CROSS:
            case ClickHouseParser.GLOBAL:
            case ClickHouseParser.LOCAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1448;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70 || _la === 100) {
                    {
                    this.state = 1447;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 70 || _la === 100)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 1450;
                this.match(ClickHouseParser.CROSS);
                this.state = 1451;
                this.match(ClickHouseParser.JOIN);
                }
                break;
            case ClickHouseParser.COMMA:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1452;
                this.match(ClickHouseParser.COMMA);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public joinConstraintClause(): JoinConstraintClauseContext {
        let localContext = new JoinConstraintClauseContext(this.context, this.state);
        this.enterRule(localContext, 152, ClickHouseParser.RULE_joinConstraintClause);
        try {
            this.state = 1464;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 193, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1455;
                this.match(ClickHouseParser.ON);
                this.state = 1456;
                this.columnExprList();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1457;
                this.match(ClickHouseParser.USING);
                this.state = 1458;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1459;
                this.columnExprList();
                this.state = 1460;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1462;
                this.match(ClickHouseParser.USING);
                this.state = 1463;
                this.columnExprList();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sampleClause(): SampleClauseContext {
        let localContext = new SampleClauseContext(this.context, this.state);
        this.enterRule(localContext, 154, ClickHouseParser.RULE_sampleClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1466;
            this.match(ClickHouseParser.SAMPLE);
            this.state = 1467;
            this.ratioExpr();
            this.state = 1470;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 194, this.context) ) {
            case 1:
                {
                this.state = 1468;
                this.match(ClickHouseParser.OFFSET);
                this.state = 1469;
                this.ratioExpr();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public limitExpr(): LimitExprContext {
        let localContext = new LimitExprContext(this.context, this.state);
        this.enterRule(localContext, 156, ClickHouseParser.RULE_limitExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1472;
            this.columnExpr(0);
            this.state = 1475;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 117 || _la === 203) {
                {
                this.state = 1473;
                _la = this.tokenStream.LA(1);
                if(!(_la === 117 || _la === 203)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1474;
                this.columnExpr(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderExprList(): OrderExprListContext {
        let localContext = new OrderExprListContext(this.context, this.state);
        this.enterRule(localContext, 158, ClickHouseParser.RULE_orderExprList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1477;
            this.orderExpr();
            this.state = 1482;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1478;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 1479;
                    this.orderExpr();
                    }
                    }
                }
                this.state = 1484;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 196, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public orderExpr(): OrderExprContext {
        let localContext = new OrderExprContext(this.context, this.state);
        this.enterRule(localContext, 160, ClickHouseParser.RULE_orderExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1485;
            this.columnExpr(0);
            this.state = 1487;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 197, this.context) ) {
            case 1:
                {
                this.state = 1486;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & 3221225473) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1491;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 198, this.context) ) {
            case 1:
                {
                this.state = 1489;
                this.match(ClickHouseParser.NULLS);
                this.state = 1490;
                _la = this.tokenStream.LA(1);
                if(!(_la === 61 || _la === 92)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1495;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 199, this.context) ) {
            case 1:
                {
                this.state = 1493;
                this.match(ClickHouseParser.COLLATE);
                this.state = 1494;
                this.match(ClickHouseParser.STRING_LITERAL);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ratioExpr(): RatioExprContext {
        let localContext = new RatioExprContext(this.context, this.state);
        this.enterRule(localContext, 162, ClickHouseParser.RULE_ratioExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1497;
            this.numberLiteral();
            this.state = 1500;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 200, this.context) ) {
            case 1:
                {
                this.state = 1498;
                this.match(ClickHouseParser.SLASH);
                this.state = 1499;
                this.numberLiteral();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public settingExprList(): SettingExprListContext {
        let localContext = new SettingExprListContext(this.context, this.state);
        this.enterRule(localContext, 164, ClickHouseParser.RULE_settingExprList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1502;
            this.settingExpr();
            this.state = 1507;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 201, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1503;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 1504;
                    this.settingExpr();
                    }
                    }
                }
                this.state = 1509;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 201, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public settingExpr(): SettingExprContext {
        let localContext = new SettingExprContext(this.context, this.state);
        this.enterRule(localContext, 166, ClickHouseParser.RULE_settingExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1510;
            this.identifier();
            this.state = 1511;
            this.match(ClickHouseParser.EQ_SINGLE);
            this.state = 1512;
            this.literal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public windowExpr(): WindowExprContext {
        let localContext = new WindowExprContext(this.context, this.state);
        this.enterRule(localContext, 168, ClickHouseParser.RULE_windowExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1515;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 125) {
                {
                this.state = 1514;
                this.winPartitionByClause();
                }
            }

            this.state = 1518;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 121) {
                {
                this.state = 1517;
                this.winOrderByClause();
                }
            }

            this.state = 1521;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 132 || _la === 142) {
                {
                this.state = 1520;
                this.winFrameClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public winPartitionByClause(): WinPartitionByClauseContext {
        let localContext = new WinPartitionByClauseContext(this.context, this.state);
        this.enterRule(localContext, 170, ClickHouseParser.RULE_winPartitionByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1523;
            this.match(ClickHouseParser.PARTITION);
            this.state = 1524;
            this.match(ClickHouseParser.BY);
            this.state = 1525;
            this.columnExprList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public winOrderByClause(): WinOrderByClauseContext {
        let localContext = new WinOrderByClauseContext(this.context, this.state);
        this.enterRule(localContext, 172, ClickHouseParser.RULE_winOrderByClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1527;
            this.match(ClickHouseParser.ORDER);
            this.state = 1528;
            this.match(ClickHouseParser.BY);
            this.state = 1529;
            this.orderExprList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public winFrameClause(): WinFrameClauseContext {
        let localContext = new WinFrameClauseContext(this.context, this.state);
        this.enterRule(localContext, 174, ClickHouseParser.RULE_winFrameClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1531;
            _la = this.tokenStream.LA(1);
            if(!(_la === 132 || _la === 142)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1532;
            this.winFrameExtend();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public winFrameExtend(): WinFrameExtendContext {
        let localContext = new WinFrameExtendContext(this.context, this.state);
        this.enterRule(localContext, 176, ClickHouseParser.RULE_winFrameExtend);
        try {
            this.state = 1540;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.CURRENT:
            case ClickHouseParser.INF:
            case ClickHouseParser.NAN_SQL:
            case ClickHouseParser.UNBOUNDED:
            case ClickHouseParser.FLOATING_LITERAL:
            case ClickHouseParser.OCTAL_LITERAL:
            case ClickHouseParser.DECIMAL_LITERAL:
            case ClickHouseParser.HEXADECIMAL_LITERAL:
            case ClickHouseParser.DASH:
            case ClickHouseParser.DOT:
            case ClickHouseParser.PLUS:
                localContext = new FrameStartContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1534;
                this.winFrameBound();
                }
                break;
            case ClickHouseParser.BETWEEN:
                localContext = new FrameBetweenContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1535;
                this.match(ClickHouseParser.BETWEEN);
                this.state = 1536;
                this.winFrameBound();
                this.state = 1537;
                this.match(ClickHouseParser.AND);
                this.state = 1538;
                this.winFrameBound();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public winFrameBound(): WinFrameBoundContext {
        let localContext = new WinFrameBoundContext(this.context, this.state);
        this.enterRule(localContext, 178, ClickHouseParser.RULE_winFrameBound);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1554;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 206, this.context) ) {
            case 1:
                {
                this.state = 1542;
                this.match(ClickHouseParser.CURRENT);
                this.state = 1543;
                this.match(ClickHouseParser.ROW);
                }
                break;
            case 2:
                {
                this.state = 1544;
                this.match(ClickHouseParser.UNBOUNDED);
                this.state = 1545;
                this.match(ClickHouseParser.PRECEDING);
                }
                break;
            case 3:
                {
                this.state = 1546;
                this.match(ClickHouseParser.UNBOUNDED);
                this.state = 1547;
                this.match(ClickHouseParser.FOLLOWING);
                }
                break;
            case 4:
                {
                this.state = 1548;
                this.numberLiteral();
                this.state = 1549;
                this.match(ClickHouseParser.PRECEDING);
                }
                break;
            case 5:
                {
                this.state = 1551;
                this.numberLiteral();
                this.state = 1552;
                this.match(ClickHouseParser.FOLLOWING);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setStmt(): SetStmtContext {
        let localContext = new SetStmtContext(this.context, this.state);
        this.enterRule(localContext, 180, ClickHouseParser.RULE_setStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1556;
            this.match(ClickHouseParser.SET);
            this.state = 1557;
            this.settingExprList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public showStmt(): ShowStmtContext {
        let localContext = new ShowStmtContext(this.context, this.state);
        this.enterRule(localContext, 182, ClickHouseParser.RULE_showStmt);
        let _la: number;
        try {
            this.state = 1601;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 214, this.context) ) {
            case 1:
                localContext = new ShowCreateDatabaseStmtContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1559;
                this.match(ClickHouseParser.SHOW);
                this.state = 1560;
                this.match(ClickHouseParser.CREATE);
                this.state = 1561;
                this.match(ClickHouseParser.DATABASE);
                this.state = 1562;
                this.databaseIdentifier();
                }
                break;
            case 2:
                localContext = new ShowCreateDictionaryStmtContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1563;
                this.match(ClickHouseParser.SHOW);
                this.state = 1564;
                this.match(ClickHouseParser.CREATE);
                this.state = 1565;
                this.match(ClickHouseParser.DICTIONARY);
                this.state = 1566;
                this.tableIdentifier();
                }
                break;
            case 3:
                localContext = new ShowCreateTableStmtContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1567;
                this.match(ClickHouseParser.SHOW);
                this.state = 1568;
                this.match(ClickHouseParser.CREATE);
                this.state = 1570;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 207, this.context) ) {
                case 1:
                    {
                    this.state = 1569;
                    this.match(ClickHouseParser.TEMPORARY);
                    }
                    break;
                }
                this.state = 1573;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
                case 1:
                    {
                    this.state = 1572;
                    this.match(ClickHouseParser.TABLE);
                    }
                    break;
                }
                this.state = 1575;
                this.tableIdentifier();
                }
                break;
            case 4:
                localContext = new ShowDatabasesStmtContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1576;
                this.match(ClickHouseParser.SHOW);
                this.state = 1577;
                this.match(ClickHouseParser.DATABASES);
                }
                break;
            case 5:
                localContext = new ShowDictionariesStmtContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1578;
                this.match(ClickHouseParser.SHOW);
                this.state = 1579;
                this.match(ClickHouseParser.DICTIONARIES);
                this.state = 1582;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 67) {
                    {
                    this.state = 1580;
                    this.match(ClickHouseParser.FROM);
                    this.state = 1581;
                    this.databaseIdentifier();
                    }
                }

                }
                break;
            case 6:
                localContext = new ShowTablesStmtContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1584;
                this.match(ClickHouseParser.SHOW);
                this.state = 1586;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 160) {
                    {
                    this.state = 1585;
                    this.match(ClickHouseParser.TEMPORARY);
                    }
                }

                this.state = 1588;
                this.match(ClickHouseParser.TABLES);
                this.state = 1591;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 67 || _la === 79) {
                    {
                    this.state = 1589;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 67 || _la === 79)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1590;
                    this.databaseIdentifier();
                    }
                }

                this.state = 1596;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.LIKE:
                    {
                    this.state = 1593;
                    this.match(ClickHouseParser.LIKE);
                    this.state = 1594;
                    this.match(ClickHouseParser.STRING_LITERAL);
                    }
                    break;
                case ClickHouseParser.WHERE:
                    {
                    this.state = 1595;
                    this.whereClause();
                    }
                    break;
                case ClickHouseParser.EOF:
                case ClickHouseParser.FORMAT:
                case ClickHouseParser.INTO:
                case ClickHouseParser.LIMIT:
                case ClickHouseParser.RPAREN:
                case ClickHouseParser.SEMICOLON:
                    break;
                default:
                    break;
                }
                this.state = 1599;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 98) {
                    {
                    this.state = 1598;
                    this.limitClause();
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public systemStmt(): SystemStmtContext {
        let localContext = new SystemStmtContext(this.context, this.state);
        this.enterRule(localContext, 184, ClickHouseParser.RULE_systemStmt);
        let _la: number;
        try {
            this.state = 1637;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 217, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1603;
                this.match(ClickHouseParser.SYSTEM);
                this.state = 1604;
                this.match(ClickHouseParser.FLUSH);
                this.state = 1605;
                this.match(ClickHouseParser.DISTRIBUTED);
                this.state = 1606;
                this.tableIdentifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1607;
                this.match(ClickHouseParser.SYSTEM);
                this.state = 1608;
                this.match(ClickHouseParser.FLUSH);
                this.state = 1609;
                this.match(ClickHouseParser.LOGS);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1610;
                this.match(ClickHouseParser.SYSTEM);
                this.state = 1611;
                this.match(ClickHouseParser.RELOAD);
                this.state = 1612;
                this.match(ClickHouseParser.DICTIONARIES);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1613;
                this.match(ClickHouseParser.SYSTEM);
                this.state = 1614;
                this.match(ClickHouseParser.RELOAD);
                this.state = 1615;
                this.match(ClickHouseParser.DICTIONARY);
                this.state = 1616;
                this.tableIdentifier();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1617;
                this.match(ClickHouseParser.SYSTEM);
                this.state = 1618;
                _la = this.tokenStream.LA(1);
                if(!(_la === 152 || _la === 153)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1626;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case ClickHouseParser.DISTRIBUTED:
                    {
                    this.state = 1619;
                    this.match(ClickHouseParser.DISTRIBUTED);
                    this.state = 1620;
                    this.match(ClickHouseParser.SENDS);
                    }
                    break;
                case ClickHouseParser.FETCHES:
                    {
                    this.state = 1621;
                    this.match(ClickHouseParser.FETCHES);
                    }
                    break;
                case ClickHouseParser.MERGES:
                case ClickHouseParser.TTL:
                    {
                    this.state = 1623;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 172) {
                        {
                        this.state = 1622;
                        this.match(ClickHouseParser.TTL);
                        }
                    }

                    this.state = 1625;
                    this.match(ClickHouseParser.MERGES);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 1628;
                this.tableIdentifier();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1629;
                this.match(ClickHouseParser.SYSTEM);
                this.state = 1630;
                _la = this.tokenStream.LA(1);
                if(!(_la === 152 || _la === 153)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1631;
                this.match(ClickHouseParser.REPLICATED);
                this.state = 1632;
                this.match(ClickHouseParser.SENDS);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1633;
                this.match(ClickHouseParser.SYSTEM);
                this.state = 1634;
                this.match(ClickHouseParser.SYNC);
                this.state = 1635;
                this.match(ClickHouseParser.REPLICA);
                this.state = 1636;
                this.tableIdentifier();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public truncateStmt(): TruncateStmtContext {
        let localContext = new TruncateStmtContext(this.context, this.state);
        this.enterRule(localContext, 186, ClickHouseParser.RULE_truncateStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1639;
            this.match(ClickHouseParser.TRUNCATE);
            this.state = 1641;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 218, this.context) ) {
            case 1:
                {
                this.state = 1640;
                this.match(ClickHouseParser.TEMPORARY);
                }
                break;
            }
            this.state = 1644;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 219, this.context) ) {
            case 1:
                {
                this.state = 1643;
                this.match(ClickHouseParser.TABLE);
                }
                break;
            }
            this.state = 1648;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 220, this.context) ) {
            case 1:
                {
                this.state = 1646;
                this.match(ClickHouseParser.IF);
                this.state = 1647;
                this.match(ClickHouseParser.EXISTS);
                }
                break;
            }
            this.state = 1650;
            this.tableIdentifier();
            this.state = 1652;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 1651;
                this.clusterClause();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public useStmt(): UseStmtContext {
        let localContext = new UseStmtContext(this.context, this.state);
        this.enterRule(localContext, 188, ClickHouseParser.RULE_useStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1654;
            this.match(ClickHouseParser.USE);
            this.state = 1655;
            this.databaseIdentifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public watchStmt(): WatchStmtContext {
        let localContext = new WatchStmtContext(this.context, this.state);
        this.enterRule(localContext, 190, ClickHouseParser.RULE_watchStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1657;
            this.match(ClickHouseParser.WATCH);
            this.state = 1658;
            this.tableIdentifier();
            this.state = 1660;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 54) {
                {
                this.state = 1659;
                this.match(ClickHouseParser.EVENTS);
                }
            }

            this.state = 1664;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 98) {
                {
                this.state = 1662;
                this.match(ClickHouseParser.LIMIT);
                this.state = 1663;
                this.match(ClickHouseParser.DECIMAL_LITERAL);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnTypeExpr(): ColumnTypeExprContext {
        let localContext = new ColumnTypeExprContext(this.context, this.state);
        this.enterRule(localContext, 192, ClickHouseParser.RULE_columnTypeExpr);
        let _la: number;
        try {
            this.state = 1713;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 228, this.context) ) {
            case 1:
                localContext = new ColumnTypeExprSimpleContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1666;
                this.identifier();
                }
                break;
            case 2:
                localContext = new ColumnTypeExprNestedContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1667;
                this.identifier();
                this.state = 1668;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1669;
                this.identifier();
                this.state = 1670;
                this.columnTypeExpr();
                this.state = 1677;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                    {
                    this.state = 1671;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 1672;
                    this.identifier();
                    this.state = 1673;
                    this.columnTypeExpr();
                    }
                    }
                    this.state = 1679;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1680;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 3:
                localContext = new ColumnTypeExprEnumContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1682;
                this.identifier();
                this.state = 1683;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1684;
                this.enumValue();
                this.state = 1689;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                    {
                    this.state = 1685;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 1686;
                    this.enumValue();
                    }
                    }
                    this.state = 1691;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1692;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 4:
                localContext = new ColumnTypeExprComplexContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1694;
                this.identifier();
                this.state = 1695;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1696;
                this.columnTypeExpr();
                this.state = 1701;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                    {
                    this.state = 1697;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 1698;
                    this.columnTypeExpr();
                    }
                    }
                    this.state = 1703;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1704;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 5:
                localContext = new ColumnTypeExprParamContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1706;
                this.identifier();
                this.state = 1707;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1709;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967291) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 72376511) !== 0)) {
                    {
                    this.state = 1708;
                    this.columnExprList();
                    }
                }

                this.state = 1711;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnExprList(): ColumnExprListContext {
        let localContext = new ColumnExprListContext(this.context, this.state);
        this.enterRule(localContext, 194, ClickHouseParser.RULE_columnExprList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1715;
            this.columnsExpr();
            this.state = 1720;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 229, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1716;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 1717;
                    this.columnsExpr();
                    }
                    }
                }
                this.state = 1722;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 229, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnsExpr(): ColumnsExprContext {
        let localContext = new ColumnsExprContext(this.context, this.state);
        this.enterRule(localContext, 196, ClickHouseParser.RULE_columnsExpr);
        let _la: number;
        try {
            this.state = 1734;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 231, this.context) ) {
            case 1:
                localContext = new ColumnsExprAsteriskContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1726;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & 4294967295) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 4294967295) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4294934527) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4294819839) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1073741823) !== 0)) {
                    {
                    this.state = 1723;
                    this.tableIdentifier();
                    this.state = 1724;
                    this.match(ClickHouseParser.DOT);
                    }
                }

                this.state = 1728;
                this.match(ClickHouseParser.ASTERISK);
                }
                break;
            case 2:
                localContext = new ColumnsExprSubqueryContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1729;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1730;
                this.selectUnionStmt();
                this.state = 1731;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 3:
                localContext = new ColumnsExprColumnContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1733;
                this.columnExpr(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public columnExpr(): ColumnExprContext;
    public columnExpr(_p: number): ColumnExprContext;
    public columnExpr(_p?: number): ColumnExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ColumnExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 198;
        this.enterRecursionRule(localContext, 198, ClickHouseParser.RULE_columnExpr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1865;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context) ) {
            case 1:
                {
                localContext = new ColumnExprCaseContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1737;
                this.match(ClickHouseParser.CASE);
                this.state = 1739;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 232, this.context) ) {
                case 1:
                    {
                    this.state = 1738;
                    this.columnExpr(0);
                    }
                    break;
                }
                this.state = 1746;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1741;
                    this.match(ClickHouseParser.WHEN);
                    this.state = 1742;
                    this.columnExpr(0);
                    this.state = 1743;
                    this.match(ClickHouseParser.THEN);
                    this.state = 1744;
                    this.columnExpr(0);
                    }
                    }
                    this.state = 1748;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 185);
                this.state = 1752;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 51) {
                    {
                    this.state = 1750;
                    this.match(ClickHouseParser.ELSE);
                    this.state = 1751;
                    this.columnExpr(0);
                    }
                }

                this.state = 1754;
                this.match(ClickHouseParser.END);
                }
                break;
            case 2:
                {
                localContext = new ColumnExprCastContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1756;
                this.match(ClickHouseParser.CAST);
                this.state = 1757;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1758;
                this.columnExpr(0);
                this.state = 1759;
                this.match(ClickHouseParser.AS);
                this.state = 1760;
                this.columnTypeExpr();
                this.state = 1761;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 3:
                {
                localContext = new ColumnExprDateContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1763;
                this.match(ClickHouseParser.DATE);
                this.state = 1764;
                this.match(ClickHouseParser.STRING_LITERAL);
                }
                break;
            case 4:
                {
                localContext = new ColumnExprExtractContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1765;
                this.match(ClickHouseParser.EXTRACT);
                this.state = 1766;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1767;
                this.interval();
                this.state = 1768;
                this.match(ClickHouseParser.FROM);
                this.state = 1769;
                this.columnExpr(0);
                this.state = 1770;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 5:
                {
                localContext = new ColumnExprIntervalContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1772;
                this.match(ClickHouseParser.INTERVAL);
                this.state = 1773;
                this.columnExpr(0);
                this.state = 1774;
                this.interval();
                }
                break;
            case 6:
                {
                localContext = new ColumnExprSubstringContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1776;
                this.match(ClickHouseParser.SUBSTRING);
                this.state = 1777;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1778;
                this.columnExpr(0);
                this.state = 1779;
                this.match(ClickHouseParser.FROM);
                this.state = 1780;
                this.columnExpr(0);
                this.state = 1783;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                    this.state = 1781;
                    this.match(ClickHouseParser.FOR);
                    this.state = 1782;
                    this.columnExpr(0);
                    }
                }

                this.state = 1785;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 7:
                {
                localContext = new ColumnExprTimestampContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1787;
                this.match(ClickHouseParser.TIMESTAMP);
                this.state = 1788;
                this.match(ClickHouseParser.STRING_LITERAL);
                }
                break;
            case 8:
                {
                localContext = new ColumnExprTrimContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1789;
                this.match(ClickHouseParser.TRIM);
                this.state = 1790;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1791;
                _la = this.tokenStream.LA(1);
                if(!(_la === 17 || _la === 94 || _la === 169)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1792;
                this.match(ClickHouseParser.STRING_LITERAL);
                this.state = 1793;
                this.match(ClickHouseParser.FROM);
                this.state = 1794;
                this.columnExpr(0);
                this.state = 1795;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 9:
                {
                localContext = new ColumnExprWinFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1797;
                this.identifier();
                {
                this.state = 1798;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1800;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967291) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 72376511) !== 0)) {
                    {
                    this.state = 1799;
                    this.columnExprList();
                    }
                }

                this.state = 1802;
                this.match(ClickHouseParser.RPAREN);
                }
                this.state = 1804;
                this.match(ClickHouseParser.OVER);
                this.state = 1805;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1806;
                this.windowExpr();
                this.state = 1807;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 10:
                {
                localContext = new ColumnExprWinFunctionTargetContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1809;
                this.identifier();
                {
                this.state = 1810;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1812;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967291) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 72376511) !== 0)) {
                    {
                    this.state = 1811;
                    this.columnExprList();
                    }
                }

                this.state = 1814;
                this.match(ClickHouseParser.RPAREN);
                }
                this.state = 1816;
                this.match(ClickHouseParser.OVER);
                this.state = 1817;
                this.identifier();
                }
                break;
            case 11:
                {
                localContext = new ColumnExprFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1819;
                this.identifier();
                this.state = 1825;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 239, this.context) ) {
                case 1:
                    {
                    this.state = 1820;
                    this.match(ClickHouseParser.LPAREN);
                    this.state = 1822;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967291) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 72376511) !== 0)) {
                        {
                        this.state = 1821;
                        this.columnExprList();
                        }
                    }

                    this.state = 1824;
                    this.match(ClickHouseParser.RPAREN);
                    }
                    break;
                }
                this.state = 1827;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1829;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 240, this.context) ) {
                case 1:
                    {
                    this.state = 1828;
                    this.match(ClickHouseParser.DISTINCT);
                    }
                    break;
                }
                this.state = 1832;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967291) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 72376511) !== 0)) {
                    {
                    this.state = 1831;
                    this.columnArgList();
                    }
                }

                this.state = 1834;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 12:
                {
                localContext = new ColumnExprLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1836;
                this.literal();
                }
                break;
            case 13:
                {
                localContext = new ColumnExprNegateContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1837;
                this.match(ClickHouseParser.DASH);
                this.state = 1838;
                this.columnExpr(17);
                }
                break;
            case 14:
                {
                localContext = new ColumnExprNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1839;
                this.match(ClickHouseParser.NOT);
                this.state = 1840;
                this.columnExpr(12);
                }
                break;
            case 15:
                {
                localContext = new ColumnExprAsteriskContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1844;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & 4294967295) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 4294967295) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4294934527) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 4294819839) !== 0) || ((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1F) === 0 && ((1 << (_la - 163)) & 1073741823) !== 0)) {
                    {
                    this.state = 1841;
                    this.tableIdentifier();
                    this.state = 1842;
                    this.match(ClickHouseParser.DOT);
                    }
                }

                this.state = 1846;
                this.match(ClickHouseParser.ASTERISK);
                }
                break;
            case 16:
                {
                localContext = new ColumnExprSubqueryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1847;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1848;
                this.selectUnionStmt();
                this.state = 1849;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 17:
                {
                localContext = new ColumnExprParensContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1851;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1852;
                this.columnExpr(0);
                this.state = 1853;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 18:
                {
                localContext = new ColumnExprTupleContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1855;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1856;
                this.columnExprList();
                this.state = 1857;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case 19:
                {
                localContext = new ColumnExprArrayContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1859;
                this.match(ClickHouseParser.LBRACKET);
                this.state = 1861;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967291) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 72376511) !== 0)) {
                    {
                    this.state = 1860;
                    this.columnExprList();
                    }
                }

                this.state = 1863;
                this.match(ClickHouseParser.RBRACKET);
                }
                break;
            case 20:
                {
                localContext = new ColumnExprIdentifierContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1864;
                this.columnIdentifier();
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1938;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 253, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1936;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 252, this.context) ) {
                    case 1:
                        {
                        localContext = new ColumnExprPrecedence1Context(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1867;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 1868;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & 134479873) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1869;
                        this.columnExpr(17);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ColumnExprPrecedence2Context(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1870;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 1871;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 204)) & ~0x1F) === 0 && ((1 << (_la - 204)) & 16387) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1872;
                        this.columnExpr(16);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ColumnExprPrecedence3Context(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1873;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 1892;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 248, this.context) ) {
                        case 1:
                            {
                            this.state = 1874;
                            this.match(ClickHouseParser.EQ_DOUBLE);
                            }
                            break;
                        case 2:
                            {
                            this.state = 1875;
                            this.match(ClickHouseParser.EQ_SINGLE);
                            }
                            break;
                        case 3:
                            {
                            this.state = 1876;
                            this.match(ClickHouseParser.NOT_EQ);
                            }
                            break;
                        case 4:
                            {
                            this.state = 1877;
                            this.match(ClickHouseParser.LE);
                            }
                            break;
                        case 5:
                            {
                            this.state = 1878;
                            this.match(ClickHouseParser.GE);
                            }
                            break;
                        case 6:
                            {
                            this.state = 1879;
                            this.match(ClickHouseParser.LT);
                            }
                            break;
                        case 7:
                            {
                            this.state = 1880;
                            this.match(ClickHouseParser.GT);
                            }
                            break;
                        case 8:
                            {
                            this.state = 1882;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 70) {
                                {
                                this.state = 1881;
                                this.match(ClickHouseParser.GLOBAL);
                                }
                            }

                            this.state = 1885;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 114) {
                                {
                                this.state = 1884;
                                this.match(ClickHouseParser.NOT);
                                }
                            }

                            this.state = 1887;
                            this.match(ClickHouseParser.IN);
                            }
                            break;
                        case 9:
                            {
                            this.state = 1889;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            if (_la === 114) {
                                {
                                this.state = 1888;
                                this.match(ClickHouseParser.NOT);
                                }
                            }

                            this.state = 1891;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 78 || _la === 97)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            break;
                        }
                        this.state = 1894;
                        this.columnExpr(15);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ColumnExprAndContext(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1895;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 1896;
                        this.match(ClickHouseParser.AND);
                        this.state = 1897;
                        this.columnExpr(12);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ColumnExprOrContext(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1898;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 1899;
                        this.match(ClickHouseParser.OR);
                        this.state = 1900;
                        this.columnExpr(11);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ColumnExprBetweenContext(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1901;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 1903;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 114) {
                            {
                            this.state = 1902;
                            this.match(ClickHouseParser.NOT);
                            }
                        }

                        this.state = 1905;
                        this.match(ClickHouseParser.BETWEEN);
                        this.state = 1906;
                        this.columnExpr(0);
                        this.state = 1907;
                        this.match(ClickHouseParser.AND);
                        this.state = 1908;
                        this.columnExpr(10);
                        }
                        break;
                    case 7:
                        {
                        localContext = new ColumnExprTernaryOpContext(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1910;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 1911;
                        this.match(ClickHouseParser.QUERY);
                        this.state = 1912;
                        this.columnExpr(0);
                        this.state = 1913;
                        this.match(ClickHouseParser.COLON);
                        this.state = 1914;
                        this.columnExpr(8);
                        }
                        break;
                    case 8:
                        {
                        localContext = new ColumnExprArrayAccessContext(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1916;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 1917;
                        this.match(ClickHouseParser.LBRACKET);
                        this.state = 1918;
                        this.columnExpr(0);
                        this.state = 1919;
                        this.match(ClickHouseParser.RBRACKET);
                        }
                        break;
                    case 9:
                        {
                        localContext = new ColumnExprTupleAccessContext(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1921;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 1922;
                        this.match(ClickHouseParser.DOT);
                        this.state = 1923;
                        this.match(ClickHouseParser.DECIMAL_LITERAL);
                        }
                        break;
                    case 10:
                        {
                        localContext = new ColumnExprIsNullContext(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1924;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 1925;
                        this.match(ClickHouseParser.IS);
                        this.state = 1927;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 114) {
                            {
                            this.state = 1926;
                            this.match(ClickHouseParser.NOT);
                            }
                        }

                        this.state = 1929;
                        this.match(ClickHouseParser.NULL_SQL);
                        }
                        break;
                    case 11:
                        {
                        localContext = new ColumnExprAliasContext(new ColumnExprContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_columnExpr);
                        this.state = 1930;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 1934;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case ClickHouseParser.AFTER:
                        case ClickHouseParser.ALIAS:
                        case ClickHouseParser.ALTER:
                        case ClickHouseParser.ASCENDING:
                        case ClickHouseParser.AST:
                        case ClickHouseParser.ASYNC:
                        case ClickHouseParser.ATTACH:
                        case ClickHouseParser.BOTH:
                        case ClickHouseParser.BY:
                        case ClickHouseParser.CASE:
                        case ClickHouseParser.CAST:
                        case ClickHouseParser.CHECK:
                        case ClickHouseParser.CLEAR:
                        case ClickHouseParser.CLUSTER:
                        case ClickHouseParser.CODEC:
                        case ClickHouseParser.COLLATE:
                        case ClickHouseParser.COLUMN:
                        case ClickHouseParser.COMMENT:
                        case ClickHouseParser.CONSTRAINT:
                        case ClickHouseParser.CREATE:
                        case ClickHouseParser.CUBE:
                        case ClickHouseParser.CURRENT:
                        case ClickHouseParser.DATABASE:
                        case ClickHouseParser.DATABASES:
                        case ClickHouseParser.DATE:
                        case ClickHouseParser.DEDUPLICATE:
                        case ClickHouseParser.DEFAULT:
                        case ClickHouseParser.DELAY:
                        case ClickHouseParser.DELETE:
                        case ClickHouseParser.DESC:
                        case ClickHouseParser.DESCENDING:
                        case ClickHouseParser.DESCRIBE:
                        case ClickHouseParser.DETACH:
                        case ClickHouseParser.DICTIONARIES:
                        case ClickHouseParser.DICTIONARY:
                        case ClickHouseParser.DISK:
                        case ClickHouseParser.DISTRIBUTED:
                        case ClickHouseParser.DROP:
                        case ClickHouseParser.ELSE:
                        case ClickHouseParser.END:
                        case ClickHouseParser.ENGINE:
                        case ClickHouseParser.EVENTS:
                        case ClickHouseParser.EXISTS:
                        case ClickHouseParser.EXPLAIN:
                        case ClickHouseParser.EXPRESSION:
                        case ClickHouseParser.EXTRACT:
                        case ClickHouseParser.FETCHES:
                        case ClickHouseParser.FIRST:
                        case ClickHouseParser.FLUSH:
                        case ClickHouseParser.FOLLOWING:
                        case ClickHouseParser.FOR:
                        case ClickHouseParser.FREEZE:
                        case ClickHouseParser.FUNCTION:
                        case ClickHouseParser.GRANULARITY:
                        case ClickHouseParser.HIERARCHICAL:
                        case ClickHouseParser.ID:
                        case ClickHouseParser.IF:
                        case ClickHouseParser.INDEX:
                        case ClickHouseParser.INJECTIVE:
                        case ClickHouseParser.INSERT:
                        case ClickHouseParser.INTERVAL:
                        case ClickHouseParser.IS_OBJECT_ID:
                        case ClickHouseParser.KEY:
                        case ClickHouseParser.KILL:
                        case ClickHouseParser.LAST:
                        case ClickHouseParser.LAYOUT:
                        case ClickHouseParser.LEADING:
                        case ClickHouseParser.LIFETIME:
                        case ClickHouseParser.LIVE:
                        case ClickHouseParser.LOCAL:
                        case ClickHouseParser.LOGS:
                        case ClickHouseParser.MATERIALIZE:
                        case ClickHouseParser.MATERIALIZED:
                        case ClickHouseParser.MAX:
                        case ClickHouseParser.MERGES:
                        case ClickHouseParser.MIN:
                        case ClickHouseParser.MODIFY:
                        case ClickHouseParser.MOVE:
                        case ClickHouseParser.MUTATION:
                        case ClickHouseParser.NO:
                        case ClickHouseParser.NULLS:
                        case ClickHouseParser.OPTIMIZE:
                        case ClickHouseParser.OUTER:
                        case ClickHouseParser.OUTFILE:
                        case ClickHouseParser.OVER:
                        case ClickHouseParser.PARTITION:
                        case ClickHouseParser.POPULATE:
                        case ClickHouseParser.PRECEDING:
                        case ClickHouseParser.PRIMARY:
                        case ClickHouseParser.RANGE:
                        case ClickHouseParser.RELOAD:
                        case ClickHouseParser.REMOVE:
                        case ClickHouseParser.RENAME:
                        case ClickHouseParser.REPLACE:
                        case ClickHouseParser.REPLICA:
                        case ClickHouseParser.REPLICATED:
                        case ClickHouseParser.ROLLUP:
                        case ClickHouseParser.ROW:
                        case ClickHouseParser.ROWS:
                        case ClickHouseParser.SELECT:
                        case ClickHouseParser.SENDS:
                        case ClickHouseParser.SET:
                        case ClickHouseParser.SHOW:
                        case ClickHouseParser.SOURCE:
                        case ClickHouseParser.START:
                        case ClickHouseParser.STOP:
                        case ClickHouseParser.SUBSTRING:
                        case ClickHouseParser.SYNC:
                        case ClickHouseParser.SYNTAX:
                        case ClickHouseParser.SYSTEM:
                        case ClickHouseParser.TABLE:
                        case ClickHouseParser.TABLES:
                        case ClickHouseParser.TEMPORARY:
                        case ClickHouseParser.TEST:
                        case ClickHouseParser.THEN:
                        case ClickHouseParser.TIES:
                        case ClickHouseParser.TIMEOUT:
                        case ClickHouseParser.TIMESTAMP:
                        case ClickHouseParser.TO:
                        case ClickHouseParser.TOTALS:
                        case ClickHouseParser.TRAILING:
                        case ClickHouseParser.TRIM:
                        case ClickHouseParser.TRUNCATE:
                        case ClickHouseParser.TTL:
                        case ClickHouseParser.TYPE:
                        case ClickHouseParser.UNBOUNDED:
                        case ClickHouseParser.UPDATE:
                        case ClickHouseParser.USE:
                        case ClickHouseParser.UUID:
                        case ClickHouseParser.VALUES:
                        case ClickHouseParser.VIEW:
                        case ClickHouseParser.VOLUME:
                        case ClickHouseParser.WATCH:
                        case ClickHouseParser.WHEN:
                        case ClickHouseParser.IDENTIFIER:
                            {
                            this.state = 1931;
                            this.alias();
                            }
                            break;
                        case ClickHouseParser.AS:
                            {
                            this.state = 1932;
                            this.match(ClickHouseParser.AS);
                            this.state = 1933;
                            this.identifier();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 1940;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 253, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public columnArgList(): ColumnArgListContext {
        let localContext = new ColumnArgListContext(this.context, this.state);
        this.enterRule(localContext, 200, ClickHouseParser.RULE_columnArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1941;
            this.columnArgExpr();
            this.state = 1946;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 203) {
                {
                {
                this.state = 1942;
                this.match(ClickHouseParser.COMMA);
                this.state = 1943;
                this.columnArgExpr();
                }
                }
                this.state = 1948;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnArgExpr(): ColumnArgExprContext {
        let localContext = new ColumnArgExprContext(this.context, this.state);
        this.enterRule(localContext, 202, ClickHouseParser.RULE_columnArgExpr);
        try {
            this.state = 1951;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 255, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1949;
                this.columnLambdaExpr();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1950;
                this.columnExpr(0);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnLambdaExpr(): ColumnLambdaExprContext {
        let localContext = new ColumnLambdaExprContext(this.context, this.state);
        this.enterRule(localContext, 204, ClickHouseParser.RULE_columnLambdaExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1972;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.LPAREN:
                {
                this.state = 1953;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1954;
                this.identifier();
                this.state = 1959;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                    {
                    this.state = 1955;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 1956;
                    this.identifier();
                    }
                    }
                    this.state = 1961;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1962;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            case ClickHouseParser.AFTER:
            case ClickHouseParser.ALIAS:
            case ClickHouseParser.ALL:
            case ClickHouseParser.ALTER:
            case ClickHouseParser.AND:
            case ClickHouseParser.ANTI:
            case ClickHouseParser.ANY:
            case ClickHouseParser.ARRAY:
            case ClickHouseParser.AS:
            case ClickHouseParser.ASCENDING:
            case ClickHouseParser.ASOF:
            case ClickHouseParser.AST:
            case ClickHouseParser.ASYNC:
            case ClickHouseParser.ATTACH:
            case ClickHouseParser.BETWEEN:
            case ClickHouseParser.BOTH:
            case ClickHouseParser.BY:
            case ClickHouseParser.CASE:
            case ClickHouseParser.CAST:
            case ClickHouseParser.CHECK:
            case ClickHouseParser.CLEAR:
            case ClickHouseParser.CLUSTER:
            case ClickHouseParser.CODEC:
            case ClickHouseParser.COLLATE:
            case ClickHouseParser.COLUMN:
            case ClickHouseParser.COMMENT:
            case ClickHouseParser.CONSTRAINT:
            case ClickHouseParser.CREATE:
            case ClickHouseParser.CROSS:
            case ClickHouseParser.CUBE:
            case ClickHouseParser.CURRENT:
            case ClickHouseParser.DATABASE:
            case ClickHouseParser.DATABASES:
            case ClickHouseParser.DATE:
            case ClickHouseParser.DAY:
            case ClickHouseParser.DEDUPLICATE:
            case ClickHouseParser.DEFAULT:
            case ClickHouseParser.DELAY:
            case ClickHouseParser.DELETE:
            case ClickHouseParser.DESC:
            case ClickHouseParser.DESCENDING:
            case ClickHouseParser.DESCRIBE:
            case ClickHouseParser.DETACH:
            case ClickHouseParser.DICTIONARIES:
            case ClickHouseParser.DICTIONARY:
            case ClickHouseParser.DISK:
            case ClickHouseParser.DISTINCT:
            case ClickHouseParser.DISTRIBUTED:
            case ClickHouseParser.DROP:
            case ClickHouseParser.ELSE:
            case ClickHouseParser.END:
            case ClickHouseParser.ENGINE:
            case ClickHouseParser.EVENTS:
            case ClickHouseParser.EXISTS:
            case ClickHouseParser.EXPLAIN:
            case ClickHouseParser.EXPRESSION:
            case ClickHouseParser.EXTRACT:
            case ClickHouseParser.FETCHES:
            case ClickHouseParser.FINAL:
            case ClickHouseParser.FIRST:
            case ClickHouseParser.FLUSH:
            case ClickHouseParser.FOLLOWING:
            case ClickHouseParser.FOR:
            case ClickHouseParser.FORMAT:
            case ClickHouseParser.FREEZE:
            case ClickHouseParser.FROM:
            case ClickHouseParser.FULL:
            case ClickHouseParser.FUNCTION:
            case ClickHouseParser.GLOBAL:
            case ClickHouseParser.GRANULARITY:
            case ClickHouseParser.GROUP:
            case ClickHouseParser.HAVING:
            case ClickHouseParser.HIERARCHICAL:
            case ClickHouseParser.HOUR:
            case ClickHouseParser.ID:
            case ClickHouseParser.IF:
            case ClickHouseParser.ILIKE:
            case ClickHouseParser.IN:
            case ClickHouseParser.INDEX:
            case ClickHouseParser.INJECTIVE:
            case ClickHouseParser.INNER:
            case ClickHouseParser.INSERT:
            case ClickHouseParser.INTERVAL:
            case ClickHouseParser.INTO:
            case ClickHouseParser.IS:
            case ClickHouseParser.IS_OBJECT_ID:
            case ClickHouseParser.JOIN:
            case ClickHouseParser.KEY:
            case ClickHouseParser.KILL:
            case ClickHouseParser.LAST:
            case ClickHouseParser.LAYOUT:
            case ClickHouseParser.LEADING:
            case ClickHouseParser.LEFT:
            case ClickHouseParser.LIFETIME:
            case ClickHouseParser.LIKE:
            case ClickHouseParser.LIMIT:
            case ClickHouseParser.LIVE:
            case ClickHouseParser.LOCAL:
            case ClickHouseParser.LOGS:
            case ClickHouseParser.MATERIALIZE:
            case ClickHouseParser.MATERIALIZED:
            case ClickHouseParser.MAX:
            case ClickHouseParser.MERGES:
            case ClickHouseParser.MIN:
            case ClickHouseParser.MINUTE:
            case ClickHouseParser.MODIFY:
            case ClickHouseParser.MONTH:
            case ClickHouseParser.MOVE:
            case ClickHouseParser.MUTATION:
            case ClickHouseParser.NO:
            case ClickHouseParser.NOT:
            case ClickHouseParser.NULLS:
            case ClickHouseParser.OFFSET:
            case ClickHouseParser.ON:
            case ClickHouseParser.OPTIMIZE:
            case ClickHouseParser.OR:
            case ClickHouseParser.ORDER:
            case ClickHouseParser.OUTER:
            case ClickHouseParser.OUTFILE:
            case ClickHouseParser.OVER:
            case ClickHouseParser.PARTITION:
            case ClickHouseParser.POPULATE:
            case ClickHouseParser.PRECEDING:
            case ClickHouseParser.PREWHERE:
            case ClickHouseParser.PRIMARY:
            case ClickHouseParser.QUARTER:
            case ClickHouseParser.RANGE:
            case ClickHouseParser.RELOAD:
            case ClickHouseParser.REMOVE:
            case ClickHouseParser.RENAME:
            case ClickHouseParser.REPLACE:
            case ClickHouseParser.REPLICA:
            case ClickHouseParser.REPLICATED:
            case ClickHouseParser.RIGHT:
            case ClickHouseParser.ROLLUP:
            case ClickHouseParser.ROW:
            case ClickHouseParser.ROWS:
            case ClickHouseParser.SAMPLE:
            case ClickHouseParser.SECOND:
            case ClickHouseParser.SELECT:
            case ClickHouseParser.SEMI:
            case ClickHouseParser.SENDS:
            case ClickHouseParser.SET:
            case ClickHouseParser.SETTINGS:
            case ClickHouseParser.SHOW:
            case ClickHouseParser.SOURCE:
            case ClickHouseParser.START:
            case ClickHouseParser.STOP:
            case ClickHouseParser.SUBSTRING:
            case ClickHouseParser.SYNC:
            case ClickHouseParser.SYNTAX:
            case ClickHouseParser.SYSTEM:
            case ClickHouseParser.TABLE:
            case ClickHouseParser.TABLES:
            case ClickHouseParser.TEMPORARY:
            case ClickHouseParser.TEST:
            case ClickHouseParser.THEN:
            case ClickHouseParser.TIES:
            case ClickHouseParser.TIMEOUT:
            case ClickHouseParser.TIMESTAMP:
            case ClickHouseParser.TO:
            case ClickHouseParser.TOP:
            case ClickHouseParser.TOTALS:
            case ClickHouseParser.TRAILING:
            case ClickHouseParser.TRIM:
            case ClickHouseParser.TRUNCATE:
            case ClickHouseParser.TTL:
            case ClickHouseParser.TYPE:
            case ClickHouseParser.UNBOUNDED:
            case ClickHouseParser.UNION:
            case ClickHouseParser.UPDATE:
            case ClickHouseParser.USE:
            case ClickHouseParser.USING:
            case ClickHouseParser.UUID:
            case ClickHouseParser.VALUES:
            case ClickHouseParser.VIEW:
            case ClickHouseParser.VOLUME:
            case ClickHouseParser.WATCH:
            case ClickHouseParser.WEEK:
            case ClickHouseParser.WHEN:
            case ClickHouseParser.WHERE:
            case ClickHouseParser.WINDOW:
            case ClickHouseParser.WITH:
            case ClickHouseParser.YEAR:
            case ClickHouseParser.JSON_FALSE:
            case ClickHouseParser.JSON_TRUE:
            case ClickHouseParser.IDENTIFIER:
                {
                this.state = 1964;
                this.identifier();
                this.state = 1969;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 203) {
                    {
                    {
                    this.state = 1965;
                    this.match(ClickHouseParser.COMMA);
                    this.state = 1966;
                    this.identifier();
                    }
                    }
                    this.state = 1971;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 1974;
            this.match(ClickHouseParser.ARROW);
            this.state = 1975;
            this.columnExpr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public columnIdentifier(): ColumnIdentifierContext {
        let localContext = new ColumnIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 206, ClickHouseParser.RULE_columnIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1980;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 259, this.context) ) {
            case 1:
                {
                this.state = 1977;
                this.tableIdentifier();
                this.state = 1978;
                this.match(ClickHouseParser.DOT);
                }
                break;
            }
            this.state = 1982;
            this.nestedIdentifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        let localContext = new NestedIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 208, ClickHouseParser.RULE_nestedIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1984;
            this.identifier();
            this.state = 1987;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 260, this.context) ) {
            case 1:
                {
                this.state = 1985;
                this.match(ClickHouseParser.DOT);
                this.state = 1986;
                this.identifier();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public tableExpr(): TableExprContext;
    public tableExpr(_p: number): TableExprContext;
    public tableExpr(_p?: number): TableExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TableExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 210;
        this.enterRecursionRule(localContext, 210, ClickHouseParser.RULE_tableExpr, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1996;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 261, this.context) ) {
            case 1:
                {
                localContext = new TableExprIdentifierContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1990;
                this.tableIdentifier();
                }
                break;
            case 2:
                {
                localContext = new TableExprFunctionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1991;
                this.tableFunctionExpr();
                }
                break;
            case 3:
                {
                localContext = new TableExprSubqueryContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1992;
                this.match(ClickHouseParser.LPAREN);
                this.state = 1993;
                this.selectUnionStmt();
                this.state = 1994;
                this.match(ClickHouseParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 2006;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 263, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TableExprAliasContext(new TableExprContext(parentContext, parentState));
                    this.pushNewRecursionContext(localContext, _startState, ClickHouseParser.RULE_tableExpr);
                    this.state = 1998;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 2002;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case ClickHouseParser.AFTER:
                    case ClickHouseParser.ALIAS:
                    case ClickHouseParser.ALTER:
                    case ClickHouseParser.ASCENDING:
                    case ClickHouseParser.AST:
                    case ClickHouseParser.ASYNC:
                    case ClickHouseParser.ATTACH:
                    case ClickHouseParser.BOTH:
                    case ClickHouseParser.BY:
                    case ClickHouseParser.CASE:
                    case ClickHouseParser.CAST:
                    case ClickHouseParser.CHECK:
                    case ClickHouseParser.CLEAR:
                    case ClickHouseParser.CLUSTER:
                    case ClickHouseParser.CODEC:
                    case ClickHouseParser.COLLATE:
                    case ClickHouseParser.COLUMN:
                    case ClickHouseParser.COMMENT:
                    case ClickHouseParser.CONSTRAINT:
                    case ClickHouseParser.CREATE:
                    case ClickHouseParser.CUBE:
                    case ClickHouseParser.CURRENT:
                    case ClickHouseParser.DATABASE:
                    case ClickHouseParser.DATABASES:
                    case ClickHouseParser.DATE:
                    case ClickHouseParser.DEDUPLICATE:
                    case ClickHouseParser.DEFAULT:
                    case ClickHouseParser.DELAY:
                    case ClickHouseParser.DELETE:
                    case ClickHouseParser.DESC:
                    case ClickHouseParser.DESCENDING:
                    case ClickHouseParser.DESCRIBE:
                    case ClickHouseParser.DETACH:
                    case ClickHouseParser.DICTIONARIES:
                    case ClickHouseParser.DICTIONARY:
                    case ClickHouseParser.DISK:
                    case ClickHouseParser.DISTRIBUTED:
                    case ClickHouseParser.DROP:
                    case ClickHouseParser.ELSE:
                    case ClickHouseParser.END:
                    case ClickHouseParser.ENGINE:
                    case ClickHouseParser.EVENTS:
                    case ClickHouseParser.EXISTS:
                    case ClickHouseParser.EXPLAIN:
                    case ClickHouseParser.EXPRESSION:
                    case ClickHouseParser.EXTRACT:
                    case ClickHouseParser.FETCHES:
                    case ClickHouseParser.FIRST:
                    case ClickHouseParser.FLUSH:
                    case ClickHouseParser.FOLLOWING:
                    case ClickHouseParser.FOR:
                    case ClickHouseParser.FREEZE:
                    case ClickHouseParser.FUNCTION:
                    case ClickHouseParser.GRANULARITY:
                    case ClickHouseParser.HIERARCHICAL:
                    case ClickHouseParser.ID:
                    case ClickHouseParser.IF:
                    case ClickHouseParser.INDEX:
                    case ClickHouseParser.INJECTIVE:
                    case ClickHouseParser.INSERT:
                    case ClickHouseParser.INTERVAL:
                    case ClickHouseParser.IS_OBJECT_ID:
                    case ClickHouseParser.KEY:
                    case ClickHouseParser.KILL:
                    case ClickHouseParser.LAST:
                    case ClickHouseParser.LAYOUT:
                    case ClickHouseParser.LEADING:
                    case ClickHouseParser.LIFETIME:
                    case ClickHouseParser.LIVE:
                    case ClickHouseParser.LOCAL:
                    case ClickHouseParser.LOGS:
                    case ClickHouseParser.MATERIALIZE:
                    case ClickHouseParser.MATERIALIZED:
                    case ClickHouseParser.MAX:
                    case ClickHouseParser.MERGES:
                    case ClickHouseParser.MIN:
                    case ClickHouseParser.MODIFY:
                    case ClickHouseParser.MOVE:
                    case ClickHouseParser.MUTATION:
                    case ClickHouseParser.NO:
                    case ClickHouseParser.NULLS:
                    case ClickHouseParser.OPTIMIZE:
                    case ClickHouseParser.OUTER:
                    case ClickHouseParser.OUTFILE:
                    case ClickHouseParser.OVER:
                    case ClickHouseParser.PARTITION:
                    case ClickHouseParser.POPULATE:
                    case ClickHouseParser.PRECEDING:
                    case ClickHouseParser.PRIMARY:
                    case ClickHouseParser.RANGE:
                    case ClickHouseParser.RELOAD:
                    case ClickHouseParser.REMOVE:
                    case ClickHouseParser.RENAME:
                    case ClickHouseParser.REPLACE:
                    case ClickHouseParser.REPLICA:
                    case ClickHouseParser.REPLICATED:
                    case ClickHouseParser.ROLLUP:
                    case ClickHouseParser.ROW:
                    case ClickHouseParser.ROWS:
                    case ClickHouseParser.SELECT:
                    case ClickHouseParser.SENDS:
                    case ClickHouseParser.SET:
                    case ClickHouseParser.SHOW:
                    case ClickHouseParser.SOURCE:
                    case ClickHouseParser.START:
                    case ClickHouseParser.STOP:
                    case ClickHouseParser.SUBSTRING:
                    case ClickHouseParser.SYNC:
                    case ClickHouseParser.SYNTAX:
                    case ClickHouseParser.SYSTEM:
                    case ClickHouseParser.TABLE:
                    case ClickHouseParser.TABLES:
                    case ClickHouseParser.TEMPORARY:
                    case ClickHouseParser.TEST:
                    case ClickHouseParser.THEN:
                    case ClickHouseParser.TIES:
                    case ClickHouseParser.TIMEOUT:
                    case ClickHouseParser.TIMESTAMP:
                    case ClickHouseParser.TO:
                    case ClickHouseParser.TOTALS:
                    case ClickHouseParser.TRAILING:
                    case ClickHouseParser.TRIM:
                    case ClickHouseParser.TRUNCATE:
                    case ClickHouseParser.TTL:
                    case ClickHouseParser.TYPE:
                    case ClickHouseParser.UNBOUNDED:
                    case ClickHouseParser.UPDATE:
                    case ClickHouseParser.USE:
                    case ClickHouseParser.UUID:
                    case ClickHouseParser.VALUES:
                    case ClickHouseParser.VIEW:
                    case ClickHouseParser.VOLUME:
                    case ClickHouseParser.WATCH:
                    case ClickHouseParser.WHEN:
                    case ClickHouseParser.IDENTIFIER:
                        {
                        this.state = 1999;
                        this.alias();
                        }
                        break;
                    case ClickHouseParser.AS:
                        {
                        this.state = 2000;
                        this.match(ClickHouseParser.AS);
                        this.state = 2001;
                        this.identifier();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 2008;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 263, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public tableFunctionExpr(): TableFunctionExprContext {
        let localContext = new TableFunctionExprContext(this.context, this.state);
        this.enterRule(localContext, 212, ClickHouseParser.RULE_tableFunctionExpr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2009;
            this.identifier();
            this.state = 2010;
            this.match(ClickHouseParser.LPAREN);
            this.state = 2012;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967291) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 67133503) !== 0)) {
                {
                this.state = 2011;
                this.tableArgList();
                }
            }

            this.state = 2014;
            this.match(ClickHouseParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableIdentifier(): TableIdentifierContext {
        let localContext = new TableIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 214, ClickHouseParser.RULE_tableIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2019;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 265, this.context) ) {
            case 1:
                {
                this.state = 2016;
                this.databaseIdentifier();
                this.state = 2017;
                this.match(ClickHouseParser.DOT);
                }
                break;
            }
            this.state = 2021;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableArgList(): TableArgListContext {
        let localContext = new TableArgListContext(this.context, this.state);
        this.enterRule(localContext, 216, ClickHouseParser.RULE_tableArgList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2023;
            this.tableArgExpr();
            this.state = 2028;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 203) {
                {
                {
                this.state = 2024;
                this.match(ClickHouseParser.COMMA);
                this.state = 2025;
                this.tableArgExpr();
                }
                }
                this.state = 2030;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tableArgExpr(): TableArgExprContext {
        let localContext = new TableArgExprContext(this.context, this.state);
        this.enterRule(localContext, 218, ClickHouseParser.RULE_tableArgExpr);
        try {
            this.state = 2034;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 267, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2031;
                this.nestedIdentifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2032;
                this.tableFunctionExpr();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2033;
                this.literal();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        let localContext = new DatabaseIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 220, ClickHouseParser.RULE_databaseIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2036;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public floatingLiteral(): FloatingLiteralContext {
        let localContext = new FloatingLiteralContext(this.context, this.state);
        this.enterRule(localContext, 222, ClickHouseParser.RULE_floatingLiteral);
        let _la: number;
        try {
            this.state = 2046;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.FLOATING_LITERAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2038;
                this.match(ClickHouseParser.FLOATING_LITERAL);
                }
                break;
            case ClickHouseParser.DOT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2039;
                this.match(ClickHouseParser.DOT);
                this.state = 2040;
                _la = this.tokenStream.LA(1);
                if(!(_la === 194 || _la === 195)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case ClickHouseParser.DECIMAL_LITERAL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2041;
                this.match(ClickHouseParser.DECIMAL_LITERAL);
                this.state = 2042;
                this.match(ClickHouseParser.DOT);
                this.state = 2044;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 268, this.context) ) {
                case 1:
                    {
                    this.state = 2043;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 194 || _la === 195)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public numberLiteral(): NumberLiteralContext {
        let localContext = new NumberLiteralContext(this.context, this.state);
        this.enterRule(localContext, 224, ClickHouseParser.RULE_numberLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2049;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 205 || _la === 218) {
                {
                this.state = 2048;
                _la = this.tokenStream.LA(1);
                if(!(_la === 205 || _la === 218)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 2057;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 271, this.context) ) {
            case 1:
                {
                this.state = 2051;
                this.floatingLiteral();
                }
                break;
            case 2:
                {
                this.state = 2052;
                this.match(ClickHouseParser.OCTAL_LITERAL);
                }
                break;
            case 3:
                {
                this.state = 2053;
                this.match(ClickHouseParser.DECIMAL_LITERAL);
                }
                break;
            case 4:
                {
                this.state = 2054;
                this.match(ClickHouseParser.HEXADECIMAL_LITERAL);
                }
                break;
            case 5:
                {
                this.state = 2055;
                this.match(ClickHouseParser.INF);
                }
                break;
            case 6:
                {
                this.state = 2056;
                this.match(ClickHouseParser.NAN_SQL);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 226, ClickHouseParser.RULE_literal);
        try {
            this.state = 2062;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.INF:
            case ClickHouseParser.NAN_SQL:
            case ClickHouseParser.FLOATING_LITERAL:
            case ClickHouseParser.OCTAL_LITERAL:
            case ClickHouseParser.DECIMAL_LITERAL:
            case ClickHouseParser.HEXADECIMAL_LITERAL:
            case ClickHouseParser.DASH:
            case ClickHouseParser.DOT:
            case ClickHouseParser.PLUS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2059;
                this.numberLiteral();
                }
                break;
            case ClickHouseParser.STRING_LITERAL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2060;
                this.match(ClickHouseParser.STRING_LITERAL);
                }
                break;
            case ClickHouseParser.NULL_SQL:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2061;
                this.match(ClickHouseParser.NULL_SQL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interval(): IntervalContext {
        let localContext = new IntervalContext(this.context, this.state);
        this.enterRule(localContext, 228, ClickHouseParser.RULE_interval);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2064;
            _la = this.tokenStream.LA(1);
            if(!(_la === 36 || _la === 75 || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & 16777221) !== 0) || _la === 144 || _la === 184 || _la === 189)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keyword(): KeywordContext {
        let localContext = new KeywordContext(this.context, this.state);
        this.enterRule(localContext, 230, ClickHouseParser.RULE_keyword);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2066;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967292) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967279) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294834175) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294367231) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294901747) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 3741319167) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keywordForAlias(): KeywordForAliasContext {
        let localContext = new KeywordForAliasContext(this.context, this.state);
        this.enterRule(localContext, 232, ClickHouseParser.RULE_keywordForAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2068;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221153836) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4026466287) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 2100638885) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4237481977) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 4293737465) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & 25018303) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public alias(): AliasContext {
        let localContext = new AliasContext(this.context, this.state);
        this.enterRule(localContext, 234, ClickHouseParser.RULE_alias);
        try {
            this.state = 2072;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2070;
                this.match(ClickHouseParser.IDENTIFIER);
                }
                break;
            case ClickHouseParser.AFTER:
            case ClickHouseParser.ALIAS:
            case ClickHouseParser.ALTER:
            case ClickHouseParser.ASCENDING:
            case ClickHouseParser.AST:
            case ClickHouseParser.ASYNC:
            case ClickHouseParser.ATTACH:
            case ClickHouseParser.BOTH:
            case ClickHouseParser.BY:
            case ClickHouseParser.CASE:
            case ClickHouseParser.CAST:
            case ClickHouseParser.CHECK:
            case ClickHouseParser.CLEAR:
            case ClickHouseParser.CLUSTER:
            case ClickHouseParser.CODEC:
            case ClickHouseParser.COLLATE:
            case ClickHouseParser.COLUMN:
            case ClickHouseParser.COMMENT:
            case ClickHouseParser.CONSTRAINT:
            case ClickHouseParser.CREATE:
            case ClickHouseParser.CUBE:
            case ClickHouseParser.CURRENT:
            case ClickHouseParser.DATABASE:
            case ClickHouseParser.DATABASES:
            case ClickHouseParser.DATE:
            case ClickHouseParser.DEDUPLICATE:
            case ClickHouseParser.DEFAULT:
            case ClickHouseParser.DELAY:
            case ClickHouseParser.DELETE:
            case ClickHouseParser.DESC:
            case ClickHouseParser.DESCENDING:
            case ClickHouseParser.DESCRIBE:
            case ClickHouseParser.DETACH:
            case ClickHouseParser.DICTIONARIES:
            case ClickHouseParser.DICTIONARY:
            case ClickHouseParser.DISK:
            case ClickHouseParser.DISTRIBUTED:
            case ClickHouseParser.DROP:
            case ClickHouseParser.ELSE:
            case ClickHouseParser.END:
            case ClickHouseParser.ENGINE:
            case ClickHouseParser.EVENTS:
            case ClickHouseParser.EXISTS:
            case ClickHouseParser.EXPLAIN:
            case ClickHouseParser.EXPRESSION:
            case ClickHouseParser.EXTRACT:
            case ClickHouseParser.FETCHES:
            case ClickHouseParser.FIRST:
            case ClickHouseParser.FLUSH:
            case ClickHouseParser.FOLLOWING:
            case ClickHouseParser.FOR:
            case ClickHouseParser.FREEZE:
            case ClickHouseParser.FUNCTION:
            case ClickHouseParser.GRANULARITY:
            case ClickHouseParser.HIERARCHICAL:
            case ClickHouseParser.ID:
            case ClickHouseParser.IF:
            case ClickHouseParser.INDEX:
            case ClickHouseParser.INJECTIVE:
            case ClickHouseParser.INSERT:
            case ClickHouseParser.INTERVAL:
            case ClickHouseParser.IS_OBJECT_ID:
            case ClickHouseParser.KEY:
            case ClickHouseParser.KILL:
            case ClickHouseParser.LAST:
            case ClickHouseParser.LAYOUT:
            case ClickHouseParser.LEADING:
            case ClickHouseParser.LIFETIME:
            case ClickHouseParser.LIVE:
            case ClickHouseParser.LOCAL:
            case ClickHouseParser.LOGS:
            case ClickHouseParser.MATERIALIZE:
            case ClickHouseParser.MATERIALIZED:
            case ClickHouseParser.MAX:
            case ClickHouseParser.MERGES:
            case ClickHouseParser.MIN:
            case ClickHouseParser.MODIFY:
            case ClickHouseParser.MOVE:
            case ClickHouseParser.MUTATION:
            case ClickHouseParser.NO:
            case ClickHouseParser.NULLS:
            case ClickHouseParser.OPTIMIZE:
            case ClickHouseParser.OUTER:
            case ClickHouseParser.OUTFILE:
            case ClickHouseParser.OVER:
            case ClickHouseParser.PARTITION:
            case ClickHouseParser.POPULATE:
            case ClickHouseParser.PRECEDING:
            case ClickHouseParser.PRIMARY:
            case ClickHouseParser.RANGE:
            case ClickHouseParser.RELOAD:
            case ClickHouseParser.REMOVE:
            case ClickHouseParser.RENAME:
            case ClickHouseParser.REPLACE:
            case ClickHouseParser.REPLICA:
            case ClickHouseParser.REPLICATED:
            case ClickHouseParser.ROLLUP:
            case ClickHouseParser.ROW:
            case ClickHouseParser.ROWS:
            case ClickHouseParser.SELECT:
            case ClickHouseParser.SENDS:
            case ClickHouseParser.SET:
            case ClickHouseParser.SHOW:
            case ClickHouseParser.SOURCE:
            case ClickHouseParser.START:
            case ClickHouseParser.STOP:
            case ClickHouseParser.SUBSTRING:
            case ClickHouseParser.SYNC:
            case ClickHouseParser.SYNTAX:
            case ClickHouseParser.SYSTEM:
            case ClickHouseParser.TABLE:
            case ClickHouseParser.TABLES:
            case ClickHouseParser.TEMPORARY:
            case ClickHouseParser.TEST:
            case ClickHouseParser.THEN:
            case ClickHouseParser.TIES:
            case ClickHouseParser.TIMEOUT:
            case ClickHouseParser.TIMESTAMP:
            case ClickHouseParser.TO:
            case ClickHouseParser.TOTALS:
            case ClickHouseParser.TRAILING:
            case ClickHouseParser.TRIM:
            case ClickHouseParser.TRUNCATE:
            case ClickHouseParser.TTL:
            case ClickHouseParser.TYPE:
            case ClickHouseParser.UNBOUNDED:
            case ClickHouseParser.UPDATE:
            case ClickHouseParser.USE:
            case ClickHouseParser.UUID:
            case ClickHouseParser.VALUES:
            case ClickHouseParser.VIEW:
            case ClickHouseParser.VOLUME:
            case ClickHouseParser.WATCH:
            case ClickHouseParser.WHEN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2071;
                this.keywordForAlias();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 236, ClickHouseParser.RULE_identifier);
        try {
            this.state = 2077;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2074;
                this.match(ClickHouseParser.IDENTIFIER);
                }
                break;
            case ClickHouseParser.DAY:
            case ClickHouseParser.HOUR:
            case ClickHouseParser.MINUTE:
            case ClickHouseParser.MONTH:
            case ClickHouseParser.QUARTER:
            case ClickHouseParser.SECOND:
            case ClickHouseParser.WEEK:
            case ClickHouseParser.YEAR:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2075;
                this.interval();
                }
                break;
            case ClickHouseParser.AFTER:
            case ClickHouseParser.ALIAS:
            case ClickHouseParser.ALL:
            case ClickHouseParser.ALTER:
            case ClickHouseParser.AND:
            case ClickHouseParser.ANTI:
            case ClickHouseParser.ANY:
            case ClickHouseParser.ARRAY:
            case ClickHouseParser.AS:
            case ClickHouseParser.ASCENDING:
            case ClickHouseParser.ASOF:
            case ClickHouseParser.AST:
            case ClickHouseParser.ASYNC:
            case ClickHouseParser.ATTACH:
            case ClickHouseParser.BETWEEN:
            case ClickHouseParser.BOTH:
            case ClickHouseParser.BY:
            case ClickHouseParser.CASE:
            case ClickHouseParser.CAST:
            case ClickHouseParser.CHECK:
            case ClickHouseParser.CLEAR:
            case ClickHouseParser.CLUSTER:
            case ClickHouseParser.CODEC:
            case ClickHouseParser.COLLATE:
            case ClickHouseParser.COLUMN:
            case ClickHouseParser.COMMENT:
            case ClickHouseParser.CONSTRAINT:
            case ClickHouseParser.CREATE:
            case ClickHouseParser.CROSS:
            case ClickHouseParser.CUBE:
            case ClickHouseParser.CURRENT:
            case ClickHouseParser.DATABASE:
            case ClickHouseParser.DATABASES:
            case ClickHouseParser.DATE:
            case ClickHouseParser.DEDUPLICATE:
            case ClickHouseParser.DEFAULT:
            case ClickHouseParser.DELAY:
            case ClickHouseParser.DELETE:
            case ClickHouseParser.DESC:
            case ClickHouseParser.DESCENDING:
            case ClickHouseParser.DESCRIBE:
            case ClickHouseParser.DETACH:
            case ClickHouseParser.DICTIONARIES:
            case ClickHouseParser.DICTIONARY:
            case ClickHouseParser.DISK:
            case ClickHouseParser.DISTINCT:
            case ClickHouseParser.DISTRIBUTED:
            case ClickHouseParser.DROP:
            case ClickHouseParser.ELSE:
            case ClickHouseParser.END:
            case ClickHouseParser.ENGINE:
            case ClickHouseParser.EVENTS:
            case ClickHouseParser.EXISTS:
            case ClickHouseParser.EXPLAIN:
            case ClickHouseParser.EXPRESSION:
            case ClickHouseParser.EXTRACT:
            case ClickHouseParser.FETCHES:
            case ClickHouseParser.FINAL:
            case ClickHouseParser.FIRST:
            case ClickHouseParser.FLUSH:
            case ClickHouseParser.FOLLOWING:
            case ClickHouseParser.FOR:
            case ClickHouseParser.FORMAT:
            case ClickHouseParser.FREEZE:
            case ClickHouseParser.FROM:
            case ClickHouseParser.FULL:
            case ClickHouseParser.FUNCTION:
            case ClickHouseParser.GLOBAL:
            case ClickHouseParser.GRANULARITY:
            case ClickHouseParser.GROUP:
            case ClickHouseParser.HAVING:
            case ClickHouseParser.HIERARCHICAL:
            case ClickHouseParser.ID:
            case ClickHouseParser.IF:
            case ClickHouseParser.ILIKE:
            case ClickHouseParser.IN:
            case ClickHouseParser.INDEX:
            case ClickHouseParser.INJECTIVE:
            case ClickHouseParser.INNER:
            case ClickHouseParser.INSERT:
            case ClickHouseParser.INTERVAL:
            case ClickHouseParser.INTO:
            case ClickHouseParser.IS:
            case ClickHouseParser.IS_OBJECT_ID:
            case ClickHouseParser.JOIN:
            case ClickHouseParser.KEY:
            case ClickHouseParser.KILL:
            case ClickHouseParser.LAST:
            case ClickHouseParser.LAYOUT:
            case ClickHouseParser.LEADING:
            case ClickHouseParser.LEFT:
            case ClickHouseParser.LIFETIME:
            case ClickHouseParser.LIKE:
            case ClickHouseParser.LIMIT:
            case ClickHouseParser.LIVE:
            case ClickHouseParser.LOCAL:
            case ClickHouseParser.LOGS:
            case ClickHouseParser.MATERIALIZE:
            case ClickHouseParser.MATERIALIZED:
            case ClickHouseParser.MAX:
            case ClickHouseParser.MERGES:
            case ClickHouseParser.MIN:
            case ClickHouseParser.MODIFY:
            case ClickHouseParser.MOVE:
            case ClickHouseParser.MUTATION:
            case ClickHouseParser.NO:
            case ClickHouseParser.NOT:
            case ClickHouseParser.NULLS:
            case ClickHouseParser.OFFSET:
            case ClickHouseParser.ON:
            case ClickHouseParser.OPTIMIZE:
            case ClickHouseParser.OR:
            case ClickHouseParser.ORDER:
            case ClickHouseParser.OUTER:
            case ClickHouseParser.OUTFILE:
            case ClickHouseParser.OVER:
            case ClickHouseParser.PARTITION:
            case ClickHouseParser.POPULATE:
            case ClickHouseParser.PRECEDING:
            case ClickHouseParser.PREWHERE:
            case ClickHouseParser.PRIMARY:
            case ClickHouseParser.RANGE:
            case ClickHouseParser.RELOAD:
            case ClickHouseParser.REMOVE:
            case ClickHouseParser.RENAME:
            case ClickHouseParser.REPLACE:
            case ClickHouseParser.REPLICA:
            case ClickHouseParser.REPLICATED:
            case ClickHouseParser.RIGHT:
            case ClickHouseParser.ROLLUP:
            case ClickHouseParser.ROW:
            case ClickHouseParser.ROWS:
            case ClickHouseParser.SAMPLE:
            case ClickHouseParser.SELECT:
            case ClickHouseParser.SEMI:
            case ClickHouseParser.SENDS:
            case ClickHouseParser.SET:
            case ClickHouseParser.SETTINGS:
            case ClickHouseParser.SHOW:
            case ClickHouseParser.SOURCE:
            case ClickHouseParser.START:
            case ClickHouseParser.STOP:
            case ClickHouseParser.SUBSTRING:
            case ClickHouseParser.SYNC:
            case ClickHouseParser.SYNTAX:
            case ClickHouseParser.SYSTEM:
            case ClickHouseParser.TABLE:
            case ClickHouseParser.TABLES:
            case ClickHouseParser.TEMPORARY:
            case ClickHouseParser.TEST:
            case ClickHouseParser.THEN:
            case ClickHouseParser.TIES:
            case ClickHouseParser.TIMEOUT:
            case ClickHouseParser.TIMESTAMP:
            case ClickHouseParser.TO:
            case ClickHouseParser.TOP:
            case ClickHouseParser.TOTALS:
            case ClickHouseParser.TRAILING:
            case ClickHouseParser.TRIM:
            case ClickHouseParser.TRUNCATE:
            case ClickHouseParser.TTL:
            case ClickHouseParser.TYPE:
            case ClickHouseParser.UNBOUNDED:
            case ClickHouseParser.UNION:
            case ClickHouseParser.UPDATE:
            case ClickHouseParser.USE:
            case ClickHouseParser.USING:
            case ClickHouseParser.UUID:
            case ClickHouseParser.VALUES:
            case ClickHouseParser.VIEW:
            case ClickHouseParser.VOLUME:
            case ClickHouseParser.WATCH:
            case ClickHouseParser.WHEN:
            case ClickHouseParser.WHERE:
            case ClickHouseParser.WINDOW:
            case ClickHouseParser.WITH:
            case ClickHouseParser.JSON_FALSE:
            case ClickHouseParser.JSON_TRUE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 2076;
                this.keyword();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierOrNull(): IdentifierOrNullContext {
        let localContext = new IdentifierOrNullContext(this.context, this.state);
        this.enterRule(localContext, 238, ClickHouseParser.RULE_identifierOrNull);
        try {
            this.state = 2081;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ClickHouseParser.AFTER:
            case ClickHouseParser.ALIAS:
            case ClickHouseParser.ALL:
            case ClickHouseParser.ALTER:
            case ClickHouseParser.AND:
            case ClickHouseParser.ANTI:
            case ClickHouseParser.ANY:
            case ClickHouseParser.ARRAY:
            case ClickHouseParser.AS:
            case ClickHouseParser.ASCENDING:
            case ClickHouseParser.ASOF:
            case ClickHouseParser.AST:
            case ClickHouseParser.ASYNC:
            case ClickHouseParser.ATTACH:
            case ClickHouseParser.BETWEEN:
            case ClickHouseParser.BOTH:
            case ClickHouseParser.BY:
            case ClickHouseParser.CASE:
            case ClickHouseParser.CAST:
            case ClickHouseParser.CHECK:
            case ClickHouseParser.CLEAR:
            case ClickHouseParser.CLUSTER:
            case ClickHouseParser.CODEC:
            case ClickHouseParser.COLLATE:
            case ClickHouseParser.COLUMN:
            case ClickHouseParser.COMMENT:
            case ClickHouseParser.CONSTRAINT:
            case ClickHouseParser.CREATE:
            case ClickHouseParser.CROSS:
            case ClickHouseParser.CUBE:
            case ClickHouseParser.CURRENT:
            case ClickHouseParser.DATABASE:
            case ClickHouseParser.DATABASES:
            case ClickHouseParser.DATE:
            case ClickHouseParser.DAY:
            case ClickHouseParser.DEDUPLICATE:
            case ClickHouseParser.DEFAULT:
            case ClickHouseParser.DELAY:
            case ClickHouseParser.DELETE:
            case ClickHouseParser.DESC:
            case ClickHouseParser.DESCENDING:
            case ClickHouseParser.DESCRIBE:
            case ClickHouseParser.DETACH:
            case ClickHouseParser.DICTIONARIES:
            case ClickHouseParser.DICTIONARY:
            case ClickHouseParser.DISK:
            case ClickHouseParser.DISTINCT:
            case ClickHouseParser.DISTRIBUTED:
            case ClickHouseParser.DROP:
            case ClickHouseParser.ELSE:
            case ClickHouseParser.END:
            case ClickHouseParser.ENGINE:
            case ClickHouseParser.EVENTS:
            case ClickHouseParser.EXISTS:
            case ClickHouseParser.EXPLAIN:
            case ClickHouseParser.EXPRESSION:
            case ClickHouseParser.EXTRACT:
            case ClickHouseParser.FETCHES:
            case ClickHouseParser.FINAL:
            case ClickHouseParser.FIRST:
            case ClickHouseParser.FLUSH:
            case ClickHouseParser.FOLLOWING:
            case ClickHouseParser.FOR:
            case ClickHouseParser.FORMAT:
            case ClickHouseParser.FREEZE:
            case ClickHouseParser.FROM:
            case ClickHouseParser.FULL:
            case ClickHouseParser.FUNCTION:
            case ClickHouseParser.GLOBAL:
            case ClickHouseParser.GRANULARITY:
            case ClickHouseParser.GROUP:
            case ClickHouseParser.HAVING:
            case ClickHouseParser.HIERARCHICAL:
            case ClickHouseParser.HOUR:
            case ClickHouseParser.ID:
            case ClickHouseParser.IF:
            case ClickHouseParser.ILIKE:
            case ClickHouseParser.IN:
            case ClickHouseParser.INDEX:
            case ClickHouseParser.INJECTIVE:
            case ClickHouseParser.INNER:
            case ClickHouseParser.INSERT:
            case ClickHouseParser.INTERVAL:
            case ClickHouseParser.INTO:
            case ClickHouseParser.IS:
            case ClickHouseParser.IS_OBJECT_ID:
            case ClickHouseParser.JOIN:
            case ClickHouseParser.KEY:
            case ClickHouseParser.KILL:
            case ClickHouseParser.LAST:
            case ClickHouseParser.LAYOUT:
            case ClickHouseParser.LEADING:
            case ClickHouseParser.LEFT:
            case ClickHouseParser.LIFETIME:
            case ClickHouseParser.LIKE:
            case ClickHouseParser.LIMIT:
            case ClickHouseParser.LIVE:
            case ClickHouseParser.LOCAL:
            case ClickHouseParser.LOGS:
            case ClickHouseParser.MATERIALIZE:
            case ClickHouseParser.MATERIALIZED:
            case ClickHouseParser.MAX:
            case ClickHouseParser.MERGES:
            case ClickHouseParser.MIN:
            case ClickHouseParser.MINUTE:
            case ClickHouseParser.MODIFY:
            case ClickHouseParser.MONTH:
            case ClickHouseParser.MOVE:
            case ClickHouseParser.MUTATION:
            case ClickHouseParser.NO:
            case ClickHouseParser.NOT:
            case ClickHouseParser.NULLS:
            case ClickHouseParser.OFFSET:
            case ClickHouseParser.ON:
            case ClickHouseParser.OPTIMIZE:
            case ClickHouseParser.OR:
            case ClickHouseParser.ORDER:
            case ClickHouseParser.OUTER:
            case ClickHouseParser.OUTFILE:
            case ClickHouseParser.OVER:
            case ClickHouseParser.PARTITION:
            case ClickHouseParser.POPULATE:
            case ClickHouseParser.PRECEDING:
            case ClickHouseParser.PREWHERE:
            case ClickHouseParser.PRIMARY:
            case ClickHouseParser.QUARTER:
            case ClickHouseParser.RANGE:
            case ClickHouseParser.RELOAD:
            case ClickHouseParser.REMOVE:
            case ClickHouseParser.RENAME:
            case ClickHouseParser.REPLACE:
            case ClickHouseParser.REPLICA:
            case ClickHouseParser.REPLICATED:
            case ClickHouseParser.RIGHT:
            case ClickHouseParser.ROLLUP:
            case ClickHouseParser.ROW:
            case ClickHouseParser.ROWS:
            case ClickHouseParser.SAMPLE:
            case ClickHouseParser.SECOND:
            case ClickHouseParser.SELECT:
            case ClickHouseParser.SEMI:
            case ClickHouseParser.SENDS:
            case ClickHouseParser.SET:
            case ClickHouseParser.SETTINGS:
            case ClickHouseParser.SHOW:
            case ClickHouseParser.SOURCE:
            case ClickHouseParser.START:
            case ClickHouseParser.STOP:
            case ClickHouseParser.SUBSTRING:
            case ClickHouseParser.SYNC:
            case ClickHouseParser.SYNTAX:
            case ClickHouseParser.SYSTEM:
            case ClickHouseParser.TABLE:
            case ClickHouseParser.TABLES:
            case ClickHouseParser.TEMPORARY:
            case ClickHouseParser.TEST:
            case ClickHouseParser.THEN:
            case ClickHouseParser.TIES:
            case ClickHouseParser.TIMEOUT:
            case ClickHouseParser.TIMESTAMP:
            case ClickHouseParser.TO:
            case ClickHouseParser.TOP:
            case ClickHouseParser.TOTALS:
            case ClickHouseParser.TRAILING:
            case ClickHouseParser.TRIM:
            case ClickHouseParser.TRUNCATE:
            case ClickHouseParser.TTL:
            case ClickHouseParser.TYPE:
            case ClickHouseParser.UNBOUNDED:
            case ClickHouseParser.UNION:
            case ClickHouseParser.UPDATE:
            case ClickHouseParser.USE:
            case ClickHouseParser.USING:
            case ClickHouseParser.UUID:
            case ClickHouseParser.VALUES:
            case ClickHouseParser.VIEW:
            case ClickHouseParser.VOLUME:
            case ClickHouseParser.WATCH:
            case ClickHouseParser.WEEK:
            case ClickHouseParser.WHEN:
            case ClickHouseParser.WHERE:
            case ClickHouseParser.WINDOW:
            case ClickHouseParser.WITH:
            case ClickHouseParser.YEAR:
            case ClickHouseParser.JSON_FALSE:
            case ClickHouseParser.JSON_TRUE:
            case ClickHouseParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 2079;
                this.identifier();
                }
                break;
            case ClickHouseParser.NULL_SQL:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 2080;
                this.match(ClickHouseParser.NULL_SQL);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumValue(): EnumValueContext {
        let localContext = new EnumValueContext(this.context, this.state);
        this.enterRule(localContext, 240, ClickHouseParser.RULE_enumValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 2083;
            this.match(ClickHouseParser.STRING_LITERAL);
            this.state = 2084;
            this.match(ClickHouseParser.EQ_SINGLE);
            this.state = 2085;
            this.numberLiteral();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 15:
            return this.dictionaryAttrDfnt_sempred(localContext as DictionaryAttrDfntContext, predIndex);
        case 16:
            return this.dictionaryEngineClause_sempred(localContext as DictionaryEngineClauseContext, predIndex);
        case 29:
            return this.engineClause_sempred(localContext as EngineClauseContext, predIndex);
        case 73:
            return this.joinExpr_sempred(localContext as JoinExprContext, predIndex);
        case 99:
            return this.columnExpr_sempred(localContext as ColumnExprContext, predIndex);
        case 105:
            return this.tableExpr_sempred(localContext as TableExprContext, predIndex);
        }
        return true;
    }
    private dictionaryAttrDfnt_sempred(localContext: DictionaryAttrDfntContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return !localContext.attrs.count("default");
        case 1:
            return !localContext.attrs.count("expression");
        case 2:
            return !localContext.attrs.count("hierarchical");
        case 3:
            return !localContext.attrs.count("injective");
        case 4:
            return !localContext.attrs.count("is_object_id");
        }
        return true;
    }
    private dictionaryEngineClause_sempred(localContext: DictionaryEngineClauseContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 5:
            return !localContext.clauses.count("source");
        case 6:
            return !localContext.clauses.count("lifetime");
        case 7:
            return !localContext.clauses.count("layout");
        case 8:
            return !localContext.clauses.count("range");
        case 9:
            return !localContext.clauses.count("settings");
        }
        return true;
    }
    private engineClause_sempred(localContext: EngineClauseContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 10:
            return !localContext.clauses.count("orderByClause");
        case 11:
            return !localContext.clauses.count("partitionByClause");
        case 12:
            return !localContext.clauses.count("primaryKeyClause");
        case 13:
            return !localContext.clauses.count("sampleByClause");
        case 14:
            return !localContext.clauses.count("ttlClause");
        case 15:
            return !localContext.clauses.count("settingsClause");
        }
        return true;
    }
    private joinExpr_sempred(localContext: JoinExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 16:
            return this.precpred(this.context, 3);
        case 17:
            return this.precpred(this.context, 4);
        }
        return true;
    }
    private columnExpr_sempred(localContext: ColumnExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 18:
            return this.precpred(this.context, 16);
        case 19:
            return this.precpred(this.context, 15);
        case 20:
            return this.precpred(this.context, 14);
        case 21:
            return this.precpred(this.context, 11);
        case 22:
            return this.precpred(this.context, 10);
        case 23:
            return this.precpred(this.context, 9);
        case 24:
            return this.precpred(this.context, 8);
        case 25:
            return this.precpred(this.context, 19);
        case 26:
            return this.precpred(this.context, 18);
        case 27:
            return this.precpred(this.context, 13);
        case 28:
            return this.precpred(this.context, 7);
        }
        return true;
    }
    private tableExpr_sempred(localContext: TableExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 29:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,230,2088,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,1,0,1,0,1,0,1,0,3,0,247,8,0,1,0,1,0,3,0,251,8,0,1,0,3,0,254,
        8,0,1,0,3,0,257,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,278,8,1,1,1,3,1,281,8,1,1,2,
        1,2,1,2,1,2,5,2,287,8,2,10,2,12,2,290,9,2,1,3,1,3,3,3,294,8,3,1,
        3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,305,8,4,10,4,12,4,308,9,4,
        1,4,1,4,1,5,1,5,1,5,1,5,3,5,316,8,5,1,5,1,5,1,5,5,5,321,8,5,10,5,
        12,5,324,9,5,1,6,1,6,1,6,1,6,1,6,3,6,331,8,6,1,6,1,6,1,6,3,6,336,
        8,6,1,6,1,6,1,6,1,6,1,6,3,6,343,8,6,1,6,1,6,1,6,3,6,348,8,6,1,6,
        1,6,1,6,1,6,1,6,3,6,355,8,6,1,6,1,6,1,6,3,6,360,8,6,1,6,1,6,1,6,
        1,6,3,6,366,8,6,1,6,1,6,1,6,1,6,3,6,372,8,6,1,6,1,6,1,6,3,6,377,
        8,6,1,6,1,6,1,6,1,6,3,6,383,8,6,1,6,1,6,1,6,3,6,388,8,6,1,6,1,6,
        1,6,1,6,3,6,394,8,6,1,6,1,6,1,6,3,6,399,8,6,1,6,1,6,1,6,1,6,3,6,
        405,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,419,
        8,6,1,6,1,6,1,6,1,6,1,6,3,6,426,8,6,1,6,1,6,1,6,1,6,1,6,3,6,433,
        8,6,1,6,1,6,1,6,1,6,1,6,3,6,440,8,6,1,6,1,6,1,6,1,6,3,6,446,8,6,
        1,6,1,6,1,6,3,6,451,8,6,1,6,1,6,1,6,1,6,3,6,457,8,6,1,6,1,6,1,6,
        3,6,462,8,6,1,6,1,6,1,6,1,6,3,6,468,8,6,1,6,1,6,1,6,1,6,1,6,1,6,
        1,6,3,6,477,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,487,8,6,1,6,
        1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,497,8,6,1,6,1,6,1,6,1,6,1,6,1,6,
        1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,517,8,6,1,6,
        1,6,1,6,1,6,1,6,1,6,3,6,525,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
        1,6,1,6,1,6,1,6,1,6,3,6,540,8,6,1,7,1,7,1,7,5,7,545,8,7,10,7,12,
        7,548,9,7,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,
        561,8,10,1,11,1,11,1,11,1,11,3,11,567,8,11,1,12,1,12,1,12,1,12,3,
        12,573,8,12,1,13,1,13,1,13,1,13,1,13,3,13,580,8,13,1,13,1,13,3,13,
        584,8,13,1,13,3,13,587,8,13,1,13,1,13,1,13,1,13,3,13,593,8,13,1,
        13,3,13,596,8,13,1,13,1,13,1,13,1,13,3,13,602,8,13,1,13,1,13,3,13,
        606,8,13,1,13,3,13,609,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
        13,1,13,3,13,620,8,13,1,13,1,13,3,13,624,8,13,1,13,3,13,627,8,13,
        1,13,1,13,1,13,3,13,632,8,13,3,13,634,8,13,1,13,3,13,637,8,13,1,
        13,3,13,640,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,650,
        8,13,1,13,1,13,3,13,654,8,13,1,13,3,13,657,8,13,1,13,3,13,660,8,
        13,1,13,1,13,1,13,3,13,665,8,13,3,13,667,8,13,1,13,1,13,1,13,1,13,
        1,13,1,13,3,13,675,8,13,1,13,3,13,678,8,13,1,13,3,13,681,8,13,1,
        13,1,13,1,13,1,13,3,13,687,8,13,1,13,1,13,3,13,691,8,13,1,13,3,13,
        694,8,13,1,13,3,13,697,8,13,1,13,3,13,700,8,13,1,13,3,13,703,8,13,
        1,13,1,13,1,13,3,13,708,8,13,1,13,1,13,1,13,1,13,3,13,714,8,13,1,
        13,1,13,3,13,718,8,13,1,13,3,13,721,8,13,1,13,3,13,724,8,13,1,13,
        1,13,3,13,728,8,13,1,14,1,14,1,14,1,14,5,14,734,8,14,10,14,12,14,
        737,9,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
        1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,
        762,8,15,10,15,12,15,765,9,15,1,16,3,16,768,8,16,1,16,1,16,1,16,
        1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
        1,16,1,16,1,16,1,16,5,16,790,8,16,10,16,12,16,793,9,16,1,17,1,17,
        1,17,1,17,1,18,1,18,1,18,1,18,3,18,803,8,18,1,18,3,18,806,8,18,1,
        19,1,19,1,19,1,19,1,19,5,19,813,8,19,10,19,12,19,816,9,19,1,19,1,
        19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,
        20,832,8,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,5,21,841,8,21,10,
        21,12,21,844,9,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,
        22,1,22,1,22,1,22,1,22,1,22,3,22,861,8,22,1,22,1,22,1,23,1,23,1,
        23,1,23,1,23,1,24,1,24,1,24,1,24,3,24,874,8,24,1,25,1,25,1,25,1,
        26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,28,5,28,889,8,28,10,
        28,12,28,892,9,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,900,8,28,1,
        29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
        29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,5,29,927,
        8,29,10,29,12,29,930,9,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,
        1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,5,33,948,8,33,10,33,12,33,
        951,9,33,1,34,1,34,3,34,955,8,34,1,34,1,34,1,34,3,34,960,8,34,1,
        34,3,34,963,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
        35,3,35,975,8,35,1,36,1,36,1,36,3,36,980,8,36,1,36,1,36,3,36,984,
        8,36,1,36,3,36,987,8,36,1,36,1,36,3,36,991,8,36,1,36,1,36,3,36,995,
        8,36,1,36,1,36,1,36,3,36,1000,8,36,1,36,3,36,1003,8,36,1,36,1,36,
        3,36,1007,8,36,3,36,1009,8,36,1,37,1,37,1,37,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,5,40,1029,
        8,40,10,40,12,40,1032,9,40,1,40,1,40,1,41,1,41,1,41,3,41,1039,8,
        41,1,41,3,41,1042,8,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,
        42,1052,8,42,1,43,1,43,3,43,1056,8,43,1,43,1,43,1,44,1,44,1,44,1,
        44,3,44,1064,8,44,1,44,1,44,3,44,1068,8,44,1,44,1,44,1,44,3,44,1073,
        8,44,1,44,1,44,3,44,1077,8,44,1,44,1,44,3,44,1081,8,44,1,44,1,44,
        3,44,1085,8,44,1,44,1,44,3,44,1089,8,44,3,44,1091,8,44,1,45,1,45,
        1,45,1,45,1,45,1,45,3,45,1099,8,45,1,45,1,45,3,45,1103,8,45,1,45,
        3,45,1106,8,45,1,46,1,46,1,46,1,46,1,46,1,46,3,46,1114,8,46,1,47,
        1,47,1,47,3,47,1119,8,47,1,47,1,47,1,47,3,47,1124,8,47,1,47,3,47,
        1127,8,47,1,47,1,47,1,48,1,48,1,48,1,48,5,48,1135,8,48,10,48,12,
        48,1138,9,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,5,49,1148,8,
        49,10,49,12,49,1151,9,49,1,49,1,49,3,49,1155,8,49,1,49,1,49,3,49,
        1159,8,49,1,50,1,50,1,50,1,50,5,50,1165,8,50,10,50,12,50,1168,9,
        50,1,50,1,50,1,50,1,50,3,50,1174,8,50,1,51,1,51,1,52,1,52,1,52,3,
        52,1181,8,52,1,52,1,52,3,52,1185,8,52,1,53,1,53,1,53,1,53,3,53,1191,
        8,53,1,53,3,53,1194,8,53,1,53,3,53,1197,8,53,1,53,3,53,1200,8,53,
        1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,5,54,1212,8,54,
        10,54,12,54,1215,9,54,1,54,3,54,1218,8,54,1,55,1,55,3,55,1222,8,
        55,1,55,1,55,1,55,3,55,1227,8,55,1,55,3,55,1230,8,55,1,55,1,55,1,
        56,1,56,1,56,1,56,5,56,1238,8,56,10,56,12,56,1241,9,56,1,57,1,57,
        1,57,1,57,1,57,3,57,1248,8,57,1,58,3,58,1251,8,58,1,58,1,58,3,58,
        1255,8,58,1,58,3,58,1258,8,58,1,58,1,58,3,58,1262,8,58,1,58,3,58,
        1265,8,58,1,58,3,58,1268,8,58,1,58,3,58,1271,8,58,1,58,3,58,1274,
        8,58,1,58,3,58,1277,8,58,1,58,1,58,3,58,1281,8,58,1,58,1,58,3,58,
        1285,8,58,1,58,3,58,1288,8,58,1,58,3,58,1291,8,58,1,58,3,58,1294,
        8,58,1,58,3,58,1297,8,58,1,58,3,58,1300,8,58,1,59,1,59,1,59,1,60,
        1,60,1,60,1,60,3,60,1309,8,60,1,61,1,61,1,61,1,62,3,62,1315,8,62,
        1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,
        1,64,1,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,
        1342,8,66,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,
        1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,3,71,1364,8,71,1,72,
        1,72,1,72,1,73,1,73,1,73,3,73,1372,8,73,1,73,3,73,1375,8,73,1,73,
        1,73,1,73,1,73,3,73,1381,8,73,1,73,1,73,1,73,1,73,1,73,1,73,3,73,
        1389,8,73,1,73,3,73,1392,8,73,1,73,1,73,1,73,1,73,5,73,1398,8,73,
        10,73,12,73,1401,9,73,1,74,3,74,1404,8,74,1,74,1,74,1,74,3,74,1409,
        8,74,1,74,3,74,1412,8,74,1,74,3,74,1415,8,74,1,74,1,74,3,74,1419,
        8,74,1,74,1,74,3,74,1423,8,74,1,74,3,74,1426,8,74,3,74,1428,8,74,
        1,74,3,74,1431,8,74,1,74,1,74,3,74,1435,8,74,1,74,1,74,3,74,1439,
        8,74,1,74,3,74,1442,8,74,3,74,1444,8,74,3,74,1446,8,74,1,75,3,75,
        1449,8,75,1,75,1,75,1,75,3,75,1454,8,75,1,76,1,76,1,76,1,76,1,76,
        1,76,1,76,1,76,1,76,3,76,1465,8,76,1,77,1,77,1,77,1,77,3,77,1471,
        8,77,1,78,1,78,1,78,3,78,1476,8,78,1,79,1,79,1,79,5,79,1481,8,79,
        10,79,12,79,1484,9,79,1,80,1,80,3,80,1488,8,80,1,80,1,80,3,80,1492,
        8,80,1,80,1,80,3,80,1496,8,80,1,81,1,81,1,81,3,81,1501,8,81,1,82,
        1,82,1,82,5,82,1506,8,82,10,82,12,82,1509,9,82,1,83,1,83,1,83,1,
        83,1,84,3,84,1516,8,84,1,84,3,84,1519,8,84,1,84,3,84,1522,8,84,1,
        85,1,85,1,85,1,85,1,86,1,86,1,86,1,86,1,87,1,87,1,87,1,88,1,88,1,
        88,1,88,1,88,1,88,3,88,1541,8,88,1,89,1,89,1,89,1,89,1,89,1,89,1,
        89,1,89,1,89,1,89,1,89,1,89,3,89,1555,8,89,1,90,1,90,1,90,1,91,1,
        91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,3,91,1571,8,91,1,
        91,3,91,1574,8,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,3,91,1583,8,
        91,1,91,1,91,3,91,1587,8,91,1,91,1,91,1,91,3,91,1592,8,91,1,91,1,
        91,1,91,3,91,1597,8,91,1,91,3,91,1600,8,91,3,91,1602,8,91,1,92,1,
        92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,
        92,1,92,1,92,1,92,1,92,1,92,3,92,1624,8,92,1,92,3,92,1627,8,92,1,
        92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,3,92,1638,8,92,1,93,1,
        93,3,93,1642,8,93,1,93,3,93,1645,8,93,1,93,1,93,3,93,1649,8,93,1,
        93,1,93,3,93,1653,8,93,1,94,1,94,1,94,1,95,1,95,1,95,3,95,1661,8,
        95,1,95,1,95,3,95,1665,8,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,
        96,1,96,5,96,1676,8,96,10,96,12,96,1679,9,96,1,96,1,96,1,96,1,96,
        1,96,1,96,1,96,5,96,1688,8,96,10,96,12,96,1691,9,96,1,96,1,96,1,
        96,1,96,1,96,1,96,1,96,5,96,1700,8,96,10,96,12,96,1703,9,96,1,96,
        1,96,1,96,1,96,1,96,3,96,1710,8,96,1,96,1,96,3,96,1714,8,96,1,97,
        1,97,1,97,5,97,1719,8,97,10,97,12,97,1722,9,97,1,98,1,98,1,98,3,
        98,1727,8,98,1,98,1,98,1,98,1,98,1,98,1,98,3,98,1735,8,98,1,99,1,
        99,1,99,3,99,1740,8,99,1,99,1,99,1,99,1,99,1,99,4,99,1747,8,99,11,
        99,12,99,1748,1,99,1,99,3,99,1753,8,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,3,99,1784,
        8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,99,1,99,3,99,1801,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,99,1,99,3,99,1813,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,3,99,1823,8,99,1,99,3,99,1826,8,99,1,99,1,99,3,99,1830,8,99,
        1,99,3,99,1833,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,3,99,1845,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,99,1,99,1,99,1,99,1,99,3,99,1862,8,99,1,99,1,99,3,99,1866,
        8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,99,1,99,3,99,1883,8,99,1,99,3,99,1886,8,99,1,99,1,99,3,99,
        1890,8,99,1,99,3,99,1893,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,99,3,99,1904,8,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,99,
        1,99,3,99,1928,8,99,1,99,1,99,1,99,1,99,1,99,3,99,1935,8,99,5,99,
        1937,8,99,10,99,12,99,1940,9,99,1,100,1,100,1,100,5,100,1945,8,100,
        10,100,12,100,1948,9,100,1,101,1,101,3,101,1952,8,101,1,102,1,102,
        1,102,1,102,5,102,1958,8,102,10,102,12,102,1961,9,102,1,102,1,102,
        1,102,1,102,1,102,5,102,1968,8,102,10,102,12,102,1971,9,102,3,102,
        1973,8,102,1,102,1,102,1,102,1,103,1,103,1,103,3,103,1981,8,103,
        1,103,1,103,1,104,1,104,1,104,3,104,1988,8,104,1,105,1,105,1,105,
        1,105,1,105,1,105,1,105,3,105,1997,8,105,1,105,1,105,1,105,1,105,
        3,105,2003,8,105,5,105,2005,8,105,10,105,12,105,2008,9,105,1,106,
        1,106,1,106,3,106,2013,8,106,1,106,1,106,1,107,1,107,1,107,3,107,
        2020,8,107,1,107,1,107,1,108,1,108,1,108,5,108,2027,8,108,10,108,
        12,108,2030,9,108,1,109,1,109,1,109,3,109,2035,8,109,1,110,1,110,
        1,111,1,111,1,111,1,111,1,111,1,111,3,111,2045,8,111,3,111,2047,
        8,111,1,112,3,112,2050,8,112,1,112,1,112,1,112,1,112,1,112,1,112,
        3,112,2058,8,112,1,113,1,113,1,113,3,113,2063,8,113,1,114,1,114,
        1,115,1,115,1,116,1,116,1,117,1,117,3,117,2073,8,117,1,118,1,118,
        1,118,3,118,2078,8,118,1,119,1,119,3,119,2082,8,119,1,120,1,120,
        1,120,1,120,1,120,0,3,146,198,210,121,0,2,4,6,8,10,12,14,16,18,20,
        22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
        66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,
        108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
        140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,
        172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,
        204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,
        236,238,240,0,28,6,0,3,3,24,24,27,27,38,38,103,103,172,172,2,0,15,
        15,29,29,3,0,3,3,38,38,103,103,2,0,41,41,43,43,2,0,44,44,50,50,3,
        0,14,14,155,155,161,161,2,0,31,31,140,140,2,0,83,83,95,95,2,0,70,
        70,100,100,3,0,4,4,8,8,12,12,4,0,4,4,7,8,12,12,146,146,2,0,95,95,
        139,139,2,0,4,4,8,8,2,0,117,117,203,203,2,0,11,11,41,42,2,0,61,61,
        92,92,2,0,132,132,142,142,2,0,67,67,79,79,1,0,152,153,3,0,17,17,
        94,94,169,169,3,0,199,199,217,217,226,226,2,0,204,205,218,218,2,
        0,78,78,97,97,1,0,194,195,2,0,205,205,218,218,8,0,36,36,75,75,107,
        107,109,109,131,131,144,144,184,184,189,189,12,0,2,35,37,74,76,80,
        82,106,108,108,110,111,113,114,116,129,132,143,145,183,185,188,190,
        191,37,0,2,3,5,5,11,11,13,15,17,29,31,35,37,47,49,59,61,64,66,66,
        69,69,71,71,74,74,76,77,80,80,82,82,84,85,88,88,90,94,96,96,99,106,
        108,108,110,111,113,113,116,116,119,119,122,127,129,129,132,138,
        140,142,145,145,147,148,150,166,168,174,176,177,179,183,185,185,
        2376,0,256,1,0,0,0,2,280,1,0,0,0,4,282,1,0,0,0,6,291,1,0,0,0,8,300,
        1,0,0,0,10,311,1,0,0,0,12,539,1,0,0,0,14,541,1,0,0,0,16,549,1,0,
        0,0,18,553,1,0,0,0,20,560,1,0,0,0,22,562,1,0,0,0,24,568,1,0,0,0,
        26,727,1,0,0,0,28,729,1,0,0,0,30,740,1,0,0,0,32,767,1,0,0,0,34,794,
        1,0,0,0,36,798,1,0,0,0,38,807,1,0,0,0,40,820,1,0,0,0,42,835,1,0,
        0,0,44,848,1,0,0,0,46,864,1,0,0,0,48,869,1,0,0,0,50,875,1,0,0,0,
        52,878,1,0,0,0,54,881,1,0,0,0,56,899,1,0,0,0,58,901,1,0,0,0,60,931,
        1,0,0,0,62,935,1,0,0,0,64,939,1,0,0,0,66,943,1,0,0,0,68,952,1,0,
        0,0,70,974,1,0,0,0,72,1008,1,0,0,0,74,1010,1,0,0,0,76,1013,1,0,0,
        0,78,1020,1,0,0,0,80,1023,1,0,0,0,82,1035,1,0,0,0,84,1043,1,0,0,
        0,86,1053,1,0,0,0,88,1090,1,0,0,0,90,1105,1,0,0,0,92,1113,1,0,0,
        0,94,1115,1,0,0,0,96,1130,1,0,0,0,98,1158,1,0,0,0,100,1173,1,0,0,
        0,102,1175,1,0,0,0,104,1177,1,0,0,0,106,1186,1,0,0,0,108,1201,1,
        0,0,0,110,1219,1,0,0,0,112,1233,1,0,0,0,114,1247,1,0,0,0,116,1250,
        1,0,0,0,118,1301,1,0,0,0,120,1304,1,0,0,0,122,1310,1,0,0,0,124,1314,
        1,0,0,0,126,1320,1,0,0,0,128,1327,1,0,0,0,130,1330,1,0,0,0,132,1333,
        1,0,0,0,134,1343,1,0,0,0,136,1346,1,0,0,0,138,1350,1,0,0,0,140,1354,
        1,0,0,0,142,1359,1,0,0,0,144,1365,1,0,0,0,146,1380,1,0,0,0,148,1445,
        1,0,0,0,150,1453,1,0,0,0,152,1464,1,0,0,0,154,1466,1,0,0,0,156,1472,
        1,0,0,0,158,1477,1,0,0,0,160,1485,1,0,0,0,162,1497,1,0,0,0,164,1502,
        1,0,0,0,166,1510,1,0,0,0,168,1515,1,0,0,0,170,1523,1,0,0,0,172,1527,
        1,0,0,0,174,1531,1,0,0,0,176,1540,1,0,0,0,178,1554,1,0,0,0,180,1556,
        1,0,0,0,182,1601,1,0,0,0,184,1637,1,0,0,0,186,1639,1,0,0,0,188,1654,
        1,0,0,0,190,1657,1,0,0,0,192,1713,1,0,0,0,194,1715,1,0,0,0,196,1734,
        1,0,0,0,198,1865,1,0,0,0,200,1941,1,0,0,0,202,1951,1,0,0,0,204,1972,
        1,0,0,0,206,1980,1,0,0,0,208,1984,1,0,0,0,210,1996,1,0,0,0,212,2009,
        1,0,0,0,214,2019,1,0,0,0,216,2023,1,0,0,0,218,2034,1,0,0,0,220,2036,
        1,0,0,0,222,2046,1,0,0,0,224,2049,1,0,0,0,226,2062,1,0,0,0,228,2064,
        1,0,0,0,230,2066,1,0,0,0,232,2068,1,0,0,0,234,2072,1,0,0,0,236,2077,
        1,0,0,0,238,2081,1,0,0,0,240,2083,1,0,0,0,242,246,3,2,1,0,243,244,
        5,86,0,0,244,245,5,123,0,0,245,247,5,197,0,0,246,243,1,0,0,0,246,
        247,1,0,0,0,247,250,1,0,0,0,248,249,5,65,0,0,249,251,3,238,119,0,
        250,248,1,0,0,0,250,251,1,0,0,0,251,253,1,0,0,0,252,254,5,225,0,
        0,253,252,1,0,0,0,253,254,1,0,0,0,254,257,1,0,0,0,255,257,3,94,47,
        0,256,242,1,0,0,0,256,255,1,0,0,0,257,1,1,0,0,0,258,281,3,10,5,0,
        259,281,3,22,11,0,260,281,3,24,12,0,261,281,3,26,13,0,262,281,3,
        86,43,0,263,281,3,88,44,0,264,281,3,90,45,0,265,281,3,92,46,0,266,
        281,3,104,52,0,267,281,3,106,53,0,268,281,3,108,54,0,269,281,3,112,
        56,0,270,281,3,180,90,0,271,281,3,182,91,0,272,281,3,184,92,0,273,
        281,3,186,93,0,274,281,3,188,94,0,275,281,3,190,95,0,276,278,3,4,
        2,0,277,276,1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,281,3,116,
        58,0,280,258,1,0,0,0,280,259,1,0,0,0,280,260,1,0,0,0,280,261,1,0,
        0,0,280,262,1,0,0,0,280,263,1,0,0,0,280,264,1,0,0,0,280,265,1,0,
        0,0,280,266,1,0,0,0,280,267,1,0,0,0,280,268,1,0,0,0,280,269,1,0,
        0,0,280,270,1,0,0,0,280,271,1,0,0,0,280,272,1,0,0,0,280,273,1,0,
        0,0,280,274,1,0,0,0,280,275,1,0,0,0,280,277,1,0,0,0,281,3,1,0,0,
        0,282,283,5,188,0,0,283,288,3,6,3,0,284,285,5,203,0,0,285,287,3,
        6,3,0,286,284,1,0,0,0,287,290,1,0,0,0,288,286,1,0,0,0,288,289,1,
        0,0,0,289,5,1,0,0,0,290,288,1,0,0,0,291,293,3,236,118,0,292,294,
        3,8,4,0,293,292,1,0,0,0,293,294,1,0,0,0,294,295,1,0,0,0,295,296,
        5,10,0,0,296,297,5,214,0,0,297,298,3,2,1,0,298,299,5,224,0,0,299,
        7,1,0,0,0,300,301,5,214,0,0,301,306,3,236,118,0,302,303,5,203,0,
        0,303,305,3,236,118,0,304,302,1,0,0,0,305,308,1,0,0,0,306,304,1,
        0,0,0,306,307,1,0,0,0,307,309,1,0,0,0,308,306,1,0,0,0,309,310,5,
        224,0,0,310,9,1,0,0,0,311,312,5,5,0,0,312,313,5,158,0,0,313,315,
        3,214,107,0,314,316,3,48,24,0,315,314,1,0,0,0,315,316,1,0,0,0,316,
        317,1,0,0,0,317,322,3,12,6,0,318,319,5,203,0,0,319,321,3,12,6,0,
        320,318,1,0,0,0,321,324,1,0,0,0,322,320,1,0,0,0,322,323,1,0,0,0,
        323,11,1,0,0,0,324,322,1,0,0,0,325,326,5,1,0,0,326,330,5,26,0,0,
        327,328,5,77,0,0,328,329,5,114,0,0,329,331,5,55,0,0,330,327,1,0,
        0,0,330,331,1,0,0,0,331,332,1,0,0,0,332,335,3,72,36,0,333,334,5,
        2,0,0,334,336,3,208,104,0,335,333,1,0,0,0,335,336,1,0,0,0,336,540,
        1,0,0,0,337,338,5,1,0,0,338,342,5,80,0,0,339,340,5,77,0,0,340,341,
        5,114,0,0,341,343,5,55,0,0,342,339,1,0,0,0,342,343,1,0,0,0,343,344,
        1,0,0,0,344,347,3,76,38,0,345,346,5,2,0,0,346,348,3,208,104,0,347,
        345,1,0,0,0,347,348,1,0,0,0,348,540,1,0,0,0,349,350,5,1,0,0,350,
        354,5,130,0,0,351,352,5,77,0,0,352,353,5,114,0,0,353,355,5,55,0,
        0,354,351,1,0,0,0,354,355,1,0,0,0,355,356,1,0,0,0,356,359,3,78,39,
        0,357,358,5,2,0,0,358,360,3,208,104,0,359,357,1,0,0,0,359,360,1,
        0,0,0,360,540,1,0,0,0,361,362,5,15,0,0,362,365,3,20,10,0,363,364,
        5,67,0,0,364,366,3,214,107,0,365,363,1,0,0,0,365,366,1,0,0,0,366,
        540,1,0,0,0,367,368,5,22,0,0,368,371,5,26,0,0,369,370,5,77,0,0,370,
        372,5,55,0,0,371,369,1,0,0,0,371,372,1,0,0,0,372,373,1,0,0,0,373,
        376,3,208,104,0,374,375,5,79,0,0,375,377,3,20,10,0,376,374,1,0,0,
        0,376,377,1,0,0,0,377,540,1,0,0,0,378,379,5,22,0,0,379,382,5,80,
        0,0,380,381,5,77,0,0,381,383,5,55,0,0,382,380,1,0,0,0,382,383,1,
        0,0,0,383,384,1,0,0,0,384,387,3,208,104,0,385,386,5,79,0,0,386,388,
        3,20,10,0,387,385,1,0,0,0,387,388,1,0,0,0,388,540,1,0,0,0,389,390,
        5,22,0,0,390,393,5,130,0,0,391,392,5,77,0,0,392,394,5,55,0,0,393,
        391,1,0,0,0,393,394,1,0,0,0,394,395,1,0,0,0,395,398,3,208,104,0,
        396,397,5,79,0,0,397,399,3,20,10,0,398,396,1,0,0,0,398,399,1,0,0,
        0,399,540,1,0,0,0,400,401,5,27,0,0,401,404,5,26,0,0,402,403,5,77,
        0,0,403,405,5,55,0,0,404,402,1,0,0,0,404,405,1,0,0,0,405,406,1,0,
        0,0,406,407,3,208,104,0,407,408,5,197,0,0,408,540,1,0,0,0,409,410,
        5,40,0,0,410,411,5,186,0,0,411,540,3,198,99,0,412,413,5,44,0,0,413,
        540,3,20,10,0,414,415,5,50,0,0,415,418,5,26,0,0,416,417,5,77,0,0,
        417,419,5,55,0,0,418,416,1,0,0,0,418,419,1,0,0,0,419,420,1,0,0,0,
        420,540,3,208,104,0,421,422,5,50,0,0,422,425,5,80,0,0,423,424,5,
        77,0,0,424,426,5,55,0,0,425,423,1,0,0,0,425,426,1,0,0,0,426,427,
        1,0,0,0,427,540,3,208,104,0,428,429,5,50,0,0,429,432,5,130,0,0,430,
        431,5,77,0,0,431,433,5,55,0,0,432,430,1,0,0,0,432,433,1,0,0,0,433,
        434,1,0,0,0,434,540,3,208,104,0,435,436,5,50,0,0,436,540,3,20,10,
        0,437,439,5,66,0,0,438,440,3,20,10,0,439,438,1,0,0,0,439,440,1,0,
        0,0,440,540,1,0,0,0,441,442,5,102,0,0,442,445,5,80,0,0,443,444,5,
        77,0,0,444,446,5,55,0,0,445,443,1,0,0,0,445,446,1,0,0,0,446,447,
        1,0,0,0,447,450,3,208,104,0,448,449,5,79,0,0,449,451,3,20,10,0,450,
        448,1,0,0,0,450,451,1,0,0,0,451,540,1,0,0,0,452,453,5,102,0,0,453,
        456,5,130,0,0,454,455,5,77,0,0,455,457,5,55,0,0,456,454,1,0,0,0,
        456,457,1,0,0,0,457,458,1,0,0,0,458,461,3,208,104,0,459,460,5,79,
        0,0,460,462,3,20,10,0,461,459,1,0,0,0,461,462,1,0,0,0,462,540,1,
        0,0,0,463,464,5,108,0,0,464,467,5,26,0,0,465,466,5,77,0,0,466,468,
        5,55,0,0,467,465,1,0,0,0,467,468,1,0,0,0,468,469,1,0,0,0,469,470,
        3,208,104,0,470,471,3,80,40,0,471,540,1,0,0,0,472,473,5,108,0,0,
        473,476,5,26,0,0,474,475,5,77,0,0,475,477,5,55,0,0,476,474,1,0,0,
        0,476,477,1,0,0,0,477,478,1,0,0,0,478,479,3,208,104,0,479,480,5,
        27,0,0,480,481,5,197,0,0,481,540,1,0,0,0,482,483,5,108,0,0,483,486,
        5,26,0,0,484,485,5,77,0,0,485,487,5,55,0,0,486,484,1,0,0,0,486,487,
        1,0,0,0,487,488,1,0,0,0,488,489,3,208,104,0,489,490,5,134,0,0,490,
        491,3,18,9,0,491,540,1,0,0,0,492,493,5,108,0,0,493,496,5,26,0,0,
        494,495,5,77,0,0,495,497,5,55,0,0,496,494,1,0,0,0,496,497,1,0,0,
        0,497,498,1,0,0,0,498,540,3,72,36,0,499,500,5,108,0,0,500,501,5,
        121,0,0,501,502,5,18,0,0,502,540,3,198,99,0,503,504,5,108,0,0,504,
        540,3,66,33,0,505,506,5,110,0,0,506,516,3,20,10,0,507,508,5,166,
        0,0,508,509,5,47,0,0,509,517,5,197,0,0,510,511,5,166,0,0,511,512,
        5,182,0,0,512,517,5,197,0,0,513,514,5,166,0,0,514,515,5,158,0,0,
        515,517,3,214,107,0,516,507,1,0,0,0,516,510,1,0,0,0,516,513,1,0,
        0,0,517,540,1,0,0,0,518,519,5,134,0,0,519,540,5,172,0,0,520,521,
        5,135,0,0,521,524,5,26,0,0,522,523,5,77,0,0,523,525,5,55,0,0,524,
        522,1,0,0,0,524,525,1,0,0,0,525,526,1,0,0,0,526,527,3,208,104,0,
        527,528,5,166,0,0,528,529,3,208,104,0,529,540,1,0,0,0,530,531,5,
        136,0,0,531,532,3,20,10,0,532,533,5,67,0,0,533,534,3,214,107,0,534,
        540,1,0,0,0,535,536,5,176,0,0,536,537,3,14,7,0,537,538,3,130,65,
        0,538,540,1,0,0,0,539,325,1,0,0,0,539,337,1,0,0,0,539,349,1,0,0,
        0,539,361,1,0,0,0,539,367,1,0,0,0,539,378,1,0,0,0,539,389,1,0,0,
        0,539,400,1,0,0,0,539,409,1,0,0,0,539,412,1,0,0,0,539,414,1,0,0,
        0,539,421,1,0,0,0,539,428,1,0,0,0,539,435,1,0,0,0,539,437,1,0,0,
        0,539,441,1,0,0,0,539,452,1,0,0,0,539,463,1,0,0,0,539,472,1,0,0,
        0,539,482,1,0,0,0,539,492,1,0,0,0,539,499,1,0,0,0,539,503,1,0,0,
        0,539,505,1,0,0,0,539,518,1,0,0,0,539,520,1,0,0,0,539,530,1,0,0,
        0,539,535,1,0,0,0,540,13,1,0,0,0,541,546,3,16,8,0,542,543,5,203,
        0,0,543,545,3,16,8,0,544,542,1,0,0,0,545,548,1,0,0,0,546,544,1,0,
        0,0,546,547,1,0,0,0,547,15,1,0,0,0,548,546,1,0,0,0,549,550,3,208,
        104,0,550,551,5,208,0,0,551,552,3,198,99,0,552,17,1,0,0,0,553,554,
        7,0,0,0,554,19,1,0,0,0,555,556,5,125,0,0,556,561,3,198,99,0,557,
        558,5,125,0,0,558,559,5,76,0,0,559,561,5,197,0,0,560,555,1,0,0,0,
        560,557,1,0,0,0,561,21,1,0,0,0,562,563,5,15,0,0,563,564,5,46,0,0,
        564,566,3,214,107,0,565,567,3,48,24,0,566,565,1,0,0,0,566,567,1,
        0,0,0,567,23,1,0,0,0,568,569,5,21,0,0,569,570,5,158,0,0,570,572,
        3,214,107,0,571,573,3,20,10,0,572,571,1,0,0,0,572,573,1,0,0,0,573,
        25,1,0,0,0,574,575,7,1,0,0,575,579,5,33,0,0,576,577,5,77,0,0,577,
        578,5,114,0,0,578,580,5,55,0,0,579,576,1,0,0,0,579,580,1,0,0,0,580,
        581,1,0,0,0,581,583,3,220,110,0,582,584,3,48,24,0,583,582,1,0,0,
        0,583,584,1,0,0,0,584,586,1,0,0,0,585,587,3,68,34,0,586,585,1,0,
        0,0,586,587,1,0,0,0,587,728,1,0,0,0,588,596,5,15,0,0,589,592,5,29,
        0,0,590,591,5,120,0,0,591,593,5,136,0,0,592,590,1,0,0,0,592,593,
        1,0,0,0,593,596,1,0,0,0,594,596,5,136,0,0,595,588,1,0,0,0,595,589,
        1,0,0,0,595,594,1,0,0,0,596,597,1,0,0,0,597,601,5,46,0,0,598,599,
        5,77,0,0,599,600,5,114,0,0,600,602,5,55,0,0,601,598,1,0,0,0,601,
        602,1,0,0,0,602,603,1,0,0,0,603,605,3,214,107,0,604,606,3,50,25,
        0,605,604,1,0,0,0,605,606,1,0,0,0,606,608,1,0,0,0,607,609,3,48,24,
        0,608,607,1,0,0,0,608,609,1,0,0,0,609,610,1,0,0,0,610,611,3,28,14,
        0,611,612,3,32,16,0,612,728,1,0,0,0,613,614,7,1,0,0,614,615,5,99,
        0,0,615,619,5,181,0,0,616,617,5,77,0,0,617,618,5,114,0,0,618,620,
        5,55,0,0,619,616,1,0,0,0,619,620,1,0,0,0,620,621,1,0,0,0,621,623,
        3,214,107,0,622,624,3,50,25,0,623,622,1,0,0,0,623,624,1,0,0,0,624,
        626,1,0,0,0,625,627,3,48,24,0,626,625,1,0,0,0,626,627,1,0,0,0,627,
        633,1,0,0,0,628,629,5,188,0,0,629,631,5,164,0,0,630,632,5,195,0,
        0,631,630,1,0,0,0,631,632,1,0,0,0,632,634,1,0,0,0,633,628,1,0,0,
        0,633,634,1,0,0,0,634,636,1,0,0,0,635,637,3,52,26,0,636,635,1,0,
        0,0,636,637,1,0,0,0,637,639,1,0,0,0,638,640,3,56,28,0,639,638,1,
        0,0,0,639,640,1,0,0,0,640,641,1,0,0,0,641,642,3,54,27,0,642,728,
        1,0,0,0,643,644,7,1,0,0,644,645,5,103,0,0,645,649,5,181,0,0,646,
        647,5,77,0,0,647,648,5,114,0,0,648,650,5,55,0,0,649,646,1,0,0,0,
        649,650,1,0,0,0,650,651,1,0,0,0,651,653,3,214,107,0,652,654,3,50,
        25,0,653,652,1,0,0,0,653,654,1,0,0,0,654,656,1,0,0,0,655,657,3,48,
        24,0,656,655,1,0,0,0,656,657,1,0,0,0,657,659,1,0,0,0,658,660,3,56,
        28,0,659,658,1,0,0,0,659,660,1,0,0,0,660,666,1,0,0,0,661,667,3,52,
        26,0,662,664,3,58,29,0,663,665,5,126,0,0,664,663,1,0,0,0,664,665,
        1,0,0,0,665,667,1,0,0,0,666,661,1,0,0,0,666,662,1,0,0,0,667,668,
        1,0,0,0,668,669,3,54,27,0,669,728,1,0,0,0,670,678,5,15,0,0,671,674,
        5,29,0,0,672,673,5,120,0,0,673,675,5,136,0,0,674,672,1,0,0,0,674,
        675,1,0,0,0,675,678,1,0,0,0,676,678,5,136,0,0,677,670,1,0,0,0,677,
        671,1,0,0,0,677,676,1,0,0,0,678,680,1,0,0,0,679,681,5,160,0,0,680,
        679,1,0,0,0,680,681,1,0,0,0,681,682,1,0,0,0,682,686,5,158,0,0,683,
        684,5,77,0,0,684,685,5,114,0,0,685,687,5,55,0,0,686,683,1,0,0,0,
        686,687,1,0,0,0,687,688,1,0,0,0,688,690,3,214,107,0,689,691,3,50,
        25,0,690,689,1,0,0,0,690,691,1,0,0,0,691,693,1,0,0,0,692,694,3,48,
        24,0,693,692,1,0,0,0,693,694,1,0,0,0,694,696,1,0,0,0,695,697,3,56,
        28,0,696,695,1,0,0,0,696,697,1,0,0,0,697,699,1,0,0,0,698,700,3,58,
        29,0,699,698,1,0,0,0,699,700,1,0,0,0,700,702,1,0,0,0,701,703,3,54,
        27,0,702,701,1,0,0,0,702,703,1,0,0,0,703,728,1,0,0,0,704,707,7,1,
        0,0,705,706,5,120,0,0,706,708,5,136,0,0,707,705,1,0,0,0,707,708,
        1,0,0,0,708,709,1,0,0,0,709,713,5,181,0,0,710,711,5,77,0,0,711,712,
        5,114,0,0,712,714,5,55,0,0,713,710,1,0,0,0,713,714,1,0,0,0,714,715,
        1,0,0,0,715,717,3,214,107,0,716,718,3,50,25,0,717,716,1,0,0,0,717,
        718,1,0,0,0,718,720,1,0,0,0,719,721,3,48,24,0,720,719,1,0,0,0,720,
        721,1,0,0,0,721,723,1,0,0,0,722,724,3,56,28,0,723,722,1,0,0,0,723,
        724,1,0,0,0,724,725,1,0,0,0,725,726,3,54,27,0,726,728,1,0,0,0,727,
        574,1,0,0,0,727,595,1,0,0,0,727,613,1,0,0,0,727,643,1,0,0,0,727,
        677,1,0,0,0,727,704,1,0,0,0,728,27,1,0,0,0,729,730,5,214,0,0,730,
        735,3,30,15,0,731,732,5,203,0,0,732,734,3,30,15,0,733,731,1,0,0,
        0,734,737,1,0,0,0,735,733,1,0,0,0,735,736,1,0,0,0,736,738,1,0,0,
        0,737,735,1,0,0,0,738,739,5,224,0,0,739,29,1,0,0,0,740,741,3,236,
        118,0,741,763,3,192,96,0,742,743,4,15,0,1,743,744,5,38,0,0,744,745,
        3,226,113,0,745,746,6,15,-1,0,746,762,1,0,0,0,747,748,4,15,1,1,748,
        749,5,57,0,0,749,750,3,198,99,0,750,751,6,15,-1,0,751,762,1,0,0,
        0,752,753,4,15,2,1,753,754,5,74,0,0,754,762,6,15,-1,0,755,756,4,
        15,3,1,756,757,5,82,0,0,757,762,6,15,-1,0,758,759,4,15,4,1,759,760,
        5,88,0,0,760,762,6,15,-1,0,761,742,1,0,0,0,761,747,1,0,0,0,761,752,
        1,0,0,0,761,755,1,0,0,0,761,758,1,0,0,0,762,765,1,0,0,0,763,761,
        1,0,0,0,763,764,1,0,0,0,764,31,1,0,0,0,765,763,1,0,0,0,766,768,3,
        34,17,0,767,766,1,0,0,0,767,768,1,0,0,0,768,791,1,0,0,0,769,770,
        4,16,5,1,770,771,3,38,19,0,771,772,6,16,-1,0,772,790,1,0,0,0,773,
        774,4,16,6,1,774,775,3,40,20,0,775,776,6,16,-1,0,776,790,1,0,0,0,
        777,778,4,16,7,1,778,779,3,42,21,0,779,780,6,16,-1,0,780,790,1,0,
        0,0,781,782,4,16,8,1,782,783,3,44,22,0,783,784,6,16,-1,0,784,790,
        1,0,0,0,785,786,4,16,9,1,786,787,3,46,23,0,787,788,6,16,-1,0,788,
        790,1,0,0,0,789,769,1,0,0,0,789,773,1,0,0,0,789,777,1,0,0,0,789,
        781,1,0,0,0,789,785,1,0,0,0,790,793,1,0,0,0,791,789,1,0,0,0,791,
        792,1,0,0,0,792,33,1,0,0,0,793,791,1,0,0,0,794,795,5,129,0,0,795,
        796,5,90,0,0,796,797,3,194,97,0,797,35,1,0,0,0,798,805,3,236,118,
        0,799,802,3,236,118,0,800,801,5,214,0,0,801,803,5,224,0,0,802,800,
        1,0,0,0,802,803,1,0,0,0,803,806,1,0,0,0,804,806,3,226,113,0,805,
        799,1,0,0,0,805,804,1,0,0,0,806,37,1,0,0,0,807,808,5,151,0,0,808,
        809,5,214,0,0,809,810,3,236,118,0,810,814,5,214,0,0,811,813,3,36,
        18,0,812,811,1,0,0,0,813,816,1,0,0,0,814,812,1,0,0,0,814,815,1,0,
        0,0,815,817,1,0,0,0,816,814,1,0,0,0,817,818,5,224,0,0,818,819,5,
        224,0,0,819,39,1,0,0,0,820,821,5,96,0,0,821,831,5,214,0,0,822,832,
        5,195,0,0,823,824,5,106,0,0,824,825,5,195,0,0,825,826,5,104,0,0,
        826,832,5,195,0,0,827,828,5,104,0,0,828,829,5,195,0,0,829,830,5,
        106,0,0,830,832,5,195,0,0,831,822,1,0,0,0,831,823,1,0,0,0,831,827,
        1,0,0,0,832,833,1,0,0,0,833,834,5,224,0,0,834,41,1,0,0,0,835,836,
        5,93,0,0,836,837,5,214,0,0,837,838,3,236,118,0,838,842,5,214,0,0,
        839,841,3,36,18,0,840,839,1,0,0,0,841,844,1,0,0,0,842,840,1,0,0,
        0,842,843,1,0,0,0,843,845,1,0,0,0,844,842,1,0,0,0,845,846,5,224,
        0,0,846,847,5,224,0,0,847,43,1,0,0,0,848,849,5,132,0,0,849,860,5,
        214,0,0,850,851,5,106,0,0,851,852,3,236,118,0,852,853,5,104,0,0,
        853,854,3,236,118,0,854,861,1,0,0,0,855,856,5,104,0,0,856,857,3,
        236,118,0,857,858,5,106,0,0,858,859,3,236,118,0,859,861,1,0,0,0,
        860,850,1,0,0,0,860,855,1,0,0,0,861,862,1,0,0,0,862,863,5,224,0,
        0,863,45,1,0,0,0,864,865,5,149,0,0,865,866,5,214,0,0,866,867,3,164,
        82,0,867,868,5,224,0,0,868,47,1,0,0,0,869,870,5,118,0,0,870,873,
        5,23,0,0,871,874,3,236,118,0,872,874,5,197,0,0,873,871,1,0,0,0,873,
        872,1,0,0,0,874,49,1,0,0,0,875,876,5,179,0,0,876,877,5,197,0,0,877,
        51,1,0,0,0,878,879,5,166,0,0,879,880,3,214,107,0,880,53,1,0,0,0,
        881,882,5,10,0,0,882,883,3,112,56,0,883,55,1,0,0,0,884,885,5,214,
        0,0,885,890,3,70,35,0,886,887,5,203,0,0,887,889,3,70,35,0,888,886,
        1,0,0,0,889,892,1,0,0,0,890,888,1,0,0,0,890,891,1,0,0,0,891,893,
        1,0,0,0,892,890,1,0,0,0,893,894,5,224,0,0,894,900,1,0,0,0,895,896,
        5,10,0,0,896,900,3,214,107,0,897,898,5,10,0,0,898,900,3,212,106,
        0,899,884,1,0,0,0,899,895,1,0,0,0,899,897,1,0,0,0,900,57,1,0,0,0,
        901,928,3,68,34,0,902,903,4,29,10,1,903,904,3,136,68,0,904,905,6,
        29,-1,0,905,927,1,0,0,0,906,907,4,29,11,1,907,908,3,60,30,0,908,
        909,6,29,-1,0,909,927,1,0,0,0,910,911,4,29,12,1,911,912,3,62,31,
        0,912,913,6,29,-1,0,913,927,1,0,0,0,914,915,4,29,13,1,915,916,3,
        64,32,0,916,917,6,29,-1,0,917,927,1,0,0,0,918,919,4,29,14,1,919,
        920,3,66,33,0,920,921,6,29,-1,0,921,927,1,0,0,0,922,923,4,29,15,
        1,923,924,3,144,72,0,924,925,6,29,-1,0,925,927,1,0,0,0,926,902,1,
        0,0,0,926,906,1,0,0,0,926,910,1,0,0,0,926,914,1,0,0,0,926,918,1,
        0,0,0,926,922,1,0,0,0,927,930,1,0,0,0,928,926,1,0,0,0,928,929,1,
        0,0,0,929,59,1,0,0,0,930,928,1,0,0,0,931,932,5,125,0,0,932,933,5,
        18,0,0,933,934,3,198,99,0,934,61,1,0,0,0,935,936,5,129,0,0,936,937,
        5,90,0,0,937,938,3,198,99,0,938,63,1,0,0,0,939,940,5,143,0,0,940,
        941,5,18,0,0,941,942,3,198,99,0,942,65,1,0,0,0,943,944,5,172,0,0,
        944,949,3,84,42,0,945,946,5,203,0,0,946,948,3,84,42,0,947,945,1,
        0,0,0,948,951,1,0,0,0,949,947,1,0,0,0,949,950,1,0,0,0,950,67,1,0,
        0,0,951,949,1,0,0,0,952,954,5,53,0,0,953,955,5,208,0,0,954,953,1,
        0,0,0,954,955,1,0,0,0,955,956,1,0,0,0,956,962,3,238,119,0,957,959,
        5,214,0,0,958,960,3,194,97,0,959,958,1,0,0,0,959,960,1,0,0,0,960,
        961,1,0,0,0,961,963,5,224,0,0,962,957,1,0,0,0,962,963,1,0,0,0,963,
        69,1,0,0,0,964,975,3,72,36,0,965,966,5,28,0,0,966,967,3,236,118,
        0,967,968,5,21,0,0,968,969,3,198,99,0,969,975,1,0,0,0,970,971,5,
        80,0,0,971,975,3,76,38,0,972,973,5,130,0,0,973,975,3,78,39,0,974,
        964,1,0,0,0,974,965,1,0,0,0,974,970,1,0,0,0,974,972,1,0,0,0,975,
        71,1,0,0,0,976,977,3,208,104,0,977,979,3,192,96,0,978,980,3,74,37,
        0,979,978,1,0,0,0,979,980,1,0,0,0,980,983,1,0,0,0,981,982,5,27,0,
        0,982,984,5,197,0,0,983,981,1,0,0,0,983,984,1,0,0,0,984,986,1,0,
        0,0,985,987,3,80,40,0,986,985,1,0,0,0,986,987,1,0,0,0,987,990,1,
        0,0,0,988,989,5,172,0,0,989,991,3,198,99,0,990,988,1,0,0,0,990,991,
        1,0,0,0,991,1009,1,0,0,0,992,994,3,208,104,0,993,995,3,192,96,0,
        994,993,1,0,0,0,994,995,1,0,0,0,995,996,1,0,0,0,996,999,3,74,37,
        0,997,998,5,27,0,0,998,1000,5,197,0,0,999,997,1,0,0,0,999,1000,1,
        0,0,0,1000,1002,1,0,0,0,1001,1003,3,80,40,0,1002,1001,1,0,0,0,1002,
        1003,1,0,0,0,1003,1006,1,0,0,0,1004,1005,5,172,0,0,1005,1007,3,198,
        99,0,1006,1004,1,0,0,0,1006,1007,1,0,0,0,1007,1009,1,0,0,0,1008,
        976,1,0,0,0,1008,992,1,0,0,0,1009,73,1,0,0,0,1010,1011,7,2,0,0,1011,
        1012,3,198,99,0,1012,75,1,0,0,0,1013,1014,3,208,104,0,1014,1015,
        3,198,99,0,1015,1016,5,173,0,0,1016,1017,3,192,96,0,1017,1018,5,
        71,0,0,1018,1019,5,195,0,0,1019,77,1,0,0,0,1020,1021,3,208,104,0,
        1021,1022,3,110,55,0,1022,79,1,0,0,0,1023,1024,5,24,0,0,1024,1025,
        5,214,0,0,1025,1030,3,82,41,0,1026,1027,5,203,0,0,1027,1029,3,82,
        41,0,1028,1026,1,0,0,0,1029,1032,1,0,0,0,1030,1028,1,0,0,0,1030,
        1031,1,0,0,0,1031,1033,1,0,0,0,1032,1030,1,0,0,0,1033,1034,5,224,
        0,0,1034,81,1,0,0,0,1035,1041,3,236,118,0,1036,1038,5,214,0,0,1037,
        1039,3,194,97,0,1038,1037,1,0,0,0,1038,1039,1,0,0,0,1039,1040,1,
        0,0,0,1040,1042,5,224,0,0,1041,1036,1,0,0,0,1041,1042,1,0,0,0,1042,
        83,1,0,0,0,1043,1051,3,198,99,0,1044,1052,5,40,0,0,1045,1046,5,166,
        0,0,1046,1047,5,47,0,0,1047,1052,5,197,0,0,1048,1049,5,166,0,0,1049,
        1050,5,182,0,0,1050,1052,5,197,0,0,1051,1044,1,0,0,0,1051,1045,1,
        0,0,0,1051,1048,1,0,0,0,1051,1052,1,0,0,0,1052,85,1,0,0,0,1053,1055,
        7,3,0,0,1054,1056,5,158,0,0,1055,1054,1,0,0,0,1055,1056,1,0,0,0,
        1056,1057,1,0,0,0,1057,1058,3,210,105,0,1058,87,1,0,0,0,1059,1060,
        7,4,0,0,1060,1063,5,33,0,0,1061,1062,5,77,0,0,1062,1064,5,55,0,0,
        1063,1061,1,0,0,0,1063,1064,1,0,0,0,1064,1065,1,0,0,0,1065,1067,
        3,220,110,0,1066,1068,3,48,24,0,1067,1066,1,0,0,0,1067,1068,1,0,
        0,0,1068,1091,1,0,0,0,1069,1076,7,4,0,0,1070,1077,5,46,0,0,1071,
        1073,5,160,0,0,1072,1071,1,0,0,0,1072,1073,1,0,0,0,1073,1074,1,0,
        0,0,1074,1077,5,158,0,0,1075,1077,5,181,0,0,1076,1070,1,0,0,0,1076,
        1072,1,0,0,0,1076,1075,1,0,0,0,1077,1080,1,0,0,0,1078,1079,5,77,
        0,0,1079,1081,5,55,0,0,1080,1078,1,0,0,0,1080,1081,1,0,0,0,1081,
        1082,1,0,0,0,1082,1084,3,214,107,0,1083,1085,3,48,24,0,1084,1083,
        1,0,0,0,1084,1085,1,0,0,0,1085,1088,1,0,0,0,1086,1087,5,113,0,0,
        1087,1089,5,39,0,0,1088,1086,1,0,0,0,1088,1089,1,0,0,0,1089,1091,
        1,0,0,0,1090,1059,1,0,0,0,1090,1069,1,0,0,0,1091,89,1,0,0,0,1092,
        1093,5,55,0,0,1093,1094,5,33,0,0,1094,1106,3,220,110,0,1095,1102,
        5,55,0,0,1096,1103,5,46,0,0,1097,1099,5,160,0,0,1098,1097,1,0,0,
        0,1098,1099,1,0,0,0,1099,1100,1,0,0,0,1100,1103,5,158,0,0,1101,1103,
        5,181,0,0,1102,1096,1,0,0,0,1102,1098,1,0,0,0,1102,1101,1,0,0,0,
        1102,1103,1,0,0,0,1103,1104,1,0,0,0,1104,1106,3,214,107,0,1105,1092,
        1,0,0,0,1105,1095,1,0,0,0,1106,91,1,0,0,0,1107,1108,5,56,0,0,1108,
        1109,5,13,0,0,1109,1114,3,2,1,0,1110,1111,5,56,0,0,1111,1112,5,156,
        0,0,1112,1114,3,2,1,0,1113,1107,1,0,0,0,1113,1110,1,0,0,0,1114,93,
        1,0,0,0,1115,1116,5,84,0,0,1116,1118,5,86,0,0,1117,1119,5,158,0,
        0,1118,1117,1,0,0,0,1118,1119,1,0,0,0,1119,1123,1,0,0,0,1120,1124,
        3,214,107,0,1121,1122,5,69,0,0,1122,1124,3,212,106,0,1123,1120,1,
        0,0,0,1123,1121,1,0,0,0,1124,1126,1,0,0,0,1125,1127,3,96,48,0,1126,
        1125,1,0,0,0,1126,1127,1,0,0,0,1127,1128,1,0,0,0,1128,1129,3,98,
        49,0,1129,95,1,0,0,0,1130,1131,5,214,0,0,1131,1136,3,208,104,0,1132,
        1133,5,203,0,0,1133,1135,3,208,104,0,1134,1132,1,0,0,0,1135,1138,
        1,0,0,0,1136,1134,1,0,0,0,1136,1137,1,0,0,0,1137,1139,1,0,0,0,1138,
        1136,1,0,0,0,1139,1140,5,224,0,0,1140,97,1,0,0,0,1141,1142,5,65,
        0,0,1142,1159,3,236,118,0,1143,1144,5,180,0,0,1144,1149,3,100,50,
        0,1145,1146,5,203,0,0,1146,1148,3,100,50,0,1147,1145,1,0,0,0,1148,
        1151,1,0,0,0,1149,1147,1,0,0,0,1149,1150,1,0,0,0,1150,1159,1,0,0,
        0,1151,1149,1,0,0,0,1152,1154,3,112,56,0,1153,1155,5,225,0,0,1154,
        1153,1,0,0,0,1154,1155,1,0,0,0,1155,1156,1,0,0,0,1156,1157,5,0,0,
        1,1157,1159,1,0,0,0,1158,1141,1,0,0,0,1158,1143,1,0,0,0,1158,1152,
        1,0,0,0,1159,99,1,0,0,0,1160,1161,5,214,0,0,1161,1166,3,102,51,0,
        1162,1163,5,203,0,0,1163,1165,3,102,51,0,1164,1162,1,0,0,0,1165,
        1168,1,0,0,0,1166,1164,1,0,0,0,1166,1167,1,0,0,0,1167,1169,1,0,0,
        0,1168,1166,1,0,0,0,1169,1170,5,224,0,0,1170,1174,1,0,0,0,1171,1172,
        5,214,0,0,1172,1174,5,224,0,0,1173,1160,1,0,0,0,1173,1171,1,0,0,
        0,1174,101,1,0,0,0,1175,1176,3,226,113,0,1176,103,1,0,0,0,1177,1178,
        5,91,0,0,1178,1180,5,111,0,0,1179,1181,3,48,24,0,1180,1179,1,0,0,
        0,1180,1181,1,0,0,0,1181,1182,1,0,0,0,1182,1184,3,130,65,0,1183,
        1185,7,5,0,0,1184,1183,1,0,0,0,1184,1185,1,0,0,0,1185,105,1,0,0,
        0,1186,1187,5,119,0,0,1187,1188,5,158,0,0,1188,1190,3,214,107,0,
        1189,1191,3,48,24,0,1190,1189,1,0,0,0,1190,1191,1,0,0,0,1191,1193,
        1,0,0,0,1192,1194,3,20,10,0,1193,1192,1,0,0,0,1193,1194,1,0,0,0,
        1194,1196,1,0,0,0,1195,1197,5,60,0,0,1196,1195,1,0,0,0,1196,1197,
        1,0,0,0,1197,1199,1,0,0,0,1198,1200,5,37,0,0,1199,1198,1,0,0,0,1199,
        1200,1,0,0,0,1200,107,1,0,0,0,1201,1202,5,135,0,0,1202,1203,5,158,
        0,0,1203,1204,3,214,107,0,1204,1205,5,166,0,0,1205,1213,3,214,107,
        0,1206,1207,5,203,0,0,1207,1208,3,214,107,0,1208,1209,5,166,0,0,
        1209,1210,3,214,107,0,1210,1212,1,0,0,0,1211,1206,1,0,0,0,1212,1215,
        1,0,0,0,1213,1211,1,0,0,0,1213,1214,1,0,0,0,1214,1217,1,0,0,0,1215,
        1213,1,0,0,0,1216,1218,3,48,24,0,1217,1216,1,0,0,0,1217,1218,1,0,
        0,0,1218,109,1,0,0,0,1219,1221,5,214,0,0,1220,1222,3,118,59,0,1221,
        1220,1,0,0,0,1221,1222,1,0,0,0,1222,1223,1,0,0,0,1223,1224,5,145,
        0,0,1224,1226,3,194,97,0,1225,1227,3,132,66,0,1226,1225,1,0,0,0,
        1226,1227,1,0,0,0,1227,1229,1,0,0,0,1228,1230,3,138,69,0,1229,1228,
        1,0,0,0,1229,1230,1,0,0,0,1230,1231,1,0,0,0,1231,1232,5,224,0,0,
        1232,111,1,0,0,0,1233,1239,3,114,57,0,1234,1235,5,175,0,0,1235,1236,
        5,4,0,0,1236,1238,3,114,57,0,1237,1234,1,0,0,0,1238,1241,1,0,0,0,
        1239,1237,1,0,0,0,1239,1240,1,0,0,0,1240,113,1,0,0,0,1241,1239,1,
        0,0,0,1242,1248,3,116,58,0,1243,1244,5,214,0,0,1244,1245,3,112,56,
        0,1245,1246,5,224,0,0,1246,1248,1,0,0,0,1247,1242,1,0,0,0,1247,1243,
        1,0,0,0,1248,115,1,0,0,0,1249,1251,3,118,59,0,1250,1249,1,0,0,0,
        1250,1251,1,0,0,0,1251,1252,1,0,0,0,1252,1254,5,145,0,0,1253,1255,
        5,48,0,0,1254,1253,1,0,0,0,1254,1255,1,0,0,0,1255,1257,1,0,0,0,1256,
        1258,3,120,60,0,1257,1256,1,0,0,0,1257,1258,1,0,0,0,1258,1259,1,
        0,0,0,1259,1261,3,194,97,0,1260,1262,3,122,61,0,1261,1260,1,0,0,
        0,1261,1262,1,0,0,0,1262,1264,1,0,0,0,1263,1265,3,124,62,0,1264,
        1263,1,0,0,0,1264,1265,1,0,0,0,1265,1267,1,0,0,0,1266,1268,3,126,
        63,0,1267,1266,1,0,0,0,1267,1268,1,0,0,0,1268,1270,1,0,0,0,1269,
        1271,3,128,64,0,1270,1269,1,0,0,0,1270,1271,1,0,0,0,1271,1273,1,
        0,0,0,1272,1274,3,130,65,0,1273,1272,1,0,0,0,1273,1274,1,0,0,0,1274,
        1276,1,0,0,0,1275,1277,3,132,66,0,1276,1275,1,0,0,0,1276,1277,1,
        0,0,0,1277,1280,1,0,0,0,1278,1279,5,188,0,0,1279,1281,7,6,0,0,1280,
        1278,1,0,0,0,1280,1281,1,0,0,0,1281,1284,1,0,0,0,1282,1283,5,188,
        0,0,1283,1285,5,168,0,0,1284,1282,1,0,0,0,1284,1285,1,0,0,0,1285,
        1287,1,0,0,0,1286,1288,3,134,67,0,1287,1286,1,0,0,0,1287,1288,1,
        0,0,0,1288,1290,1,0,0,0,1289,1291,3,136,68,0,1290,1289,1,0,0,0,1290,
        1291,1,0,0,0,1291,1293,1,0,0,0,1292,1294,3,140,70,0,1293,1292,1,
        0,0,0,1293,1294,1,0,0,0,1294,1296,1,0,0,0,1295,1297,3,142,71,0,1296,
        1295,1,0,0,0,1296,1297,1,0,0,0,1297,1299,1,0,0,0,1298,1300,3,144,
        72,0,1299,1298,1,0,0,0,1299,1300,1,0,0,0,1300,117,1,0,0,0,1301,1302,
        5,188,0,0,1302,1303,3,194,97,0,1303,119,1,0,0,0,1304,1305,5,167,
        0,0,1305,1308,5,195,0,0,1306,1307,5,188,0,0,1307,1309,5,163,0,0,
        1308,1306,1,0,0,0,1308,1309,1,0,0,0,1309,121,1,0,0,0,1310,1311,5,
        67,0,0,1311,1312,3,146,73,0,1312,123,1,0,0,0,1313,1315,7,7,0,0,1314,
        1313,1,0,0,0,1314,1315,1,0,0,0,1315,1316,1,0,0,0,1316,1317,5,9,0,
        0,1317,1318,5,89,0,0,1318,1319,3,194,97,0,1319,125,1,0,0,0,1320,
        1321,5,187,0,0,1321,1322,3,236,118,0,1322,1323,5,10,0,0,1323,1324,
        5,214,0,0,1324,1325,3,168,84,0,1325,1326,5,224,0,0,1326,127,1,0,
        0,0,1327,1328,5,128,0,0,1328,1329,3,198,99,0,1329,129,1,0,0,0,1330,
        1331,5,186,0,0,1331,1332,3,198,99,0,1332,131,1,0,0,0,1333,1334,5,
        72,0,0,1334,1341,5,18,0,0,1335,1336,7,6,0,0,1336,1337,5,214,0,0,
        1337,1338,3,194,97,0,1338,1339,5,224,0,0,1339,1342,1,0,0,0,1340,
        1342,3,194,97,0,1341,1335,1,0,0,0,1341,1340,1,0,0,0,1342,133,1,0,
        0,0,1343,1344,5,73,0,0,1344,1345,3,198,99,0,1345,135,1,0,0,0,1346,
        1347,5,121,0,0,1347,1348,5,18,0,0,1348,1349,3,158,79,0,1349,137,
        1,0,0,0,1350,1351,5,121,0,0,1351,1352,5,18,0,0,1352,1353,3,194,97,
        0,1353,139,1,0,0,0,1354,1355,5,98,0,0,1355,1356,3,156,78,0,1356,
        1357,5,18,0,0,1357,1358,3,194,97,0,1358,141,1,0,0,0,1359,1360,5,
        98,0,0,1360,1363,3,156,78,0,1361,1362,5,188,0,0,1362,1364,5,163,
        0,0,1363,1361,1,0,0,0,1363,1364,1,0,0,0,1364,143,1,0,0,0,1365,1366,
        5,149,0,0,1366,1367,3,164,82,0,1367,145,1,0,0,0,1368,1369,6,73,-1,
        0,1369,1371,3,210,105,0,1370,1372,5,60,0,0,1371,1370,1,0,0,0,1371,
        1372,1,0,0,0,1372,1374,1,0,0,0,1373,1375,3,154,77,0,1374,1373,1,
        0,0,0,1374,1375,1,0,0,0,1375,1381,1,0,0,0,1376,1377,5,214,0,0,1377,
        1378,3,146,73,0,1378,1379,5,224,0,0,1379,1381,1,0,0,0,1380,1368,
        1,0,0,0,1380,1376,1,0,0,0,1381,1399,1,0,0,0,1382,1383,10,3,0,0,1383,
        1384,3,150,75,0,1384,1385,3,146,73,4,1385,1398,1,0,0,0,1386,1388,
        10,4,0,0,1387,1389,7,8,0,0,1388,1387,1,0,0,0,1388,1389,1,0,0,0,1389,
        1391,1,0,0,0,1390,1392,3,148,74,0,1391,1390,1,0,0,0,1391,1392,1,
        0,0,0,1392,1393,1,0,0,0,1393,1394,5,89,0,0,1394,1395,3,146,73,0,
        1395,1396,3,152,76,0,1396,1398,1,0,0,0,1397,1382,1,0,0,0,1397,1386,
        1,0,0,0,1398,1401,1,0,0,0,1399,1397,1,0,0,0,1399,1400,1,0,0,0,1400,
        147,1,0,0,0,1401,1399,1,0,0,0,1402,1404,7,9,0,0,1403,1402,1,0,0,
        0,1403,1404,1,0,0,0,1404,1405,1,0,0,0,1405,1412,5,83,0,0,1406,1408,
        5,83,0,0,1407,1409,7,9,0,0,1408,1407,1,0,0,0,1408,1409,1,0,0,0,1409,
        1412,1,0,0,0,1410,1412,7,9,0,0,1411,1403,1,0,0,0,1411,1406,1,0,0,
        0,1411,1410,1,0,0,0,1412,1446,1,0,0,0,1413,1415,7,10,0,0,1414,1413,
        1,0,0,0,1414,1415,1,0,0,0,1415,1416,1,0,0,0,1416,1418,7,11,0,0,1417,
        1419,5,122,0,0,1418,1417,1,0,0,0,1418,1419,1,0,0,0,1419,1428,1,0,
        0,0,1420,1422,7,11,0,0,1421,1423,5,122,0,0,1422,1421,1,0,0,0,1422,
        1423,1,0,0,0,1423,1425,1,0,0,0,1424,1426,7,10,0,0,1425,1424,1,0,
        0,0,1425,1426,1,0,0,0,1426,1428,1,0,0,0,1427,1414,1,0,0,0,1427,1420,
        1,0,0,0,1428,1446,1,0,0,0,1429,1431,7,12,0,0,1430,1429,1,0,0,0,1430,
        1431,1,0,0,0,1431,1432,1,0,0,0,1432,1434,5,68,0,0,1433,1435,5,122,
        0,0,1434,1433,1,0,0,0,1434,1435,1,0,0,0,1435,1444,1,0,0,0,1436,1438,
        5,68,0,0,1437,1439,5,122,0,0,1438,1437,1,0,0,0,1438,1439,1,0,0,0,
        1439,1441,1,0,0,0,1440,1442,7,12,0,0,1441,1440,1,0,0,0,1441,1442,
        1,0,0,0,1442,1444,1,0,0,0,1443,1430,1,0,0,0,1443,1436,1,0,0,0,1444,
        1446,1,0,0,0,1445,1411,1,0,0,0,1445,1427,1,0,0,0,1445,1443,1,0,0,
        0,1446,149,1,0,0,0,1447,1449,7,8,0,0,1448,1447,1,0,0,0,1448,1449,
        1,0,0,0,1449,1450,1,0,0,0,1450,1451,5,30,0,0,1451,1454,5,89,0,0,
        1452,1454,5,203,0,0,1453,1448,1,0,0,0,1453,1452,1,0,0,0,1454,151,
        1,0,0,0,1455,1456,5,118,0,0,1456,1465,3,194,97,0,1457,1458,5,178,
        0,0,1458,1459,5,214,0,0,1459,1460,3,194,97,0,1460,1461,5,224,0,0,
        1461,1465,1,0,0,0,1462,1463,5,178,0,0,1463,1465,3,194,97,0,1464,
        1455,1,0,0,0,1464,1457,1,0,0,0,1464,1462,1,0,0,0,1465,153,1,0,0,
        0,1466,1467,5,143,0,0,1467,1470,3,162,81,0,1468,1469,5,117,0,0,1469,
        1471,3,162,81,0,1470,1468,1,0,0,0,1470,1471,1,0,0,0,1471,155,1,0,
        0,0,1472,1475,3,198,99,0,1473,1474,7,13,0,0,1474,1476,3,198,99,0,
        1475,1473,1,0,0,0,1475,1476,1,0,0,0,1476,157,1,0,0,0,1477,1482,3,
        160,80,0,1478,1479,5,203,0,0,1479,1481,3,160,80,0,1480,1478,1,0,
        0,0,1481,1484,1,0,0,0,1482,1480,1,0,0,0,1482,1483,1,0,0,0,1483,159,
        1,0,0,0,1484,1482,1,0,0,0,1485,1487,3,198,99,0,1486,1488,7,14,0,
        0,1487,1486,1,0,0,0,1487,1488,1,0,0,0,1488,1491,1,0,0,0,1489,1490,
        5,116,0,0,1490,1492,7,15,0,0,1491,1489,1,0,0,0,1491,1492,1,0,0,0,
        1492,1495,1,0,0,0,1493,1494,5,25,0,0,1494,1496,5,197,0,0,1495,1493,
        1,0,0,0,1495,1496,1,0,0,0,1496,161,1,0,0,0,1497,1500,3,224,112,0,
        1498,1499,5,226,0,0,1499,1501,3,224,112,0,1500,1498,1,0,0,0,1500,
        1501,1,0,0,0,1501,163,1,0,0,0,1502,1507,3,166,83,0,1503,1504,5,203,
        0,0,1504,1506,3,166,83,0,1505,1503,1,0,0,0,1506,1509,1,0,0,0,1507,
        1505,1,0,0,0,1507,1508,1,0,0,0,1508,165,1,0,0,0,1509,1507,1,0,0,
        0,1510,1511,3,236,118,0,1511,1512,5,208,0,0,1512,1513,3,226,113,
        0,1513,167,1,0,0,0,1514,1516,3,170,85,0,1515,1514,1,0,0,0,1515,1516,
        1,0,0,0,1516,1518,1,0,0,0,1517,1519,3,172,86,0,1518,1517,1,0,0,0,
        1518,1519,1,0,0,0,1519,1521,1,0,0,0,1520,1522,3,174,87,0,1521,1520,
        1,0,0,0,1521,1522,1,0,0,0,1522,169,1,0,0,0,1523,1524,5,125,0,0,1524,
        1525,5,18,0,0,1525,1526,3,194,97,0,1526,171,1,0,0,0,1527,1528,5,
        121,0,0,1528,1529,5,18,0,0,1529,1530,3,158,79,0,1530,173,1,0,0,0,
        1531,1532,7,16,0,0,1532,1533,3,176,88,0,1533,175,1,0,0,0,1534,1541,
        3,178,89,0,1535,1536,5,16,0,0,1536,1537,3,178,89,0,1537,1538,5,6,
        0,0,1538,1539,3,178,89,0,1539,1541,1,0,0,0,1540,1534,1,0,0,0,1540,
        1535,1,0,0,0,1541,177,1,0,0,0,1542,1543,5,32,0,0,1543,1555,5,141,
        0,0,1544,1545,5,174,0,0,1545,1555,5,127,0,0,1546,1547,5,174,0,0,
        1547,1555,5,63,0,0,1548,1549,3,224,112,0,1549,1550,5,127,0,0,1550,
        1555,1,0,0,0,1551,1552,3,224,112,0,1552,1553,5,63,0,0,1553,1555,
        1,0,0,0,1554,1542,1,0,0,0,1554,1544,1,0,0,0,1554,1546,1,0,0,0,1554,
        1548,1,0,0,0,1554,1551,1,0,0,0,1555,179,1,0,0,0,1556,1557,5,148,
        0,0,1557,1558,3,164,82,0,1558,181,1,0,0,0,1559,1560,5,150,0,0,1560,
        1561,5,29,0,0,1561,1562,5,33,0,0,1562,1602,3,220,110,0,1563,1564,
        5,150,0,0,1564,1565,5,29,0,0,1565,1566,5,46,0,0,1566,1602,3,214,
        107,0,1567,1568,5,150,0,0,1568,1570,5,29,0,0,1569,1571,5,160,0,0,
        1570,1569,1,0,0,0,1570,1571,1,0,0,0,1571,1573,1,0,0,0,1572,1574,
        5,158,0,0,1573,1572,1,0,0,0,1573,1574,1,0,0,0,1574,1575,1,0,0,0,
        1575,1602,3,214,107,0,1576,1577,5,150,0,0,1577,1602,5,34,0,0,1578,
        1579,5,150,0,0,1579,1582,5,45,0,0,1580,1581,5,67,0,0,1581,1583,3,
        220,110,0,1582,1580,1,0,0,0,1582,1583,1,0,0,0,1583,1602,1,0,0,0,
        1584,1586,5,150,0,0,1585,1587,5,160,0,0,1586,1585,1,0,0,0,1586,1587,
        1,0,0,0,1587,1588,1,0,0,0,1588,1591,5,159,0,0,1589,1590,7,17,0,0,
        1590,1592,3,220,110,0,1591,1589,1,0,0,0,1591,1592,1,0,0,0,1592,1596,
        1,0,0,0,1593,1594,5,97,0,0,1594,1597,5,197,0,0,1595,1597,3,130,65,
        0,1596,1593,1,0,0,0,1596,1595,1,0,0,0,1596,1597,1,0,0,0,1597,1599,
        1,0,0,0,1598,1600,3,142,71,0,1599,1598,1,0,0,0,1599,1600,1,0,0,0,
        1600,1602,1,0,0,0,1601,1559,1,0,0,0,1601,1563,1,0,0,0,1601,1567,
        1,0,0,0,1601,1576,1,0,0,0,1601,1578,1,0,0,0,1601,1584,1,0,0,0,1602,
        183,1,0,0,0,1603,1604,5,157,0,0,1604,1605,5,62,0,0,1605,1606,5,49,
        0,0,1606,1638,3,214,107,0,1607,1608,5,157,0,0,1608,1609,5,62,0,0,
        1609,1638,5,101,0,0,1610,1611,5,157,0,0,1611,1612,5,133,0,0,1612,
        1638,5,45,0,0,1613,1614,5,157,0,0,1614,1615,5,133,0,0,1615,1616,
        5,46,0,0,1616,1638,3,214,107,0,1617,1618,5,157,0,0,1618,1626,7,18,
        0,0,1619,1620,5,49,0,0,1620,1627,5,147,0,0,1621,1627,5,59,0,0,1622,
        1624,5,172,0,0,1623,1622,1,0,0,0,1623,1624,1,0,0,0,1624,1625,1,0,
        0,0,1625,1627,5,105,0,0,1626,1619,1,0,0,0,1626,1621,1,0,0,0,1626,
        1623,1,0,0,0,1627,1628,1,0,0,0,1628,1638,3,214,107,0,1629,1630,5,
        157,0,0,1630,1631,7,18,0,0,1631,1632,5,138,0,0,1632,1638,5,147,0,
        0,1633,1634,5,157,0,0,1634,1635,5,155,0,0,1635,1636,5,137,0,0,1636,
        1638,3,214,107,0,1637,1603,1,0,0,0,1637,1607,1,0,0,0,1637,1610,1,
        0,0,0,1637,1613,1,0,0,0,1637,1617,1,0,0,0,1637,1629,1,0,0,0,1637,
        1633,1,0,0,0,1638,185,1,0,0,0,1639,1641,5,171,0,0,1640,1642,5,160,
        0,0,1641,1640,1,0,0,0,1641,1642,1,0,0,0,1642,1644,1,0,0,0,1643,1645,
        5,158,0,0,1644,1643,1,0,0,0,1644,1645,1,0,0,0,1645,1648,1,0,0,0,
        1646,1647,5,77,0,0,1647,1649,5,55,0,0,1648,1646,1,0,0,0,1648,1649,
        1,0,0,0,1649,1650,1,0,0,0,1650,1652,3,214,107,0,1651,1653,3,48,24,
        0,1652,1651,1,0,0,0,1652,1653,1,0,0,0,1653,187,1,0,0,0,1654,1655,
        5,177,0,0,1655,1656,3,220,110,0,1656,189,1,0,0,0,1657,1658,5,183,
        0,0,1658,1660,3,214,107,0,1659,1661,5,54,0,0,1660,1659,1,0,0,0,1660,
        1661,1,0,0,0,1661,1664,1,0,0,0,1662,1663,5,98,0,0,1663,1665,5,195,
        0,0,1664,1662,1,0,0,0,1664,1665,1,0,0,0,1665,191,1,0,0,0,1666,1714,
        3,236,118,0,1667,1668,3,236,118,0,1668,1669,5,214,0,0,1669,1670,
        3,236,118,0,1670,1677,3,192,96,0,1671,1672,5,203,0,0,1672,1673,3,
        236,118,0,1673,1674,3,192,96,0,1674,1676,1,0,0,0,1675,1671,1,0,0,
        0,1676,1679,1,0,0,0,1677,1675,1,0,0,0,1677,1678,1,0,0,0,1678,1680,
        1,0,0,0,1679,1677,1,0,0,0,1680,1681,5,224,0,0,1681,1714,1,0,0,0,
        1682,1683,3,236,118,0,1683,1684,5,214,0,0,1684,1689,3,240,120,0,
        1685,1686,5,203,0,0,1686,1688,3,240,120,0,1687,1685,1,0,0,0,1688,
        1691,1,0,0,0,1689,1687,1,0,0,0,1689,1690,1,0,0,0,1690,1692,1,0,0,
        0,1691,1689,1,0,0,0,1692,1693,5,224,0,0,1693,1714,1,0,0,0,1694,1695,
        3,236,118,0,1695,1696,5,214,0,0,1696,1701,3,192,96,0,1697,1698,5,
        203,0,0,1698,1700,3,192,96,0,1699,1697,1,0,0,0,1700,1703,1,0,0,0,
        1701,1699,1,0,0,0,1701,1702,1,0,0,0,1702,1704,1,0,0,0,1703,1701,
        1,0,0,0,1704,1705,5,224,0,0,1705,1714,1,0,0,0,1706,1707,3,236,118,
        0,1707,1709,5,214,0,0,1708,1710,3,194,97,0,1709,1708,1,0,0,0,1709,
        1710,1,0,0,0,1710,1711,1,0,0,0,1711,1712,5,224,0,0,1712,1714,1,0,
        0,0,1713,1666,1,0,0,0,1713,1667,1,0,0,0,1713,1682,1,0,0,0,1713,1694,
        1,0,0,0,1713,1706,1,0,0,0,1714,193,1,0,0,0,1715,1720,3,196,98,0,
        1716,1717,5,203,0,0,1717,1719,3,196,98,0,1718,1716,1,0,0,0,1719,
        1722,1,0,0,0,1720,1718,1,0,0,0,1720,1721,1,0,0,0,1721,195,1,0,0,
        0,1722,1720,1,0,0,0,1723,1724,3,214,107,0,1724,1725,5,206,0,0,1725,
        1727,1,0,0,0,1726,1723,1,0,0,0,1726,1727,1,0,0,0,1727,1728,1,0,0,
        0,1728,1735,5,199,0,0,1729,1730,5,214,0,0,1730,1731,3,112,56,0,1731,
        1732,5,224,0,0,1732,1735,1,0,0,0,1733,1735,3,198,99,0,1734,1726,
        1,0,0,0,1734,1729,1,0,0,0,1734,1733,1,0,0,0,1735,197,1,0,0,0,1736,
        1737,6,99,-1,0,1737,1739,5,19,0,0,1738,1740,3,198,99,0,1739,1738,
        1,0,0,0,1739,1740,1,0,0,0,1740,1746,1,0,0,0,1741,1742,5,185,0,0,
        1742,1743,3,198,99,0,1743,1744,5,162,0,0,1744,1745,3,198,99,0,1745,
        1747,1,0,0,0,1746,1741,1,0,0,0,1747,1748,1,0,0,0,1748,1746,1,0,0,
        0,1748,1749,1,0,0,0,1749,1752,1,0,0,0,1750,1751,5,51,0,0,1751,1753,
        3,198,99,0,1752,1750,1,0,0,0,1752,1753,1,0,0,0,1753,1754,1,0,0,0,
        1754,1755,5,52,0,0,1755,1866,1,0,0,0,1756,1757,5,20,0,0,1757,1758,
        5,214,0,0,1758,1759,3,198,99,0,1759,1760,5,10,0,0,1760,1761,3,192,
        96,0,1761,1762,5,224,0,0,1762,1866,1,0,0,0,1763,1764,5,35,0,0,1764,
        1866,5,197,0,0,1765,1766,5,58,0,0,1766,1767,5,214,0,0,1767,1768,
        3,228,114,0,1768,1769,5,67,0,0,1769,1770,3,198,99,0,1770,1771,5,
        224,0,0,1771,1866,1,0,0,0,1772,1773,5,85,0,0,1773,1774,3,198,99,
        0,1774,1775,3,228,114,0,1775,1866,1,0,0,0,1776,1777,5,154,0,0,1777,
        1778,5,214,0,0,1778,1779,3,198,99,0,1779,1780,5,67,0,0,1780,1783,
        3,198,99,0,1781,1782,5,64,0,0,1782,1784,3,198,99,0,1783,1781,1,0,
        0,0,1783,1784,1,0,0,0,1784,1785,1,0,0,0,1785,1786,5,224,0,0,1786,
        1866,1,0,0,0,1787,1788,5,165,0,0,1788,1866,5,197,0,0,1789,1790,5,
        170,0,0,1790,1791,5,214,0,0,1791,1792,7,19,0,0,1792,1793,5,197,0,
        0,1793,1794,5,67,0,0,1794,1795,3,198,99,0,1795,1796,5,224,0,0,1796,
        1866,1,0,0,0,1797,1798,3,236,118,0,1798,1800,5,214,0,0,1799,1801,
        3,194,97,0,1800,1799,1,0,0,0,1800,1801,1,0,0,0,1801,1802,1,0,0,0,
        1802,1803,5,224,0,0,1803,1804,1,0,0,0,1804,1805,5,124,0,0,1805,1806,
        5,214,0,0,1806,1807,3,168,84,0,1807,1808,5,224,0,0,1808,1866,1,0,
        0,0,1809,1810,3,236,118,0,1810,1812,5,214,0,0,1811,1813,3,194,97,
        0,1812,1811,1,0,0,0,1812,1813,1,0,0,0,1813,1814,1,0,0,0,1814,1815,
        5,224,0,0,1815,1816,1,0,0,0,1816,1817,5,124,0,0,1817,1818,3,236,
        118,0,1818,1866,1,0,0,0,1819,1825,3,236,118,0,1820,1822,5,214,0,
        0,1821,1823,3,194,97,0,1822,1821,1,0,0,0,1822,1823,1,0,0,0,1823,
        1824,1,0,0,0,1824,1826,5,224,0,0,1825,1820,1,0,0,0,1825,1826,1,0,
        0,0,1826,1827,1,0,0,0,1827,1829,5,214,0,0,1828,1830,5,48,0,0,1829,
        1828,1,0,0,0,1829,1830,1,0,0,0,1830,1832,1,0,0,0,1831,1833,3,200,
        100,0,1832,1831,1,0,0,0,1832,1833,1,0,0,0,1833,1834,1,0,0,0,1834,
        1835,5,224,0,0,1835,1866,1,0,0,0,1836,1866,3,226,113,0,1837,1838,
        5,205,0,0,1838,1866,3,198,99,17,1839,1840,5,114,0,0,1840,1866,3,
        198,99,12,1841,1842,3,214,107,0,1842,1843,5,206,0,0,1843,1845,1,
        0,0,0,1844,1841,1,0,0,0,1844,1845,1,0,0,0,1845,1846,1,0,0,0,1846,
        1866,5,199,0,0,1847,1848,5,214,0,0,1848,1849,3,112,56,0,1849,1850,
        5,224,0,0,1850,1866,1,0,0,0,1851,1852,5,214,0,0,1852,1853,3,198,
        99,0,1853,1854,5,224,0,0,1854,1866,1,0,0,0,1855,1856,5,214,0,0,1856,
        1857,3,194,97,0,1857,1858,5,224,0,0,1858,1866,1,0,0,0,1859,1861,
        5,212,0,0,1860,1862,3,194,97,0,1861,1860,1,0,0,0,1861,1862,1,0,0,
        0,1862,1863,1,0,0,0,1863,1866,5,223,0,0,1864,1866,3,206,103,0,1865,
        1736,1,0,0,0,1865,1756,1,0,0,0,1865,1763,1,0,0,0,1865,1765,1,0,0,
        0,1865,1772,1,0,0,0,1865,1776,1,0,0,0,1865,1787,1,0,0,0,1865,1789,
        1,0,0,0,1865,1797,1,0,0,0,1865,1809,1,0,0,0,1865,1819,1,0,0,0,1865,
        1836,1,0,0,0,1865,1837,1,0,0,0,1865,1839,1,0,0,0,1865,1844,1,0,0,
        0,1865,1847,1,0,0,0,1865,1851,1,0,0,0,1865,1855,1,0,0,0,1865,1859,
        1,0,0,0,1865,1864,1,0,0,0,1866,1938,1,0,0,0,1867,1868,10,16,0,0,
        1868,1869,7,20,0,0,1869,1937,3,198,99,17,1870,1871,10,15,0,0,1871,
        1872,7,21,0,0,1872,1937,3,198,99,16,1873,1892,10,14,0,0,1874,1893,
        5,207,0,0,1875,1893,5,208,0,0,1876,1893,5,216,0,0,1877,1893,5,213,
        0,0,1878,1893,5,209,0,0,1879,1893,5,215,0,0,1880,1893,5,210,0,0,
        1881,1883,5,70,0,0,1882,1881,1,0,0,0,1882,1883,1,0,0,0,1883,1885,
        1,0,0,0,1884,1886,5,114,0,0,1885,1884,1,0,0,0,1885,1886,1,0,0,0,
        1886,1887,1,0,0,0,1887,1893,5,79,0,0,1888,1890,5,114,0,0,1889,1888,
        1,0,0,0,1889,1890,1,0,0,0,1890,1891,1,0,0,0,1891,1893,7,22,0,0,1892,
        1874,1,0,0,0,1892,1875,1,0,0,0,1892,1876,1,0,0,0,1892,1877,1,0,0,
        0,1892,1878,1,0,0,0,1892,1879,1,0,0,0,1892,1880,1,0,0,0,1892,1882,
        1,0,0,0,1892,1889,1,0,0,0,1893,1894,1,0,0,0,1894,1937,3,198,99,15,
        1895,1896,10,11,0,0,1896,1897,5,6,0,0,1897,1937,3,198,99,12,1898,
        1899,10,10,0,0,1899,1900,5,120,0,0,1900,1937,3,198,99,11,1901,1903,
        10,9,0,0,1902,1904,5,114,0,0,1903,1902,1,0,0,0,1903,1904,1,0,0,0,
        1904,1905,1,0,0,0,1905,1906,5,16,0,0,1906,1907,3,198,99,0,1907,1908,
        5,6,0,0,1908,1909,3,198,99,10,1909,1937,1,0,0,0,1910,1911,10,8,0,
        0,1911,1912,5,219,0,0,1912,1913,3,198,99,0,1913,1914,5,202,0,0,1914,
        1915,3,198,99,8,1915,1937,1,0,0,0,1916,1917,10,19,0,0,1917,1918,
        5,212,0,0,1918,1919,3,198,99,0,1919,1920,5,223,0,0,1920,1937,1,0,
        0,0,1921,1922,10,18,0,0,1922,1923,5,206,0,0,1923,1937,5,195,0,0,
        1924,1925,10,13,0,0,1925,1927,5,87,0,0,1926,1928,5,114,0,0,1927,
        1926,1,0,0,0,1927,1928,1,0,0,0,1928,1929,1,0,0,0,1929,1937,5,115,
        0,0,1930,1934,10,7,0,0,1931,1935,3,234,117,0,1932,1933,5,10,0,0,
        1933,1935,3,236,118,0,1934,1931,1,0,0,0,1934,1932,1,0,0,0,1935,1937,
        1,0,0,0,1936,1867,1,0,0,0,1936,1870,1,0,0,0,1936,1873,1,0,0,0,1936,
        1895,1,0,0,0,1936,1898,1,0,0,0,1936,1901,1,0,0,0,1936,1910,1,0,0,
        0,1936,1916,1,0,0,0,1936,1921,1,0,0,0,1936,1924,1,0,0,0,1936,1930,
        1,0,0,0,1937,1940,1,0,0,0,1938,1936,1,0,0,0,1938,1939,1,0,0,0,1939,
        199,1,0,0,0,1940,1938,1,0,0,0,1941,1946,3,202,101,0,1942,1943,5,
        203,0,0,1943,1945,3,202,101,0,1944,1942,1,0,0,0,1945,1948,1,0,0,
        0,1946,1944,1,0,0,0,1946,1947,1,0,0,0,1947,201,1,0,0,0,1948,1946,
        1,0,0,0,1949,1952,3,204,102,0,1950,1952,3,198,99,0,1951,1949,1,0,
        0,0,1951,1950,1,0,0,0,1952,203,1,0,0,0,1953,1954,5,214,0,0,1954,
        1959,3,236,118,0,1955,1956,5,203,0,0,1956,1958,3,236,118,0,1957,
        1955,1,0,0,0,1958,1961,1,0,0,0,1959,1957,1,0,0,0,1959,1960,1,0,0,
        0,1960,1962,1,0,0,0,1961,1959,1,0,0,0,1962,1963,5,224,0,0,1963,1973,
        1,0,0,0,1964,1969,3,236,118,0,1965,1966,5,203,0,0,1966,1968,3,236,
        118,0,1967,1965,1,0,0,0,1968,1971,1,0,0,0,1969,1967,1,0,0,0,1969,
        1970,1,0,0,0,1970,1973,1,0,0,0,1971,1969,1,0,0,0,1972,1953,1,0,0,
        0,1972,1964,1,0,0,0,1973,1974,1,0,0,0,1974,1975,5,198,0,0,1975,1976,
        3,198,99,0,1976,205,1,0,0,0,1977,1978,3,214,107,0,1978,1979,5,206,
        0,0,1979,1981,1,0,0,0,1980,1977,1,0,0,0,1980,1981,1,0,0,0,1981,1982,
        1,0,0,0,1982,1983,3,208,104,0,1983,207,1,0,0,0,1984,1987,3,236,118,
        0,1985,1986,5,206,0,0,1986,1988,3,236,118,0,1987,1985,1,0,0,0,1987,
        1988,1,0,0,0,1988,209,1,0,0,0,1989,1990,6,105,-1,0,1990,1997,3,214,
        107,0,1991,1997,3,212,106,0,1992,1993,5,214,0,0,1993,1994,3,112,
        56,0,1994,1995,5,224,0,0,1995,1997,1,0,0,0,1996,1989,1,0,0,0,1996,
        1991,1,0,0,0,1996,1992,1,0,0,0,1997,2006,1,0,0,0,1998,2002,10,1,
        0,0,1999,2003,3,234,117,0,2000,2001,5,10,0,0,2001,2003,3,236,118,
        0,2002,1999,1,0,0,0,2002,2000,1,0,0,0,2003,2005,1,0,0,0,2004,1998,
        1,0,0,0,2005,2008,1,0,0,0,2006,2004,1,0,0,0,2006,2007,1,0,0,0,2007,
        211,1,0,0,0,2008,2006,1,0,0,0,2009,2010,3,236,118,0,2010,2012,5,
        214,0,0,2011,2013,3,216,108,0,2012,2011,1,0,0,0,2012,2013,1,0,0,
        0,2013,2014,1,0,0,0,2014,2015,5,224,0,0,2015,213,1,0,0,0,2016,2017,
        3,220,110,0,2017,2018,5,206,0,0,2018,2020,1,0,0,0,2019,2016,1,0,
        0,0,2019,2020,1,0,0,0,2020,2021,1,0,0,0,2021,2022,3,236,118,0,2022,
        215,1,0,0,0,2023,2028,3,218,109,0,2024,2025,5,203,0,0,2025,2027,
        3,218,109,0,2026,2024,1,0,0,0,2027,2030,1,0,0,0,2028,2026,1,0,0,
        0,2028,2029,1,0,0,0,2029,217,1,0,0,0,2030,2028,1,0,0,0,2031,2035,
        3,208,104,0,2032,2035,3,212,106,0,2033,2035,3,226,113,0,2034,2031,
        1,0,0,0,2034,2032,1,0,0,0,2034,2033,1,0,0,0,2035,219,1,0,0,0,2036,
        2037,3,236,118,0,2037,221,1,0,0,0,2038,2047,5,193,0,0,2039,2040,
        5,206,0,0,2040,2047,7,23,0,0,2041,2042,5,195,0,0,2042,2044,5,206,
        0,0,2043,2045,7,23,0,0,2044,2043,1,0,0,0,2044,2045,1,0,0,0,2045,
        2047,1,0,0,0,2046,2038,1,0,0,0,2046,2039,1,0,0,0,2046,2041,1,0,0,
        0,2047,223,1,0,0,0,2048,2050,7,24,0,0,2049,2048,1,0,0,0,2049,2050,
        1,0,0,0,2050,2057,1,0,0,0,2051,2058,3,222,111,0,2052,2058,5,194,
        0,0,2053,2058,5,195,0,0,2054,2058,5,196,0,0,2055,2058,5,81,0,0,2056,
        2058,5,112,0,0,2057,2051,1,0,0,0,2057,2052,1,0,0,0,2057,2053,1,0,
        0,0,2057,2054,1,0,0,0,2057,2055,1,0,0,0,2057,2056,1,0,0,0,2058,225,
        1,0,0,0,2059,2063,3,224,112,0,2060,2063,5,197,0,0,2061,2063,5,115,
        0,0,2062,2059,1,0,0,0,2062,2060,1,0,0,0,2062,2061,1,0,0,0,2063,227,
        1,0,0,0,2064,2065,7,25,0,0,2065,229,1,0,0,0,2066,2067,7,26,0,0,2067,
        231,1,0,0,0,2068,2069,7,27,0,0,2069,233,1,0,0,0,2070,2073,5,192,
        0,0,2071,2073,3,232,116,0,2072,2070,1,0,0,0,2072,2071,1,0,0,0,2073,
        235,1,0,0,0,2074,2078,5,192,0,0,2075,2078,3,228,114,0,2076,2078,
        3,230,115,0,2077,2074,1,0,0,0,2077,2075,1,0,0,0,2077,2076,1,0,0,
        0,2078,237,1,0,0,0,2079,2082,3,236,118,0,2080,2082,5,115,0,0,2081,
        2079,1,0,0,0,2081,2080,1,0,0,0,2082,239,1,0,0,0,2083,2084,5,197,
        0,0,2084,2085,5,208,0,0,2085,2086,3,224,112,0,2086,241,1,0,0,0,276,
        246,250,253,256,277,280,288,293,306,315,322,330,335,342,347,354,
        359,365,371,376,382,387,393,398,404,418,425,432,439,445,450,456,
        461,467,476,486,496,516,524,539,546,560,566,572,579,583,586,592,
        595,601,605,608,619,623,626,631,633,636,639,649,653,656,659,664,
        666,674,677,680,686,690,693,696,699,702,707,713,717,720,723,727,
        735,761,763,767,789,791,802,805,814,831,842,860,873,890,899,926,
        928,949,954,959,962,974,979,983,986,990,994,999,1002,1006,1008,1030,
        1038,1041,1051,1055,1063,1067,1072,1076,1080,1084,1088,1090,1098,
        1102,1105,1113,1118,1123,1126,1136,1149,1154,1158,1166,1173,1180,
        1184,1190,1193,1196,1199,1213,1217,1221,1226,1229,1239,1247,1250,
        1254,1257,1261,1264,1267,1270,1273,1276,1280,1284,1287,1290,1293,
        1296,1299,1308,1314,1341,1363,1371,1374,1380,1388,1391,1397,1399,
        1403,1408,1411,1414,1418,1422,1425,1427,1430,1434,1438,1441,1443,
        1445,1448,1453,1464,1470,1475,1482,1487,1491,1495,1500,1507,1515,
        1518,1521,1540,1554,1570,1573,1582,1586,1591,1596,1599,1601,1623,
        1626,1637,1641,1644,1648,1652,1660,1664,1677,1689,1701,1709,1713,
        1720,1726,1734,1739,1748,1752,1783,1800,1812,1822,1825,1829,1832,
        1844,1861,1865,1882,1885,1889,1892,1903,1927,1934,1936,1938,1946,
        1951,1959,1969,1972,1980,1987,1996,2002,2006,2012,2019,2028,2034,
        2044,2046,2049,2057,2062,2072,2077,2081
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ClickHouseParser.__ATN) {
            ClickHouseParser.__ATN = new antlr.ATNDeserializer().deserialize(ClickHouseParser._serializedATN);
        }

        return ClickHouseParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ClickHouseParser.literalNames, ClickHouseParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ClickHouseParser.vocabulary;
    }

    private static readonly decisionsToDFA = ClickHouseParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public query(): QueryContext | null {
        return this.getRuleContext(0, QueryContext);
    }
    public INTO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INTO, 0);
    }
    public OUTFILE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTFILE, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public FORMAT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FORMAT, 0);
    }
    public identifierOrNull(): IdentifierOrNullContext | null {
        return this.getRuleContext(0, IdentifierOrNullContext);
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SEMICOLON, 0);
    }
    public insertStmt(): InsertStmtContext | null {
        return this.getRuleContext(0, InsertStmtContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_program;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public alterStmt(): AlterStmtContext | null {
        return this.getRuleContext(0, AlterStmtContext);
    }
    public attachStmt(): AttachStmtContext | null {
        return this.getRuleContext(0, AttachStmtContext);
    }
    public checkStmt(): CheckStmtContext | null {
        return this.getRuleContext(0, CheckStmtContext);
    }
    public createStmt(): CreateStmtContext | null {
        return this.getRuleContext(0, CreateStmtContext);
    }
    public describeStmt(): DescribeStmtContext | null {
        return this.getRuleContext(0, DescribeStmtContext);
    }
    public dropStmt(): DropStmtContext | null {
        return this.getRuleContext(0, DropStmtContext);
    }
    public existsStmt(): ExistsStmtContext | null {
        return this.getRuleContext(0, ExistsStmtContext);
    }
    public explainStmt(): ExplainStmtContext | null {
        return this.getRuleContext(0, ExplainStmtContext);
    }
    public killStmt(): KillStmtContext | null {
        return this.getRuleContext(0, KillStmtContext);
    }
    public optimizeStmt(): OptimizeStmtContext | null {
        return this.getRuleContext(0, OptimizeStmtContext);
    }
    public renameStmt(): RenameStmtContext | null {
        return this.getRuleContext(0, RenameStmtContext);
    }
    public selectUnionStmt(): SelectUnionStmtContext | null {
        return this.getRuleContext(0, SelectUnionStmtContext);
    }
    public setStmt(): SetStmtContext | null {
        return this.getRuleContext(0, SetStmtContext);
    }
    public showStmt(): ShowStmtContext | null {
        return this.getRuleContext(0, ShowStmtContext);
    }
    public systemStmt(): SystemStmtContext | null {
        return this.getRuleContext(0, SystemStmtContext);
    }
    public truncateStmt(): TruncateStmtContext | null {
        return this.getRuleContext(0, TruncateStmtContext);
    }
    public useStmt(): UseStmtContext | null {
        return this.getRuleContext(0, UseStmtContext);
    }
    public watchStmt(): WatchStmtContext | null {
        return this.getRuleContext(0, WatchStmtContext);
    }
    public selectStmt(): SelectStmtContext | null {
        return this.getRuleContext(0, SelectStmtContext);
    }
    public ctes(): CtesContext | null {
        return this.getRuleContext(0, CtesContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_query;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterQuery) {
             listener.enterQuery(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitQuery) {
             listener.exitQuery(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CtesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WITH, 0)!;
    }
    public namedQuery(): NamedQueryContext[];
    public namedQuery(i: number): NamedQueryContext | null;
    public namedQuery(i?: number): NamedQueryContext[] | NamedQueryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NamedQueryContext);
        }

        return this.getRuleContext(i, NamedQueryContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_ctes;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterCtes) {
             listener.enterCtes(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitCtes) {
             listener.exitCtes(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCtes) {
            return visitor.visitCtes(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NamedQueryContext extends antlr.ParserRuleContext {
    public _name?: IdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public columnAliases(): ColumnAliasesContext | null {
        return this.getRuleContext(0, ColumnAliasesContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_namedQuery;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterNamedQuery) {
             listener.enterNamedQuery(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitNamedQuery) {
             listener.exitNamedQuery(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitNamedQuery) {
            return visitor.visitNamedQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnAliasesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnAliases;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnAliases) {
             listener.enterColumnAliases(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnAliases) {
             listener.exitColumnAliases(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnAliases) {
            return visitor.visitColumnAliases(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_alterStmt;
    }
    public override copyFrom(ctx: AlterStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class AlterTableStmtContext extends AlterStmtContext {
    public constructor(ctx: AlterStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ALTER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ALTER, 0)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public alterTableClause(): AlterTableClauseContext[];
    public alterTableClause(i: number): AlterTableClauseContext | null;
    public alterTableClause(i?: number): AlterTableClauseContext[] | AlterTableClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AlterTableClauseContext);
        }

        return this.getRuleContext(i, AlterTableClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableStmt) {
             listener.enterAlterTableStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableStmt) {
             listener.exitAlterTableStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableStmt) {
            return visitor.visitAlterTableStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AlterTableClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_alterTableClause;
    }
    public override copyFrom(ctx: AlterTableClauseContext): void {
        super.copyFrom(ctx);
    }
}
export class AlterTableClauseReplaceContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public REPLACE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.REPLACE, 0)!;
    }
    public partitionClause(): PartitionClauseContext {
        return this.getRuleContext(0, PartitionClauseContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FROM, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseReplace) {
             listener.enterAlterTableClauseReplace(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseReplace) {
             listener.exitAlterTableClauseReplace(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseReplace) {
            return visitor.visitAlterTableClauseReplace(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyOrderByContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ORDER, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseModifyOrderBy) {
             listener.enterAlterTableClauseModifyOrderBy(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseModifyOrderBy) {
             listener.exitAlterTableClauseModifyOrderBy(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModifyOrderBy) {
            return visitor.visitAlterTableClauseModifyOrderBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseUpdateContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public UPDATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.UPDATE, 0)!;
    }
    public assignmentExprList(): AssignmentExprListContext {
        return this.getRuleContext(0, AssignmentExprListContext)!;
    }
    public whereClause(): WhereClauseContext {
        return this.getRuleContext(0, WhereClauseContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseUpdate) {
             listener.enterAlterTableClauseUpdate(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseUpdate) {
             listener.exitAlterTableClauseUpdate(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseUpdate) {
            return visitor.visitAlterTableClauseUpdate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseClearProjectionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CLEAR(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CLEAR, 0)!;
    }
    public PROJECTION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PROJECTION, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseClearProjection) {
             listener.enterAlterTableClauseClearProjection(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseClearProjection) {
             listener.exitAlterTableClauseClearProjection(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseClearProjection) {
            return visitor.visitAlterTableClauseClearProjection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyRemoveContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public REMOVE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.REMOVE, 0)!;
    }
    public tableColumnPropertyType(): TableColumnPropertyTypeContext {
        return this.getRuleContext(0, TableColumnPropertyTypeContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseModifyRemove) {
             listener.enterAlterTableClauseModifyRemove(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseModifyRemove) {
             listener.exitAlterTableClauseModifyRemove(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModifyRemove) {
            return visitor.visitAlterTableClauseModifyRemove(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDeleteContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DELETE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DELETE, 0)!;
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WHERE, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseDelete) {
             listener.enterAlterTableClauseDelete(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseDelete) {
             listener.exitAlterTableClauseDelete(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDelete) {
            return visitor.visitAlterTableClauseDelete(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseCommentContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public COMMENT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COMMENT, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseComment) {
             listener.enterAlterTableClauseComment(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseComment) {
             listener.exitAlterTableClauseComment(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseComment) {
            return visitor.visitAlterTableClauseComment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDropColumnContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DROP, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseDropColumn) {
             listener.enterAlterTableClauseDropColumn(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseDropColumn) {
             listener.exitAlterTableClauseDropColumn(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDropColumn) {
            return visitor.visitAlterTableClauseDropColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDetachContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DETACH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DETACH, 0)!;
    }
    public partitionClause(): PartitionClauseContext {
        return this.getRuleContext(0, PartitionClauseContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseDetach) {
             listener.enterAlterTableClauseDetach(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseDetach) {
             listener.exitAlterTableClauseDetach(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDetach) {
            return visitor.visitAlterTableClauseDetach(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseAddIndexContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ADD(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ADD, 0)!;
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INDEX, 0)!;
    }
    public tableIndexDfnt(): TableIndexDfntContext {
        return this.getRuleContext(0, TableIndexDfntContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public AFTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AFTER, 0);
    }
    public nestedIdentifier(): NestedIdentifierContext | null {
        return this.getRuleContext(0, NestedIdentifierContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseAddIndex) {
             listener.enterAlterTableClauseAddIndex(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseAddIndex) {
             listener.exitAlterTableClauseAddIndex(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseAddIndex) {
            return visitor.visitAlterTableClauseAddIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDropPartitionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DROP, 0)!;
    }
    public partitionClause(): PartitionClauseContext {
        return this.getRuleContext(0, PartitionClauseContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseDropPartition) {
             listener.enterAlterTableClauseDropPartition(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseDropPartition) {
             listener.exitAlterTableClauseDropPartition(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDropPartition) {
            return visitor.visitAlterTableClauseDropPartition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseMaterializeIndexContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MATERIALIZE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MATERIALIZE, 0)!;
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INDEX, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseMaterializeIndex) {
             listener.enterAlterTableClauseMaterializeIndex(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseMaterializeIndex) {
             listener.exitAlterTableClauseMaterializeIndex(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseMaterializeIndex) {
            return visitor.visitAlterTableClauseMaterializeIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseMaterializeProjectionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MATERIALIZE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MATERIALIZE, 0)!;
    }
    public PROJECTION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PROJECTION, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseMaterializeProjection) {
             listener.enterAlterTableClauseMaterializeProjection(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseMaterializeProjection) {
             listener.exitAlterTableClauseMaterializeProjection(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseMaterializeProjection) {
            return visitor.visitAlterTableClauseMaterializeProjection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseMovePartitionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MOVE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MOVE, 0)!;
    }
    public partitionClause(): PartitionClauseContext {
        return this.getRuleContext(0, PartitionClauseContext)!;
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TO, 0);
    }
    public DISK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISK, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public VOLUME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VOLUME, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseMovePartition) {
             listener.enterAlterTableClauseMovePartition(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseMovePartition) {
             listener.exitAlterTableClauseMovePartition(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseMovePartition) {
            return visitor.visitAlterTableClauseMovePartition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseRenameContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RENAME, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext[];
    public nestedIdentifier(i: number): NestedIdentifierContext | null;
    public nestedIdentifier(i?: number): NestedIdentifierContext[] | NestedIdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NestedIdentifierContext);
        }

        return this.getRuleContext(i, NestedIdentifierContext);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TO, 0)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseRename) {
             listener.enterAlterTableClauseRename(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseRename) {
             listener.exitAlterTableClauseRename(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseRename) {
            return visitor.visitAlterTableClauseRename(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseFreezePartitionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FREEZE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FREEZE, 0)!;
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseFreezePartition) {
             listener.enterAlterTableClauseFreezePartition(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseFreezePartition) {
             listener.exitAlterTableClauseFreezePartition(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseFreezePartition) {
            return visitor.visitAlterTableClauseFreezePartition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseClearColumnContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CLEAR(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CLEAR, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseClearColumn) {
             listener.enterAlterTableClauseClearColumn(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseClearColumn) {
             listener.exitAlterTableClauseClearColumn(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseClearColumn) {
            return visitor.visitAlterTableClauseClearColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public tableColumnDfnt(): TableColumnDfntContext {
        return this.getRuleContext(0, TableColumnDfntContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseModify) {
             listener.enterAlterTableClauseModify(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseModify) {
             listener.exitAlterTableClauseModify(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModify) {
            return visitor.visitAlterTableClauseModify(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseClearIndexContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CLEAR(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CLEAR, 0)!;
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INDEX, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseClearIndex) {
             listener.enterAlterTableClauseClearIndex(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseClearIndex) {
             listener.exitAlterTableClauseClearIndex(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseClearIndex) {
            return visitor.visitAlterTableClauseClearIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseRemoveTTLContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public REMOVE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.REMOVE, 0)!;
    }
    public TTL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TTL, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseRemoveTTL) {
             listener.enterAlterTableClauseRemoveTTL(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseRemoveTTL) {
             listener.exitAlterTableClauseRemoveTTL(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseRemoveTTL) {
            return visitor.visitAlterTableClauseRemoveTTL(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyCodecContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public codecExpr(): CodecExprContext {
        return this.getRuleContext(0, CodecExprContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseModifyCodec) {
             listener.enterAlterTableClauseModifyCodec(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseModifyCodec) {
             listener.exitAlterTableClauseModifyCodec(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModifyCodec) {
            return visitor.visitAlterTableClauseModifyCodec(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseAttachContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ATTACH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ATTACH, 0)!;
    }
    public partitionClause(): PartitionClauseContext {
        return this.getRuleContext(0, PartitionClauseContext)!;
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FROM, 0);
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseAttach) {
             listener.enterAlterTableClauseAttach(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseAttach) {
             listener.exitAlterTableClauseAttach(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseAttach) {
            return visitor.visitAlterTableClauseAttach(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDropProjectionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DROP, 0)!;
    }
    public PROJECTION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PROJECTION, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseDropProjection) {
             listener.enterAlterTableClauseDropProjection(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseDropProjection) {
             listener.exitAlterTableClauseDropProjection(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDropProjection) {
            return visitor.visitAlterTableClauseDropProjection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseDropIndexContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DROP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DROP, 0)!;
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INDEX, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseDropIndex) {
             listener.enterAlterTableClauseDropIndex(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseDropIndex) {
             listener.exitAlterTableClauseDropIndex(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseDropIndex) {
            return visitor.visitAlterTableClauseDropIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyCommentContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public COMMENT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COMMENT, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseModifyComment) {
             listener.enterAlterTableClauseModifyComment(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseModifyComment) {
             listener.exitAlterTableClauseModifyComment(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModifyComment) {
            return visitor.visitAlterTableClauseModifyComment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseModifyTTLContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MODIFY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MODIFY, 0)!;
    }
    public ttlClause(): TtlClauseContext {
        return this.getRuleContext(0, TtlClauseContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseModifyTTL) {
             listener.enterAlterTableClauseModifyTTL(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseModifyTTL) {
             listener.exitAlterTableClauseModifyTTL(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseModifyTTL) {
            return visitor.visitAlterTableClauseModifyTTL(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseAddProjectionContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ADD(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ADD, 0)!;
    }
    public PROJECTION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PROJECTION, 0)!;
    }
    public tableProjectionDfnt(): TableProjectionDfntContext {
        return this.getRuleContext(0, TableProjectionDfntContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public AFTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AFTER, 0);
    }
    public nestedIdentifier(): NestedIdentifierContext | null {
        return this.getRuleContext(0, NestedIdentifierContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseAddProjection) {
             listener.enterAlterTableClauseAddProjection(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseAddProjection) {
             listener.exitAlterTableClauseAddProjection(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseAddProjection) {
            return visitor.visitAlterTableClauseAddProjection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AlterTableClauseAddColumnContext extends AlterTableClauseContext {
    public constructor(ctx: AlterTableClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ADD(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ADD, 0)!;
    }
    public COLUMN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLUMN, 0)!;
    }
    public tableColumnDfnt(): TableColumnDfntContext {
        return this.getRuleContext(0, TableColumnDfntContext)!;
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public AFTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AFTER, 0);
    }
    public nestedIdentifier(): NestedIdentifierContext | null {
        return this.getRuleContext(0, NestedIdentifierContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlterTableClauseAddColumn) {
             listener.enterAlterTableClauseAddColumn(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlterTableClauseAddColumn) {
             listener.exitAlterTableClauseAddColumn(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlterTableClauseAddColumn) {
            return visitor.visitAlterTableClauseAddColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentExprListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignmentExpr(): AssignmentExprContext[];
    public assignmentExpr(i: number): AssignmentExprContext | null;
    public assignmentExpr(i?: number): AssignmentExprContext[] | AssignmentExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentExprContext);
        }

        return this.getRuleContext(i, AssignmentExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_assignmentExprList;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAssignmentExprList) {
             listener.enterAssignmentExprList(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAssignmentExprList) {
             listener.exitAssignmentExprList(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentExprList) {
            return visitor.visitAssignmentExprList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public EQ_SINGLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EQ_SINGLE, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_assignmentExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAssignmentExpr) {
             listener.enterAssignmentExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAssignmentExpr) {
             listener.exitAssignmentExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentExpr) {
            return visitor.visitAssignmentExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableColumnPropertyTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ALIAS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALIAS, 0);
    }
    public CODEC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CODEC, 0);
    }
    public COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMENT, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEFAULT, 0);
    }
    public MATERIALIZED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MATERIALIZED, 0);
    }
    public TTL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TTL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableColumnPropertyType;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableColumnPropertyType) {
             listener.enterTableColumnPropertyType(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableColumnPropertyType) {
             listener.exitTableColumnPropertyType(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableColumnPropertyType) {
            return visitor.visitTableColumnPropertyType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PartitionClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARTITION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PARTITION, 0)!;
    }
    public columnExpr(): ColumnExprContext | null {
        return this.getRuleContext(0, ColumnExprContext);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ID, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_partitionClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterPartitionClause) {
             listener.enterPartitionClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitPartitionClause) {
             listener.exitPartitionClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitPartitionClause) {
            return visitor.visitPartitionClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AttachStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_attachStmt;
    }
    public override copyFrom(ctx: AttachStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class AttachDictionaryStmtContext extends AttachStmtContext {
    public constructor(ctx: AttachStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ATTACH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ATTACH, 0)!;
    }
    public DICTIONARY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DICTIONARY, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAttachDictionaryStmt) {
             listener.enterAttachDictionaryStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAttachDictionaryStmt) {
             listener.exitAttachDictionaryStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAttachDictionaryStmt) {
            return visitor.visitAttachDictionaryStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CheckStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CHECK(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CHECK, 0)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_checkStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterCheckStmt) {
             listener.enterCheckStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitCheckStmt) {
             listener.exitCheckStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCheckStmt) {
            return visitor.visitCheckStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CreateStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_createStmt;
    }
    public override copyFrom(ctx: CreateStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class CreateViewStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VIEW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.VIEW, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public subqueryClause(): SubqueryClauseContext {
        return this.getRuleContext(0, SubqueryClauseContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OR, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLACE, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public uuidClause(): UuidClauseContext | null {
        return this.getRuleContext(0, UuidClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public tableSchemaClause(): TableSchemaClauseContext | null {
        return this.getRuleContext(0, TableSchemaClauseContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterCreateViewStmt) {
             listener.enterCreateViewStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitCreateViewStmt) {
             listener.exitCreateViewStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateViewStmt) {
            return visitor.visitCreateViewStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateDictionaryStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DICTIONARY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DICTIONARY, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public dictionarySchemaClause(): DictionarySchemaClauseContext {
        return this.getRuleContext(0, DictionarySchemaClauseContext)!;
    }
    public dictionaryEngineClause(): DictionaryEngineClauseContext {
        return this.getRuleContext(0, DictionaryEngineClauseContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLACE, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public uuidClause(): UuidClauseContext | null {
        return this.getRuleContext(0, UuidClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OR, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterCreateDictionaryStmt) {
             listener.enterCreateDictionaryStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitCreateDictionaryStmt) {
             listener.exitCreateDictionaryStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateDictionaryStmt) {
            return visitor.visitCreateDictionaryStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateDatabaseStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATABASE, 0)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        return this.getRuleContext(0, DatabaseIdentifierContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public engineExpr(): EngineExprContext | null {
        return this.getRuleContext(0, EngineExprContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterCreateDatabaseStmt) {
             listener.enterCreateDatabaseStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitCreateDatabaseStmt) {
             listener.exitCreateDatabaseStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateDatabaseStmt) {
            return visitor.visitCreateDatabaseStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateLiveViewStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LIVE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LIVE, 0)!;
    }
    public VIEW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.VIEW, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public subqueryClause(): SubqueryClauseContext {
        return this.getRuleContext(0, SubqueryClauseContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public uuidClause(): UuidClauseContext | null {
        return this.getRuleContext(0, UuidClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WITH, 0);
    }
    public TIMEOUT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIMEOUT, 0);
    }
    public destinationClause(): DestinationClauseContext | null {
        return this.getRuleContext(0, DestinationClauseContext);
    }
    public tableSchemaClause(): TableSchemaClauseContext | null {
        return this.getRuleContext(0, TableSchemaClauseContext);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterCreateLiveViewStmt) {
             listener.enterCreateLiveViewStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitCreateLiveViewStmt) {
             listener.exitCreateLiveViewStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateLiveViewStmt) {
            return visitor.visitCreateLiveViewStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateMaterializedViewStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MATERIALIZED(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MATERIALIZED, 0)!;
    }
    public VIEW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.VIEW, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public subqueryClause(): SubqueryClauseContext {
        return this.getRuleContext(0, SubqueryClauseContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public destinationClause(): DestinationClauseContext | null {
        return this.getRuleContext(0, DestinationClauseContext);
    }
    public engineClause(): EngineClauseContext | null {
        return this.getRuleContext(0, EngineClauseContext);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public uuidClause(): UuidClauseContext | null {
        return this.getRuleContext(0, UuidClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public tableSchemaClause(): TableSchemaClauseContext | null {
        return this.getRuleContext(0, TableSchemaClauseContext);
    }
    public POPULATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.POPULATE, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterCreateMaterializedViewStmt) {
             listener.enterCreateMaterializedViewStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitCreateMaterializedViewStmt) {
             listener.exitCreateMaterializedViewStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateMaterializedViewStmt) {
            return visitor.visitCreateMaterializedViewStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CreateTableStmtContext extends CreateStmtContext {
    public constructor(ctx: CreateStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLACE, 0);
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public uuidClause(): UuidClauseContext | null {
        return this.getRuleContext(0, UuidClauseContext);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public tableSchemaClause(): TableSchemaClauseContext | null {
        return this.getRuleContext(0, TableSchemaClauseContext);
    }
    public engineClause(): EngineClauseContext | null {
        return this.getRuleContext(0, EngineClauseContext);
    }
    public subqueryClause(): SubqueryClauseContext | null {
        return this.getRuleContext(0, SubqueryClauseContext);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OR, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterCreateTableStmt) {
             listener.enterCreateTableStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitCreateTableStmt) {
             listener.exitCreateTableStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCreateTableStmt) {
            return visitor.visitCreateTableStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DictionarySchemaClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public dictionaryAttrDfnt(): DictionaryAttrDfntContext[];
    public dictionaryAttrDfnt(i: number): DictionaryAttrDfntContext | null;
    public dictionaryAttrDfnt(i?: number): DictionaryAttrDfntContext[] | DictionaryAttrDfntContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DictionaryAttrDfntContext);
        }

        return this.getRuleContext(i, DictionaryAttrDfntContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionarySchemaClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDictionarySchemaClause) {
             listener.enterDictionarySchemaClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDictionarySchemaClause) {
             listener.exitDictionarySchemaClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionarySchemaClause) {
            return visitor.visitDictionarySchemaClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DictionaryAttrDfntContext extends antlr.ParserRuleContext {

    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext {
        return this.getRuleContext(0, ColumnTypeExprContext)!;
    }
    public DEFAULT(): antlr.TerminalNode[];
    public DEFAULT(i: number): antlr.TerminalNode | null;
    public DEFAULT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.DEFAULT);
    	} else {
    		return this.getToken(ClickHouseParser.DEFAULT, i);
    	}
    }
    public literal(): LiteralContext[];
    public literal(i: number): LiteralContext | null;
    public literal(i?: number): LiteralContext[] | LiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }

        return this.getRuleContext(i, LiteralContext);
    }
    public EXPRESSION(): antlr.TerminalNode[];
    public EXPRESSION(i: number): antlr.TerminalNode | null;
    public EXPRESSION(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.EXPRESSION);
    	} else {
    		return this.getToken(ClickHouseParser.EXPRESSION, i);
    	}
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public HIERARCHICAL(): antlr.TerminalNode[];
    public HIERARCHICAL(i: number): antlr.TerminalNode | null;
    public HIERARCHICAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.HIERARCHICAL);
    	} else {
    		return this.getToken(ClickHouseParser.HIERARCHICAL, i);
    	}
    }
    public INJECTIVE(): antlr.TerminalNode[];
    public INJECTIVE(i: number): antlr.TerminalNode | null;
    public INJECTIVE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.INJECTIVE);
    	} else {
    		return this.getToken(ClickHouseParser.INJECTIVE, i);
    	}
    }
    public IS_OBJECT_ID(): antlr.TerminalNode[];
    public IS_OBJECT_ID(i: number): antlr.TerminalNode | null;
    public IS_OBJECT_ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.IS_OBJECT_ID);
    	} else {
    		return this.getToken(ClickHouseParser.IS_OBJECT_ID, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionaryAttrDfnt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDictionaryAttrDfnt) {
             listener.enterDictionaryAttrDfnt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDictionaryAttrDfnt) {
             listener.exitDictionaryAttrDfnt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionaryAttrDfnt) {
            return visitor.visitDictionaryAttrDfnt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DictionaryEngineClauseContext extends antlr.ParserRuleContext {
    // public clauses: std::set<std::string>;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public dictionaryPrimaryKeyClause(): DictionaryPrimaryKeyClauseContext | null {
        return this.getRuleContext(0, DictionaryPrimaryKeyClauseContext);
    }
    public sourceClause(): SourceClauseContext[];
    public sourceClause(i: number): SourceClauseContext | null;
    public sourceClause(i?: number): SourceClauseContext[] | SourceClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SourceClauseContext);
        }

        return this.getRuleContext(i, SourceClauseContext);
    }
    public lifetimeClause(): LifetimeClauseContext[];
    public lifetimeClause(i: number): LifetimeClauseContext | null;
    public lifetimeClause(i?: number): LifetimeClauseContext[] | LifetimeClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LifetimeClauseContext);
        }

        return this.getRuleContext(i, LifetimeClauseContext);
    }
    public layoutClause(): LayoutClauseContext[];
    public layoutClause(i: number): LayoutClauseContext | null;
    public layoutClause(i?: number): LayoutClauseContext[] | LayoutClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LayoutClauseContext);
        }

        return this.getRuleContext(i, LayoutClauseContext);
    }
    public rangeClause(): RangeClauseContext[];
    public rangeClause(i: number): RangeClauseContext | null;
    public rangeClause(i?: number): RangeClauseContext[] | RangeClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RangeClauseContext);
        }

        return this.getRuleContext(i, RangeClauseContext);
    }
    public dictionarySettingsClause(): DictionarySettingsClauseContext[];
    public dictionarySettingsClause(i: number): DictionarySettingsClauseContext | null;
    public dictionarySettingsClause(i?: number): DictionarySettingsClauseContext[] | DictionarySettingsClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DictionarySettingsClauseContext);
        }

        return this.getRuleContext(i, DictionarySettingsClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionaryEngineClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDictionaryEngineClause) {
             listener.enterDictionaryEngineClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDictionaryEngineClause) {
             listener.exitDictionaryEngineClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionaryEngineClause) {
            return visitor.visitDictionaryEngineClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DictionaryPrimaryKeyClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRIMARY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PRIMARY, 0)!;
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.KEY, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionaryPrimaryKeyClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDictionaryPrimaryKeyClause) {
             listener.enterDictionaryPrimaryKeyClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDictionaryPrimaryKeyClause) {
             listener.exitDictionaryPrimaryKeyClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionaryPrimaryKeyClause) {
            return visitor.visitDictionaryPrimaryKeyClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DictionaryArgExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionaryArgExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDictionaryArgExpr) {
             listener.enterDictionaryArgExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDictionaryArgExpr) {
             listener.exitDictionaryArgExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionaryArgExpr) {
            return visitor.visitDictionaryArgExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SOURCE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SOURCE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.LPAREN);
    	} else {
    		return this.getToken(ClickHouseParser.LPAREN, i);
    	}
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.RPAREN);
    	} else {
    		return this.getToken(ClickHouseParser.RPAREN, i);
    	}
    }
    public dictionaryArgExpr(): DictionaryArgExprContext[];
    public dictionaryArgExpr(i: number): DictionaryArgExprContext | null;
    public dictionaryArgExpr(i?: number): DictionaryArgExprContext[] | DictionaryArgExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DictionaryArgExprContext);
        }

        return this.getRuleContext(i, DictionaryArgExprContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_sourceClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSourceClause) {
             listener.enterSourceClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSourceClause) {
             listener.exitSourceClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSourceClause) {
            return visitor.visitSourceClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LifetimeClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIFETIME(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LIFETIME, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode[];
    public DECIMAL_LITERAL(i: number): antlr.TerminalNode | null;
    public DECIMAL_LITERAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.DECIMAL_LITERAL);
    	} else {
    		return this.getToken(ClickHouseParser.DECIMAL_LITERAL, i);
    	}
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MIN, 0);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MAX, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_lifetimeClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterLifetimeClause) {
             listener.enterLifetimeClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitLifetimeClause) {
             listener.exitLifetimeClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLifetimeClause) {
            return visitor.visitLifetimeClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LayoutClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LAYOUT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LAYOUT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.LPAREN);
    	} else {
    		return this.getToken(ClickHouseParser.LPAREN, i);
    	}
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.RPAREN);
    	} else {
    		return this.getToken(ClickHouseParser.RPAREN, i);
    	}
    }
    public dictionaryArgExpr(): DictionaryArgExprContext[];
    public dictionaryArgExpr(i: number): DictionaryArgExprContext | null;
    public dictionaryArgExpr(i?: number): DictionaryArgExprContext[] | DictionaryArgExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DictionaryArgExprContext);
        }

        return this.getRuleContext(i, DictionaryArgExprContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_layoutClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterLayoutClause) {
             listener.enterLayoutClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitLayoutClause) {
             listener.exitLayoutClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLayoutClause) {
            return visitor.visitLayoutClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RangeClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RANGE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RANGE, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MIN, 0);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MAX, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_rangeClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterRangeClause) {
             listener.enterRangeClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitRangeClause) {
             listener.exitRangeClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitRangeClause) {
            return visitor.visitRangeClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DictionarySettingsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SETTINGS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SETTINGS, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public settingExprList(): SettingExprListContext {
        return this.getRuleContext(0, SettingExprListContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dictionarySettingsClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDictionarySettingsClause) {
             listener.enterDictionarySettingsClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDictionarySettingsClause) {
             listener.exitDictionarySettingsClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDictionarySettingsClause) {
            return visitor.visitDictionarySettingsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClusterClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ON, 0)!;
    }
    public CLUSTER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CLUSTER, 0)!;
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_clusterClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterClusterClause) {
             listener.enterClusterClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitClusterClause) {
             listener.exitClusterClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitClusterClause) {
            return visitor.visitClusterClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UuidClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public UUID(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.UUID, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_uuidClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterUuidClause) {
             listener.enterUuidClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitUuidClause) {
             listener.exitUuidClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitUuidClause) {
            return visitor.visitUuidClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DestinationClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TO(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TO, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_destinationClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDestinationClause) {
             listener.enterDestinationClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDestinationClause) {
             listener.exitDestinationClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDestinationClause) {
            return visitor.visitDestinationClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SubqueryClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        return this.getRuleContext(0, SelectUnionStmtContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_subqueryClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSubqueryClause) {
             listener.enterSubqueryClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSubqueryClause) {
             listener.exitSubqueryClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSubqueryClause) {
            return visitor.visitSubqueryClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableSchemaClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableSchemaClause;
    }
    public override copyFrom(ctx: TableSchemaClauseContext): void {
        super.copyFrom(ctx);
    }
}
export class SchemaAsTableClauseContext extends TableSchemaClauseContext {
    public constructor(ctx: TableSchemaClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSchemaAsTableClause) {
             listener.enterSchemaAsTableClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSchemaAsTableClause) {
             listener.exitSchemaAsTableClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSchemaAsTableClause) {
            return visitor.visitSchemaAsTableClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SchemaAsFunctionClauseContext extends TableSchemaClauseContext {
    public constructor(ctx: TableSchemaClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public tableFunctionExpr(): TableFunctionExprContext {
        return this.getRuleContext(0, TableFunctionExprContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSchemaAsFunctionClause) {
             listener.enterSchemaAsFunctionClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSchemaAsFunctionClause) {
             listener.exitSchemaAsFunctionClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSchemaAsFunctionClause) {
            return visitor.visitSchemaAsFunctionClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SchemaDescriptionClauseContext extends TableSchemaClauseContext {
    public constructor(ctx: TableSchemaClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public tableElementExpr(): TableElementExprContext[];
    public tableElementExpr(i: number): TableElementExprContext | null;
    public tableElementExpr(i?: number): TableElementExprContext[] | TableElementExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableElementExprContext);
        }

        return this.getRuleContext(i, TableElementExprContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSchemaDescriptionClause) {
             listener.enterSchemaDescriptionClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSchemaDescriptionClause) {
             listener.exitSchemaDescriptionClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSchemaDescriptionClause) {
            return visitor.visitSchemaDescriptionClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EngineClauseContext extends antlr.ParserRuleContext {
    // public clauses: std::set<std::string>;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public engineExpr(): EngineExprContext {
        return this.getRuleContext(0, EngineExprContext)!;
    }
    public orderByClause(): OrderByClauseContext[];
    public orderByClause(i: number): OrderByClauseContext | null;
    public orderByClause(i?: number): OrderByClauseContext[] | OrderByClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderByClauseContext);
        }

        return this.getRuleContext(i, OrderByClauseContext);
    }
    public partitionByClause(): PartitionByClauseContext[];
    public partitionByClause(i: number): PartitionByClauseContext | null;
    public partitionByClause(i?: number): PartitionByClauseContext[] | PartitionByClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PartitionByClauseContext);
        }

        return this.getRuleContext(i, PartitionByClauseContext);
    }
    public primaryKeyClause(): PrimaryKeyClauseContext[];
    public primaryKeyClause(i: number): PrimaryKeyClauseContext | null;
    public primaryKeyClause(i?: number): PrimaryKeyClauseContext[] | PrimaryKeyClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryKeyClauseContext);
        }

        return this.getRuleContext(i, PrimaryKeyClauseContext);
    }
    public sampleByClause(): SampleByClauseContext[];
    public sampleByClause(i: number): SampleByClauseContext | null;
    public sampleByClause(i?: number): SampleByClauseContext[] | SampleByClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SampleByClauseContext);
        }

        return this.getRuleContext(i, SampleByClauseContext);
    }
    public ttlClause(): TtlClauseContext[];
    public ttlClause(i: number): TtlClauseContext | null;
    public ttlClause(i?: number): TtlClauseContext[] | TtlClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TtlClauseContext);
        }

        return this.getRuleContext(i, TtlClauseContext);
    }
    public settingsClause(): SettingsClauseContext[];
    public settingsClause(i: number): SettingsClauseContext | null;
    public settingsClause(i?: number): SettingsClauseContext[] | SettingsClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SettingsClauseContext);
        }

        return this.getRuleContext(i, SettingsClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_engineClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterEngineClause) {
             listener.enterEngineClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitEngineClause) {
             listener.exitEngineClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitEngineClause) {
            return visitor.visitEngineClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PartitionByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARTITION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PARTITION, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_partitionByClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterPartitionByClause) {
             listener.enterPartitionByClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitPartitionByClause) {
             listener.exitPartitionByClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitPartitionByClause) {
            return visitor.visitPartitionByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryKeyClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PRIMARY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PRIMARY, 0)!;
    }
    public KEY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.KEY, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_primaryKeyClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterPrimaryKeyClause) {
             listener.enterPrimaryKeyClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitPrimaryKeyClause) {
             listener.exitPrimaryKeyClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitPrimaryKeyClause) {
            return visitor.visitPrimaryKeyClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SampleByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SAMPLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SAMPLE, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_sampleByClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSampleByClause) {
             listener.enterSampleByClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSampleByClause) {
             listener.exitSampleByClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSampleByClause) {
            return visitor.visitSampleByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TtlClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TTL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TTL, 0)!;
    }
    public ttlExpr(): TtlExprContext[];
    public ttlExpr(i: number): TtlExprContext | null;
    public ttlExpr(i?: number): TtlExprContext[] | TtlExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TtlExprContext);
        }

        return this.getRuleContext(i, TtlExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_ttlClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTtlClause) {
             listener.enterTtlClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTtlClause) {
             listener.exitTtlClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTtlClause) {
            return visitor.visitTtlClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EngineExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENGINE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ENGINE, 0)!;
    }
    public identifierOrNull(): IdentifierOrNullContext {
        return this.getRuleContext(0, IdentifierOrNullContext)!;
    }
    public EQ_SINGLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EQ_SINGLE, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_engineExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterEngineExpr) {
             listener.enterEngineExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitEngineExpr) {
             listener.exitEngineExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitEngineExpr) {
            return visitor.visitEngineExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableElementExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableElementExpr;
    }
    public override copyFrom(ctx: TableElementExprContext): void {
        super.copyFrom(ctx);
    }
}
export class TableElementExprProjectionContext extends TableElementExprContext {
    public constructor(ctx: TableElementExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PROJECTION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PROJECTION, 0)!;
    }
    public tableProjectionDfnt(): TableProjectionDfntContext {
        return this.getRuleContext(0, TableProjectionDfntContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableElementExprProjection) {
             listener.enterTableElementExprProjection(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableElementExprProjection) {
             listener.exitTableElementExprProjection(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableElementExprProjection) {
            return visitor.visitTableElementExprProjection(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableElementExprConstraintContext extends TableElementExprContext {
    public constructor(ctx: TableElementExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CONSTRAINT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public CHECK(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CHECK, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableElementExprConstraint) {
             listener.enterTableElementExprConstraint(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableElementExprConstraint) {
             listener.exitTableElementExprConstraint(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableElementExprConstraint) {
            return visitor.visitTableElementExprConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableElementExprColumnContext extends TableElementExprContext {
    public constructor(ctx: TableElementExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableColumnDfnt(): TableColumnDfntContext {
        return this.getRuleContext(0, TableColumnDfntContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableElementExprColumn) {
             listener.enterTableElementExprColumn(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableElementExprColumn) {
             listener.exitTableElementExprColumn(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableElementExprColumn) {
            return visitor.visitTableElementExprColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableElementExprIndexContext extends TableElementExprContext {
    public constructor(ctx: TableElementExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INDEX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INDEX, 0)!;
    }
    public tableIndexDfnt(): TableIndexDfntContext {
        return this.getRuleContext(0, TableIndexDfntContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableElementExprIndex) {
             listener.enterTableElementExprIndex(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableElementExprIndex) {
             listener.exitTableElementExprIndex(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableElementExprIndex) {
            return visitor.visitTableElementExprIndex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableColumnDfntContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext | null {
        return this.getRuleContext(0, ColumnTypeExprContext);
    }
    public tableColumnPropertyExpr(): TableColumnPropertyExprContext | null {
        return this.getRuleContext(0, TableColumnPropertyExprContext);
    }
    public COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMENT, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public codecExpr(): CodecExprContext | null {
        return this.getRuleContext(0, CodecExprContext);
    }
    public TTL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TTL, 0);
    }
    public columnExpr(): ColumnExprContext | null {
        return this.getRuleContext(0, ColumnExprContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableColumnDfnt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableColumnDfnt) {
             listener.enterTableColumnDfnt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableColumnDfnt) {
             listener.exitTableColumnDfnt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableColumnDfnt) {
            return visitor.visitTableColumnDfnt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableColumnPropertyExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEFAULT, 0);
    }
    public MATERIALIZED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MATERIALIZED, 0);
    }
    public ALIAS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALIAS, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableColumnPropertyExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableColumnPropertyExpr) {
             listener.enterTableColumnPropertyExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableColumnPropertyExpr) {
             listener.exitTableColumnPropertyExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableColumnPropertyExpr) {
            return visitor.visitTableColumnPropertyExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableIndexDfntContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public TYPE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TYPE, 0)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext {
        return this.getRuleContext(0, ColumnTypeExprContext)!;
    }
    public GRANULARITY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.GRANULARITY, 0)!;
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableIndexDfnt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableIndexDfnt) {
             listener.enterTableIndexDfnt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableIndexDfnt) {
             listener.exitTableIndexDfnt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableIndexDfnt) {
            return visitor.visitTableIndexDfnt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableProjectionDfntContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public projectionSelectStmt(): ProjectionSelectStmtContext {
        return this.getRuleContext(0, ProjectionSelectStmtContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableProjectionDfnt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableProjectionDfnt) {
             listener.enterTableProjectionDfnt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableProjectionDfnt) {
             listener.exitTableProjectionDfnt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableProjectionDfnt) {
            return visitor.visitTableProjectionDfnt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CodecExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CODEC(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CODEC, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public codecArgExpr(): CodecArgExprContext[];
    public codecArgExpr(i: number): CodecArgExprContext | null;
    public codecArgExpr(i?: number): CodecArgExprContext[] | CodecArgExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CodecArgExprContext);
        }

        return this.getRuleContext(i, CodecArgExprContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_codecExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterCodecExpr) {
             listener.enterCodecExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitCodecExpr) {
             listener.exitCodecExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCodecExpr) {
            return visitor.visitCodecExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CodecArgExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_codecArgExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterCodecArgExpr) {
             listener.enterCodecArgExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitCodecArgExpr) {
             listener.exitCodecArgExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitCodecArgExpr) {
            return visitor.visitCodecArgExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TtlExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public DELETE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DELETE, 0);
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TO, 0);
    }
    public DISK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISK, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public VOLUME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VOLUME, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_ttlExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTtlExpr) {
             listener.enterTtlExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTtlExpr) {
             listener.exitTtlExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTtlExpr) {
            return visitor.visitTtlExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DescribeStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableExpr(): TableExprContext {
        return this.getRuleContext(0, TableExprContext)!;
    }
    public DESCRIBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESCRIBE, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESC, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_describeStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDescribeStmt) {
             listener.enterDescribeStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDescribeStmt) {
             listener.exitDescribeStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDescribeStmt) {
            return visitor.visitDescribeStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DropStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dropStmt;
    }
    public override copyFrom(ctx: DropStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class DropDatabaseStmtContext extends DropStmtContext {
    public constructor(ctx: DropStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATABASE, 0)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        return this.getRuleContext(0, DatabaseIdentifierContext)!;
    }
    public DETACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DETACH, 0);
    }
    public DROP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DROP, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDropDatabaseStmt) {
             listener.enterDropDatabaseStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDropDatabaseStmt) {
             listener.exitDropDatabaseStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDropDatabaseStmt) {
            return visitor.visitDropDatabaseStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DropTableStmtContext extends DropStmtContext {
    public constructor(ctx: DropStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public DETACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DETACH, 0);
    }
    public DROP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DROP, 0);
    }
    public DICTIONARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARY, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public VIEW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VIEW, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public NO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NO, 0);
    }
    public DELAY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DELAY, 0);
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDropTableStmt) {
             listener.enterDropTableStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDropTableStmt) {
             listener.exitDropTableStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDropTableStmt) {
            return visitor.visitDropTableStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExistsStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_existsStmt;
    }
    public override copyFrom(ctx: ExistsStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class ExistsTableStmtContext extends ExistsStmtContext {
    public constructor(ctx: ExistsStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EXISTS, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public DICTIONARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARY, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public VIEW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VIEW, 0);
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterExistsTableStmt) {
             listener.enterExistsTableStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitExistsTableStmt) {
             listener.exitExistsTableStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitExistsTableStmt) {
            return visitor.visitExistsTableStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExistsDatabaseStmtContext extends ExistsStmtContext {
    public constructor(ctx: ExistsStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXISTS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EXISTS, 0)!;
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATABASE, 0)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        return this.getRuleContext(0, DatabaseIdentifierContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterExistsDatabaseStmt) {
             listener.enterExistsDatabaseStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitExistsDatabaseStmt) {
             listener.exitExistsDatabaseStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitExistsDatabaseStmt) {
            return visitor.visitExistsDatabaseStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExplainStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_explainStmt;
    }
    public override copyFrom(ctx: ExplainStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class ExplainSyntaxStmtContext extends ExplainStmtContext {
    public constructor(ctx: ExplainStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXPLAIN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EXPLAIN, 0)!;
    }
    public SYNTAX(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SYNTAX, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterExplainSyntaxStmt) {
             listener.enterExplainSyntaxStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitExplainSyntaxStmt) {
             listener.exitExplainSyntaxStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitExplainSyntaxStmt) {
            return visitor.visitExplainSyntaxStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExplainASTStmtContext extends ExplainStmtContext {
    public constructor(ctx: ExplainStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXPLAIN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EXPLAIN, 0)!;
    }
    public AST(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AST, 0)!;
    }
    public query(): QueryContext {
        return this.getRuleContext(0, QueryContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterExplainASTStmt) {
             listener.enterExplainASTStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitExplainASTStmt) {
             listener.exitExplainASTStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitExplainASTStmt) {
            return visitor.visitExplainASTStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InsertStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INSERT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INSERT, 0)!;
    }
    public INTO(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INTO, 0)!;
    }
    public dataClause(): DataClauseContext {
        return this.getRuleContext(0, DataClauseContext)!;
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FUNCTION, 0);
    }
    public tableFunctionExpr(): TableFunctionExprContext | null {
        return this.getRuleContext(0, TableFunctionExprContext);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public columnsClause(): ColumnsClauseContext | null {
        return this.getRuleContext(0, ColumnsClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_insertStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterInsertStmt) {
             listener.enterInsertStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitInsertStmt) {
             listener.exitInsertStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitInsertStmt) {
            return visitor.visitInsertStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public nestedIdentifier(): NestedIdentifierContext[];
    public nestedIdentifier(i: number): NestedIdentifierContext | null;
    public nestedIdentifier(i?: number): NestedIdentifierContext[] | NestedIdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NestedIdentifierContext);
        }

        return this.getRuleContext(i, NestedIdentifierContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnsClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnsClause) {
             listener.enterColumnsClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnsClause) {
             listener.exitColumnsClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnsClause) {
            return visitor.visitColumnsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DataClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_dataClause;
    }
    public override copyFrom(ctx: DataClauseContext): void {
        super.copyFrom(ctx);
    }
}
export class DataClauseValuesContext extends DataClauseContext {
    public constructor(ctx: DataClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VALUES(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.VALUES, 0)!;
    }
    public assignmentValues(): AssignmentValuesContext[];
    public assignmentValues(i: number): AssignmentValuesContext | null;
    public assignmentValues(i?: number): AssignmentValuesContext[] | AssignmentValuesContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentValuesContext);
        }

        return this.getRuleContext(i, AssignmentValuesContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDataClauseValues) {
             listener.enterDataClauseValues(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDataClauseValues) {
             listener.exitDataClauseValues(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDataClauseValues) {
            return visitor.visitDataClauseValues(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DataClauseFormatContext extends DataClauseContext {
    public constructor(ctx: DataClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FORMAT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FORMAT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDataClauseFormat) {
             listener.enterDataClauseFormat(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDataClauseFormat) {
             listener.exitDataClauseFormat(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDataClauseFormat) {
            return visitor.visitDataClauseFormat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DataClauseSelectContext extends DataClauseContext {
    public constructor(ctx: DataClauseContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        return this.getRuleContext(0, SelectUnionStmtContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EOF, 0)!;
    }
    public SEMICOLON(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SEMICOLON, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDataClauseSelect) {
             listener.enterDataClauseSelect(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDataClauseSelect) {
             listener.exitDataClauseSelect(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDataClauseSelect) {
            return visitor.visitDataClauseSelect(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentValuesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public assignmentValue(): AssignmentValueContext[];
    public assignmentValue(i: number): AssignmentValueContext | null;
    public assignmentValue(i?: number): AssignmentValueContext[] | AssignmentValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssignmentValueContext);
        }

        return this.getRuleContext(i, AssignmentValueContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_assignmentValues;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAssignmentValues) {
             listener.enterAssignmentValues(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAssignmentValues) {
             listener.exitAssignmentValues(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentValues) {
            return visitor.visitAssignmentValues(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_assignmentValue;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAssignmentValue) {
             listener.enterAssignmentValue(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAssignmentValue) {
             listener.exitAssignmentValue(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentValue) {
            return visitor.visitAssignmentValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KillStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_killStmt;
    }
    public override copyFrom(ctx: KillStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class KillMutationStmtContext extends KillStmtContext {
    public constructor(ctx: KillStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KILL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.KILL, 0)!;
    }
    public MUTATION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.MUTATION, 0)!;
    }
    public whereClause(): WhereClauseContext {
        return this.getRuleContext(0, WhereClauseContext)!;
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public SYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYNC, 0);
    }
    public ASYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASYNC, 0);
    }
    public TEST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEST, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterKillMutationStmt) {
             listener.enterKillMutationStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitKillMutationStmt) {
             listener.exitKillMutationStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitKillMutationStmt) {
            return visitor.visitKillMutationStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OptimizeStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OPTIMIZE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.OPTIMIZE, 0)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public partitionClause(): PartitionClauseContext | null {
        return this.getRuleContext(0, PartitionClauseContext);
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FINAL, 0);
    }
    public DEDUPLICATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEDUPLICATE, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_optimizeStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterOptimizeStmt) {
             listener.enterOptimizeStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitOptimizeStmt) {
             listener.exitOptimizeStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitOptimizeStmt) {
            return visitor.visitOptimizeStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RenameStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RENAME(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RENAME, 0)!;
    }
    public TABLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext[];
    public tableIdentifier(i: number): TableIdentifierContext | null;
    public tableIdentifier(i?: number): TableIdentifierContext[] | TableIdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableIdentifierContext);
        }

        return this.getRuleContext(i, TableIdentifierContext);
    }
    public TO(): antlr.TerminalNode[];
    public TO(i: number): antlr.TerminalNode | null;
    public TO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.TO);
    	} else {
    		return this.getToken(ClickHouseParser.TO, i);
    	}
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_renameStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterRenameStmt) {
             listener.enterRenameStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitRenameStmt) {
             listener.exitRenameStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitRenameStmt) {
            return visitor.visitRenameStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ProjectionSelectStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public SELECT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SELECT, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public withClause(): WithClauseContext | null {
        return this.getRuleContext(0, WithClauseContext);
    }
    public groupByClause(): GroupByClauseContext | null {
        return this.getRuleContext(0, GroupByClauseContext);
    }
    public projectionOrderByClause(): ProjectionOrderByClauseContext | null {
        return this.getRuleContext(0, ProjectionOrderByClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_projectionSelectStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterProjectionSelectStmt) {
             listener.enterProjectionSelectStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitProjectionSelectStmt) {
             listener.exitProjectionSelectStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitProjectionSelectStmt) {
            return visitor.visitProjectionSelectStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectUnionStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectStmtWithParens(): SelectStmtWithParensContext[];
    public selectStmtWithParens(i: number): SelectStmtWithParensContext | null;
    public selectStmtWithParens(i?: number): SelectStmtWithParensContext[] | SelectStmtWithParensContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SelectStmtWithParensContext);
        }

        return this.getRuleContext(i, SelectStmtWithParensContext);
    }
    public UNION(): antlr.TerminalNode[];
    public UNION(i: number): antlr.TerminalNode | null;
    public UNION(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.UNION);
    	} else {
    		return this.getToken(ClickHouseParser.UNION, i);
    	}
    }
    public ALL(): antlr.TerminalNode[];
    public ALL(i: number): antlr.TerminalNode | null;
    public ALL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.ALL);
    	} else {
    		return this.getToken(ClickHouseParser.ALL, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_selectUnionStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSelectUnionStmt) {
             listener.enterSelectUnionStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSelectUnionStmt) {
             listener.exitSelectUnionStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSelectUnionStmt) {
            return visitor.visitSelectUnionStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectStmtWithParensContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectStmt(): SelectStmtContext | null {
        return this.getRuleContext(0, SelectStmtContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public selectUnionStmt(): SelectUnionStmtContext | null {
        return this.getRuleContext(0, SelectUnionStmtContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_selectStmtWithParens;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSelectStmtWithParens) {
             listener.enterSelectStmtWithParens(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSelectStmtWithParens) {
             listener.exitSelectStmtWithParens(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSelectStmtWithParens) {
            return visitor.visitSelectStmtWithParens(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SelectStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SELECT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SELECT, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public withClause(): WithClauseContext | null {
        return this.getRuleContext(0, WithClauseContext);
    }
    public DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTINCT, 0);
    }
    public topClause(): TopClauseContext | null {
        return this.getRuleContext(0, TopClauseContext);
    }
    public fromClause(): FromClauseContext | null {
        return this.getRuleContext(0, FromClauseContext);
    }
    public arrayJoinClause(): ArrayJoinClauseContext | null {
        return this.getRuleContext(0, ArrayJoinClauseContext);
    }
    public windowClause(): WindowClauseContext | null {
        return this.getRuleContext(0, WindowClauseContext);
    }
    public prewhereClause(): PrewhereClauseContext | null {
        return this.getRuleContext(0, PrewhereClauseContext);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public groupByClause(): GroupByClauseContext | null {
        return this.getRuleContext(0, GroupByClauseContext);
    }
    public WITH(): antlr.TerminalNode[];
    public WITH(i: number): antlr.TerminalNode | null;
    public WITH(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.WITH);
    	} else {
    		return this.getToken(ClickHouseParser.WITH, i);
    	}
    }
    public TOTALS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TOTALS, 0);
    }
    public havingClause(): HavingClauseContext | null {
        return this.getRuleContext(0, HavingClauseContext);
    }
    public orderByClause(): OrderByClauseContext | null {
        return this.getRuleContext(0, OrderByClauseContext);
    }
    public limitByClause(): LimitByClauseContext | null {
        return this.getRuleContext(0, LimitByClauseContext);
    }
    public limitClause(): LimitClauseContext | null {
        return this.getRuleContext(0, LimitClauseContext);
    }
    public settingsClause(): SettingsClauseContext | null {
        return this.getRuleContext(0, SettingsClauseContext);
    }
    public CUBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CUBE, 0);
    }
    public ROLLUP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROLLUP, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_selectStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSelectStmt) {
             listener.enterSelectStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSelectStmt) {
             listener.exitSelectStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSelectStmt) {
            return visitor.visitSelectStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WITH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WITH, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_withClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterWithClause) {
             listener.enterWithClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitWithClause) {
             listener.exitWithClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWithClause) {
            return visitor.visitWithClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TopClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TOP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TOP, 0)!;
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0)!;
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WITH, 0);
    }
    public TIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIES, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_topClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTopClause) {
             listener.enterTopClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTopClause) {
             listener.exitTopClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTopClause) {
            return visitor.visitTopClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FromClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FROM, 0)!;
    }
    public joinExpr(): JoinExprContext {
        return this.getRuleContext(0, JoinExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_fromClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterFromClause) {
             listener.enterFromClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitFromClause) {
             listener.exitFromClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitFromClause) {
            return visitor.visitFromClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayJoinClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ARRAY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ARRAY, 0)!;
    }
    public JOIN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.JOIN, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEFT, 0);
    }
    public INNER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INNER, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_arrayJoinClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterArrayJoinClause) {
             listener.enterArrayJoinClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitArrayJoinClause) {
             listener.exitArrayJoinClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitArrayJoinClause) {
            return visitor.visitArrayJoinClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WINDOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WINDOW, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public windowExpr(): WindowExprContext {
        return this.getRuleContext(0, WindowExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_windowClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterWindowClause) {
             listener.enterWindowClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitWindowClause) {
             listener.exitWindowClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWindowClause) {
            return visitor.visitWindowClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrewhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PREWHERE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PREWHERE, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_prewhereClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterPrewhereClause) {
             listener.enterPrewhereClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitPrewhereClause) {
             listener.exitPrewhereClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitPrewhereClause) {
            return visitor.visitPrewhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHERE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WHERE, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_whereClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterWhereClause) {
             listener.enterWhereClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitWhereClause) {
             listener.exitWhereClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWhereClause) {
            return visitor.visitWhereClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public GROUP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.GROUP, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public CUBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CUBE, 0);
    }
    public ROLLUP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROLLUP, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_groupByClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterGroupByClause) {
             listener.enterGroupByClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitGroupByClause) {
             listener.exitGroupByClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitGroupByClause) {
            return visitor.visitGroupByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HavingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HAVING(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.HAVING, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_havingClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterHavingClause) {
             listener.enterHavingClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitHavingClause) {
             listener.exitHavingClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitHavingClause) {
            return visitor.visitHavingClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ORDER, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public orderExprList(): OrderExprListContext {
        return this.getRuleContext(0, OrderExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_orderByClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterOrderByClause) {
             listener.enterOrderByClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitOrderByClause) {
             listener.exitOrderByClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitOrderByClause) {
            return visitor.visitOrderByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ProjectionOrderByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ORDER, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_projectionOrderByClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterProjectionOrderByClause) {
             listener.enterProjectionOrderByClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitProjectionOrderByClause) {
             listener.exitProjectionOrderByClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitProjectionOrderByClause) {
            return visitor.visitProjectionOrderByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LimitByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LIMIT, 0)!;
    }
    public limitExpr(): LimitExprContext {
        return this.getRuleContext(0, LimitExprContext)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_limitByClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterLimitByClause) {
             listener.enterLimitByClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitLimitByClause) {
             listener.exitLimitByClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLimitByClause) {
            return visitor.visitLimitByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LimitClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LIMIT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LIMIT, 0)!;
    }
    public limitExpr(): LimitExprContext {
        return this.getRuleContext(0, LimitExprContext)!;
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WITH, 0);
    }
    public TIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIES, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_limitClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterLimitClause) {
             listener.enterLimitClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitLimitClause) {
             listener.exitLimitClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLimitClause) {
            return visitor.visitLimitClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SettingsClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SETTINGS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SETTINGS, 0)!;
    }
    public settingExprList(): SettingExprListContext {
        return this.getRuleContext(0, SettingExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_settingsClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSettingsClause) {
             listener.enterSettingsClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSettingsClause) {
             listener.exitSettingsClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSettingsClause) {
            return visitor.visitSettingsClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_joinExpr;
    }
    public override copyFrom(ctx: JoinExprContext): void {
        super.copyFrom(ctx);
    }
}
export class JoinExprOpContext extends JoinExprContext {
    public constructor(ctx: JoinExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public joinExpr(): JoinExprContext[];
    public joinExpr(i: number): JoinExprContext | null;
    public joinExpr(i?: number): JoinExprContext[] | JoinExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(JoinExprContext);
        }

        return this.getRuleContext(i, JoinExprContext);
    }
    public JOIN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.JOIN, 0)!;
    }
    public joinConstraintClause(): JoinConstraintClauseContext {
        return this.getRuleContext(0, JoinConstraintClauseContext)!;
    }
    public joinOp(): JoinOpContext | null {
        return this.getRuleContext(0, JoinOpContext);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GLOBAL, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOCAL, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterJoinExprOp) {
             listener.enterJoinExprOp(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitJoinExprOp) {
             listener.exitJoinExprOp(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinExprOp) {
            return visitor.visitJoinExprOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinExprTableContext extends JoinExprContext {
    public constructor(ctx: JoinExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableExpr(): TableExprContext {
        return this.getRuleContext(0, TableExprContext)!;
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FINAL, 0);
    }
    public sampleClause(): SampleClauseContext | null {
        return this.getRuleContext(0, SampleClauseContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterJoinExprTable) {
             listener.enterJoinExprTable(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitJoinExprTable) {
             listener.exitJoinExprTable(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinExprTable) {
            return visitor.visitJoinExprTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinExprParensContext extends JoinExprContext {
    public constructor(ctx: JoinExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public joinExpr(): JoinExprContext {
        return this.getRuleContext(0, JoinExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterJoinExprParens) {
             listener.enterJoinExprParens(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitJoinExprParens) {
             listener.exitJoinExprParens(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinExprParens) {
            return visitor.visitJoinExprParens(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinExprCrossOpContext extends JoinExprContext {
    public constructor(ctx: JoinExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public joinExpr(): JoinExprContext[];
    public joinExpr(i: number): JoinExprContext | null;
    public joinExpr(i?: number): JoinExprContext[] | JoinExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(JoinExprContext);
        }

        return this.getRuleContext(i, JoinExprContext);
    }
    public joinOpCross(): JoinOpCrossContext {
        return this.getRuleContext(0, JoinOpCrossContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterJoinExprCrossOp) {
             listener.enterJoinExprCrossOp(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitJoinExprCrossOp) {
             listener.exitJoinExprCrossOp(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinExprCrossOp) {
            return visitor.visitJoinExprCrossOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_joinOp;
    }
    public override copyFrom(ctx: JoinOpContext): void {
        super.copyFrom(ctx);
    }
}
export class JoinOpFullContext extends JoinOpContext {
    public constructor(ctx: JoinOpContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FULL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FULL, 0);
    }
    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTER, 0);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALL, 0);
    }
    public ANY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANY, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterJoinOpFull) {
             listener.enterJoinOpFull(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitJoinOpFull) {
             listener.exitJoinOpFull(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinOpFull) {
            return visitor.visitJoinOpFull(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinOpInnerContext extends JoinOpContext {
    public constructor(ctx: JoinOpContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INNER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INNER, 0);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALL, 0);
    }
    public ANY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANY, 0);
    }
    public ASOF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASOF, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterJoinOpInner) {
             listener.enterJoinOpInner(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitJoinOpInner) {
             listener.exitJoinOpInner(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinOpInner) {
            return visitor.visitJoinOpInner(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class JoinOpLeftRightContext extends JoinOpContext {
    public constructor(ctx: JoinOpContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEFT, 0);
    }
    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RIGHT, 0);
    }
    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTER, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SEMI, 0);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALL, 0);
    }
    public ANTI(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANTI, 0);
    }
    public ANY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANY, 0);
    }
    public ASOF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASOF, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterJoinOpLeftRight) {
             listener.enterJoinOpLeftRight(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitJoinOpLeftRight) {
             listener.exitJoinOpLeftRight(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinOpLeftRight) {
            return visitor.visitJoinOpLeftRight(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinOpCrossContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CROSS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CROSS, 0);
    }
    public JOIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.JOIN, 0);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GLOBAL, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOCAL, 0);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_joinOpCross;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterJoinOpCross) {
             listener.enterJoinOpCross(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitJoinOpCross) {
             listener.exitJoinOpCross(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinOpCross) {
            return visitor.visitJoinOpCross(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class JoinConstraintClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ON(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ON, 0);
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public USING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.USING, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_joinConstraintClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterJoinConstraintClause) {
             listener.enterJoinConstraintClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitJoinConstraintClause) {
             listener.exitJoinConstraintClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitJoinConstraintClause) {
            return visitor.visitJoinConstraintClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SampleClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SAMPLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SAMPLE, 0)!;
    }
    public ratioExpr(): RatioExprContext[];
    public ratioExpr(i: number): RatioExprContext | null;
    public ratioExpr(i?: number): RatioExprContext[] | RatioExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(RatioExprContext);
        }

        return this.getRuleContext(i, RatioExprContext);
    }
    public OFFSET(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OFFSET, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_sampleClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSampleClause) {
             listener.enterSampleClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSampleClause) {
             listener.exitSampleClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSampleClause) {
            return visitor.visitSampleClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LimitExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMA, 0);
    }
    public OFFSET(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OFFSET, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_limitExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterLimitExpr) {
             listener.enterLimitExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitLimitExpr) {
             listener.exitLimitExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLimitExpr) {
            return visitor.visitLimitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderExprListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public orderExpr(): OrderExprContext[];
    public orderExpr(i: number): OrderExprContext | null;
    public orderExpr(i?: number): OrderExprContext[] | OrderExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(OrderExprContext);
        }

        return this.getRuleContext(i, OrderExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_orderExprList;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterOrderExprList) {
             listener.enterOrderExprList(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitOrderExprList) {
             listener.exitOrderExprList(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitOrderExprList) {
            return visitor.visitOrderExprList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class OrderExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public NULLS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NULLS, 0);
    }
    public COLLATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COLLATE, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public ASCENDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASCENDING, 0);
    }
    public DESCENDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESCENDING, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESC, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FIRST, 0);
    }
    public LAST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LAST, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_orderExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterOrderExpr) {
             listener.enterOrderExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitOrderExpr) {
             listener.exitOrderExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitOrderExpr) {
            return visitor.visitOrderExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RatioExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public numberLiteral(): NumberLiteralContext[];
    public numberLiteral(i: number): NumberLiteralContext | null;
    public numberLiteral(i?: number): NumberLiteralContext[] | NumberLiteralContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NumberLiteralContext);
        }

        return this.getRuleContext(i, NumberLiteralContext);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SLASH, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_ratioExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterRatioExpr) {
             listener.enterRatioExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitRatioExpr) {
             listener.exitRatioExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitRatioExpr) {
            return visitor.visitRatioExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SettingExprListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public settingExpr(): SettingExprContext[];
    public settingExpr(i: number): SettingExprContext | null;
    public settingExpr(i?: number): SettingExprContext[] | SettingExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SettingExprContext);
        }

        return this.getRuleContext(i, SettingExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_settingExprList;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSettingExprList) {
             listener.enterSettingExprList(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSettingExprList) {
             listener.exitSettingExprList(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSettingExprList) {
            return visitor.visitSettingExprList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SettingExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public EQ_SINGLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EQ_SINGLE, 0)!;
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_settingExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSettingExpr) {
             listener.enterSettingExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSettingExpr) {
             listener.exitSettingExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSettingExpr) {
            return visitor.visitSettingExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WindowExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public winPartitionByClause(): WinPartitionByClauseContext | null {
        return this.getRuleContext(0, WinPartitionByClauseContext);
    }
    public winOrderByClause(): WinOrderByClauseContext | null {
        return this.getRuleContext(0, WinOrderByClauseContext);
    }
    public winFrameClause(): WinFrameClauseContext | null {
        return this.getRuleContext(0, WinFrameClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_windowExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterWindowExpr) {
             listener.enterWindowExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitWindowExpr) {
             listener.exitWindowExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWindowExpr) {
            return visitor.visitWindowExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WinPartitionByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PARTITION(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.PARTITION, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_winPartitionByClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterWinPartitionByClause) {
             listener.enterWinPartitionByClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitWinPartitionByClause) {
             listener.exitWinPartitionByClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWinPartitionByClause) {
            return visitor.visitWinPartitionByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WinOrderByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ORDER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ORDER, 0)!;
    }
    public BY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BY, 0)!;
    }
    public orderExprList(): OrderExprListContext {
        return this.getRuleContext(0, OrderExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_winOrderByClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterWinOrderByClause) {
             listener.enterWinOrderByClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitWinOrderByClause) {
             listener.exitWinOrderByClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWinOrderByClause) {
            return visitor.visitWinOrderByClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WinFrameClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public winFrameExtend(): WinFrameExtendContext {
        return this.getRuleContext(0, WinFrameExtendContext)!;
    }
    public ROWS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROWS, 0);
    }
    public RANGE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RANGE, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_winFrameClause;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterWinFrameClause) {
             listener.enterWinFrameClause(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitWinFrameClause) {
             listener.exitWinFrameClause(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWinFrameClause) {
            return visitor.visitWinFrameClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WinFrameExtendContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_winFrameExtend;
    }
    public override copyFrom(ctx: WinFrameExtendContext): void {
        super.copyFrom(ctx);
    }
}
export class FrameStartContext extends WinFrameExtendContext {
    public constructor(ctx: WinFrameExtendContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public winFrameBound(): WinFrameBoundContext {
        return this.getRuleContext(0, WinFrameBoundContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterFrameStart) {
             listener.enterFrameStart(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitFrameStart) {
             listener.exitFrameStart(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitFrameStart) {
            return visitor.visitFrameStart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FrameBetweenContext extends WinFrameExtendContext {
    public constructor(ctx: WinFrameExtendContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BETWEEN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BETWEEN, 0)!;
    }
    public winFrameBound(): WinFrameBoundContext[];
    public winFrameBound(i: number): WinFrameBoundContext | null;
    public winFrameBound(i?: number): WinFrameBoundContext[] | WinFrameBoundContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WinFrameBoundContext);
        }

        return this.getRuleContext(i, WinFrameBoundContext);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AND, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterFrameBetween) {
             listener.enterFrameBetween(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitFrameBetween) {
             listener.exitFrameBetween(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitFrameBetween) {
            return visitor.visitFrameBetween(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WinFrameBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CURRENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CURRENT, 0);
    }
    public ROW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROW, 0);
    }
    public UNBOUNDED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UNBOUNDED, 0);
    }
    public PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PRECEDING, 0);
    }
    public FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FOLLOWING, 0);
    }
    public numberLiteral(): NumberLiteralContext | null {
        return this.getRuleContext(0, NumberLiteralContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_winFrameBound;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterWinFrameBound) {
             listener.enterWinFrameBound(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitWinFrameBound) {
             listener.exitWinFrameBound(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWinFrameBound) {
            return visitor.visitWinFrameBound(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SET(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SET, 0)!;
    }
    public settingExprList(): SettingExprListContext {
        return this.getRuleContext(0, SettingExprListContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_setStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSetStmt) {
             listener.enterSetStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSetStmt) {
             listener.exitSetStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSetStmt) {
            return visitor.visitSetStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ShowStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_showStmt;
    }
    public override copyFrom(ctx: ShowStmtContext): void {
        super.copyFrom(ctx);
    }
}
export class ShowCreateDatabaseStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CREATE, 0)!;
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATABASE, 0)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        return this.getRuleContext(0, DatabaseIdentifierContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterShowCreateDatabaseStmt) {
             listener.enterShowCreateDatabaseStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitShowCreateDatabaseStmt) {
             listener.exitShowCreateDatabaseStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowCreateDatabaseStmt) {
            return visitor.visitShowCreateDatabaseStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowDatabasesStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public DATABASES(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATABASES, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterShowDatabasesStmt) {
             listener.enterShowDatabasesStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitShowDatabasesStmt) {
             listener.exitShowDatabasesStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowDatabasesStmt) {
            return visitor.visitShowDatabasesStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCreateTableStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CREATE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterShowCreateTableStmt) {
             listener.enterShowCreateTableStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitShowCreateTableStmt) {
             listener.exitShowCreateTableStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowCreateTableStmt) {
            return visitor.visitShowCreateTableStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowTablesStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public TABLES(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TABLES, 0)!;
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public databaseIdentifier(): DatabaseIdentifierContext | null {
        return this.getRuleContext(0, DatabaseIdentifierContext);
    }
    public LIKE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIKE, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public whereClause(): WhereClauseContext | null {
        return this.getRuleContext(0, WhereClauseContext);
    }
    public limitClause(): LimitClauseContext | null {
        return this.getRuleContext(0, LimitClauseContext);
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FROM, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterShowTablesStmt) {
             listener.enterShowTablesStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitShowTablesStmt) {
             listener.exitShowTablesStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowTablesStmt) {
            return visitor.visitShowTablesStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowDictionariesStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public DICTIONARIES(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DICTIONARIES, 0)!;
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FROM, 0);
    }
    public databaseIdentifier(): DatabaseIdentifierContext | null {
        return this.getRuleContext(0, DatabaseIdentifierContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterShowDictionariesStmt) {
             listener.enterShowDictionariesStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitShowDictionariesStmt) {
             listener.exitShowDictionariesStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowDictionariesStmt) {
            return visitor.visitShowDictionariesStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ShowCreateDictionaryStmtContext extends ShowStmtContext {
    public constructor(ctx: ShowStmtContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SHOW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SHOW, 0)!;
    }
    public CREATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CREATE, 0)!;
    }
    public DICTIONARY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DICTIONARY, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterShowCreateDictionaryStmt) {
             listener.enterShowCreateDictionaryStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitShowCreateDictionaryStmt) {
             listener.exitShowCreateDictionaryStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitShowCreateDictionaryStmt) {
            return visitor.visitShowCreateDictionaryStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SystemStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SYSTEM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SYSTEM, 0)!;
    }
    public FLUSH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FLUSH, 0);
    }
    public DISTRIBUTED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTRIBUTED, 0);
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public LOGS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOGS, 0);
    }
    public RELOAD(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RELOAD, 0);
    }
    public DICTIONARIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARIES, 0);
    }
    public DICTIONARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARY, 0);
    }
    public START(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.START, 0);
    }
    public STOP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STOP, 0);
    }
    public SENDS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SENDS, 0);
    }
    public FETCHES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FETCHES, 0);
    }
    public MERGES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MERGES, 0);
    }
    public TTL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TTL, 0);
    }
    public REPLICATED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLICATED, 0);
    }
    public SYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYNC, 0);
    }
    public REPLICA(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLICA, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_systemStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterSystemStmt) {
             listener.enterSystemStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitSystemStmt) {
             listener.exitSystemStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitSystemStmt) {
            return visitor.visitSystemStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TruncateStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRUNCATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TRUNCATE, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public clusterClause(): ClusterClauseContext | null {
        return this.getRuleContext(0, ClusterClauseContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_truncateStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTruncateStmt) {
             listener.enterTruncateStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTruncateStmt) {
             listener.exitTruncateStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTruncateStmt) {
            return visitor.visitTruncateStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UseStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public USE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.USE, 0)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext {
        return this.getRuleContext(0, DatabaseIdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_useStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterUseStmt) {
             listener.enterUseStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitUseStmt) {
             listener.exitUseStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitUseStmt) {
            return visitor.visitUseStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WatchStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WATCH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.WATCH, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public EVENTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EVENTS, 0);
    }
    public LIMIT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIMIT, 0);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_watchStmt;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterWatchStmt) {
             listener.enterWatchStmt(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitWatchStmt) {
             listener.exitWatchStmt(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitWatchStmt) {
            return visitor.visitWatchStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnTypeExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnTypeExpr;
    }
    public override copyFrom(ctx: ColumnTypeExprContext): void {
        super.copyFrom(ctx);
    }
}
export class ColumnTypeExprNestedContext extends ColumnTypeExprContext {
    public constructor(ctx: ColumnTypeExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext[];
    public columnTypeExpr(i: number): ColumnTypeExprContext | null;
    public columnTypeExpr(i?: number): ColumnTypeExprContext[] | ColumnTypeExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeExprContext);
        }

        return this.getRuleContext(i, ColumnTypeExprContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnTypeExprNested) {
             listener.enterColumnTypeExprNested(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnTypeExprNested) {
             listener.exitColumnTypeExprNested(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnTypeExprNested) {
            return visitor.visitColumnTypeExprNested(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnTypeExprParamContext extends ColumnTypeExprContext {
    public constructor(ctx: ColumnTypeExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnTypeExprParam) {
             listener.enterColumnTypeExprParam(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnTypeExprParam) {
             listener.exitColumnTypeExprParam(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnTypeExprParam) {
            return visitor.visitColumnTypeExprParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnTypeExprSimpleContext extends ColumnTypeExprContext {
    public constructor(ctx: ColumnTypeExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnTypeExprSimple) {
             listener.enterColumnTypeExprSimple(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnTypeExprSimple) {
             listener.exitColumnTypeExprSimple(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnTypeExprSimple) {
            return visitor.visitColumnTypeExprSimple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnTypeExprComplexContext extends ColumnTypeExprContext {
    public constructor(ctx: ColumnTypeExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext[];
    public columnTypeExpr(i: number): ColumnTypeExprContext | null;
    public columnTypeExpr(i?: number): ColumnTypeExprContext[] | ColumnTypeExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnTypeExprContext);
        }

        return this.getRuleContext(i, ColumnTypeExprContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnTypeExprComplex) {
             listener.enterColumnTypeExprComplex(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnTypeExprComplex) {
             listener.exitColumnTypeExprComplex(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnTypeExprComplex) {
            return visitor.visitColumnTypeExprComplex(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnTypeExprEnumContext extends ColumnTypeExprContext {
    public constructor(ctx: ColumnTypeExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public enumValue(): EnumValueContext[];
    public enumValue(i: number): EnumValueContext | null;
    public enumValue(i?: number): EnumValueContext[] | EnumValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumValueContext);
        }

        return this.getRuleContext(i, EnumValueContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnTypeExprEnum) {
             listener.enterColumnTypeExprEnum(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnTypeExprEnum) {
             listener.exitColumnTypeExprEnum(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnTypeExprEnum) {
            return visitor.visitColumnTypeExprEnum(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnExprListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnsExpr(): ColumnsExprContext[];
    public columnsExpr(i: number): ColumnsExprContext | null;
    public columnsExpr(i?: number): ColumnsExprContext[] | ColumnsExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnsExprContext);
        }

        return this.getRuleContext(i, ColumnsExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnExprList;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprList) {
             listener.enterColumnExprList(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprList) {
             listener.exitColumnExprList(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprList) {
            return visitor.visitColumnExprList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnsExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnsExpr;
    }
    public override copyFrom(ctx: ColumnsExprContext): void {
        super.copyFrom(ctx);
    }
}
export class ColumnsExprColumnContext extends ColumnsExprContext {
    public constructor(ctx: ColumnsExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnsExprColumn) {
             listener.enterColumnsExprColumn(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnsExprColumn) {
             listener.exitColumnsExprColumn(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnsExprColumn) {
            return visitor.visitColumnsExprColumn(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnsExprAsteriskContext extends ColumnsExprContext {
    public constructor(ctx: ColumnsExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ASTERISK(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ASTERISK, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnsExprAsterisk) {
             listener.enterColumnsExprAsterisk(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnsExprAsterisk) {
             listener.exitColumnsExprAsterisk(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnsExprAsterisk) {
            return visitor.visitColumnsExprAsterisk(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnsExprSubqueryContext extends ColumnsExprContext {
    public constructor(ctx: ColumnsExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        return this.getRuleContext(0, SelectUnionStmtContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnsExprSubquery) {
             listener.enterColumnsExprSubquery(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnsExprSubquery) {
             listener.exitColumnsExprSubquery(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnsExprSubquery) {
            return visitor.visitColumnsExprSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnExpr;
    }
    public override copyFrom(ctx: ColumnExprContext): void {
        super.copyFrom(ctx);
    }
}
export class ColumnExprTernaryOpContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public QUERY(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.QUERY, 0)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.COLON, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprTernaryOp) {
             listener.enterColumnExprTernaryOp(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprTernaryOp) {
             listener.exitColumnExprTernaryOp(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprTernaryOp) {
            return visitor.visitColumnExprTernaryOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprAliasContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AS, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprAlias) {
             listener.enterColumnExprAlias(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprAlias) {
             listener.exitColumnExprAlias(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprAlias) {
            return visitor.visitColumnExprAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprExtractContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public EXTRACT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EXTRACT, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public interval(): IntervalContext {
        return this.getRuleContext(0, IntervalContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FROM, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprExtract) {
             listener.enterColumnExprExtract(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprExtract) {
             listener.exitColumnExprExtract(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprExtract) {
            return visitor.visitColumnExprExtract(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprNegateContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DASH(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DASH, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprNegate) {
             listener.enterColumnExprNegate(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprNegate) {
             listener.exitColumnExprNegate(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprNegate) {
            return visitor.visitColumnExprNegate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprSubqueryContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        return this.getRuleContext(0, SelectUnionStmtContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprSubquery) {
             listener.enterColumnExprSubquery(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprSubquery) {
             listener.exitColumnExprSubquery(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprSubquery) {
            return visitor.visitColumnExprSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprLiteralContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprLiteral) {
             listener.enterColumnExprLiteral(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprLiteral) {
             listener.exitColumnExprLiteral(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprLiteral) {
            return visitor.visitColumnExprLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprArrayContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LBRACKET(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LBRACKET, 0)!;
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RBRACKET, 0)!;
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprArray) {
             listener.enterColumnExprArray(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprArray) {
             listener.exitColumnExprArray(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprArray) {
            return visitor.visitColumnExprArray(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprSubstringContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SUBSTRING(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.SUBSTRING, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FROM, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public FOR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FOR, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprSubstring) {
             listener.enterColumnExprSubstring(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprSubstring) {
             listener.exitColumnExprSubstring(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprSubstring) {
            return visitor.visitColumnExprSubstring(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprCastContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CAST(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CAST, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public AS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AS, 0)!;
    }
    public columnTypeExpr(): ColumnTypeExprContext {
        return this.getRuleContext(0, ColumnTypeExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprCast) {
             listener.enterColumnExprCast(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprCast) {
             listener.exitColumnExprCast(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprCast) {
            return visitor.visitColumnExprCast(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprOrContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public OR(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.OR, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprOr) {
             listener.enterColumnExprOr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprOr) {
             listener.exitColumnExprOr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprOr) {
            return visitor.visitColumnExprOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprPrecedence1Context extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public ASTERISK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASTERISK, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SLASH, 0);
    }
    public PERCENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PERCENT, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprPrecedence1) {
             listener.enterColumnExprPrecedence1(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprPrecedence1) {
             listener.exitColumnExprPrecedence1(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprPrecedence1) {
            return visitor.visitColumnExprPrecedence1(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprPrecedence2Context extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PLUS, 0);
    }
    public DASH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DASH, 0);
    }
    public CONCAT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CONCAT, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprPrecedence2) {
             listener.enterColumnExprPrecedence2(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprPrecedence2) {
             listener.exitColumnExprPrecedence2(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprPrecedence2) {
            return visitor.visitColumnExprPrecedence2(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprPrecedence3Context extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public EQ_DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EQ_DOUBLE, 0);
    }
    public EQ_SINGLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EQ_SINGLE, 0);
    }
    public NOT_EQ(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT_EQ, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LE, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GE, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LT, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GT, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public LIKE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIKE, 0);
    }
    public ILIKE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ILIKE, 0);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GLOBAL, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprPrecedence3) {
             listener.enterColumnExprPrecedence3(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprPrecedence3) {
             listener.exitColumnExprPrecedence3(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprPrecedence3) {
            return visitor.visitColumnExprPrecedence3(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprIntervalContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INTERVAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.INTERVAL, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public interval(): IntervalContext {
        return this.getRuleContext(0, IntervalContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprInterval) {
             listener.enterColumnExprInterval(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprInterval) {
             listener.exitColumnExprInterval(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprInterval) {
            return visitor.visitColumnExprInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprIsNullContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public IS(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.IS, 0)!;
    }
    public NULL_SQL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.NULL_SQL, 0)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprIsNull) {
             listener.enterColumnExprIsNull(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprIsNull) {
             listener.exitColumnExprIsNull(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprIsNull) {
            return visitor.visitColumnExprIsNull(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprWinFunctionTargetContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public OVER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.OVER, 0)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprWinFunctionTarget) {
             listener.enterColumnExprWinFunctionTarget(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprWinFunctionTarget) {
             listener.exitColumnExprWinFunctionTarget(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprWinFunctionTarget) {
            return visitor.visitColumnExprWinFunctionTarget(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprTrimContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TRIM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TRIM, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.FROM, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public BOTH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.BOTH, 0);
    }
    public LEADING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEADING, 0);
    }
    public TRAILING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRAILING, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprTrim) {
             listener.enterColumnExprTrim(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprTrim) {
             listener.exitColumnExprTrim(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprTrim) {
            return visitor.visitColumnExprTrim(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprTupleContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnExprList(): ColumnExprListContext {
        return this.getRuleContext(0, ColumnExprListContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprTuple) {
             listener.enterColumnExprTuple(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprTuple) {
             listener.exitColumnExprTuple(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprTuple) {
            return visitor.visitColumnExprTuple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprArrayAccessContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public LBRACKET(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LBRACKET, 0)!;
    }
    public RBRACKET(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RBRACKET, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprArrayAccess) {
             listener.enterColumnExprArrayAccess(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprArrayAccess) {
             listener.exitColumnExprArrayAccess(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprArrayAccess) {
            return visitor.visitColumnExprArrayAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprBetweenContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public BETWEEN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.BETWEEN, 0)!;
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AND, 0)!;
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprBetween) {
             listener.enterColumnExprBetween(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprBetween) {
             listener.exitColumnExprBetween(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprBetween) {
            return visitor.visitColumnExprBetween(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprParensContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprParens) {
             listener.enterColumnExprParens(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprParens) {
             listener.exitColumnExprParens(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprParens) {
            return visitor.visitColumnExprParens(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprTimestampContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TIMESTAMP(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.TIMESTAMP, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprTimestamp) {
             listener.enterColumnExprTimestamp(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprTimestamp) {
             listener.exitColumnExprTimestamp(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprTimestamp) {
            return visitor.visitColumnExprTimestamp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprAndContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public AND(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.AND, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprAnd) {
             listener.enterColumnExprAnd(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprAnd) {
             listener.exitColumnExprAnd(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprAnd) {
            return visitor.visitColumnExprAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprTupleAccessContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DOT, 0)!;
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprTupleAccess) {
             listener.enterColumnExprTupleAccess(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprTupleAccess) {
             listener.exitColumnExprTupleAccess(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprTupleAccess) {
            return visitor.visitColumnExprTupleAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprCaseContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CASE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.CASE, 0)!;
    }
    public END(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.END, 0)!;
    }
    public columnExpr(): ColumnExprContext[];
    public columnExpr(i: number): ColumnExprContext | null;
    public columnExpr(i?: number): ColumnExprContext[] | ColumnExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnExprContext);
        }

        return this.getRuleContext(i, ColumnExprContext);
    }
    public WHEN(): antlr.TerminalNode[];
    public WHEN(i: number): antlr.TerminalNode | null;
    public WHEN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.WHEN);
    	} else {
    		return this.getToken(ClickHouseParser.WHEN, i);
    	}
    }
    public THEN(): antlr.TerminalNode[];
    public THEN(i: number): antlr.TerminalNode | null;
    public THEN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.THEN);
    	} else {
    		return this.getToken(ClickHouseParser.THEN, i);
    	}
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ELSE, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprCase) {
             listener.enterColumnExprCase(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprCase) {
             listener.exitColumnExprCase(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprCase) {
            return visitor.visitColumnExprCase(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprDateContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public DATE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.DATE, 0)!;
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprDate) {
             listener.enterColumnExprDate(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprDate) {
             listener.exitColumnExprDate(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprDate) {
            return visitor.visitColumnExprDate(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprNotContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NOT(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.NOT, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprNot) {
             listener.enterColumnExprNot(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprNot) {
             listener.exitColumnExprNot(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprNot) {
            return visitor.visitColumnExprNot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprWinFunctionContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public OVER(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.OVER, 0)!;
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.LPAREN);
    	} else {
    		return this.getToken(ClickHouseParser.LPAREN, i);
    	}
    }
    public windowExpr(): WindowExprContext {
        return this.getRuleContext(0, WindowExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.RPAREN);
    	} else {
    		return this.getToken(ClickHouseParser.RPAREN, i);
    	}
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprWinFunction) {
             listener.enterColumnExprWinFunction(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprWinFunction) {
             listener.exitColumnExprWinFunction(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprWinFunction) {
            return visitor.visitColumnExprWinFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprIdentifierContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public columnIdentifier(): ColumnIdentifierContext {
        return this.getRuleContext(0, ColumnIdentifierContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprIdentifier) {
             listener.enterColumnExprIdentifier(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprIdentifier) {
             listener.exitColumnExprIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprIdentifier) {
            return visitor.visitColumnExprIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprFunctionContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode[];
    public LPAREN(i: number): antlr.TerminalNode | null;
    public LPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.LPAREN);
    	} else {
    		return this.getToken(ClickHouseParser.LPAREN, i);
    	}
    }
    public RPAREN(): antlr.TerminalNode[];
    public RPAREN(i: number): antlr.TerminalNode | null;
    public RPAREN(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.RPAREN);
    	} else {
    		return this.getToken(ClickHouseParser.RPAREN, i);
    	}
    }
    public DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTINCT, 0);
    }
    public columnArgList(): ColumnArgListContext | null {
        return this.getRuleContext(0, ColumnArgListContext);
    }
    public columnExprList(): ColumnExprListContext | null {
        return this.getRuleContext(0, ColumnExprListContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprFunction) {
             listener.enterColumnExprFunction(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprFunction) {
             listener.exitColumnExprFunction(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprFunction) {
            return visitor.visitColumnExprFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ColumnExprAsteriskContext extends ColumnExprContext {
    public constructor(ctx: ColumnExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ASTERISK(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ASTERISK, 0)!;
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnExprAsterisk) {
             listener.enterColumnExprAsterisk(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnExprAsterisk) {
             listener.exitColumnExprAsterisk(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnExprAsterisk) {
            return visitor.visitColumnExprAsterisk(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnArgExpr(): ColumnArgExprContext[];
    public columnArgExpr(i: number): ColumnArgExprContext | null;
    public columnArgExpr(i?: number): ColumnArgExprContext[] | ColumnArgExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ColumnArgExprContext);
        }

        return this.getRuleContext(i, ColumnArgExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnArgList;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnArgList) {
             listener.enterColumnArgList(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnArgList) {
             listener.exitColumnArgList(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnArgList) {
            return visitor.visitColumnArgList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnArgExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnLambdaExpr(): ColumnLambdaExprContext | null {
        return this.getRuleContext(0, ColumnLambdaExprContext);
    }
    public columnExpr(): ColumnExprContext | null {
        return this.getRuleContext(0, ColumnExprContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnArgExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnArgExpr) {
             listener.enterColumnArgExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnArgExpr) {
             listener.exitColumnArgExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnArgExpr) {
            return visitor.visitColumnArgExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnLambdaExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ARROW(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.ARROW, 0)!;
    }
    public columnExpr(): ColumnExprContext {
        return this.getRuleContext(0, ColumnExprContext)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LPAREN, 0);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RPAREN, 0);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnLambdaExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnLambdaExpr) {
             listener.enterColumnLambdaExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnLambdaExpr) {
             listener.exitColumnLambdaExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnLambdaExpr) {
            return visitor.visitColumnLambdaExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ColumnIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext {
        return this.getRuleContext(0, NestedIdentifierContext)!;
    }
    public tableIdentifier(): TableIdentifierContext | null {
        return this.getRuleContext(0, TableIdentifierContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_columnIdentifier;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterColumnIdentifier) {
             listener.enterColumnIdentifier(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitColumnIdentifier) {
             listener.exitColumnIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitColumnIdentifier) {
            return visitor.visitColumnIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NestedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_nestedIdentifier;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterNestedIdentifier) {
             listener.enterNestedIdentifier(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitNestedIdentifier) {
             listener.exitNestedIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitNestedIdentifier) {
            return visitor.visitNestedIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableExpr;
    }
    public override copyFrom(ctx: TableExprContext): void {
        super.copyFrom(ctx);
    }
}
export class TableExprIdentifierContext extends TableExprContext {
    public constructor(ctx: TableExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableIdentifier(): TableIdentifierContext {
        return this.getRuleContext(0, TableIdentifierContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableExprIdentifier) {
             listener.enterTableExprIdentifier(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableExprIdentifier) {
             listener.exitTableExprIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableExprIdentifier) {
            return visitor.visitTableExprIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableExprSubqueryContext extends TableExprContext {
    public constructor(ctx: TableExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public selectUnionStmt(): SelectUnionStmtContext {
        return this.getRuleContext(0, SelectUnionStmtContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableExprSubquery) {
             listener.enterTableExprSubquery(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableExprSubquery) {
             listener.exitTableExprSubquery(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableExprSubquery) {
            return visitor.visitTableExprSubquery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableExprAliasContext extends TableExprContext {
    public constructor(ctx: TableExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableExpr(): TableExprContext {
        return this.getRuleContext(0, TableExprContext)!;
    }
    public alias(): AliasContext | null {
        return this.getRuleContext(0, AliasContext);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AS, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableExprAlias) {
             listener.enterTableExprAlias(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableExprAlias) {
             listener.exitTableExprAlias(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableExprAlias) {
            return visitor.visitTableExprAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TableExprFunctionContext extends TableExprContext {
    public constructor(ctx: TableExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public tableFunctionExpr(): TableFunctionExprContext {
        return this.getRuleContext(0, TableFunctionExprContext)!;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableExprFunction) {
             listener.enterTableExprFunction(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableExprFunction) {
             listener.exitTableExprFunction(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableExprFunction) {
            return visitor.visitTableExprFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableFunctionExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.RPAREN, 0)!;
    }
    public tableArgList(): TableArgListContext | null {
        return this.getRuleContext(0, TableArgListContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableFunctionExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableFunctionExpr) {
             listener.enterTableFunctionExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableFunctionExpr) {
             listener.exitTableFunctionExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableFunctionExpr) {
            return visitor.visitTableFunctionExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public databaseIdentifier(): DatabaseIdentifierContext | null {
        return this.getRuleContext(0, DatabaseIdentifierContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableIdentifier;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableIdentifier) {
             listener.enterTableIdentifier(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableIdentifier) {
             listener.exitTableIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableIdentifier) {
            return visitor.visitTableIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableArgListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableArgExpr(): TableArgExprContext[];
    public tableArgExpr(i: number): TableArgExprContext | null;
    public tableArgExpr(i?: number): TableArgExprContext[] | TableArgExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TableArgExprContext);
        }

        return this.getRuleContext(i, TableArgExprContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.COMMA);
    	} else {
    		return this.getToken(ClickHouseParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableArgList;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableArgList) {
             listener.enterTableArgList(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableArgList) {
             listener.exitTableArgList(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableArgList) {
            return visitor.visitTableArgList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TableArgExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nestedIdentifier(): NestedIdentifierContext | null {
        return this.getRuleContext(0, NestedIdentifierContext);
    }
    public tableFunctionExpr(): TableFunctionExprContext | null {
        return this.getRuleContext(0, TableFunctionExprContext);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_tableArgExpr;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterTableArgExpr) {
             listener.enterTableArgExpr(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitTableArgExpr) {
             listener.exitTableArgExpr(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitTableArgExpr) {
            return visitor.visitTableArgExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DatabaseIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_databaseIdentifier;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterDatabaseIdentifier) {
             listener.enterDatabaseIdentifier(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitDatabaseIdentifier) {
             listener.exitDatabaseIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitDatabaseIdentifier) {
            return visitor.visitDatabaseIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FloatingLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FLOATING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FLOATING_LITERAL, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DOT, 0);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode[];
    public DECIMAL_LITERAL(i: number): antlr.TerminalNode | null;
    public DECIMAL_LITERAL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ClickHouseParser.DECIMAL_LITERAL);
    	} else {
    		return this.getToken(ClickHouseParser.DECIMAL_LITERAL, i);
    	}
    }
    public OCTAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OCTAL_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_floatingLiteral;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterFloatingLiteral) {
             listener.enterFloatingLiteral(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitFloatingLiteral) {
             listener.exitFloatingLiteral(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitFloatingLiteral) {
            return visitor.visitFloatingLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumberLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public floatingLiteral(): FloatingLiteralContext | null {
        return this.getRuleContext(0, FloatingLiteralContext);
    }
    public OCTAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OCTAL_LITERAL, 0);
    }
    public DECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DECIMAL_LITERAL, 0);
    }
    public HEXADECIMAL_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.HEXADECIMAL_LITERAL, 0);
    }
    public INF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INF, 0);
    }
    public NAN_SQL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NAN_SQL, 0);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PLUS, 0);
    }
    public DASH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DASH, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_numberLiteral;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterNumberLiteral) {
             listener.enterNumberLiteral(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitNumberLiteral) {
             listener.exitNumberLiteral(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitNumberLiteral) {
            return visitor.visitNumberLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public numberLiteral(): NumberLiteralContext | null {
        return this.getRuleContext(0, NumberLiteralContext);
    }
    public STRING_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0);
    }
    public NULL_SQL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NULL_SQL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_literal;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IntervalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SECOND(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SECOND, 0);
    }
    public MINUTE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MINUTE, 0);
    }
    public HOUR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.HOUR, 0);
    }
    public DAY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DAY, 0);
    }
    public WEEK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WEEK, 0);
    }
    public MONTH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MONTH, 0);
    }
    public QUARTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.QUARTER, 0);
    }
    public YEAR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.YEAR, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_interval;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterInterval) {
             listener.enterInterval(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitInterval) {
             listener.exitInterval(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitInterval) {
            return visitor.visitInterval(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeywordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AFTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AFTER, 0);
    }
    public ALIAS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALIAS, 0);
    }
    public ALL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALL, 0);
    }
    public ALTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALTER, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AND, 0);
    }
    public ANTI(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANTI, 0);
    }
    public ANY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ANY, 0);
    }
    public ARRAY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ARRAY, 0);
    }
    public AS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AS, 0);
    }
    public ASCENDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASCENDING, 0);
    }
    public ASOF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASOF, 0);
    }
    public AST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AST, 0);
    }
    public ASYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASYNC, 0);
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public BETWEEN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.BETWEEN, 0);
    }
    public BOTH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.BOTH, 0);
    }
    public BY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.BY, 0);
    }
    public CASE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CASE, 0);
    }
    public CAST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CAST, 0);
    }
    public CHECK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CHECK, 0);
    }
    public CLEAR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CLEAR, 0);
    }
    public CLUSTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CLUSTER, 0);
    }
    public CODEC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CODEC, 0);
    }
    public COLLATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COLLATE, 0);
    }
    public COLUMN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COLUMN, 0);
    }
    public COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMENT, 0);
    }
    public CONSTRAINT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CONSTRAINT, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public CROSS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CROSS, 0);
    }
    public CUBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CUBE, 0);
    }
    public CURRENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CURRENT, 0);
    }
    public DATABASE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DATABASE, 0);
    }
    public DATABASES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DATABASES, 0);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DATE, 0);
    }
    public DEDUPLICATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEDUPLICATE, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEFAULT, 0);
    }
    public DELAY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DELAY, 0);
    }
    public DELETE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DELETE, 0);
    }
    public DESCRIBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESCRIBE, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESC, 0);
    }
    public DESCENDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESCENDING, 0);
    }
    public DETACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DETACH, 0);
    }
    public DICTIONARIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARIES, 0);
    }
    public DICTIONARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARY, 0);
    }
    public DISK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISK, 0);
    }
    public DISTINCT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTINCT, 0);
    }
    public DISTRIBUTED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTRIBUTED, 0);
    }
    public DROP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DROP, 0);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ELSE, 0);
    }
    public END(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.END, 0);
    }
    public ENGINE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ENGINE, 0);
    }
    public EVENTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EVENTS, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public EXPLAIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXPLAIN, 0);
    }
    public EXPRESSION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXPRESSION, 0);
    }
    public EXTRACT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXTRACT, 0);
    }
    public FETCHES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FETCHES, 0);
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FINAL, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FIRST, 0);
    }
    public FLUSH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FLUSH, 0);
    }
    public FOR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FOR, 0);
    }
    public FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FOLLOWING, 0);
    }
    public FORMAT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FORMAT, 0);
    }
    public FREEZE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FREEZE, 0);
    }
    public FROM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FROM, 0);
    }
    public FULL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FULL, 0);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FUNCTION, 0);
    }
    public GLOBAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GLOBAL, 0);
    }
    public GRANULARITY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GRANULARITY, 0);
    }
    public GROUP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GROUP, 0);
    }
    public HAVING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.HAVING, 0);
    }
    public HIERARCHICAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.HIERARCHICAL, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ID, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public ILIKE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ILIKE, 0);
    }
    public IN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IN, 0);
    }
    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INDEX, 0);
    }
    public INJECTIVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INJECTIVE, 0);
    }
    public INNER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INNER, 0);
    }
    public INSERT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INSERT, 0);
    }
    public INTERVAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INTERVAL, 0);
    }
    public INTO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INTO, 0);
    }
    public IS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IS, 0);
    }
    public IS_OBJECT_ID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IS_OBJECT_ID, 0);
    }
    public JOIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.JOIN, 0);
    }
    public JSON_FALSE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.JSON_FALSE, 0);
    }
    public JSON_TRUE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.JSON_TRUE, 0);
    }
    public KEY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.KEY, 0);
    }
    public KILL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.KILL, 0);
    }
    public LAST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LAST, 0);
    }
    public LAYOUT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LAYOUT, 0);
    }
    public LEADING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEADING, 0);
    }
    public LEFT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEFT, 0);
    }
    public LIFETIME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIFETIME, 0);
    }
    public LIKE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIKE, 0);
    }
    public LIMIT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIMIT, 0);
    }
    public LIVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIVE, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOCAL, 0);
    }
    public LOGS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOGS, 0);
    }
    public MATERIALIZE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MATERIALIZE, 0);
    }
    public MATERIALIZED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MATERIALIZED, 0);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MAX, 0);
    }
    public MERGES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MERGES, 0);
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MIN, 0);
    }
    public MODIFY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MODIFY, 0);
    }
    public MOVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MOVE, 0);
    }
    public MUTATION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MUTATION, 0);
    }
    public NO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NO, 0);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NOT, 0);
    }
    public NULLS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NULLS, 0);
    }
    public OFFSET(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OFFSET, 0);
    }
    public ON(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ON, 0);
    }
    public OPTIMIZE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OPTIMIZE, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OR, 0);
    }
    public ORDER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ORDER, 0);
    }
    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTER, 0);
    }
    public OUTFILE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTFILE, 0);
    }
    public OVER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OVER, 0);
    }
    public PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PARTITION, 0);
    }
    public POPULATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.POPULATE, 0);
    }
    public PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PRECEDING, 0);
    }
    public PREWHERE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PREWHERE, 0);
    }
    public PRIMARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PRIMARY, 0);
    }
    public RANGE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RANGE, 0);
    }
    public RELOAD(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RELOAD, 0);
    }
    public REMOVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REMOVE, 0);
    }
    public RENAME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RENAME, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLACE, 0);
    }
    public REPLICA(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLICA, 0);
    }
    public REPLICATED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLICATED, 0);
    }
    public RIGHT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RIGHT, 0);
    }
    public ROLLUP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROLLUP, 0);
    }
    public ROW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROW, 0);
    }
    public ROWS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROWS, 0);
    }
    public SAMPLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SAMPLE, 0);
    }
    public SELECT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SELECT, 0);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SEMI, 0);
    }
    public SENDS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SENDS, 0);
    }
    public SET(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SET, 0);
    }
    public SETTINGS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SETTINGS, 0);
    }
    public SHOW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SHOW, 0);
    }
    public SOURCE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SOURCE, 0);
    }
    public START(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.START, 0);
    }
    public STOP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STOP, 0);
    }
    public SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SUBSTRING, 0);
    }
    public SYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYNC, 0);
    }
    public SYNTAX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYNTAX, 0);
    }
    public SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYSTEM, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public TABLES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLES, 0);
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public TEST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEST, 0);
    }
    public THEN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.THEN, 0);
    }
    public TIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIES, 0);
    }
    public TIMEOUT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIMEOUT, 0);
    }
    public TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIMESTAMP, 0);
    }
    public TOTALS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TOTALS, 0);
    }
    public TRAILING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRAILING, 0);
    }
    public TRIM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRIM, 0);
    }
    public TRUNCATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRUNCATE, 0);
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TO, 0);
    }
    public TOP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TOP, 0);
    }
    public TTL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TTL, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TYPE, 0);
    }
    public UNBOUNDED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UNBOUNDED, 0);
    }
    public UNION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UNION, 0);
    }
    public UPDATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UPDATE, 0);
    }
    public USE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.USE, 0);
    }
    public USING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.USING, 0);
    }
    public UUID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UUID, 0);
    }
    public VALUES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VALUES, 0);
    }
    public VIEW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VIEW, 0);
    }
    public VOLUME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VOLUME, 0);
    }
    public WATCH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WATCH, 0);
    }
    public WHEN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WHEN, 0);
    }
    public WHERE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WHERE, 0);
    }
    public WINDOW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WINDOW, 0);
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WITH, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_keyword;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterKeyword) {
             listener.enterKeyword(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitKeyword) {
             listener.exitKeyword(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeywordForAliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AFTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AFTER, 0);
    }
    public ALIAS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALIAS, 0);
    }
    public ALTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ALTER, 0);
    }
    public ASCENDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASCENDING, 0);
    }
    public AST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.AST, 0);
    }
    public ASYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ASYNC, 0);
    }
    public ATTACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ATTACH, 0);
    }
    public BOTH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.BOTH, 0);
    }
    public BY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.BY, 0);
    }
    public CASE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CASE, 0);
    }
    public CAST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CAST, 0);
    }
    public CHECK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CHECK, 0);
    }
    public CLEAR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CLEAR, 0);
    }
    public CLUSTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CLUSTER, 0);
    }
    public CODEC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CODEC, 0);
    }
    public COLLATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COLLATE, 0);
    }
    public COLUMN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COLUMN, 0);
    }
    public COMMENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.COMMENT, 0);
    }
    public CONSTRAINT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CONSTRAINT, 0);
    }
    public CREATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CREATE, 0);
    }
    public CUBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CUBE, 0);
    }
    public CURRENT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.CURRENT, 0);
    }
    public DATABASE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DATABASE, 0);
    }
    public DATABASES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DATABASES, 0);
    }
    public DATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DATE, 0);
    }
    public DEDUPLICATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEDUPLICATE, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DEFAULT, 0);
    }
    public DELAY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DELAY, 0);
    }
    public DELETE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DELETE, 0);
    }
    public DESCRIBE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESCRIBE, 0);
    }
    public DESC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESC, 0);
    }
    public DESCENDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DESCENDING, 0);
    }
    public DETACH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DETACH, 0);
    }
    public DICTIONARIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARIES, 0);
    }
    public DICTIONARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DICTIONARY, 0);
    }
    public DISK(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISK, 0);
    }
    public DISTRIBUTED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DISTRIBUTED, 0);
    }
    public DROP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.DROP, 0);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ELSE, 0);
    }
    public END(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.END, 0);
    }
    public ENGINE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ENGINE, 0);
    }
    public EVENTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EVENTS, 0);
    }
    public EXISTS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXISTS, 0);
    }
    public EXPLAIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXPLAIN, 0);
    }
    public EXPRESSION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXPRESSION, 0);
    }
    public EXTRACT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.EXTRACT, 0);
    }
    public FETCHES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FETCHES, 0);
    }
    public FIRST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FIRST, 0);
    }
    public FLUSH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FLUSH, 0);
    }
    public FOR(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FOR, 0);
    }
    public FOLLOWING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FOLLOWING, 0);
    }
    public FREEZE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FREEZE, 0);
    }
    public FUNCTION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.FUNCTION, 0);
    }
    public GRANULARITY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.GRANULARITY, 0);
    }
    public HIERARCHICAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.HIERARCHICAL, 0);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ID, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IF, 0);
    }
    public INDEX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INDEX, 0);
    }
    public INJECTIVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INJECTIVE, 0);
    }
    public INSERT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INSERT, 0);
    }
    public INTERVAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.INTERVAL, 0);
    }
    public IS_OBJECT_ID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IS_OBJECT_ID, 0);
    }
    public KEY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.KEY, 0);
    }
    public KILL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.KILL, 0);
    }
    public LAST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LAST, 0);
    }
    public LAYOUT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LAYOUT, 0);
    }
    public LEADING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LEADING, 0);
    }
    public LIFETIME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIFETIME, 0);
    }
    public LIVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LIVE, 0);
    }
    public LOCAL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOCAL, 0);
    }
    public LOGS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.LOGS, 0);
    }
    public MATERIALIZE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MATERIALIZE, 0);
    }
    public MATERIALIZED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MATERIALIZED, 0);
    }
    public MAX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MAX, 0);
    }
    public MERGES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MERGES, 0);
    }
    public MIN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MIN, 0);
    }
    public MODIFY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MODIFY, 0);
    }
    public MOVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MOVE, 0);
    }
    public MUTATION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.MUTATION, 0);
    }
    public NO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NO, 0);
    }
    public NULLS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NULLS, 0);
    }
    public OPTIMIZE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OPTIMIZE, 0);
    }
    public OUTER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTER, 0);
    }
    public OUTFILE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OUTFILE, 0);
    }
    public OVER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.OVER, 0);
    }
    public PARTITION(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PARTITION, 0);
    }
    public POPULATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.POPULATE, 0);
    }
    public PRECEDING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PRECEDING, 0);
    }
    public PRIMARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.PRIMARY, 0);
    }
    public RANGE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RANGE, 0);
    }
    public RELOAD(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RELOAD, 0);
    }
    public REMOVE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REMOVE, 0);
    }
    public RENAME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.RENAME, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLACE, 0);
    }
    public REPLICA(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLICA, 0);
    }
    public REPLICATED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.REPLICATED, 0);
    }
    public ROLLUP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROLLUP, 0);
    }
    public ROW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROW, 0);
    }
    public ROWS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.ROWS, 0);
    }
    public SELECT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SELECT, 0);
    }
    public SENDS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SENDS, 0);
    }
    public SET(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SET, 0);
    }
    public SHOW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SHOW, 0);
    }
    public SOURCE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SOURCE, 0);
    }
    public START(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.START, 0);
    }
    public STOP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.STOP, 0);
    }
    public SUBSTRING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SUBSTRING, 0);
    }
    public SYNC(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYNC, 0);
    }
    public SYNTAX(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYNTAX, 0);
    }
    public SYSTEM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.SYSTEM, 0);
    }
    public TABLE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLE, 0);
    }
    public TABLES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TABLES, 0);
    }
    public TEMPORARY(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEMPORARY, 0);
    }
    public TEST(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TEST, 0);
    }
    public THEN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.THEN, 0);
    }
    public TIES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIES, 0);
    }
    public TIMEOUT(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIMEOUT, 0);
    }
    public TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TIMESTAMP, 0);
    }
    public TOTALS(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TOTALS, 0);
    }
    public TRAILING(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRAILING, 0);
    }
    public TRIM(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRIM, 0);
    }
    public TRUNCATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TRUNCATE, 0);
    }
    public TO(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TO, 0);
    }
    public TTL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TTL, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.TYPE, 0);
    }
    public UNBOUNDED(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UNBOUNDED, 0);
    }
    public UPDATE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UPDATE, 0);
    }
    public USE(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.USE, 0);
    }
    public UUID(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.UUID, 0);
    }
    public VALUES(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VALUES, 0);
    }
    public VIEW(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VIEW, 0);
    }
    public VOLUME(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.VOLUME, 0);
    }
    public WATCH(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WATCH, 0);
    }
    public WHEN(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.WHEN, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_keywordForAlias;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterKeywordForAlias) {
             listener.enterKeywordForAlias(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitKeywordForAlias) {
             listener.exitKeywordForAlias(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitKeywordForAlias) {
            return visitor.visitKeywordForAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IDENTIFIER, 0);
    }
    public keywordForAlias(): KeywordForAliasContext | null {
        return this.getRuleContext(0, KeywordForAliasContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_alias;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterAlias) {
             listener.enterAlias(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitAlias) {
             listener.exitAlias(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitAlias) {
            return visitor.visitAlias(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.IDENTIFIER, 0);
    }
    public interval(): IntervalContext | null {
        return this.getRuleContext(0, IntervalContext);
    }
    public keyword(): KeywordContext | null {
        return this.getRuleContext(0, KeywordContext);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_identifier;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierOrNullContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public NULL_SQL(): antlr.TerminalNode | null {
        return this.getToken(ClickHouseParser.NULL_SQL, 0);
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_identifierOrNull;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterIdentifierOrNull) {
             listener.enterIdentifierOrNull(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitIdentifierOrNull) {
             listener.exitIdentifierOrNull(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierOrNull) {
            return visitor.visitIdentifierOrNull(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EnumValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.STRING_LITERAL, 0)!;
    }
    public EQ_SINGLE(): antlr.TerminalNode {
        return this.getToken(ClickHouseParser.EQ_SINGLE, 0)!;
    }
    public numberLiteral(): NumberLiteralContext {
        return this.getRuleContext(0, NumberLiteralContext)!;
    }
    public override get ruleIndex(): number {
        return ClickHouseParser.RULE_enumValue;
    }
    public override enterRule(listener: ClickHouseParserListener): void {
        if(listener.enterEnumValue) {
             listener.enterEnumValue(this);
        }
    }
    public override exitRule(listener: ClickHouseParserListener): void {
        if(listener.exitEnumValue) {
             listener.exitEnumValue(this);
        }
    }
    public override accept<Result>(visitor: ClickHouseParserVisitor<Result>): Result | null {
        if (visitor.visitEnumValue) {
            return visitor.visitEnumValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
