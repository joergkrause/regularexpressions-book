var ck_lat = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18}) ?)[EW]?$/i;
var ck_lon = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18}) ?)[NS]?$/i;

function check_lat_lon(lat, lon) {
  var validLat = ck_lat.test(lat);
  var validLon = ck_lon.test(lon);
  return (validLat && validLon);
}

console.log(check_lat_lon("13E", "52N"));