const request = require('request');
const _ = require('lodash');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .argv;

geocode.geocodeAddress(argv.address, (errMessage, result) => {
    if (errMessage) {
        console.log(errMessage);
    } else {
        console.log(JSON.stringify(result, undefined, 2));
    }
});

//4d13c4321ce9af51d458644f88211301
//https://api.darksky.net/forecast/[key]/[latitude],[longitude]

weather.getWeather(latitude, longitude, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});