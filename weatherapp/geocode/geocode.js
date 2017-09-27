const request = require('request');

var geocodeAddress = (address,callback) => {
  if(address === null || address.length === 0) {
    return callback(undefined,'Enter an address');
  }
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(address);
  request({
    url:url,
    json:true
  },(error,response,body) => {
    //console.log(JSON.stringify(response,undefined,2));
    if(error) {
      callback(undefined,'unable to connect to google servers');
    } else if(body.status === 'ZERO_RESULTS') {
      callback(undefined,'Unable to find the address');
    } else if(body.status === 'OK') {
      callback({
        lat:body.results[0].geometry.location.lat,
        lng:body.results[0].geometry.location.lng,
        formatted_address:body.results[0].formatted_address
      },undefined);
    }
  });
};

module.exports = {
  geocodeAddress
};
