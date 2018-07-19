document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "cc74147b1369930d1c0f2594939a6b46";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "https://api.darksky.net/forecast/cc74147b1369930d1c0f2594939a6b46/40.7127,-74.0059";
  var ctx = document.getElementById("myChart").getContext("2d")
  let weatherTimeTemp = {}

  // makeRequest(URL, function(json) {
  //   var data = generateDataSet(getHours(json), getFahrenheits(json));
  //   var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  // });

  fetch(URL, {
    method: 'GET'
  })
  .then(function(resp){
    return resp.json();
  })
  .then(function(resp){
    let utcTimes = resp.hourly.data;
     for (const hour in utcTimes) {
       let utcSecond = utcTimes[hour].time;
       weatherTimeTemp[utcSecond] = 0;
       console.log(weatherTimeTemp)
     }

    })
  })
// let translatedDate = new Date(utcSeconds*1000);
// let militaryHour = translatedDate.getHours();
// console.log(militaryHour)
