/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var mysql_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,18],$V1=[1,4],$V2=[1,9],$V3=[1,14],$V4=[1,15],$V5=[1,16],$V6=[1,17],$V7=[1,19],$V8=[1,20],$V9=[1,11],$Va=[1,12],$Vb=[7,28,40,41,95,96,98,99],$Vc=[1,34],$Vd=[1,37],$Ve=[1,27],$Vf=[1,29],$Vg=[1,38],$Vh=[1,39],$Vi=[4,22,24,91],$Vj=[2,78],$Vk=[4,13,20,27,73,78,86,87],$Vl=[4,7,18,26,28,38,39,40,41,44,45,47,48,60,62,95,96,98,99],$Vm=[1,58],$Vn=[1,51],$Vo=[1,52],$Vp=[1,53],$Vq=[1,54],$Vr=[1,55],$Vs=[1,56],$Vt=[1,57],$Vu=[1,59],$Vv=[1,60],$Vw=[1,61],$Vx=[1,62],$Vy=[1,63],$Vz=[1,64],$VA=[13,22,28,36,37,42,43,54,61,64,65,66,67,68,69,70,71,72,73,74,75,76,83,91],$VB=[13,20,22,28,36,37,42,43,54,61,64,65,66,67,68,69,70,71,72,73,74,75,76,81,83,91],$VC=[1,72],$VD=[1,78],$VE=[1,79],$VF=[4,18,26,38,39,44,45,47,48,60,62],$VG=[22,28],$VH=[2,84],$VI=[1,119],$VJ=[1,120],$VK=[1,124],$VL=[1,125],$VM=[13,22,28,36,37,42,43,54,61,64,65,66,67,69,71,83,91],$VN=[13,22,28,36,37,42,43,54,61,64,65,66,67,68,69,70,71,83,91],$VO=[13,22,28,36,37,42,43,54,61,64,65,66,67,68,69,70,71,72,73,83,91],$VP=[1,136],$VQ=[1,137],$VR=[1,138],$VS=[1,139],$VT=[4,20,27,73,78,86,87],$VU=[22,91],$VV=[40,41];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"IDENTIFIER":3,"identifier":4,"expressions":5,"statements_":6,"EOF":7,"statement":8,"struct_statements":9,"struct_statement":10,"type":11,"identifiers":12,";":13,"statements":14,"access_modifier":15,"public":16,"private":17,"CREATE":18,"FUNCTION":19,"(":20,"parameters":21,")":22,"RETURNS":23,"BEGIN":24,"end_":25,"void":26,"{":27,"}":28,"statement_with_semicolon":29,"while_":30,"e":31,"do_":32,"if_":33,"then_":34,"elif":35,"DO":36,"do":37,"WHILE":38,"while":39,"END":40,"end":41,"then":42,"THEN":43,"IF":44,"if":45,"set_":46,"set":47,"SET":48,"repeat_":49,"REPEAT":50,"repeat":51,"case_statement":52,"case":53,":":54,"break":55,"case_statements_":56,"case_statements":57,"default":58,"exprs":59,"RETURN":60,"=":61,"DECLARE":62,"access_array":63,"?":64,"||":65,"&&":66,"<=":67,"<":68,">=":69,">":70,"<>":71,"+":72,"-":73,"%":74,"*":75,"/":76,"not_expr":77,"!":78,"dot_expr":79,"parentheses_expr":80,".":81,"[":82,"]":83,"function_call":84,"parentheses_expr_":85,"NUMBER":86,"STRING_LITERAL":87,"parameter":88,"out":89,"inout":90,",":91,"expr":92,"types":93,"elseif_":94,"ELSEIF":95,"elseif":96,"else_":97,"else":98,"ELSE":99,"bracket_statements":100,"$accept":0,"$end":1},
terminals_: {2:"error",4:"identifier",7:"EOF",13:";",16:"public",17:"private",18:"CREATE",19:"FUNCTION",20:"(",22:")",23:"RETURNS",24:"BEGIN",26:"void",27:"{",28:"}",36:"DO",37:"do",38:"WHILE",39:"while",40:"END",41:"end",42:"then",43:"THEN",44:"IF",45:"if",47:"set",48:"SET",50:"REPEAT",51:"repeat",53:"case",54:":",55:"break",58:"default",60:"RETURN",61:"=",62:"DECLARE",64:"?",65:"||",66:"&&",67:"<=",68:"<",69:">=",70:">",71:"<>",72:"+",73:"-",74:"%",75:"*",76:"/",78:"!",81:".",82:"[",83:"]",86:"NUMBER",87:"STRING_LITERAL",89:"out",90:"inout",91:",",95:"ELSEIF",96:"elseif",98:"else",99:"ELSE"},
productions_: [0,[3,1],[5,2],[6,2],[6,1],[9,2],[9,1],[10,3],[14,1],[15,1],[15,1],[8,11],[8,8],[8,2],[8,7],[8,8],[8,7],[32,1],[32,1],[30,1],[30,1],[25,1],[25,1],[34,1],[34,1],[33,1],[33,1],[46,1],[46,1],[49,1],[49,1],[52,6],[56,2],[56,1],[57,4],[57,1],[29,3],[29,4],[29,2],[29,4],[29,3],[29,4],[29,4],[31,5],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,4],[31,4],[31,3],[31,3],[31,2],[31,1],[77,2],[77,1],[79,3],[79,1],[63,4],[80,1],[80,1],[80,3],[80,1],[85,2],[85,3],[85,1],[85,1],[85,1],[84,3],[84,4],[11,1],[11,1],[88,3],[88,3],[88,2],[21,3],[21,1],[21,0],[59,3],[59,1],[92,1],[93,3],[93,1],[94,1],[94,1],[97,1],[97,1],[35,5],[35,2],[12,3],[12,1],[100,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$ = yytext.toLowerCase()
break;
case 2:
return ["top_level_statements",$$[$0-1]]
break;
case 3: case 5: case 32:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 4: case 6: case 33: case 64: case 83:
this.$ =
 [$$[$0]];
break;
case 7:
this.$ = ["struct_statement",$$[$0-2],$$[$0-1]];
break;
case 8:
this.$ = ["statements",$$[$0]]
break;
case 11:
this.$ = ["function","public",$$[$0-3],$$[$0-8],$$[$0-6],$$[$0-1]];
break;
case 12:
this.$ = ["function","public",$$[$0-7],$$[$0-6],[],$$[$0-1]];
break;
case 13: case 98:
this.$ = ["semicolon",$$[$0-1]];
break;
case 14:
this.$ = ["while",$$[$0-5],$$[$0-3]];
break;
case 15:
this.$ = ["if",$$[$0-6],$$[$0-4],$$[$0-3]];
break;
case 16:
this.$ = ["if",$$[$0-5],$$[$0-3]];
break;
case 31:
this.$ = ["case",$$[$0-4],$$[$0-2]]
break;
case 34:
this.$ = $$[$0-3].concat([["default",$$[$0]]])
break;
case 36: case 75:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 37: case 76:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 38:
this.$ = ["return",$$[$0]];
break;
case 39:
this.$ = ["initialize_var",$$[$0-3],$$[$0-2],$$[$0]];
break;
case 40:
this.$ = ["initialize_empty_vars",$$[$0],[$$[$0-1]]];
break;
case 41: case 42:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 43:
this.$ = ["ternary_operator",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 44: case 45: case 46: case 47: case 48: case 49: case 52: case 53: case 54: case 57: case 58:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 50:
this.$ = ["==",$$[$0-2],$$[$0]];
break;
case 51:
this.$ = ["!=",$$[$0-2],$$[$0]];
break;
case 55:
this.$ = [">>",$$[$0-3],$$[$0-1]];
break;
case 56:
this.$ = ["<<",$$[$0-3],$$[$0-1]];
break;
case 59:
this.$ = ["-",$$[$0]];
break;
case 61:
this.$ = ["!", [".",$$[$0]]];
break;
case 62:
this.$ = [".", $$[$0]];
break;
case 63: case 82: case 85: case 88: case 96:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 65:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 68:
this.$ = ["parentheses",$$[$0-1]];
break;
case 70:
this.$ = ["initializer_list","Object",[]];
break;
case 71:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 72: case 73: case 74:
this.$ = yytext;
break;
case 79:
this.$ = ["out_parameter",$$[$0],$$[$0-1]];
break;
case 80:
this.$ = ["ref_parameter",$$[$0],$$[$0-1]];
break;
case 81:
this.$ = [$$[$0],$$[$0-1]];
break;
case 84:
this.$ = [];
break;
case 86: case 87: case 89: case 97:
this.$ = [$$[$0]];
break;
case 94:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 95:
this.$ = ["else",$$[$0]];
break;
}
},
table: [{3:10,4:$V0,5:1,6:2,8:3,11:5,18:$V1,26:$V2,29:6,30:7,33:8,38:$V3,39:$V4,44:$V5,45:$V6,46:13,47:$V7,48:$V8,60:$V9,62:$Va},{1:[3]},{7:[1,21]},o($Vb,[2,4],{8:3,11:5,29:6,30:7,33:8,3:10,46:13,6:22,4:$V0,18:$V1,26:$V2,38:$V3,39:$V4,44:$V5,45:$V6,47:$V7,48:$V8,60:$V9,62:$Va}),{19:[1,23]},{3:24,4:$V0},{13:[1,25]},{3:36,4:$V0,20:$Vc,27:$Vd,31:26,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:40,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},o($Vi,[2,77]),{4:$Vj,20:[1,41]},{3:36,4:$V0,20:$Vc,27:$Vd,31:42,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:44,4:$V0,11:43,26:$V2},{3:46,4:$V0,63:45},o($Vk,[2,19]),o($Vk,[2,20]),o($Vk,[2,25]),o($Vk,[2,26]),o([4,13,20,22,24,26,28,36,37,42,43,54,61,64,65,66,67,68,69,70,71,72,73,74,75,76,81,82,83,91],[2,1]),{4:[2,27]},{4:[2,28]},{1:[2,2]},o($Vb,[2,3]),{3:47,4:$V0},{20:[1,48],61:[1,49]},o($Vl,[2,13]),{32:50,36:[1,65],37:[1,66],61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz},{3:36,4:$V0,20:$Vc,27:$Vd,31:67,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},o($VA,[2,60]),{3:36,4:$V0,20:$Vc,27:$Vd,63:32,79:68,80:31,84:33,85:35,86:$Vg,87:$Vh},o($VA,[2,62]),o($VA,[2,64],{20:[1,70],81:[1,69]}),o($VB,[2,66]),o($VB,[2,67]),{3:36,4:$V0,20:$Vc,27:$Vd,31:71,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},o($VB,[2,69]),o($VB,[2,73],{82:$VC}),{3:36,4:$V0,20:$Vc,27:$Vd,28:[1,73],31:76,59:74,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh,92:75},o($VB,[2,72]),o($VB,[2,74]),{34:77,42:$VD,43:$VE,61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz},{3:36,4:$V0,20:$Vc,22:[1,80],27:$Vd,31:76,59:81,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh,92:75},{13:[2,38],61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz},{3:82,4:$V0},o($Vi,$Vj),{61:[1,83]},{61:[1,84],82:$VC},{20:[1,85]},{26:[1,86]},{3:36,4:$V0,20:$Vc,27:$Vd,31:87,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:10,4:$V0,6:89,8:3,11:5,14:88,18:$V1,26:$V2,29:6,30:7,33:8,38:$V3,39:$V4,44:$V5,45:$V6,46:13,47:$V7,48:$V8,60:$V9,62:$Va},{3:36,4:$V0,20:$Vc,27:$Vd,31:90,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:91,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:92,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:93,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:94,63:32,68:[1,95],73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:96,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:97,63:32,70:[1,98],73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:99,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:100,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:101,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:102,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:103,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:104,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:105,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},o($VF,[2,17]),o($VF,[2,18]),o($VA,[2,59]),o($VA,[2,61]),{3:36,4:$V0,20:$Vc,27:$Vd,63:32,79:106,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,22:[1,107],27:$Vd,31:76,59:108,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh,92:75},{22:[1,109],61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz},{3:36,4:$V0,20:$Vc,27:$Vd,31:110,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},o($VB,[2,70]),{28:[1,111]},o($VG,[2,86],{91:[1,112]}),o([22,28,91],[2,87],{61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),{3:10,4:$V0,6:89,8:3,11:5,14:113,18:$V1,26:$V2,29:6,30:7,33:8,38:$V3,39:$V4,44:$V5,45:$V6,46:13,47:$V7,48:$V8,60:$V9,62:$Va},o($VF,[2,23]),o($VF,[2,24]),{13:[2,36]},{22:[1,114]},{13:[2,40]},{3:36,4:$V0,20:$Vc,27:$Vd,31:115,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:36,4:$V0,20:$Vc,27:$Vd,31:116,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:121,4:$V0,21:117,22:$VH,88:118,89:$VI,90:$VJ},{22:[1,122]},{13:[2,39],61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz},{25:123,40:$VK,41:$VL},o([28,40,41,95,96,98,99],[2,8]),{54:[1,126],61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz},o([13,22,28,36,37,42,43,54,64,65,83,91],[2,44],{61:$Vm,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),o([13,22,28,36,37,42,43,54,64,65,66,83,91],[2,45],{61:$Vm,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),o($VM,[2,46],{68:$Vr,70:$Vt,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),o($VN,[2,47],{72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),{3:36,4:$V0,20:$Vc,27:$Vd,31:127,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},o($VM,[2,48],{68:$Vr,70:$Vt,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),o($VN,[2,49],{72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),{3:36,4:$V0,20:$Vc,27:$Vd,31:128,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},o($VM,[2,50],{68:$Vr,70:$Vt,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),o($VM,[2,51],{68:$Vr,70:$Vt,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),o($VO,[2,52],{74:$Vx,75:$Vy,76:$Vz}),o($VO,[2,53],{74:$Vx,75:$Vy,76:$Vz}),o($VA,[2,54]),o($VA,[2,57]),o($VA,[2,58]),o($VA,[2,63]),o($VB,[2,75]),{22:[1,129]},o($VB,[2,68]),{61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz,83:[1,130]},o($VB,[2,71]),{3:36,4:$V0,20:$Vc,27:$Vd,31:76,59:131,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh,92:75},{25:133,35:132,40:$VK,41:$VL,94:134,95:$VP,96:$VQ,97:135,98:$VR,99:$VS},{13:[2,37]},{13:[2,41],61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz},{13:[2,42],61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz},{22:[1,140]},{22:[2,83],91:[1,141]},{3:142,4:$V0},{3:143,4:$V0},{3:44,4:$V0,11:144,26:$V2},{27:[1,145]},{30:146,38:$V3,39:$V4},o($Vl,[2,21]),o($Vl,[2,22]),{3:36,4:$V0,20:$Vc,27:$Vd,31:147,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},o($VN,[2,56],{72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),o($VN,[2,55],{72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),o($VB,[2,76]),o($VB,[2,65]),o($VG,[2,85]),{25:148,40:$VK,41:$VL},{33:149,44:$V5,45:$V6},{3:36,4:$V0,20:$Vc,27:$Vd,31:150,63:32,73:$Ve,77:28,78:$Vf,79:30,80:31,84:33,85:35,86:$Vg,87:$Vh},{3:10,4:$V0,6:89,8:3,11:5,14:151,18:$V1,26:$V2,29:6,30:7,33:8,38:$V3,39:$V4,44:$V5,45:$V6,46:13,47:$V7,48:$V8,60:$V9,62:$Va},o($VT,[2,90]),o($VT,[2,91]),o($VF,[2,92]),o($VF,[2,93]),{23:[1,152]},{3:121,4:$V0,21:153,22:$VH,88:118,89:$VI,90:$VJ},{3:44,4:$V0,11:154,26:$V2},{3:44,4:$V0,11:155,26:$V2},o($VU,[2,81]),{3:10,4:$V0,6:89,8:3,11:5,14:156,18:$V1,26:$V2,29:6,30:7,33:8,38:$V3,39:$V4,44:$V5,45:$V6,46:13,47:$V7,48:$V8,60:$V9,62:$Va},{13:[1,157]},o([13,22,28,36,37,42,43,54,83,91],[2,43],{61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz}),{33:158,44:$V5,45:$V6},{13:[1,159]},{34:160,42:$VD,43:$VE,61:$Vm,64:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu,72:$Vv,73:$Vw,74:$Vx,75:$Vy,76:$Vz},o($VV,[2,95]),{3:44,4:$V0,11:161,26:$V2},{22:[2,82]},o($VU,[2,79]),o($VU,[2,80]),{28:[1,162]},o($Vl,[2,14]),{13:[1,163]},o($Vl,[2,16]),{3:10,4:$V0,6:89,8:3,11:5,14:164,18:$V1,26:$V2,29:6,30:7,33:8,38:$V3,39:$V4,44:$V5,45:$V6,46:13,47:$V7,48:$V8,60:$V9,62:$Va},{24:[1,165]},o($Vl,[2,12]),o($Vl,[2,15]),{35:166,94:134,95:$VP,96:$VQ,97:135,98:$VR,99:$VS},{3:10,4:$V0,6:89,8:3,11:5,14:167,18:$V1,26:$V2,29:6,30:7,33:8,38:$V3,39:$V4,44:$V5,45:$V6,46:13,47:$V7,48:$V8,60:$V9,62:$Va},o($VV,[2,94]),{25:168,40:$VK,41:$VL},o($Vl,[2,11])],
defaultActions: {19:[2,27],20:[2,28],21:[2,2],80:[2,36],82:[2,40],114:[2,37],153:[2,82]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and line comments */
break;
case 1:return 86
break;
case 2:return 87
break;
case 3:return 18
break;
case 4:return 62
break;
case 5:return 19
break;
case 6:return 23
break;
case 7:return 50
break;
case 8:return 51
break;
case 9:return 24
break;
case 10:return 43
break;
case 11:return 42
break;
case 12:return 40
break;
case 13:return 48
break;
case 14:return 47
break;
case 15:return "if"
break;
case 16:return "IF"
break;
case 17:return 37
break;
case 18:return 36
break;
case 19:return "else"
break;
case 20:return "ELSE"
break;
case 21:return "ELSEIF"
break;
case 22:return "elseif"
break;
case 23:return "RETURN"
break;
case 24:return "void"
break;
case 25:return "case"
break;
case 26:return "printf"
break;
case 27:return "while"
break;
case 28:return "WHILE"
break;
case 29:return "break"
break;
case 30:return "default"
break;
case 31:return "const"
break;
case 32:return "struct"
break;
case 33:return "switch"
break;
case 34:return 90
break;
case 35:return 89
break;
case 36:return "for"
break;
case 37:return 91
break;
case 38:return 13
break;
case 39:return 81
break;
case 40:return 54
break;
case 41:return 66
break;
case 42:return '&'
break;
case 43:return 65
break;
case 44:return 71
break;
case 45:return 78
break;
case 46:return 69
break;
case 47:return 70
break;
case 48:return 67
break;
case 49:return 68
break;
case 50:return 61
break;
case 51:return '*='
break;
case 52:return 75
break;
case 53:return 74
break;
case 54:return '/='
break;
case 55:return 76
break;
case 56:return '-='
break;
case 57:return '--'
break;
case 58:return 73
break;
case 59:return '++'
break;
case 60:return '+='
break;
case 61:return 72
break;
case 62:return '^'
break;
case 63:return 64
break;
case 64:return 27
break;
case 65:return 28
break;
case 66:return 82
break;
case 67:return 83
break;
case 68:return 20
break;
case 69:return 22
break;
case 70:return 4
break;
case 71:return 7
break;
case 72:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|\/\/+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:CREATE\b)/,/^(?:DECLARE\b)/,/^(?:FUNCTION\b)/,/^(?:RETURNS\b)/,/^(?:REPEAT\b)/,/^(?:repeat\b)/,/^(?:BEGIN\b)/,/^(?:THEN\b)/,/^(?:then\b)/,/^(?:END\b)/,/^(?:SET\b)/,/^(?:set\b)/,/^(?:if\b)/,/^(?:IF\b)/,/^(?:do\b)/,/^(?:DO\b)/,/^(?:else\b)/,/^(?:ELSE\b)/,/^(?:ELSEIF\b)/,/^(?:elseif\b)/,/^(?:RETURN\b)/,/^(?:void\b)/,/^(?:case\b)/,/^(?:printf\b)/,/^(?:while\b)/,/^(?:WHILE\b)/,/^(?:break\b)/,/^(?:default\b)/,/^(?:const\b)/,/^(?:struct\b)/,/^(?:switch\b)/,/^(?:inout\b)/,/^(?:out\b)/,/^(?:for\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:&)/,/^(?:\|\|)/,/^(?:<>)/,/^(?:!)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:%)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\?)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = mysql_parser;
exports.Parser = mysql_parser.Parser;
exports.parse = function () { return mysql_parser.parse.apply(mysql_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}