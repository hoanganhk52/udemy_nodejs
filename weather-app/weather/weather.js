const request = require('request');

let getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/4d13c4321ce9af51d458644f88211301/${latitude},${longitude}`,
        json: true
    }, (err, res, body) => {
        if (!err && res.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('unable to fetch weather');
        }
    });
};

module.exports = {
    getWeather
};