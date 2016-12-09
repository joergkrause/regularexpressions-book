var uri = 'http://joergkrause.de/index.php?cat=113&prod=2605&query=apress';
var queryString = {};
uri.replace(/([^?=&]+)(=([^&]*))?/g, function($0, $1, $2, $3) { 
  queryString[$1] = $3
});
for (var i in queryString){
 if (!queryString[i]) continue;
 console.log(i + " = " + queryString[i]);
}