(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_basic"],{

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2Jhc2ljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfYmFzaWMuYnVuZGxlLmNlYWVhNjY4NmI2MTcyMGZmNzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYmFzaWNcbmJhc2ljLmRpc3BsYXlOYW1lID0gJ2Jhc2ljJ1xuYmFzaWMuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBiYXNpYyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuYmFzaWMgPSB7XG4gICAgY29tbWVudDoge1xuICAgICAgcGF0dGVybjogLyg/OiF8UkVNXFxiKS4rL2ksXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAga2V5d29yZDogL15SRU0vaVxuICAgICAgfVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpcIlwifFshIyQlJicoKSosXFwvOjs8PT4/Xl8gK1xcLS5BLVpcXGRdKSpcIi9pLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBudW1iZXI6IC8oPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzpFWystXT9cXGQrKT8vaSxcbiAgICBrZXl3b3JkOiAvXFxiKD86QVN8QkVFUHxCTE9BRHxCU0FWRXxDQUxMKD86IEFCU09MVVRFKT98Q0FTRXxDSEFJTnxDSERJUnxDTEVBUnxDTE9TRXxDTFN8Q09NfENPTU1PTnxDT05TVHxEQVRBfERFQ0xBUkV8REVGKD86IEZOfCBTRUd8REJMfElOVHxMTkd8U05HfFNUUil8RElNfERPfERPVUJMRXxFTFNFfEVMU0VJRnxFTkR8RU5WSVJPTnxFUkFTRXxFUlJPUnxFWElUfEZJRUxEfEZJTEVTfEZPUnxGVU5DVElPTnxHRVR8R09TVUJ8R09UT3xJRnxJTlBVVHxJTlRFR0VSfElPQ1RMfEtFWXxLSUxMfExJTkUgSU5QVVR8TE9DQVRFfExPQ0t8TE9OR3xMT09QfExTRVR8TUtESVJ8TkFNRXxORVhUfE9GRnxPTig/OiBDT018IEVSUk9SfCBLRVl8IFRJTUVSKT98T1BFTnxPUFRJT04gQkFTRXxPVVR8UE9LRXxQVVR8UkVBRHxSRURJTXxSRU18UkVTVE9SRXxSRVNVTUV8UkVUVVJOfFJNRElSfFJTRVR8UlVOfFNIQVJFRHxTSU5HTEV8U0VMRUNUIENBU0V8U0hFTEx8U0xFRVB8U1RBVElDfFNURVB8U1RPUHxTVFJJTkd8U1VCfFNXQVB8U1lTVEVNfFRIRU58VElNRVJ8VE98VFJPRkZ8VFJPTnxUWVBFfFVOTE9DS3xVTlRJTHxVU0lOR3xWSUVXIFBSSU5UfFdBSVR8V0VORHxXSElMRXxXUklURSkoPzpcXCR8XFxiKS9pLFxuICAgIGZ1bmN0aW9uOiAvXFxiKD86QUJTfEFDQ0VTU3xBQ09TfEFOR0xFfEFSRUF8QVJJVEhNRVRJQ3xBUlJBWXxBU0lOfEFTS3xBVHxBVE58QkFTRXxCRUdJTnxCUkVBS3xDQVVTRXxDRUlMfENIUnxDTElQfENPTExBVEV8Q09MT1J8Q09OfENPU3xDT1NIfENPVHxDU0N8REFURXxEQVRVTXxERUJVR3xERUNJTUFMfERFRnxERUd8REVHUkVFU3xERUxFVEV8REVUfERFVklDRXxESVNQTEFZfERPVHxFTEFQU0VEfEVQU3xFUkFTQUJMRXxFWExJTkV8RVhQfEVYVEVSTkFMfEVYVFlQRXxGSUxFVFlQRXxGSVhFRHxGUHxHT3xHUkFQSHxIQU5ETEVSfElETnxJTUFHRXxJTnxJTlR8SU5URVJOQUx8SVB8SVN8S0VZRUR8TEJPVU5EfExDQVNFfExFRlR8TEVOfExFTkdUSHxMRVR8TElORXxMSU5FU3xMT0d8TE9HMTB8TE9HMnxMVFJJTXxNQVJHSU58TUFUfE1BWHxNQVhOVU18TUlEfE1JTnxNSVNTSU5HfE1PRHxOQVRJVkV8TlVMfE5VTUVSSUN8T0Z8T1BUSU9OfE9SRHxPUkdBTklaQVRJT058T1VUSU58T1VUUFVUfFBJfFBPSU5UfFBPSU5URVJ8UE9JTlRTfFBPU3xQUklOVHxQUk9HUkFNfFBST01QVHxSQUR8UkFESUFOU3xSQU5ET01JWkV8UkVDT1JEfFJFQ1NJWkV8UkVDVFlQRXxSRUxBVElWRXxSRU1BSU5ERVJ8UkVQRUFUfFJFU1R8UkVUUll8UkVXUklURXxSSUdIVHxSTkR8Uk9VTkR8UlRSSU18U0FNRXxTRUN8U0VMRUNUfFNFUVVFTlRJQUx8U0VUfFNFVFRFUnxTR058U0lOfFNJTkh8U0laRXxTS0lQfFNRUnxTVEFOREFSRHxTVEFUVVN8U1RSfFNUUkVBTXxTVFlMRXxUQUJ8VEFOfFRBTkh8VEVNUExBVEV8VEVYVHxUSEVSRXxUSU1FfFRJTUVPVVR8VFJBQ0V8VFJBTlNGT1JNfFRSVU5DQVRFfFVCT1VORHxVQ0FTRXxVU0V8VkFMfFZBUklBQkxFfFZJRVdQT1JUfFdIRU58V0lORE9XfFdJVEh8WkVSfFpPTkVXSURUSCkoPzpcXCR8XFxiKS9pLFxuICAgIG9wZXJhdG9yOiAvPFs9Pl0/fD49P3xbK1xcLSpcXC9ePSZdfFxcYig/OkFORHxFUVZ8SU1QfE5PVHxPUnxYT1IpXFxiL2ksXG4gICAgcHVuY3R1YXRpb246IC9bLDs6KCldL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9