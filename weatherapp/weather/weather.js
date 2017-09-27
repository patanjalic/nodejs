const temperature = require('request');

var isEmpty = (string) => string === undefined || string.length === 0;

var getTemperature = (location,callback) => {
  if(location === undefined || isEmpty(location.lat) || isEmpty(location.lng)) {
    return callback(undefined,'Pass some location please');
  }
    var url = 'https://api.darksky.net/forecast/26dfb6381332468c44a9c0420bfe991c/'+location.lat+','+location.lng;
    temperature({
      url:url,
      json:true
    },
    (error,response,body) => {
      callback({temperature:body.currently.apparentTemperature},undefined);
    });
};

module.exports = {
  getTemperature
};
