const yargs = require('yargs');
const axios = require('axios');

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

let encodedAdr = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdr}&key=AIzaSyAOuavA90ucXekamQ9o_hfNotApEbut9bQ`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status !== 'OK') {
        throw new Error('Unable to find that address');
    }

    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherURL = `https://api.darksky.net/forecast/4d13c4321ce9af51d458644f88211301/${lat},${lng}`;

    return axios.get(weatherURL);
}).then((response) => {
    let tem = response.data.currently.temperature;
    let apparentem = response.data.currently.apparentTemperature;

    console.log(`${tem} and ${apparentem}`);
}).catch((e) => {
    console.log(e.message);
});

