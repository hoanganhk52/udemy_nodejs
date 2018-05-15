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
        console.log(result);
        weather.getWeather(result.latitude, result.longtitude, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(JSON.stringify(results, undefined, 2));
            }
        });
    }
});
