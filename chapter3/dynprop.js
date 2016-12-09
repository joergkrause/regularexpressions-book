var patt = /(abc)|(def)/;
var text = "anton def";
console.log(patt.test(text));
console.log(RegExp.$1);
