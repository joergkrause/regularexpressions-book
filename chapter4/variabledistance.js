var patt = /\b(there)\W+(?:\w+\W+){1,5}?\1\b/;
var text = "here and there is like there and here";
console.log(patt.test(text));