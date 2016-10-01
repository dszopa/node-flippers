// var request = require("request");
// request.get("https://api.rsbuddy.com/grandExchange?a=guidePrice&i=554", function (err, res, body) {
//     if (!err) {
//         var resultsObj = JSON.parse(body);
//         //Just an example of how to access properties:
//         console.log(resultsObj);
//     }
// });

var http = require('http');
var https = require('https');

var options = {
    host: 'api.rsbuddy.com',
    path: '/grandExchange?a=guidePrice&i=554'
}

var options2 = {
    host: 'rsbuddy.com',
    path: '/exchange/summary.json'
}

https.get(options2, (res) => {

  console.log(`Got response: ${res.statusCode}`);
  // consume response body
//   res.resume();
    var body = '';
    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', () => {
        console.log('No more data in response');
        var results = JSON.stringify(body);
        console.log(results);
    })
}).on('error', (e) => {
  console.log(`Got error: ${e.message}`);
});