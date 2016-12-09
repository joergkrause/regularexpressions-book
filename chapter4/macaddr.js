var patt = /^([\dA-F]{2})[-: ]?([\dA-F]{2})[-: ]?([\dA-F]{2})[-: ]?(\[\dA-F]{2})[-: ]?([\dA-F]{2})[-: ]?([\dA-F]{2})$/i;
var mac = "CB:35:2F:00:7C:A1";
mac = patt.exec(mac)
for(i = 1; i < mac.length; i++) {
  console.log(mac[i]);
}