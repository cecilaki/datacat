var myurljson = "https://cecilaki.github.io/datacat/data/data.json" ;
//var myurljson = "data/data.json" ;

var mydata = (function () {
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': myurljson,
    'dataType': "json",
    'success': function (data) {
      json = data;
    }
  });
  return json;
})();
