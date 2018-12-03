const request = require('request');
const io = require('socket.io')();

io.on('connection', async function(client) {
    var hello = "hello";
    request({
        url: 'https://api.foursquare.com/v2/venues/explore',
        method: 'GET',
        qs: {
        client_id: 'Z01CLGDBKJB40EO1PKNZDKIK1H13G1MARXUFIAKUSSE1LRC1',
        client_secret: 'NILWDALAPYKFWAITHDA0KF1T13IZ0EEWCCA53VLINVE11GYY',
        //ll: '56.87767,-14.80906',
        near: 'Växjö, Kronobergs Län',
        intent: 'match',
        v: '20180323'
    }
    }, function(err, res, body) {
        if (err) {
            console.error(err);
        } else {
            res = JSON.parse(body);
            client.emit("res", res);
           
            console.log(res);
        }
    });
});
io.listen(3000);
