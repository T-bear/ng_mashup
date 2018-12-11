const request = require('request');
const io = require('socket.io')();
//Using Request to call the foursquare api
//Getting the restaurants with the categoryId and if no there were no error I will emit it to the client
io.on('connection', async function(client) {
    var hello = "hello";
    request({
        url: 'https://api.foursquare.com/v2/venues/explore',
        method: 'GET',
        qs: {
            client_id: 'Z01CLGDBKJB40EO1PKNZDKIK1H13G1MARXUFIAKUSSE1LRC1',
            client_secret: 'NILWDALAPYKFWAITHDA0KF1T13IZ0EEWCCA53VLINVE11GYY',
            categoryId: '4bf58dd8d48988d1e0931735',
            near: 'Växjö, Kronobergs Län',
            intent: 'match',
            openNow: 1,
            limit: 50,
            v: '20180323'
        } //Parsing the data to json before emitting it to the client
    }, function(err, res, body) {
        if (err) {
            console.error(err);
        } else {
           try {
                res = JSON.parse(body);
                client.emit("res", res);     
            } catch (error){
                console.log(error)
            }
        }
    });
});
//Socket port
io.listen(3000);
