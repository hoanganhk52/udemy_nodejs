const request = require('request');

let geocodeAddress = (address, callback) => {
    let encodedAdr = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdr}&key=AIzaSyAOuavA90ucXekamQ9o_hfNotApEbut9bQ`,
        json: true
    }, (err, res, body) => {
        if (err) {
            callback('unable to connect google api');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports = {
    geocodeAddress
};