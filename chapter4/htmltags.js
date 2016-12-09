var patt = /<([A-Z][A-Z0-9]*)\b[^>]*>(.*?)<\/\1>/i;
var html = "We want write <b>bold</b> and <i>italic</i> here";
console.log(patt.exec(html));