var patt = /^(["']){1}.*\1$/;
console.log(patt.test("\"Word Word\""));
console.log(patt.test("\"Word Word\'"));
console.log(patt.test("\'Word Word\'"));
