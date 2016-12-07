var text = "Than Ann answers all questions again.";
var patt = /a/g;
var match = patt.exec(text);
console.log(match[0] + " found at " + match.index);

match = patt.exec(text);
do {
 match = patt.exec(text);
 if (!match) break;
 console.log(match[0] + " found at " + match.index);
} while(true);
