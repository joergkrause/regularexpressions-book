var patt = /^(4915[0-1]|491[0-4]\d|490\d\d|4[0-8]\d{3}|[1-3]\d{4}|[2-9]\d{3}|1[1-9]\d{2}|10[3-9]\d|102[4-9])$/;
var port = 1384;
console.log(patt.test(port));
port = 75000;
console.log(patt.test(port));