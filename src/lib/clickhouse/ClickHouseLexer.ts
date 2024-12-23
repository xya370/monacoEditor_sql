// Generated from dt-sql-parser/src/grammar/clickhouse/ClickHouseLexer.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class ClickHouseLexer extends antlr.Lexer {
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

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

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

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "ADD", "AFTER", "ALIAS", "ALL", "ALTER", "AND", "ANTI", "ANY", "ARRAY", 
        "AS", "ASCENDING", "ASOF", "AST", "ASYNC", "ATTACH", "BETWEEN", 
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
        "HEXADECIMAL_LITERAL", "STRING_LITERAL", "A", "B", "C", "D", "E", 
        "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
        "S", "T", "U", "V", "W", "X", "Y", "Z", "LETTER", "OCT_DIGIT", "DEC_DIGIT", 
        "HEX_DIGIT", "ARROW", "ASTERISK", "BACKQUOTE", "BACKSLASH", "COLON", 
        "COMMA", "CONCAT", "DASH", "DOT", "EQ_DOUBLE", "EQ_SINGLE", "GE", 
        "GT", "LBRACE", "LBRACKET", "LE", "LPAREN", "LT", "NOT_EQ", "PERCENT", 
        "PLUS", "QUERY", "QUOTE_DOUBLE", "QUOTE_SINGLE", "RBRACE", "RBRACKET", 
        "RPAREN", "SEMICOLON", "SLASH", "UNDERSCORE", "MULTI_LINE_COMMENT", 
        "SINGLE_LINE_COMMENT", "WHITESPACE",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, ClickHouseLexer._ATN, ClickHouseLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "ClickHouseLexer.g4"; }

    public get literalNames(): (string | null)[] { return ClickHouseLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return ClickHouseLexer.symbolicNames; }
    public get ruleNames(): string[] { return ClickHouseLexer.ruleNames; }

    public get serializedATN(): number[] { return ClickHouseLexer._serializedATN; }

    public get channelNames(): string[] { return ClickHouseLexer.channelNames; }

    public get modeNames(): string[] { return ClickHouseLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,230,2124,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,
        5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
        2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,
        7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,
        2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,
        7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
        2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
        7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,
        2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,
        7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,
        2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,
        7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,
        2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,
        7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,
        2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,
        7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
        7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
        2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,
        7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,
        2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,
        7,125,2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,
        2,131,7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,
        7,136,2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,
        2,142,7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,
        7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,
        2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,
        7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,
        2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
        7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
        2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,
        7,180,2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,
        2,186,7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,
        7,191,2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,
        2,197,7,197,2,198,7,198,2,199,7,199,2,200,7,200,2,201,7,201,2,202,
        7,202,2,203,7,203,2,204,7,204,2,205,7,205,2,206,7,206,2,207,7,207,
        2,208,7,208,2,209,7,209,2,210,7,210,2,211,7,211,2,212,7,212,2,213,
        7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,7,217,2,218,7,218,
        2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,7,223,2,224,
        7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,7,229,
        2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
        7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
        2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,
        7,246,2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,
        2,252,7,252,2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,
        7,257,2,258,7,258,2,259,7,259,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,
        1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
        4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,
        8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,584,8,10,1,11,1,11,1,11,
        1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,
        1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
        1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,
        1,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,
        1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
        1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,
        1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
        1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,
        1,29,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
        1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,
        1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,
        1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
        1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,
        1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,
        1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,
        1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,
        1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,
        1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
        1,45,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
        1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
        1,48,1,49,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,51,1,51,
        1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,
        1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,
        1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
        1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,
        1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,60,
        1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,
        1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,1,63,1,64,
        1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,65,
        1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,
        1,68,1,68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,
        1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,71,
        1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,
        1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,73,1,74,
        1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,76,1,76,1,76,1,77,1,77,1,77,
        1,77,1,77,1,77,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,80,
        1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,
        1082,8,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,81,1,82,
        1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,
        1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,
        1,86,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
        1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,90,
        1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,92,1,92,1,92,1,92,
        1,92,1,92,1,92,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,
        1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,96,
        1,96,1,96,1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,
        1,98,1,98,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,
        1,100,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,
        1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,
        1,102,1,102,1,102,1,102,1,103,1,103,1,103,1,103,1,104,1,104,1,104,
        1,104,1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,106,1,106,1,106,
        1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,107,1,107,
        1,108,1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,
        1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,110,1,111,1,111,
        1,111,1,111,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,114,1,114,
        1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,115,1,116,1,116,
        1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,1,118,1,118,1,118,
        1,118,1,118,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,120,1,120,
        1,120,1,120,1,120,1,120,1,121,1,121,1,121,1,121,1,121,1,121,1,122,
        1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,123,1,123,1,123,1,123,
        1,123,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,
        1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,125,1,126,1,126,
        1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,127,1,127,1,127,
        1,127,1,127,1,127,1,127,1,127,1,127,1,128,1,128,1,128,1,128,1,128,
        1,128,1,128,1,128,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,
        1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,
        1,131,1,131,1,131,1,131,1,131,1,131,1,132,1,132,1,132,1,132,1,132,
        1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,134,1,134,
        1,134,1,134,1,134,1,134,1,134,1,135,1,135,1,135,1,135,1,135,1,135,
        1,135,1,135,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,137,
        1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,137,1,138,
        1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,1,139,
        1,139,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,1,141,1,142,
        1,142,1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,1,143,1,143,
        1,143,1,143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,145,1,145,
        1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,146,1,146,1,147,1,147,
        1,147,1,147,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,148,
        1,149,1,149,1,149,1,149,1,149,1,150,1,150,1,150,1,150,1,150,1,150,
        1,150,1,151,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,1,152,
        1,152,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,154,1,154,1,154,1,154,1,154,1,155,1,155,1,155,1,155,1,155,1,155,
        1,155,1,156,1,156,1,156,1,156,1,156,1,156,1,156,1,157,1,157,1,157,
        1,157,1,157,1,157,1,158,1,158,1,158,1,158,1,158,1,158,1,158,1,159,
        1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,159,1,160,1,160,
        1,160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,162,1,162,1,162,
        1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,163,1,164,
        1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,
        1,165,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,1,167,
        1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,169,
        1,169,1,169,1,169,1,169,1,170,1,170,1,170,1,170,1,170,1,170,1,170,
        1,170,1,170,1,171,1,171,1,171,1,171,1,172,1,172,1,172,1,172,1,172,
        1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,173,1,174,
        1,174,1,174,1,174,1,174,1,174,1,175,1,175,1,175,1,175,1,175,1,175,
        1,175,1,176,1,176,1,176,1,176,1,177,1,177,1,177,1,177,1,177,1,177,
        1,178,1,178,1,178,1,178,1,178,1,179,1,179,1,179,1,179,1,179,1,179,
        1,179,1,180,1,180,1,180,1,180,1,180,1,181,1,181,1,181,1,181,1,181,
        1,181,1,181,1,182,1,182,1,182,1,182,1,182,1,182,1,183,1,183,1,183,
        1,183,1,183,1,184,1,184,1,184,1,184,1,184,1,185,1,185,1,185,1,185,
        1,185,1,185,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,187,1,187,
        1,187,1,187,1,187,1,188,1,188,1,188,1,188,1,188,1,188,1,188,1,188,
        1,188,1,188,3,188,1796,8,188,1,189,1,189,1,189,1,189,1,189,1,189,
        1,190,1,190,1,190,1,190,1,190,1,191,1,191,3,191,1811,8,191,1,191,
        1,191,1,191,5,191,1816,8,191,10,191,12,191,1819,9,191,1,191,1,191,
        1,191,1,191,1,191,1,191,1,191,1,191,5,191,1829,8,191,10,191,12,191,
        1832,9,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,1,191,
        1,191,5,191,1844,8,191,10,191,12,191,1847,9,191,1,191,1,191,3,191,
        1851,8,191,1,192,1,192,1,192,5,192,1856,8,192,10,192,12,192,1859,
        9,192,1,192,1,192,3,192,1863,8,192,1,192,1,192,3,192,1867,8,192,
        1,192,4,192,1870,8,192,11,192,12,192,1871,1,192,1,192,1,192,3,192,
        1877,8,192,1,192,1,192,3,192,1881,8,192,1,192,4,192,1884,8,192,11,
        192,12,192,1885,1,192,1,192,1,192,5,192,1891,8,192,10,192,12,192,
        1894,9,192,1,192,1,192,1,192,3,192,1899,8,192,1,192,4,192,1902,8,
        192,11,192,12,192,1903,1,192,1,192,1,192,1,192,1,192,3,192,1911,
        8,192,1,192,4,192,1914,8,192,11,192,12,192,1915,1,192,1,192,1,192,
        1,192,3,192,1922,8,192,1,192,4,192,1925,8,192,11,192,12,192,1926,
        3,192,1929,8,192,1,193,1,193,4,193,1933,8,193,11,193,12,193,1934,
        1,194,4,194,1938,8,194,11,194,12,194,1939,1,195,1,195,1,195,4,195,
        1945,8,195,11,195,12,195,1946,1,196,1,196,1,196,1,196,1,196,1,196,
        1,196,1,196,5,196,1957,8,196,10,196,12,196,1960,9,196,1,196,1,196,
        1,197,1,197,1,198,1,198,1,199,1,199,1,200,1,200,1,201,1,201,1,202,
        1,202,1,203,1,203,1,204,1,204,1,205,1,205,1,206,1,206,1,207,1,207,
        1,208,1,208,1,209,1,209,1,210,1,210,1,211,1,211,1,212,1,212,1,213,
        1,213,1,214,1,214,1,215,1,215,1,216,1,216,1,217,1,217,1,218,1,218,
        1,219,1,219,1,220,1,220,1,221,1,221,1,222,1,222,1,223,1,223,1,224,
        1,224,1,225,1,225,1,226,1,226,1,227,1,227,1,227,1,228,1,228,1,229,
        1,229,1,230,1,230,1,231,1,231,1,232,1,232,1,233,1,233,1,233,1,234,
        1,234,1,235,1,235,1,236,1,236,1,236,1,237,1,237,1,238,1,238,1,238,
        1,239,1,239,1,240,1,240,1,241,1,241,1,242,1,242,1,242,1,243,1,243,
        1,244,1,244,1,245,1,245,1,245,1,245,3,245,2069,8,245,1,246,1,246,
        1,247,1,247,1,248,1,248,1,249,1,249,1,250,1,250,1,251,1,251,1,252,
        1,252,1,253,1,253,1,254,1,254,1,255,1,255,1,256,1,256,1,257,1,257,
        1,257,1,257,5,257,2097,8,257,10,257,12,257,2100,9,257,1,257,1,257,
        1,257,1,257,1,257,1,258,1,258,1,258,1,258,5,258,2111,8,258,10,258,
        12,258,2114,9,258,1,258,3,258,2117,8,258,1,258,1,258,1,259,1,259,
        1,259,1,259,1,2098,0,260,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,
        19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,
        41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,
        63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,
        85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,
        53,107,54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,62,
        125,63,127,64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,143,
        72,145,73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,161,81,
        163,82,165,83,167,84,169,85,171,86,173,87,175,88,177,89,179,90,181,
        91,183,92,185,93,187,94,189,95,191,96,193,97,195,98,197,99,199,100,
        201,101,203,102,205,103,207,104,209,105,211,106,213,107,215,108,
        217,109,219,110,221,111,223,112,225,113,227,114,229,115,231,116,
        233,117,235,118,237,119,239,120,241,121,243,122,245,123,247,124,
        249,125,251,126,253,127,255,128,257,129,259,130,261,131,263,132,
        265,133,267,134,269,135,271,136,273,137,275,138,277,139,279,140,
        281,141,283,142,285,143,287,144,289,145,291,146,293,147,295,148,
        297,149,299,150,301,151,303,152,305,153,307,154,309,155,311,156,
        313,157,315,158,317,159,319,160,321,161,323,162,325,163,327,164,
        329,165,331,166,333,167,335,168,337,169,339,170,341,171,343,172,
        345,173,347,174,349,175,351,176,353,177,355,178,357,179,359,180,
        361,181,363,182,365,183,367,184,369,185,371,186,373,187,375,188,
        377,189,379,190,381,191,383,192,385,193,387,194,389,195,391,196,
        393,197,395,0,397,0,399,0,401,0,403,0,405,0,407,0,409,0,411,0,413,
        0,415,0,417,0,419,0,421,0,423,0,425,0,427,0,429,0,431,0,433,0,435,
        0,437,0,439,0,441,0,443,0,445,0,447,0,449,0,451,0,453,0,455,198,
        457,199,459,200,461,201,463,202,465,203,467,204,469,205,471,206,
        473,207,475,208,477,209,479,210,481,211,483,212,485,213,487,214,
        489,215,491,216,493,217,495,218,497,219,499,220,501,221,503,222,
        505,223,507,224,509,225,511,226,513,227,515,228,517,229,519,230,
        1,0,36,2,0,92,92,96,96,2,0,34,34,92,92,2,0,39,39,92,92,2,0,65,65,
        97,97,2,0,66,66,98,98,2,0,67,67,99,99,2,0,68,68,100,100,2,0,69,69,
        101,101,2,0,70,70,102,102,2,0,71,71,103,103,2,0,72,72,104,104,2,
        0,73,73,105,105,2,0,74,74,106,106,2,0,75,75,107,107,2,0,76,76,108,
        108,2,0,77,77,109,109,2,0,78,78,110,110,2,0,79,79,111,111,2,0,80,
        80,112,112,2,0,81,81,113,113,2,0,82,82,114,114,2,0,83,83,115,115,
        2,0,84,84,116,116,2,0,85,85,117,117,2,0,86,86,118,118,2,0,87,87,
        119,119,2,0,88,88,120,120,2,0,89,89,121,121,2,0,90,90,122,122,2,
        0,65,90,97,122,1,0,48,55,1,0,48,57,3,0,48,57,65,70,97,102,2,0,10,
        10,13,13,2,1,10,10,13,13,2,0,9,13,32,32,2140,0,1,1,0,0,0,0,3,1,0,
        0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
        0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,
        0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,
        0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,
        0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,
        0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,
        0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,
        0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,
        0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,
        0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,
        0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,
        1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,
        0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,
        0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,
        141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,
        0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,
        1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,
        0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,
        0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,
        187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,
        0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,
        1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,
        0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,
        0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,
        233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,
        0,0,0,243,1,0,0,0,0,245,1,0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,
        1,0,0,0,0,253,1,0,0,0,0,255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,
        0,261,1,0,0,0,0,263,1,0,0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,
        0,0,0,0,271,1,0,0,0,0,273,1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,
        279,1,0,0,0,0,281,1,0,0,0,0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,
        0,0,0,289,1,0,0,0,0,291,1,0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,
        1,0,0,0,0,299,1,0,0,0,0,301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,0,
        0,307,1,0,0,0,0,309,1,0,0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,
        0,0,0,0,317,1,0,0,0,0,319,1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,
        325,1,0,0,0,0,327,1,0,0,0,0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,
        0,0,0,335,1,0,0,0,0,337,1,0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,
        1,0,0,0,0,345,1,0,0,0,0,347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,
        0,353,1,0,0,0,0,355,1,0,0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,
        0,0,0,0,363,1,0,0,0,0,365,1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,
        371,1,0,0,0,0,373,1,0,0,0,0,375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,
        0,0,0,381,1,0,0,0,0,383,1,0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,0,389,
        1,0,0,0,0,391,1,0,0,0,0,393,1,0,0,0,0,455,1,0,0,0,0,457,1,0,0,0,
        0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,0,467,1,
        0,0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,475,1,0,0,0,0,
        477,1,0,0,0,0,479,1,0,0,0,0,481,1,0,0,0,0,483,1,0,0,0,0,485,1,0,
        0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,0,0,0,493,1,0,0,0,0,495,
        1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,1,0,0,0,0,503,1,0,0,0,
        0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,0,511,1,0,0,0,0,513,1,
        0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,0,0,1,521,1,0,0,0,3,
        525,1,0,0,0,5,531,1,0,0,0,7,537,1,0,0,0,9,541,1,0,0,0,11,547,1,0,
        0,0,13,551,1,0,0,0,15,556,1,0,0,0,17,560,1,0,0,0,19,566,1,0,0,0,
        21,583,1,0,0,0,23,585,1,0,0,0,25,590,1,0,0,0,27,594,1,0,0,0,29,600,
        1,0,0,0,31,607,1,0,0,0,33,615,1,0,0,0,35,620,1,0,0,0,37,623,1,0,
        0,0,39,628,1,0,0,0,41,633,1,0,0,0,43,639,1,0,0,0,45,645,1,0,0,0,
        47,653,1,0,0,0,49,659,1,0,0,0,51,667,1,0,0,0,53,674,1,0,0,0,55,682,
        1,0,0,0,57,693,1,0,0,0,59,700,1,0,0,0,61,706,1,0,0,0,63,711,1,0,
        0,0,65,719,1,0,0,0,67,728,1,0,0,0,69,738,1,0,0,0,71,743,1,0,0,0,
        73,747,1,0,0,0,75,759,1,0,0,0,77,767,1,0,0,0,79,773,1,0,0,0,81,780,
        1,0,0,0,83,785,1,0,0,0,85,796,1,0,0,0,87,805,1,0,0,0,89,812,1,0,
        0,0,91,825,1,0,0,0,93,836,1,0,0,0,95,841,1,0,0,0,97,850,1,0,0,0,
        99,862,1,0,0,0,101,867,1,0,0,0,103,872,1,0,0,0,105,876,1,0,0,0,107,
        883,1,0,0,0,109,890,1,0,0,0,111,897,1,0,0,0,113,905,1,0,0,0,115,
        916,1,0,0,0,117,924,1,0,0,0,119,932,1,0,0,0,121,938,1,0,0,0,123,
        944,1,0,0,0,125,950,1,0,0,0,127,960,1,0,0,0,129,964,1,0,0,0,131,
        971,1,0,0,0,133,978,1,0,0,0,135,983,1,0,0,0,137,988,1,0,0,0,139,
        997,1,0,0,0,141,1004,1,0,0,0,143,1016,1,0,0,0,145,1022,1,0,0,0,147,
        1029,1,0,0,0,149,1042,1,0,0,0,151,1047,1,0,0,0,153,1050,1,0,0,0,
        155,1053,1,0,0,0,157,1059,1,0,0,0,159,1062,1,0,0,0,161,1081,1,0,
        0,0,163,1083,1,0,0,0,165,1093,1,0,0,0,167,1099,1,0,0,0,169,1106,
        1,0,0,0,171,1115,1,0,0,0,173,1120,1,0,0,0,175,1123,1,0,0,0,177,1136,
        1,0,0,0,179,1141,1,0,0,0,181,1145,1,0,0,0,183,1150,1,0,0,0,185,1155,
        1,0,0,0,187,1162,1,0,0,0,189,1170,1,0,0,0,191,1175,1,0,0,0,193,1184,
        1,0,0,0,195,1189,1,0,0,0,197,1195,1,0,0,0,199,1200,1,0,0,0,201,1206,
        1,0,0,0,203,1211,1,0,0,0,205,1223,1,0,0,0,207,1236,1,0,0,0,209,1240,
        1,0,0,0,211,1247,1,0,0,0,213,1251,1,0,0,0,215,1258,1,0,0,0,217,1265,
        1,0,0,0,219,1271,1,0,0,0,221,1276,1,0,0,0,223,1285,1,0,0,0,225,1289,
        1,0,0,0,227,1292,1,0,0,0,229,1296,1,0,0,0,231,1301,1,0,0,0,233,1307,
        1,0,0,0,235,1314,1,0,0,0,237,1317,1,0,0,0,239,1326,1,0,0,0,241,1329,
        1,0,0,0,243,1335,1,0,0,0,245,1341,1,0,0,0,247,1349,1,0,0,0,249,1354,
        1,0,0,0,251,1364,1,0,0,0,253,1373,1,0,0,0,255,1383,1,0,0,0,257,1392,
        1,0,0,0,259,1400,1,0,0,0,261,1411,1,0,0,0,263,1419,1,0,0,0,265,1425,
        1,0,0,0,267,1432,1,0,0,0,269,1439,1,0,0,0,271,1446,1,0,0,0,273,1454,
        1,0,0,0,275,1462,1,0,0,0,277,1473,1,0,0,0,279,1479,1,0,0,0,281,1486,
        1,0,0,0,283,1490,1,0,0,0,285,1495,1,0,0,0,287,1502,1,0,0,0,289,1509,
        1,0,0,0,291,1516,1,0,0,0,293,1521,1,0,0,0,295,1527,1,0,0,0,297,1531,
        1,0,0,0,299,1540,1,0,0,0,301,1545,1,0,0,0,303,1552,1,0,0,0,305,1558,
        1,0,0,0,307,1563,1,0,0,0,309,1573,1,0,0,0,311,1578,1,0,0,0,313,1585,
        1,0,0,0,315,1592,1,0,0,0,317,1598,1,0,0,0,319,1605,1,0,0,0,321,1615,
        1,0,0,0,323,1620,1,0,0,0,325,1625,1,0,0,0,327,1630,1,0,0,0,329,1638,
        1,0,0,0,331,1648,1,0,0,0,333,1651,1,0,0,0,335,1655,1,0,0,0,337,1662,
        1,0,0,0,339,1671,1,0,0,0,341,1676,1,0,0,0,343,1685,1,0,0,0,345,1689,
        1,0,0,0,347,1694,1,0,0,0,349,1704,1,0,0,0,351,1710,1,0,0,0,353,1717,
        1,0,0,0,355,1721,1,0,0,0,357,1727,1,0,0,0,359,1732,1,0,0,0,361,1739,
        1,0,0,0,363,1744,1,0,0,0,365,1751,1,0,0,0,367,1757,1,0,0,0,369,1762,
        1,0,0,0,371,1767,1,0,0,0,373,1773,1,0,0,0,375,1780,1,0,0,0,377,1795,
        1,0,0,0,379,1797,1,0,0,0,381,1803,1,0,0,0,383,1850,1,0,0,0,385,1928,
        1,0,0,0,387,1930,1,0,0,0,389,1937,1,0,0,0,391,1941,1,0,0,0,393,1948,
        1,0,0,0,395,1963,1,0,0,0,397,1965,1,0,0,0,399,1967,1,0,0,0,401,1969,
        1,0,0,0,403,1971,1,0,0,0,405,1973,1,0,0,0,407,1975,1,0,0,0,409,1977,
        1,0,0,0,411,1979,1,0,0,0,413,1981,1,0,0,0,415,1983,1,0,0,0,417,1985,
        1,0,0,0,419,1987,1,0,0,0,421,1989,1,0,0,0,423,1991,1,0,0,0,425,1993,
        1,0,0,0,427,1995,1,0,0,0,429,1997,1,0,0,0,431,1999,1,0,0,0,433,2001,
        1,0,0,0,435,2003,1,0,0,0,437,2005,1,0,0,0,439,2007,1,0,0,0,441,2009,
        1,0,0,0,443,2011,1,0,0,0,445,2013,1,0,0,0,447,2015,1,0,0,0,449,2017,
        1,0,0,0,451,2019,1,0,0,0,453,2021,1,0,0,0,455,2023,1,0,0,0,457,2026,
        1,0,0,0,459,2028,1,0,0,0,461,2030,1,0,0,0,463,2032,1,0,0,0,465,2034,
        1,0,0,0,467,2036,1,0,0,0,469,2039,1,0,0,0,471,2041,1,0,0,0,473,2043,
        1,0,0,0,475,2046,1,0,0,0,477,2048,1,0,0,0,479,2051,1,0,0,0,481,2053,
        1,0,0,0,483,2055,1,0,0,0,485,2057,1,0,0,0,487,2060,1,0,0,0,489,2062,
        1,0,0,0,491,2068,1,0,0,0,493,2070,1,0,0,0,495,2072,1,0,0,0,497,2074,
        1,0,0,0,499,2076,1,0,0,0,501,2078,1,0,0,0,503,2080,1,0,0,0,505,2082,
        1,0,0,0,507,2084,1,0,0,0,509,2086,1,0,0,0,511,2088,1,0,0,0,513,2090,
        1,0,0,0,515,2092,1,0,0,0,517,2106,1,0,0,0,519,2120,1,0,0,0,521,522,
        3,395,197,0,522,523,3,401,200,0,523,524,3,401,200,0,524,2,1,0,0,
        0,525,526,3,395,197,0,526,527,3,405,202,0,527,528,3,433,216,0,528,
        529,3,403,201,0,529,530,3,429,214,0,530,4,1,0,0,0,531,532,3,395,
        197,0,532,533,3,417,208,0,533,534,3,411,205,0,534,535,3,395,197,
        0,535,536,3,431,215,0,536,6,1,0,0,0,537,538,3,395,197,0,538,539,
        3,417,208,0,539,540,3,417,208,0,540,8,1,0,0,0,541,542,3,395,197,
        0,542,543,3,417,208,0,543,544,3,433,216,0,544,545,3,403,201,0,545,
        546,3,429,214,0,546,10,1,0,0,0,547,548,3,395,197,0,548,549,3,421,
        210,0,549,550,3,401,200,0,550,12,1,0,0,0,551,552,3,395,197,0,552,
        553,3,421,210,0,553,554,3,433,216,0,554,555,3,411,205,0,555,14,1,
        0,0,0,556,557,3,395,197,0,557,558,3,421,210,0,558,559,3,443,221,
        0,559,16,1,0,0,0,560,561,3,395,197,0,561,562,3,429,214,0,562,563,
        3,429,214,0,563,564,3,395,197,0,564,565,3,443,221,0,565,18,1,0,0,
        0,566,567,3,395,197,0,567,568,3,431,215,0,568,20,1,0,0,0,569,570,
        3,395,197,0,570,571,3,431,215,0,571,572,3,399,199,0,572,584,1,0,
        0,0,573,574,3,395,197,0,574,575,3,431,215,0,575,576,3,399,199,0,
        576,577,3,403,201,0,577,578,3,421,210,0,578,579,3,401,200,0,579,
        580,3,411,205,0,580,581,3,421,210,0,581,582,3,407,203,0,582,584,
        1,0,0,0,583,569,1,0,0,0,583,573,1,0,0,0,584,22,1,0,0,0,585,586,3,
        395,197,0,586,587,3,431,215,0,587,588,3,423,211,0,588,589,3,405,
        202,0,589,24,1,0,0,0,590,591,3,395,197,0,591,592,3,431,215,0,592,
        593,3,433,216,0,593,26,1,0,0,0,594,595,3,395,197,0,595,596,3,431,
        215,0,596,597,3,443,221,0,597,598,3,421,210,0,598,599,3,399,199,
        0,599,28,1,0,0,0,600,601,3,395,197,0,601,602,3,433,216,0,602,603,
        3,433,216,0,603,604,3,395,197,0,604,605,3,399,199,0,605,606,3,409,
        204,0,606,30,1,0,0,0,607,608,3,397,198,0,608,609,3,403,201,0,609,
        610,3,433,216,0,610,611,3,439,219,0,611,612,3,403,201,0,612,613,
        3,403,201,0,613,614,3,421,210,0,614,32,1,0,0,0,615,616,3,397,198,
        0,616,617,3,423,211,0,617,618,3,433,216,0,618,619,3,409,204,0,619,
        34,1,0,0,0,620,621,3,397,198,0,621,622,3,443,221,0,622,36,1,0,0,
        0,623,624,3,399,199,0,624,625,3,395,197,0,625,626,3,431,215,0,626,
        627,3,403,201,0,627,38,1,0,0,0,628,629,3,399,199,0,629,630,3,395,
        197,0,630,631,3,431,215,0,631,632,3,433,216,0,632,40,1,0,0,0,633,
        634,3,399,199,0,634,635,3,409,204,0,635,636,3,403,201,0,636,637,
        3,399,199,0,637,638,3,415,207,0,638,42,1,0,0,0,639,640,3,399,199,
        0,640,641,3,417,208,0,641,642,3,403,201,0,642,643,3,395,197,0,643,
        644,3,429,214,0,644,44,1,0,0,0,645,646,3,399,199,0,646,647,3,417,
        208,0,647,648,3,435,217,0,648,649,3,431,215,0,649,650,3,433,216,
        0,650,651,3,403,201,0,651,652,3,429,214,0,652,46,1,0,0,0,653,654,
        3,399,199,0,654,655,3,423,211,0,655,656,3,401,200,0,656,657,3,403,
        201,0,657,658,3,399,199,0,658,48,1,0,0,0,659,660,3,399,199,0,660,
        661,3,423,211,0,661,662,3,417,208,0,662,663,3,417,208,0,663,664,
        3,395,197,0,664,665,3,433,216,0,665,666,3,403,201,0,666,50,1,0,0,
        0,667,668,3,399,199,0,668,669,3,423,211,0,669,670,3,417,208,0,670,
        671,3,435,217,0,671,672,3,419,209,0,672,673,3,421,210,0,673,52,1,
        0,0,0,674,675,3,399,199,0,675,676,3,423,211,0,676,677,3,419,209,
        0,677,678,3,419,209,0,678,679,3,403,201,0,679,680,3,421,210,0,680,
        681,3,433,216,0,681,54,1,0,0,0,682,683,3,399,199,0,683,684,3,423,
        211,0,684,685,3,421,210,0,685,686,3,431,215,0,686,687,3,433,216,
        0,687,688,3,429,214,0,688,689,3,395,197,0,689,690,3,411,205,0,690,
        691,3,421,210,0,691,692,3,433,216,0,692,56,1,0,0,0,693,694,3,399,
        199,0,694,695,3,429,214,0,695,696,3,403,201,0,696,697,3,395,197,
        0,697,698,3,433,216,0,698,699,3,403,201,0,699,58,1,0,0,0,700,701,
        3,399,199,0,701,702,3,429,214,0,702,703,3,423,211,0,703,704,3,431,
        215,0,704,705,3,431,215,0,705,60,1,0,0,0,706,707,3,399,199,0,707,
        708,3,435,217,0,708,709,3,397,198,0,709,710,3,403,201,0,710,62,1,
        0,0,0,711,712,3,399,199,0,712,713,3,435,217,0,713,714,3,429,214,
        0,714,715,3,429,214,0,715,716,3,403,201,0,716,717,3,421,210,0,717,
        718,3,433,216,0,718,64,1,0,0,0,719,720,3,401,200,0,720,721,3,395,
        197,0,721,722,3,433,216,0,722,723,3,395,197,0,723,724,3,397,198,
        0,724,725,3,395,197,0,725,726,3,431,215,0,726,727,3,403,201,0,727,
        66,1,0,0,0,728,729,3,401,200,0,729,730,3,395,197,0,730,731,3,433,
        216,0,731,732,3,395,197,0,732,733,3,397,198,0,733,734,3,395,197,
        0,734,735,3,431,215,0,735,736,3,403,201,0,736,737,3,431,215,0,737,
        68,1,0,0,0,738,739,3,401,200,0,739,740,3,395,197,0,740,741,3,433,
        216,0,741,742,3,403,201,0,742,70,1,0,0,0,743,744,3,401,200,0,744,
        745,3,395,197,0,745,746,3,443,221,0,746,72,1,0,0,0,747,748,3,401,
        200,0,748,749,3,403,201,0,749,750,3,401,200,0,750,751,3,435,217,
        0,751,752,3,425,212,0,752,753,3,417,208,0,753,754,3,411,205,0,754,
        755,3,399,199,0,755,756,3,395,197,0,756,757,3,433,216,0,757,758,
        3,403,201,0,758,74,1,0,0,0,759,760,3,401,200,0,760,761,3,403,201,
        0,761,762,3,405,202,0,762,763,3,395,197,0,763,764,3,435,217,0,764,
        765,3,417,208,0,765,766,3,433,216,0,766,76,1,0,0,0,767,768,3,401,
        200,0,768,769,3,403,201,0,769,770,3,417,208,0,770,771,3,395,197,
        0,771,772,3,443,221,0,772,78,1,0,0,0,773,774,3,401,200,0,774,775,
        3,403,201,0,775,776,3,417,208,0,776,777,3,403,201,0,777,778,3,433,
        216,0,778,779,3,403,201,0,779,80,1,0,0,0,780,781,3,401,200,0,781,
        782,3,403,201,0,782,783,3,431,215,0,783,784,3,399,199,0,784,82,1,
        0,0,0,785,786,3,401,200,0,786,787,3,403,201,0,787,788,3,431,215,
        0,788,789,3,399,199,0,789,790,3,403,201,0,790,791,3,421,210,0,791,
        792,3,401,200,0,792,793,3,411,205,0,793,794,3,421,210,0,794,795,
        3,407,203,0,795,84,1,0,0,0,796,797,3,401,200,0,797,798,3,403,201,
        0,798,799,3,431,215,0,799,800,3,399,199,0,800,801,3,429,214,0,801,
        802,3,411,205,0,802,803,3,397,198,0,803,804,3,403,201,0,804,86,1,
        0,0,0,805,806,3,401,200,0,806,807,3,403,201,0,807,808,3,433,216,
        0,808,809,3,395,197,0,809,810,3,399,199,0,810,811,3,409,204,0,811,
        88,1,0,0,0,812,813,3,401,200,0,813,814,3,411,205,0,814,815,3,399,
        199,0,815,816,3,433,216,0,816,817,3,411,205,0,817,818,3,423,211,
        0,818,819,3,421,210,0,819,820,3,395,197,0,820,821,3,429,214,0,821,
        822,3,411,205,0,822,823,3,403,201,0,823,824,3,431,215,0,824,90,1,
        0,0,0,825,826,3,401,200,0,826,827,3,411,205,0,827,828,3,399,199,
        0,828,829,3,433,216,0,829,830,3,411,205,0,830,831,3,423,211,0,831,
        832,3,421,210,0,832,833,3,395,197,0,833,834,3,429,214,0,834,835,
        3,443,221,0,835,92,1,0,0,0,836,837,3,401,200,0,837,838,3,411,205,
        0,838,839,3,431,215,0,839,840,3,415,207,0,840,94,1,0,0,0,841,842,
        3,401,200,0,842,843,3,411,205,0,843,844,3,431,215,0,844,845,3,433,
        216,0,845,846,3,411,205,0,846,847,3,421,210,0,847,848,3,399,199,
        0,848,849,3,433,216,0,849,96,1,0,0,0,850,851,3,401,200,0,851,852,
        3,411,205,0,852,853,3,431,215,0,853,854,3,433,216,0,854,855,3,429,
        214,0,855,856,3,411,205,0,856,857,3,397,198,0,857,858,3,435,217,
        0,858,859,3,433,216,0,859,860,3,403,201,0,860,861,3,401,200,0,861,
        98,1,0,0,0,862,863,3,401,200,0,863,864,3,429,214,0,864,865,3,423,
        211,0,865,866,3,425,212,0,866,100,1,0,0,0,867,868,3,403,201,0,868,
        869,3,417,208,0,869,870,3,431,215,0,870,871,3,403,201,0,871,102,
        1,0,0,0,872,873,3,403,201,0,873,874,3,421,210,0,874,875,3,401,200,
        0,875,104,1,0,0,0,876,877,3,403,201,0,877,878,3,421,210,0,878,879,
        3,407,203,0,879,880,3,411,205,0,880,881,3,421,210,0,881,882,3,403,
        201,0,882,106,1,0,0,0,883,884,3,403,201,0,884,885,3,437,218,0,885,
        886,3,403,201,0,886,887,3,421,210,0,887,888,3,433,216,0,888,889,
        3,431,215,0,889,108,1,0,0,0,890,891,3,403,201,0,891,892,3,441,220,
        0,892,893,3,411,205,0,893,894,3,431,215,0,894,895,3,433,216,0,895,
        896,3,431,215,0,896,110,1,0,0,0,897,898,3,403,201,0,898,899,3,441,
        220,0,899,900,3,425,212,0,900,901,3,417,208,0,901,902,3,395,197,
        0,902,903,3,411,205,0,903,904,3,421,210,0,904,112,1,0,0,0,905,906,
        3,403,201,0,906,907,3,441,220,0,907,908,3,425,212,0,908,909,3,429,
        214,0,909,910,3,403,201,0,910,911,3,431,215,0,911,912,3,431,215,
        0,912,913,3,411,205,0,913,914,3,423,211,0,914,915,3,421,210,0,915,
        114,1,0,0,0,916,917,3,403,201,0,917,918,3,441,220,0,918,919,3,433,
        216,0,919,920,3,429,214,0,920,921,3,395,197,0,921,922,3,399,199,
        0,922,923,3,433,216,0,923,116,1,0,0,0,924,925,3,405,202,0,925,926,
        3,403,201,0,926,927,3,433,216,0,927,928,3,399,199,0,928,929,3,409,
        204,0,929,930,3,403,201,0,930,931,3,431,215,0,931,118,1,0,0,0,932,
        933,3,405,202,0,933,934,3,411,205,0,934,935,3,421,210,0,935,936,
        3,395,197,0,936,937,3,417,208,0,937,120,1,0,0,0,938,939,3,405,202,
        0,939,940,3,411,205,0,940,941,3,429,214,0,941,942,3,431,215,0,942,
        943,3,433,216,0,943,122,1,0,0,0,944,945,3,405,202,0,945,946,3,417,
        208,0,946,947,3,435,217,0,947,948,3,431,215,0,948,949,3,409,204,
        0,949,124,1,0,0,0,950,951,3,405,202,0,951,952,3,423,211,0,952,953,
        3,417,208,0,953,954,3,417,208,0,954,955,3,423,211,0,955,956,3,439,
        219,0,956,957,3,411,205,0,957,958,3,421,210,0,958,959,3,407,203,
        0,959,126,1,0,0,0,960,961,3,405,202,0,961,962,3,423,211,0,962,963,
        3,429,214,0,963,128,1,0,0,0,964,965,3,405,202,0,965,966,3,423,211,
        0,966,967,3,429,214,0,967,968,3,419,209,0,968,969,3,395,197,0,969,
        970,3,433,216,0,970,130,1,0,0,0,971,972,3,405,202,0,972,973,3,429,
        214,0,973,974,3,403,201,0,974,975,3,403,201,0,975,976,3,445,222,
        0,976,977,3,403,201,0,977,132,1,0,0,0,978,979,3,405,202,0,979,980,
        3,429,214,0,980,981,3,423,211,0,981,982,3,419,209,0,982,134,1,0,
        0,0,983,984,3,405,202,0,984,985,3,435,217,0,985,986,3,417,208,0,
        986,987,3,417,208,0,987,136,1,0,0,0,988,989,3,405,202,0,989,990,
        3,435,217,0,990,991,3,421,210,0,991,992,3,399,199,0,992,993,3,433,
        216,0,993,994,3,411,205,0,994,995,3,423,211,0,995,996,3,421,210,
        0,996,138,1,0,0,0,997,998,3,407,203,0,998,999,3,417,208,0,999,1000,
        3,423,211,0,1000,1001,3,397,198,0,1001,1002,3,395,197,0,1002,1003,
        3,417,208,0,1003,140,1,0,0,0,1004,1005,3,407,203,0,1005,1006,3,429,
        214,0,1006,1007,3,395,197,0,1007,1008,3,421,210,0,1008,1009,3,435,
        217,0,1009,1010,3,417,208,0,1010,1011,3,395,197,0,1011,1012,3,429,
        214,0,1012,1013,3,411,205,0,1013,1014,3,433,216,0,1014,1015,3,443,
        221,0,1015,142,1,0,0,0,1016,1017,3,407,203,0,1017,1018,3,429,214,
        0,1018,1019,3,423,211,0,1019,1020,3,435,217,0,1020,1021,3,425,212,
        0,1021,144,1,0,0,0,1022,1023,3,409,204,0,1023,1024,3,395,197,0,1024,
        1025,3,437,218,0,1025,1026,3,411,205,0,1026,1027,3,421,210,0,1027,
        1028,3,407,203,0,1028,146,1,0,0,0,1029,1030,3,409,204,0,1030,1031,
        3,411,205,0,1031,1032,3,403,201,0,1032,1033,3,429,214,0,1033,1034,
        3,395,197,0,1034,1035,3,429,214,0,1035,1036,3,399,199,0,1036,1037,
        3,409,204,0,1037,1038,3,411,205,0,1038,1039,3,399,199,0,1039,1040,
        3,395,197,0,1040,1041,3,417,208,0,1041,148,1,0,0,0,1042,1043,3,409,
        204,0,1043,1044,3,423,211,0,1044,1045,3,435,217,0,1045,1046,3,429,
        214,0,1046,150,1,0,0,0,1047,1048,3,411,205,0,1048,1049,3,401,200,
        0,1049,152,1,0,0,0,1050,1051,3,411,205,0,1051,1052,3,405,202,0,1052,
        154,1,0,0,0,1053,1054,3,411,205,0,1054,1055,3,417,208,0,1055,1056,
        3,411,205,0,1056,1057,3,415,207,0,1057,1058,3,403,201,0,1058,156,
        1,0,0,0,1059,1060,3,411,205,0,1060,1061,3,421,210,0,1061,158,1,0,
        0,0,1062,1063,3,411,205,0,1063,1064,3,421,210,0,1064,1065,3,401,
        200,0,1065,1066,3,403,201,0,1066,1067,3,441,220,0,1067,160,1,0,0,
        0,1068,1069,3,411,205,0,1069,1070,3,421,210,0,1070,1071,3,405,202,
        0,1071,1082,1,0,0,0,1072,1073,3,411,205,0,1073,1074,3,421,210,0,
        1074,1075,3,405,202,0,1075,1076,3,411,205,0,1076,1077,3,421,210,
        0,1077,1078,3,411,205,0,1078,1079,3,433,216,0,1079,1080,3,443,221,
        0,1080,1082,1,0,0,0,1081,1068,1,0,0,0,1081,1072,1,0,0,0,1082,162,
        1,0,0,0,1083,1084,3,411,205,0,1084,1085,3,421,210,0,1085,1086,3,
        413,206,0,1086,1087,3,403,201,0,1087,1088,3,399,199,0,1088,1089,
        3,433,216,0,1089,1090,3,411,205,0,1090,1091,3,437,218,0,1091,1092,
        3,403,201,0,1092,164,1,0,0,0,1093,1094,3,411,205,0,1094,1095,3,421,
        210,0,1095,1096,3,421,210,0,1096,1097,3,403,201,0,1097,1098,3,429,
        214,0,1098,166,1,0,0,0,1099,1100,3,411,205,0,1100,1101,3,421,210,
        0,1101,1102,3,431,215,0,1102,1103,3,403,201,0,1103,1104,3,429,214,
        0,1104,1105,3,433,216,0,1105,168,1,0,0,0,1106,1107,3,411,205,0,1107,
        1108,3,421,210,0,1108,1109,3,433,216,0,1109,1110,3,403,201,0,1110,
        1111,3,429,214,0,1111,1112,3,437,218,0,1112,1113,3,395,197,0,1113,
        1114,3,417,208,0,1114,170,1,0,0,0,1115,1116,3,411,205,0,1116,1117,
        3,421,210,0,1117,1118,3,433,216,0,1118,1119,3,423,211,0,1119,172,
        1,0,0,0,1120,1121,3,411,205,0,1121,1122,3,431,215,0,1122,174,1,0,
        0,0,1123,1124,3,411,205,0,1124,1125,3,431,215,0,1125,1126,3,513,
        256,0,1126,1127,3,423,211,0,1127,1128,3,397,198,0,1128,1129,3,413,
        206,0,1129,1130,3,403,201,0,1130,1131,3,399,199,0,1131,1132,3,433,
        216,0,1132,1133,3,513,256,0,1133,1134,3,411,205,0,1134,1135,3,401,
        200,0,1135,176,1,0,0,0,1136,1137,3,413,206,0,1137,1138,3,423,211,
        0,1138,1139,3,411,205,0,1139,1140,3,421,210,0,1140,178,1,0,0,0,1141,
        1142,3,415,207,0,1142,1143,3,403,201,0,1143,1144,3,443,221,0,1144,
        180,1,0,0,0,1145,1146,3,415,207,0,1146,1147,3,411,205,0,1147,1148,
        3,417,208,0,1148,1149,3,417,208,0,1149,182,1,0,0,0,1150,1151,3,417,
        208,0,1151,1152,3,395,197,0,1152,1153,3,431,215,0,1153,1154,3,433,
        216,0,1154,184,1,0,0,0,1155,1156,3,417,208,0,1156,1157,3,395,197,
        0,1157,1158,3,443,221,0,1158,1159,3,423,211,0,1159,1160,3,435,217,
        0,1160,1161,3,433,216,0,1161,186,1,0,0,0,1162,1163,3,417,208,0,1163,
        1164,3,403,201,0,1164,1165,3,395,197,0,1165,1166,3,401,200,0,1166,
        1167,3,411,205,0,1167,1168,3,421,210,0,1168,1169,3,407,203,0,1169,
        188,1,0,0,0,1170,1171,3,417,208,0,1171,1172,3,403,201,0,1172,1173,
        3,405,202,0,1173,1174,3,433,216,0,1174,190,1,0,0,0,1175,1176,3,417,
        208,0,1176,1177,3,411,205,0,1177,1178,3,405,202,0,1178,1179,3,403,
        201,0,1179,1180,3,433,216,0,1180,1181,3,411,205,0,1181,1182,3,419,
        209,0,1182,1183,3,403,201,0,1183,192,1,0,0,0,1184,1185,3,417,208,
        0,1185,1186,3,411,205,0,1186,1187,3,415,207,0,1187,1188,3,403,201,
        0,1188,194,1,0,0,0,1189,1190,3,417,208,0,1190,1191,3,411,205,0,1191,
        1192,3,419,209,0,1192,1193,3,411,205,0,1193,1194,3,433,216,0,1194,
        196,1,0,0,0,1195,1196,3,417,208,0,1196,1197,3,411,205,0,1197,1198,
        3,437,218,0,1198,1199,3,403,201,0,1199,198,1,0,0,0,1200,1201,3,417,
        208,0,1201,1202,3,423,211,0,1202,1203,3,399,199,0,1203,1204,3,395,
        197,0,1204,1205,3,417,208,0,1205,200,1,0,0,0,1206,1207,3,417,208,
        0,1207,1208,3,423,211,0,1208,1209,3,407,203,0,1209,1210,3,431,215,
        0,1210,202,1,0,0,0,1211,1212,3,419,209,0,1212,1213,3,395,197,0,1213,
        1214,3,433,216,0,1214,1215,3,403,201,0,1215,1216,3,429,214,0,1216,
        1217,3,411,205,0,1217,1218,3,395,197,0,1218,1219,3,417,208,0,1219,
        1220,3,411,205,0,1220,1221,3,445,222,0,1221,1222,3,403,201,0,1222,
        204,1,0,0,0,1223,1224,3,419,209,0,1224,1225,3,395,197,0,1225,1226,
        3,433,216,0,1226,1227,3,403,201,0,1227,1228,3,429,214,0,1228,1229,
        3,411,205,0,1229,1230,3,395,197,0,1230,1231,3,417,208,0,1231,1232,
        3,411,205,0,1232,1233,3,445,222,0,1233,1234,3,403,201,0,1234,1235,
        3,401,200,0,1235,206,1,0,0,0,1236,1237,3,419,209,0,1237,1238,3,395,
        197,0,1238,1239,3,441,220,0,1239,208,1,0,0,0,1240,1241,3,419,209,
        0,1241,1242,3,403,201,0,1242,1243,3,429,214,0,1243,1244,3,407,203,
        0,1244,1245,3,403,201,0,1245,1246,3,431,215,0,1246,210,1,0,0,0,1247,
        1248,3,419,209,0,1248,1249,3,411,205,0,1249,1250,3,421,210,0,1250,
        212,1,0,0,0,1251,1252,3,419,209,0,1252,1253,3,411,205,0,1253,1254,
        3,421,210,0,1254,1255,3,435,217,0,1255,1256,3,433,216,0,1256,1257,
        3,403,201,0,1257,214,1,0,0,0,1258,1259,3,419,209,0,1259,1260,3,423,
        211,0,1260,1261,3,401,200,0,1261,1262,3,411,205,0,1262,1263,3,405,
        202,0,1263,1264,3,443,221,0,1264,216,1,0,0,0,1265,1266,3,419,209,
        0,1266,1267,3,423,211,0,1267,1268,3,421,210,0,1268,1269,3,433,216,
        0,1269,1270,3,409,204,0,1270,218,1,0,0,0,1271,1272,3,419,209,0,1272,
        1273,3,423,211,0,1273,1274,3,437,218,0,1274,1275,3,403,201,0,1275,
        220,1,0,0,0,1276,1277,3,419,209,0,1277,1278,3,435,217,0,1278,1279,
        3,433,216,0,1279,1280,3,395,197,0,1280,1281,3,433,216,0,1281,1282,
        3,411,205,0,1282,1283,3,423,211,0,1283,1284,3,421,210,0,1284,222,
        1,0,0,0,1285,1286,3,421,210,0,1286,1287,3,395,197,0,1287,1288,3,
        421,210,0,1288,224,1,0,0,0,1289,1290,3,421,210,0,1290,1291,3,423,
        211,0,1291,226,1,0,0,0,1292,1293,3,421,210,0,1293,1294,3,423,211,
        0,1294,1295,3,433,216,0,1295,228,1,0,0,0,1296,1297,3,421,210,0,1297,
        1298,3,435,217,0,1298,1299,3,417,208,0,1299,1300,3,417,208,0,1300,
        230,1,0,0,0,1301,1302,3,421,210,0,1302,1303,3,435,217,0,1303,1304,
        3,417,208,0,1304,1305,3,417,208,0,1305,1306,3,431,215,0,1306,232,
        1,0,0,0,1307,1308,3,423,211,0,1308,1309,3,405,202,0,1309,1310,3,
        405,202,0,1310,1311,3,431,215,0,1311,1312,3,403,201,0,1312,1313,
        3,433,216,0,1313,234,1,0,0,0,1314,1315,3,423,211,0,1315,1316,3,421,
        210,0,1316,236,1,0,0,0,1317,1318,3,423,211,0,1318,1319,3,425,212,
        0,1319,1320,3,433,216,0,1320,1321,3,411,205,0,1321,1322,3,419,209,
        0,1322,1323,3,411,205,0,1323,1324,3,445,222,0,1324,1325,3,403,201,
        0,1325,238,1,0,0,0,1326,1327,3,423,211,0,1327,1328,3,429,214,0,1328,
        240,1,0,0,0,1329,1330,3,423,211,0,1330,1331,3,429,214,0,1331,1332,
        3,401,200,0,1332,1333,3,403,201,0,1333,1334,3,429,214,0,1334,242,
        1,0,0,0,1335,1336,3,423,211,0,1336,1337,3,435,217,0,1337,1338,3,
        433,216,0,1338,1339,3,403,201,0,1339,1340,3,429,214,0,1340,244,1,
        0,0,0,1341,1342,3,423,211,0,1342,1343,3,435,217,0,1343,1344,3,433,
        216,0,1344,1345,3,405,202,0,1345,1346,3,411,205,0,1346,1347,3,417,
        208,0,1347,1348,3,403,201,0,1348,246,1,0,0,0,1349,1350,3,423,211,
        0,1350,1351,3,437,218,0,1351,1352,3,403,201,0,1352,1353,3,429,214,
        0,1353,248,1,0,0,0,1354,1355,3,425,212,0,1355,1356,3,395,197,0,1356,
        1357,3,429,214,0,1357,1358,3,433,216,0,1358,1359,3,411,205,0,1359,
        1360,3,433,216,0,1360,1361,3,411,205,0,1361,1362,3,423,211,0,1362,
        1363,3,421,210,0,1363,250,1,0,0,0,1364,1365,3,425,212,0,1365,1366,
        3,423,211,0,1366,1367,3,425,212,0,1367,1368,3,435,217,0,1368,1369,
        3,417,208,0,1369,1370,3,395,197,0,1370,1371,3,433,216,0,1371,1372,
        3,403,201,0,1372,252,1,0,0,0,1373,1374,3,425,212,0,1374,1375,3,429,
        214,0,1375,1376,3,403,201,0,1376,1377,3,399,199,0,1377,1378,3,403,
        201,0,1378,1379,3,401,200,0,1379,1380,3,411,205,0,1380,1381,3,421,
        210,0,1381,1382,3,407,203,0,1382,254,1,0,0,0,1383,1384,3,425,212,
        0,1384,1385,3,429,214,0,1385,1386,3,403,201,0,1386,1387,3,439,219,
        0,1387,1388,3,409,204,0,1388,1389,3,403,201,0,1389,1390,3,429,214,
        0,1390,1391,3,403,201,0,1391,256,1,0,0,0,1392,1393,3,425,212,0,1393,
        1394,3,429,214,0,1394,1395,3,411,205,0,1395,1396,3,419,209,0,1396,
        1397,3,395,197,0,1397,1398,3,429,214,0,1398,1399,3,443,221,0,1399,
        258,1,0,0,0,1400,1401,3,425,212,0,1401,1402,3,429,214,0,1402,1403,
        3,423,211,0,1403,1404,3,413,206,0,1404,1405,3,403,201,0,1405,1406,
        3,399,199,0,1406,1407,3,433,216,0,1407,1408,3,411,205,0,1408,1409,
        3,423,211,0,1409,1410,3,421,210,0,1410,260,1,0,0,0,1411,1412,3,427,
        213,0,1412,1413,3,435,217,0,1413,1414,3,395,197,0,1414,1415,3,429,
        214,0,1415,1416,3,433,216,0,1416,1417,3,403,201,0,1417,1418,3,429,
        214,0,1418,262,1,0,0,0,1419,1420,3,429,214,0,1420,1421,3,395,197,
        0,1421,1422,3,421,210,0,1422,1423,3,407,203,0,1423,1424,3,403,201,
        0,1424,264,1,0,0,0,1425,1426,3,429,214,0,1426,1427,3,403,201,0,1427,
        1428,3,417,208,0,1428,1429,3,423,211,0,1429,1430,3,395,197,0,1430,
        1431,3,401,200,0,1431,266,1,0,0,0,1432,1433,3,429,214,0,1433,1434,
        3,403,201,0,1434,1435,3,419,209,0,1435,1436,3,423,211,0,1436,1437,
        3,437,218,0,1437,1438,3,403,201,0,1438,268,1,0,0,0,1439,1440,3,429,
        214,0,1440,1441,3,403,201,0,1441,1442,3,421,210,0,1442,1443,3,395,
        197,0,1443,1444,3,419,209,0,1444,1445,3,403,201,0,1445,270,1,0,0,
        0,1446,1447,3,429,214,0,1447,1448,3,403,201,0,1448,1449,3,425,212,
        0,1449,1450,3,417,208,0,1450,1451,3,395,197,0,1451,1452,3,399,199,
        0,1452,1453,3,403,201,0,1453,272,1,0,0,0,1454,1455,3,429,214,0,1455,
        1456,3,403,201,0,1456,1457,3,425,212,0,1457,1458,3,417,208,0,1458,
        1459,3,411,205,0,1459,1460,3,399,199,0,1460,1461,3,395,197,0,1461,
        274,1,0,0,0,1462,1463,3,429,214,0,1463,1464,3,403,201,0,1464,1465,
        3,425,212,0,1465,1466,3,417,208,0,1466,1467,3,411,205,0,1467,1468,
        3,399,199,0,1468,1469,3,395,197,0,1469,1470,3,433,216,0,1470,1471,
        3,403,201,0,1471,1472,3,401,200,0,1472,276,1,0,0,0,1473,1474,3,429,
        214,0,1474,1475,3,411,205,0,1475,1476,3,407,203,0,1476,1477,3,409,
        204,0,1477,1478,3,433,216,0,1478,278,1,0,0,0,1479,1480,3,429,214,
        0,1480,1481,3,423,211,0,1481,1482,3,417,208,0,1482,1483,3,417,208,
        0,1483,1484,3,435,217,0,1484,1485,3,425,212,0,1485,280,1,0,0,0,1486,
        1487,3,429,214,0,1487,1488,3,423,211,0,1488,1489,3,439,219,0,1489,
        282,1,0,0,0,1490,1491,3,429,214,0,1491,1492,3,423,211,0,1492,1493,
        3,439,219,0,1493,1494,3,431,215,0,1494,284,1,0,0,0,1495,1496,3,431,
        215,0,1496,1497,3,395,197,0,1497,1498,3,419,209,0,1498,1499,3,425,
        212,0,1499,1500,3,417,208,0,1500,1501,3,403,201,0,1501,286,1,0,0,
        0,1502,1503,3,431,215,0,1503,1504,3,403,201,0,1504,1505,3,399,199,
        0,1505,1506,3,423,211,0,1506,1507,3,421,210,0,1507,1508,3,401,200,
        0,1508,288,1,0,0,0,1509,1510,3,431,215,0,1510,1511,3,403,201,0,1511,
        1512,3,417,208,0,1512,1513,3,403,201,0,1513,1514,3,399,199,0,1514,
        1515,3,433,216,0,1515,290,1,0,0,0,1516,1517,3,431,215,0,1517,1518,
        3,403,201,0,1518,1519,3,419,209,0,1519,1520,3,411,205,0,1520,292,
        1,0,0,0,1521,1522,3,431,215,0,1522,1523,3,403,201,0,1523,1524,3,
        421,210,0,1524,1525,3,401,200,0,1525,1526,3,431,215,0,1526,294,1,
        0,0,0,1527,1528,3,431,215,0,1528,1529,3,403,201,0,1529,1530,3,433,
        216,0,1530,296,1,0,0,0,1531,1532,3,431,215,0,1532,1533,3,403,201,
        0,1533,1534,3,433,216,0,1534,1535,3,433,216,0,1535,1536,3,411,205,
        0,1536,1537,3,421,210,0,1537,1538,3,407,203,0,1538,1539,3,431,215,
        0,1539,298,1,0,0,0,1540,1541,3,431,215,0,1541,1542,3,409,204,0,1542,
        1543,3,423,211,0,1543,1544,3,439,219,0,1544,300,1,0,0,0,1545,1546,
        3,431,215,0,1546,1547,3,423,211,0,1547,1548,3,435,217,0,1548,1549,
        3,429,214,0,1549,1550,3,399,199,0,1550,1551,3,403,201,0,1551,302,
        1,0,0,0,1552,1553,3,431,215,0,1553,1554,3,433,216,0,1554,1555,3,
        395,197,0,1555,1556,3,429,214,0,1556,1557,3,433,216,0,1557,304,1,
        0,0,0,1558,1559,3,431,215,0,1559,1560,3,433,216,0,1560,1561,3,423,
        211,0,1561,1562,3,425,212,0,1562,306,1,0,0,0,1563,1564,3,431,215,
        0,1564,1565,3,435,217,0,1565,1566,3,397,198,0,1566,1567,3,431,215,
        0,1567,1568,3,433,216,0,1568,1569,3,429,214,0,1569,1570,3,411,205,
        0,1570,1571,3,421,210,0,1571,1572,3,407,203,0,1572,308,1,0,0,0,1573,
        1574,3,431,215,0,1574,1575,3,443,221,0,1575,1576,3,421,210,0,1576,
        1577,3,399,199,0,1577,310,1,0,0,0,1578,1579,3,431,215,0,1579,1580,
        3,443,221,0,1580,1581,3,421,210,0,1581,1582,3,433,216,0,1582,1583,
        3,395,197,0,1583,1584,3,441,220,0,1584,312,1,0,0,0,1585,1586,3,431,
        215,0,1586,1587,3,443,221,0,1587,1588,3,431,215,0,1588,1589,3,433,
        216,0,1589,1590,3,403,201,0,1590,1591,3,419,209,0,1591,314,1,0,0,
        0,1592,1593,3,433,216,0,1593,1594,3,395,197,0,1594,1595,3,397,198,
        0,1595,1596,3,417,208,0,1596,1597,3,403,201,0,1597,316,1,0,0,0,1598,
        1599,3,433,216,0,1599,1600,3,395,197,0,1600,1601,3,397,198,0,1601,
        1602,3,417,208,0,1602,1603,3,403,201,0,1603,1604,3,431,215,0,1604,
        318,1,0,0,0,1605,1606,3,433,216,0,1606,1607,3,403,201,0,1607,1608,
        3,419,209,0,1608,1609,3,425,212,0,1609,1610,3,423,211,0,1610,1611,
        3,429,214,0,1611,1612,3,395,197,0,1612,1613,3,429,214,0,1613,1614,
        3,443,221,0,1614,320,1,0,0,0,1615,1616,3,433,216,0,1616,1617,3,403,
        201,0,1617,1618,3,431,215,0,1618,1619,3,433,216,0,1619,322,1,0,0,
        0,1620,1621,3,433,216,0,1621,1622,3,409,204,0,1622,1623,3,403,201,
        0,1623,1624,3,421,210,0,1624,324,1,0,0,0,1625,1626,3,433,216,0,1626,
        1627,3,411,205,0,1627,1628,3,403,201,0,1628,1629,3,431,215,0,1629,
        326,1,0,0,0,1630,1631,3,433,216,0,1631,1632,3,411,205,0,1632,1633,
        3,419,209,0,1633,1634,3,403,201,0,1634,1635,3,423,211,0,1635,1636,
        3,435,217,0,1636,1637,3,433,216,0,1637,328,1,0,0,0,1638,1639,3,433,
        216,0,1639,1640,3,411,205,0,1640,1641,3,419,209,0,1641,1642,3,403,
        201,0,1642,1643,3,431,215,0,1643,1644,3,433,216,0,1644,1645,3,395,
        197,0,1645,1646,3,419,209,0,1646,1647,3,425,212,0,1647,330,1,0,0,
        0,1648,1649,3,433,216,0,1649,1650,3,423,211,0,1650,332,1,0,0,0,1651,
        1652,3,433,216,0,1652,1653,3,423,211,0,1653,1654,3,425,212,0,1654,
        334,1,0,0,0,1655,1656,3,433,216,0,1656,1657,3,423,211,0,1657,1658,
        3,433,216,0,1658,1659,3,395,197,0,1659,1660,3,417,208,0,1660,1661,
        3,431,215,0,1661,336,1,0,0,0,1662,1663,3,433,216,0,1663,1664,3,429,
        214,0,1664,1665,3,395,197,0,1665,1666,3,411,205,0,1666,1667,3,417,
        208,0,1667,1668,3,411,205,0,1668,1669,3,421,210,0,1669,1670,3,407,
        203,0,1670,338,1,0,0,0,1671,1672,3,433,216,0,1672,1673,3,429,214,
        0,1673,1674,3,411,205,0,1674,1675,3,419,209,0,1675,340,1,0,0,0,1676,
        1677,3,433,216,0,1677,1678,3,429,214,0,1678,1679,3,435,217,0,1679,
        1680,3,421,210,0,1680,1681,3,399,199,0,1681,1682,3,395,197,0,1682,
        1683,3,433,216,0,1683,1684,3,403,201,0,1684,342,1,0,0,0,1685,1686,
        3,433,216,0,1686,1687,3,433,216,0,1687,1688,3,417,208,0,1688,344,
        1,0,0,0,1689,1690,3,433,216,0,1690,1691,3,443,221,0,1691,1692,3,
        425,212,0,1692,1693,3,403,201,0,1693,346,1,0,0,0,1694,1695,3,435,
        217,0,1695,1696,3,421,210,0,1696,1697,3,397,198,0,1697,1698,3,423,
        211,0,1698,1699,3,435,217,0,1699,1700,3,421,210,0,1700,1701,3,401,
        200,0,1701,1702,3,403,201,0,1702,1703,3,401,200,0,1703,348,1,0,0,
        0,1704,1705,3,435,217,0,1705,1706,3,421,210,0,1706,1707,3,411,205,
        0,1707,1708,3,423,211,0,1708,1709,3,421,210,0,1709,350,1,0,0,0,1710,
        1711,3,435,217,0,1711,1712,3,425,212,0,1712,1713,3,401,200,0,1713,
        1714,3,395,197,0,1714,1715,3,433,216,0,1715,1716,3,403,201,0,1716,
        352,1,0,0,0,1717,1718,3,435,217,0,1718,1719,3,431,215,0,1719,1720,
        3,403,201,0,1720,354,1,0,0,0,1721,1722,3,435,217,0,1722,1723,3,431,
        215,0,1723,1724,3,411,205,0,1724,1725,3,421,210,0,1725,1726,3,407,
        203,0,1726,356,1,0,0,0,1727,1728,3,435,217,0,1728,1729,3,435,217,
        0,1729,1730,3,411,205,0,1730,1731,3,401,200,0,1731,358,1,0,0,0,1732,
        1733,3,437,218,0,1733,1734,3,395,197,0,1734,1735,3,417,208,0,1735,
        1736,3,435,217,0,1736,1737,3,403,201,0,1737,1738,3,431,215,0,1738,
        360,1,0,0,0,1739,1740,3,437,218,0,1740,1741,3,411,205,0,1741,1742,
        3,403,201,0,1742,1743,3,439,219,0,1743,362,1,0,0,0,1744,1745,3,437,
        218,0,1745,1746,3,423,211,0,1746,1747,3,417,208,0,1747,1748,3,435,
        217,0,1748,1749,3,419,209,0,1749,1750,3,403,201,0,1750,364,1,0,0,
        0,1751,1752,3,439,219,0,1752,1753,3,395,197,0,1753,1754,3,433,216,
        0,1754,1755,3,399,199,0,1755,1756,3,409,204,0,1756,366,1,0,0,0,1757,
        1758,3,439,219,0,1758,1759,3,403,201,0,1759,1760,3,403,201,0,1760,
        1761,3,415,207,0,1761,368,1,0,0,0,1762,1763,3,439,219,0,1763,1764,
        3,409,204,0,1764,1765,3,403,201,0,1765,1766,3,421,210,0,1766,370,
        1,0,0,0,1767,1768,3,439,219,0,1768,1769,3,409,204,0,1769,1770,3,
        403,201,0,1770,1771,3,429,214,0,1771,1772,3,403,201,0,1772,372,1,
        0,0,0,1773,1774,3,439,219,0,1774,1775,3,411,205,0,1775,1776,3,421,
        210,0,1776,1777,3,401,200,0,1777,1778,3,423,211,0,1778,1779,3,439,
        219,0,1779,374,1,0,0,0,1780,1781,3,439,219,0,1781,1782,3,411,205,
        0,1782,1783,3,433,216,0,1783,1784,3,409,204,0,1784,376,1,0,0,0,1785,
        1786,3,443,221,0,1786,1787,3,403,201,0,1787,1788,3,395,197,0,1788,
        1789,3,429,214,0,1789,1796,1,0,0,0,1790,1791,3,443,221,0,1791,1792,
        3,443,221,0,1792,1793,3,443,221,0,1793,1794,3,443,221,0,1794,1796,
        1,0,0,0,1795,1785,1,0,0,0,1795,1790,1,0,0,0,1796,378,1,0,0,0,1797,
        1798,5,102,0,0,1798,1799,5,97,0,0,1799,1800,5,108,0,0,1800,1801,
        5,115,0,0,1801,1802,5,101,0,0,1802,380,1,0,0,0,1803,1804,5,116,0,
        0,1804,1805,5,114,0,0,1805,1806,5,117,0,0,1806,1807,5,101,0,0,1807,
        382,1,0,0,0,1808,1811,3,447,223,0,1809,1811,3,513,256,0,1810,1808,
        1,0,0,0,1810,1809,1,0,0,0,1811,1817,1,0,0,0,1812,1816,3,447,223,
        0,1813,1816,3,513,256,0,1814,1816,3,451,225,0,1815,1812,1,0,0,0,
        1815,1813,1,0,0,0,1815,1814,1,0,0,0,1816,1819,1,0,0,0,1817,1815,
        1,0,0,0,1817,1818,1,0,0,0,1818,1851,1,0,0,0,1819,1817,1,0,0,0,1820,
        1830,3,459,229,0,1821,1829,8,0,0,0,1822,1823,3,461,230,0,1823,1824,
        9,0,0,0,1824,1829,1,0,0,0,1825,1826,3,459,229,0,1826,1827,3,459,
        229,0,1827,1829,1,0,0,0,1828,1821,1,0,0,0,1828,1822,1,0,0,0,1828,
        1825,1,0,0,0,1829,1832,1,0,0,0,1830,1828,1,0,0,0,1830,1831,1,0,0,
        0,1831,1833,1,0,0,0,1832,1830,1,0,0,0,1833,1834,3,459,229,0,1834,
        1851,1,0,0,0,1835,1845,3,499,249,0,1836,1844,8,1,0,0,1837,1838,3,
        461,230,0,1838,1839,9,0,0,0,1839,1844,1,0,0,0,1840,1841,3,499,249,
        0,1841,1842,3,499,249,0,1842,1844,1,0,0,0,1843,1836,1,0,0,0,1843,
        1837,1,0,0,0,1843,1840,1,0,0,0,1844,1847,1,0,0,0,1845,1843,1,0,0,
        0,1845,1846,1,0,0,0,1846,1848,1,0,0,0,1847,1845,1,0,0,0,1848,1849,
        3,499,249,0,1849,1851,1,0,0,0,1850,1810,1,0,0,0,1850,1820,1,0,0,
        0,1850,1835,1,0,0,0,1851,384,1,0,0,0,1852,1853,3,391,195,0,1853,
        1857,3,471,235,0,1854,1856,3,453,226,0,1855,1854,1,0,0,0,1856,1859,
        1,0,0,0,1857,1855,1,0,0,0,1857,1858,1,0,0,0,1858,1862,1,0,0,0,1859,
        1857,1,0,0,0,1860,1863,3,425,212,0,1861,1863,3,403,201,0,1862,1860,
        1,0,0,0,1862,1861,1,0,0,0,1863,1866,1,0,0,0,1864,1867,3,495,247,
        0,1865,1867,3,469,234,0,1866,1864,1,0,0,0,1866,1865,1,0,0,0,1866,
        1867,1,0,0,0,1867,1869,1,0,0,0,1868,1870,3,451,225,0,1869,1868,1,
        0,0,0,1870,1871,1,0,0,0,1871,1869,1,0,0,0,1871,1872,1,0,0,0,1872,
        1929,1,0,0,0,1873,1876,3,391,195,0,1874,1877,3,425,212,0,1875,1877,
        3,403,201,0,1876,1874,1,0,0,0,1876,1875,1,0,0,0,1877,1880,1,0,0,
        0,1878,1881,3,495,247,0,1879,1881,3,469,234,0,1880,1878,1,0,0,0,
        1880,1879,1,0,0,0,1880,1881,1,0,0,0,1881,1883,1,0,0,0,1882,1884,
        3,451,225,0,1883,1882,1,0,0,0,1884,1885,1,0,0,0,1885,1883,1,0,0,
        0,1885,1886,1,0,0,0,1886,1929,1,0,0,0,1887,1888,3,389,194,0,1888,
        1892,3,471,235,0,1889,1891,3,451,225,0,1890,1889,1,0,0,0,1891,1894,
        1,0,0,0,1892,1890,1,0,0,0,1892,1893,1,0,0,0,1893,1895,1,0,0,0,1894,
        1892,1,0,0,0,1895,1898,3,403,201,0,1896,1899,3,495,247,0,1897,1899,
        3,469,234,0,1898,1896,1,0,0,0,1898,1897,1,0,0,0,1898,1899,1,0,0,
        0,1899,1901,1,0,0,0,1900,1902,3,451,225,0,1901,1900,1,0,0,0,1902,
        1903,1,0,0,0,1903,1901,1,0,0,0,1903,1904,1,0,0,0,1904,1929,1,0,0,
        0,1905,1906,3,471,235,0,1906,1907,3,389,194,0,1907,1910,3,403,201,
        0,1908,1911,3,495,247,0,1909,1911,3,469,234,0,1910,1908,1,0,0,0,
        1910,1909,1,0,0,0,1910,1911,1,0,0,0,1911,1913,1,0,0,0,1912,1914,
        3,451,225,0,1913,1912,1,0,0,0,1914,1915,1,0,0,0,1915,1913,1,0,0,
        0,1915,1916,1,0,0,0,1916,1929,1,0,0,0,1917,1918,3,389,194,0,1918,
        1921,3,403,201,0,1919,1922,3,495,247,0,1920,1922,3,469,234,0,1921,
        1919,1,0,0,0,1921,1920,1,0,0,0,1921,1922,1,0,0,0,1922,1924,1,0,0,
        0,1923,1925,3,451,225,0,1924,1923,1,0,0,0,1925,1926,1,0,0,0,1926,
        1924,1,0,0,0,1926,1927,1,0,0,0,1927,1929,1,0,0,0,1928,1852,1,0,0,
        0,1928,1873,1,0,0,0,1928,1887,1,0,0,0,1928,1905,1,0,0,0,1928,1917,
        1,0,0,0,1929,386,1,0,0,0,1930,1932,5,48,0,0,1931,1933,3,449,224,
        0,1932,1931,1,0,0,0,1933,1934,1,0,0,0,1934,1932,1,0,0,0,1934,1935,
        1,0,0,0,1935,388,1,0,0,0,1936,1938,3,451,225,0,1937,1936,1,0,0,0,
        1938,1939,1,0,0,0,1939,1937,1,0,0,0,1939,1940,1,0,0,0,1940,390,1,
        0,0,0,1941,1942,5,48,0,0,1942,1944,3,441,220,0,1943,1945,3,453,226,
        0,1944,1943,1,0,0,0,1945,1946,1,0,0,0,1946,1944,1,0,0,0,1946,1947,
        1,0,0,0,1947,392,1,0,0,0,1948,1958,3,501,250,0,1949,1957,8,2,0,0,
        1950,1951,3,461,230,0,1951,1952,9,0,0,0,1952,1957,1,0,0,0,1953,1954,
        3,501,250,0,1954,1955,3,501,250,0,1955,1957,1,0,0,0,1956,1949,1,
        0,0,0,1956,1950,1,0,0,0,1956,1953,1,0,0,0,1957,1960,1,0,0,0,1958,
        1956,1,0,0,0,1958,1959,1,0,0,0,1959,1961,1,0,0,0,1960,1958,1,0,0,
        0,1961,1962,3,501,250,0,1962,394,1,0,0,0,1963,1964,7,3,0,0,1964,
        396,1,0,0,0,1965,1966,7,4,0,0,1966,398,1,0,0,0,1967,1968,7,5,0,0,
        1968,400,1,0,0,0,1969,1970,7,6,0,0,1970,402,1,0,0,0,1971,1972,7,
        7,0,0,1972,404,1,0,0,0,1973,1974,7,8,0,0,1974,406,1,0,0,0,1975,1976,
        7,9,0,0,1976,408,1,0,0,0,1977,1978,7,10,0,0,1978,410,1,0,0,0,1979,
        1980,7,11,0,0,1980,412,1,0,0,0,1981,1982,7,12,0,0,1982,414,1,0,0,
        0,1983,1984,7,13,0,0,1984,416,1,0,0,0,1985,1986,7,14,0,0,1986,418,
        1,0,0,0,1987,1988,7,15,0,0,1988,420,1,0,0,0,1989,1990,7,16,0,0,1990,
        422,1,0,0,0,1991,1992,7,17,0,0,1992,424,1,0,0,0,1993,1994,7,18,0,
        0,1994,426,1,0,0,0,1995,1996,7,19,0,0,1996,428,1,0,0,0,1997,1998,
        7,20,0,0,1998,430,1,0,0,0,1999,2000,7,21,0,0,2000,432,1,0,0,0,2001,
        2002,7,22,0,0,2002,434,1,0,0,0,2003,2004,7,23,0,0,2004,436,1,0,0,
        0,2005,2006,7,24,0,0,2006,438,1,0,0,0,2007,2008,7,25,0,0,2008,440,
        1,0,0,0,2009,2010,7,26,0,0,2010,442,1,0,0,0,2011,2012,7,27,0,0,2012,
        444,1,0,0,0,2013,2014,7,28,0,0,2014,446,1,0,0,0,2015,2016,7,29,0,
        0,2016,448,1,0,0,0,2017,2018,7,30,0,0,2018,450,1,0,0,0,2019,2020,
        7,31,0,0,2020,452,1,0,0,0,2021,2022,7,32,0,0,2022,454,1,0,0,0,2023,
        2024,5,45,0,0,2024,2025,5,62,0,0,2025,456,1,0,0,0,2026,2027,5,42,
        0,0,2027,458,1,0,0,0,2028,2029,5,96,0,0,2029,460,1,0,0,0,2030,2031,
        5,92,0,0,2031,462,1,0,0,0,2032,2033,5,58,0,0,2033,464,1,0,0,0,2034,
        2035,5,44,0,0,2035,466,1,0,0,0,2036,2037,5,124,0,0,2037,2038,5,124,
        0,0,2038,468,1,0,0,0,2039,2040,5,45,0,0,2040,470,1,0,0,0,2041,2042,
        5,46,0,0,2042,472,1,0,0,0,2043,2044,5,61,0,0,2044,2045,5,61,0,0,
        2045,474,1,0,0,0,2046,2047,5,61,0,0,2047,476,1,0,0,0,2048,2049,5,
        62,0,0,2049,2050,5,61,0,0,2050,478,1,0,0,0,2051,2052,5,62,0,0,2052,
        480,1,0,0,0,2053,2054,5,123,0,0,2054,482,1,0,0,0,2055,2056,5,91,
        0,0,2056,484,1,0,0,0,2057,2058,5,60,0,0,2058,2059,5,61,0,0,2059,
        486,1,0,0,0,2060,2061,5,40,0,0,2061,488,1,0,0,0,2062,2063,5,60,0,
        0,2063,490,1,0,0,0,2064,2065,5,33,0,0,2065,2069,5,61,0,0,2066,2067,
        5,60,0,0,2067,2069,5,62,0,0,2068,2064,1,0,0,0,2068,2066,1,0,0,0,
        2069,492,1,0,0,0,2070,2071,5,37,0,0,2071,494,1,0,0,0,2072,2073,5,
        43,0,0,2073,496,1,0,0,0,2074,2075,5,63,0,0,2075,498,1,0,0,0,2076,
        2077,5,34,0,0,2077,500,1,0,0,0,2078,2079,5,39,0,0,2079,502,1,0,0,
        0,2080,2081,5,125,0,0,2081,504,1,0,0,0,2082,2083,5,93,0,0,2083,506,
        1,0,0,0,2084,2085,5,41,0,0,2085,508,1,0,0,0,2086,2087,5,59,0,0,2087,
        510,1,0,0,0,2088,2089,5,47,0,0,2089,512,1,0,0,0,2090,2091,5,95,0,
        0,2091,514,1,0,0,0,2092,2093,5,47,0,0,2093,2094,5,42,0,0,2094,2098,
        1,0,0,0,2095,2097,9,0,0,0,2096,2095,1,0,0,0,2097,2100,1,0,0,0,2098,
        2099,1,0,0,0,2098,2096,1,0,0,0,2099,2101,1,0,0,0,2100,2098,1,0,0,
        0,2101,2102,5,42,0,0,2102,2103,5,47,0,0,2103,2104,1,0,0,0,2104,2105,
        6,257,0,0,2105,516,1,0,0,0,2106,2107,5,45,0,0,2107,2108,5,45,0,0,
        2108,2112,1,0,0,0,2109,2111,8,33,0,0,2110,2109,1,0,0,0,2111,2114,
        1,0,0,0,2112,2110,1,0,0,0,2112,2113,1,0,0,0,2113,2116,1,0,0,0,2114,
        2112,1,0,0,0,2115,2117,7,34,0,0,2116,2115,1,0,0,0,2117,2118,1,0,
        0,0,2118,2119,6,258,0,0,2119,518,1,0,0,0,2120,2121,7,35,0,0,2121,
        2122,1,0,0,0,2122,2123,6,259,0,0,2123,520,1,0,0,0,36,0,583,1081,
        1795,1810,1815,1817,1828,1830,1843,1845,1850,1857,1862,1866,1871,
        1876,1880,1885,1892,1898,1903,1910,1915,1921,1926,1928,1934,1939,
        1946,1956,1958,2068,2098,2112,2116,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ClickHouseLexer.__ATN) {
            ClickHouseLexer.__ATN = new antlr.ATNDeserializer().deserialize(ClickHouseLexer._serializedATN);
        }

        return ClickHouseLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ClickHouseLexer.literalNames, ClickHouseLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ClickHouseLexer.vocabulary;
    }

    private static readonly decisionsToDFA = ClickHouseLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}