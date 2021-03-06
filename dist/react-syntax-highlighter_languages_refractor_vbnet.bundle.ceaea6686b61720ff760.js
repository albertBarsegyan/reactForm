(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_vbnet"],{

/***/ "./node_modules/refractor/lang/basic.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/basic.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = basic
basic.displayName = 'basic'
basic.aliases = []
function basic(Prism) {
  Prism.languages.basic = {
    comment: {
      pattern: /(?:!|REM\b).+/i,
      inside: {
        keyword: /^REM/i
      }
    },
    string: {
      pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
      greedy: true
    },
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
    keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
    function: /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
    operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
    punctuation: /[,;:()]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/vbnet.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/vbnet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorBasic = __webpack_require__(/*! ./basic.js */ "./node_modules/refractor/lang/basic.js")
module.exports = vbnet
vbnet.displayName = 'vbnet'
vbnet.aliases = []
function vbnet(Prism) {
  Prism.register(refractorBasic)
  Prism.languages.vbnet = Prism.languages.extend('basic', {
    keyword: /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDEC|CDBL|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEFAULT|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LINE INPUT|LET|LIB|LIKE|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPERATOR|OPEN|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHORT|SINGLE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SYNCLOCK|SWAP|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
    comment: [
      {
        pattern: /(?:!|REM\b).+/i,
        inside: {
          keyword: /^REM/i
        }
      },
      {
        pattern: /(^|[^\\:])'.*/,
        lookbehind: true
      }
    ]
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2Jhc2ljLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvdmJuZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkJZO0FBQ1oscUJBQXFCLG1CQUFPLENBQUMsMERBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl92Ym5ldC5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNpY1xuYmFzaWMuZGlzcGxheU5hbWUgPSAnYmFzaWMnXG5iYXNpYy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGJhc2ljKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5iYXNpYyA9IHtcbiAgICBjb21tZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvKD86IXxSRU1cXGIpLisvaSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBrZXl3b3JkOiAvXlJFTS9pXG4gICAgICB9XG4gICAgfSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlwiXCJ8WyEjJCUmJygpKixcXC86Ozw9Pj9eXyArXFwtLkEtWlxcZF0pKlwiL2ksXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjogLyg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OkVbKy1dP1xcZCspPy9pLFxuICAgIGtleXdvcmQ6IC9cXGIoPzpBU3xCRUVQfEJMT0FEfEJTQVZFfENBTEwoPzogQUJTT0xVVEUpP3xDQVNFfENIQUlOfENIRElSfENMRUFSfENMT1NFfENMU3xDT018Q09NTU9OfENPTlNUfERBVEF8REVDTEFSRXxERUYoPzogRk58IFNFR3xEQkx8SU5UfExOR3xTTkd8U1RSKXxESU18RE98RE9VQkxFfEVMU0V8RUxTRUlGfEVORHxFTlZJUk9OfEVSQVNFfEVSUk9SfEVYSVR8RklFTER8RklMRVN8Rk9SfEZVTkNUSU9OfEdFVHxHT1NVQnxHT1RPfElGfElOUFVUfElOVEVHRVJ8SU9DVEx8S0VZfEtJTEx8TElORSBJTlBVVHxMT0NBVEV8TE9DS3xMT05HfExPT1B8TFNFVHxNS0RJUnxOQU1FfE5FWFR8T0ZGfE9OKD86IENPTXwgRVJST1J8IEtFWXwgVElNRVIpP3xPUEVOfE9QVElPTiBCQVNFfE9VVHxQT0tFfFBVVHxSRUFEfFJFRElNfFJFTXxSRVNUT1JFfFJFU1VNRXxSRVRVUk58Uk1ESVJ8UlNFVHxSVU58U0hBUkVEfFNJTkdMRXxTRUxFQ1QgQ0FTRXxTSEVMTHxTTEVFUHxTVEFUSUN8U1RFUHxTVE9QfFNUUklOR3xTVUJ8U1dBUHxTWVNURU18VEhFTnxUSU1FUnxUT3xUUk9GRnxUUk9OfFRZUEV8VU5MT0NLfFVOVElMfFVTSU5HfFZJRVcgUFJJTlR8V0FJVHxXRU5EfFdISUxFfFdSSVRFKSg/OlxcJHxcXGIpL2ksXG4gICAgZnVuY3Rpb246IC9cXGIoPzpBQlN8QUNDRVNTfEFDT1N8QU5HTEV8QVJFQXxBUklUSE1FVElDfEFSUkFZfEFTSU58QVNLfEFUfEFUTnxCQVNFfEJFR0lOfEJSRUFLfENBVVNFfENFSUx8Q0hSfENMSVB8Q09MTEFURXxDT0xPUnxDT058Q09TfENPU0h8Q09UfENTQ3xEQVRFfERBVFVNfERFQlVHfERFQ0lNQUx8REVGfERFR3xERUdSRUVTfERFTEVURXxERVR8REVWSUNFfERJU1BMQVl8RE9UfEVMQVBTRUR8RVBTfEVSQVNBQkxFfEVYTElORXxFWFB8RVhURVJOQUx8RVhUWVBFfEZJTEVUWVBFfEZJWEVEfEZQfEdPfEdSQVBIfEhBTkRMRVJ8SUROfElNQUdFfElOfElOVHxJTlRFUk5BTHxJUHxJU3xLRVlFRHxMQk9VTkR8TENBU0V8TEVGVHxMRU58TEVOR1RIfExFVHxMSU5FfExJTkVTfExPR3xMT0cxMHxMT0cyfExUUklNfE1BUkdJTnxNQVR8TUFYfE1BWE5VTXxNSUR8TUlOfE1JU1NJTkd8TU9EfE5BVElWRXxOVUx8TlVNRVJJQ3xPRnxPUFRJT058T1JEfE9SR0FOSVpBVElPTnxPVVRJTnxPVVRQVVR8UEl8UE9JTlR8UE9JTlRFUnxQT0lOVFN8UE9TfFBSSU5UfFBST0dSQU18UFJPTVBUfFJBRHxSQURJQU5TfFJBTkRPTUlaRXxSRUNPUkR8UkVDU0laRXxSRUNUWVBFfFJFTEFUSVZFfFJFTUFJTkRFUnxSRVBFQVR8UkVTVHxSRVRSWXxSRVdSSVRFfFJJR0hUfFJORHxST1VORHxSVFJJTXxTQU1FfFNFQ3xTRUxFQ1R8U0VRVUVOVElBTHxTRVR8U0VUVEVSfFNHTnxTSU58U0lOSHxTSVpFfFNLSVB8U1FSfFNUQU5EQVJEfFNUQVRVU3xTVFJ8U1RSRUFNfFNUWUxFfFRBQnxUQU58VEFOSHxURU1QTEFURXxURVhUfFRIRVJFfFRJTUV8VElNRU9VVHxUUkFDRXxUUkFOU0ZPUk18VFJVTkNBVEV8VUJPVU5EfFVDQVNFfFVTRXxWQUx8VkFSSUFCTEV8VklFV1BPUlR8V0hFTnxXSU5ET1d8V0lUSHxaRVJ8Wk9ORVdJRFRIKSg/OlxcJHxcXGIpL2ksXG4gICAgb3BlcmF0b3I6IC88Wz0+XT98Pj0/fFsrXFwtKlxcL149Jl18XFxiKD86QU5EfEVRVnxJTVB8Tk9UfE9SfFhPUilcXGIvaSxcbiAgICBwdW5jdHVhdGlvbjogL1ssOzooKV0vXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xudmFyIHJlZnJhY3RvckJhc2ljID0gcmVxdWlyZSgnLi9iYXNpYy5qcycpXG5tb2R1bGUuZXhwb3J0cyA9IHZibmV0XG52Ym5ldC5kaXNwbGF5TmFtZSA9ICd2Ym5ldCdcbnZibmV0LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gdmJuZXQoUHJpc20pIHtcbiAgUHJpc20ucmVnaXN0ZXIocmVmcmFjdG9yQmFzaWMpXG4gIFByaXNtLmxhbmd1YWdlcy52Ym5ldCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2Jhc2ljJywge1xuICAgIGtleXdvcmQ6IC8oPzpcXGIoPzpBRERIQU5ETEVSfEFERFJFU1NPRnxBTElBU3xBTkR8QU5EQUxTT3xBU3xCRUVQfEJMT0FEfEJPT0xFQU58QlNBVkV8QllSRUZ8QllURXxCWVZBTHxDQUxMKD86IEFCU09MVVRFKT98Q0FTRXxDQVRDSHxDQk9PTHxDQllURXxDQ0hBUnxDREFURXxDREVDfENEQkx8Q0hBSU58Q0hBUnxDSERJUnxDSU5UfENMQVNTfENMRUFSfENMTkd8Q0xPU0V8Q0xTfENPQkp8Q09NfENPTU1PTnxDT05TVHxDT05USU5VRXxDU0JZVEV8Q1NIT1JUfENTTkd8Q1NUUnxDVFlQRXxDVUlOVHxDVUxOR3xDVVNIT1JUfERBVEF8REFURXxERUNJTUFMfERFQ0xBUkV8REVGQVVMVHxERUYoPzogRk58IFNFR3xEQkx8SU5UfExOR3xTTkd8U1RSKXxERUxFR0FURXxESU18RElSRUNUQ0FTVHxET3xET1VCTEV8RUxTRXxFTFNFSUZ8RU5EfEVOVU18RU5WSVJPTnxFUkFTRXxFUlJPUnxFVkVOVHxFWElUfEZBTFNFfEZJRUxEfEZJTEVTfEZJTkFMTFl8Rk9SKD86IEVBQ0gpP3xGUklFTkR8RlVOQ1RJT058R0VUfEdFVFRZUEV8R0VUWE1MTkFNRVNQQUNFfEdMT0JBTHxHT1NVQnxHT1RPfEhBTkRMRVN8SUZ8SU1QTEVNRU5UU3xJTVBPUlRTfElOfElOSEVSSVRTfElOUFVUfElOVEVHRVJ8SU5URVJGQUNFfElPQ1RMfElTfElTTk9UfEtFWXxLSUxMfExJTkUgSU5QVVR8TEVUfExJQnxMSUtFfExPQ0FURXxMT0NLfExPTkd8TE9PUHxMU0VUfE1FfE1LRElSfE1PRHxNT0RVTEV8TVVTVElOSEVSSVR8TVVTVE9WRVJSSURFfE1ZQkFTRXxNWUNMQVNTfE5BTUV8TkFNRVNQQUNFfE5BUlJPV0lOR3xORVd8TkVYVHxOT1R8Tk9USElOR3xOT1RJTkhFUklUQUJMRXxOT1RPVkVSUklEQUJMRXxPQkpFQ1R8T0Z8T0ZGfE9OKD86IENPTXwgRVJST1J8IEtFWXwgVElNRVIpP3xPUEVSQVRPUnxPUEVOfE9QVElPTig/OiBCQVNFKT98T1BUSU9OQUx8T1J8T1JFTFNFfE9VVHxPVkVSTE9BRFN8T1ZFUlJJREFCTEV8T1ZFUlJJREVTfFBBUkFNQVJSQVl8UEFSVElBTHxQT0tFfFBSSVZBVEV8UFJPUEVSVFl8UFJPVEVDVEVEfFBVQkxJQ3xQVVR8UkFJU0VFVkVOVHxSRUFEfFJFQURPTkxZfFJFRElNfFJFTXxSRU1PVkVIQU5ETEVSfFJFU1RPUkV8UkVTVU1FfFJFVFVSTnxSTURJUnxSU0VUfFJVTnxTQllURXxTRUxFQ1QoPzogQ0FTRSk/fFNFVHxTSEFET1dTfFNIQVJFRHxTSE9SVHxTSU5HTEV8U0hFTEx8U0xFRVB8U1RBVElDfFNURVB8U1RPUHxTVFJJTkd8U1RSVUNUVVJFfFNVQnxTWU5DTE9DS3xTV0FQfFNZU1RFTXxUSEVOfFRIUk9XfFRJTUVSfFRPfFRST0ZGfFRST058VFJVRXxUUll8VFJZQ0FTVHxUWVBFfFRZUEVPRnxVSU5URUdFUnxVTE9OR3xVTkxPQ0t8VU5USUx8VVNIT1JUfFVTSU5HfFZJRVcgUFJJTlR8V0FJVHxXRU5EfFdIRU58V0hJTEV8V0lERU5JTkd8V0lUSHxXSVRIRVZFTlRTfFdSSVRFfFdSSVRFT05MWXxYT1IpfFxcQig/OiNDT05TVHwjRUxTRXwjRUxTRUlGfCNFTkR8I0lGKSkoPzpcXCR8XFxiKS9pLFxuICAgIGNvbW1lbnQ6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyg/OiF8UkVNXFxiKS4rL2ksXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGtleXdvcmQ6IC9eUkVNL2lcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKScuKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9