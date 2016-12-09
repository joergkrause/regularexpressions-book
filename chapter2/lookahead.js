var patt = /(\d{1,3})(?=d)/;
var text = "Duration: 16d";
var test = patt.exec(text);
console.log("Days: " + test[0]);
