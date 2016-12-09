var patt = /[ \t]+/g;
var text = "Here we have many    Spaces\tand Tabs too";
text = text.replace(patt, "");
console.log(text);