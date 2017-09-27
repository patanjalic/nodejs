const request = require('request');

var geocodeAddress = (address) => {
  return promise = new Promise((resolve,reject) => {
    if(address === undefined || address === null) {
      reject('Enter a valid address');
    } else {
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address);
      request({
        url:url,
        json:true
      },(error,response,body) => {
        //console.log(JSON.stringify(response,undefined,2));
        if(error) {
          reject('unable to connect to google servers');
        } else if(body.status === 'ZERO_RESULTS') {
          reject('Unable to find the address');
        } else if(body.status === 'OK') {
          resolve({
            lat:body.results[0].geometry.location.lat,
            lng:body.results[0].geometry.location.lng,
            formatted_address:body.results[0].formatted_address
          });
        }
      });
    }
  });
};

geocodeAddress('33418').then((location) => console.log(JSON.stringify(location,undefined,2)),
                  (errormessages) => console.log(errormessages));
