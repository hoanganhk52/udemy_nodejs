const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAdr = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdr}&key=AIzaSyAOuavA90ucXekamQ9o_hfNotApEbut9bQ`,
            json: true
        }, (err, res, body) => {
            if (err) {
                reject('unable to connect google api');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('unable to find that address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longtitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch((err) => {
    console.log(err);
});