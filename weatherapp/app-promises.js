const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
.options({
  a: {
    alias:'address',
    string:true,
    demand:true,
    describe:'Address to fetch weather'
  }
})
.help()
.alias('help','h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address');
  }
  console.log(response.data.results[0].geometry.location);
  var location = response.data.results[0].geometry.location;
  var weatherUrl = 'https://api.darksky.net/forecast/26dfb6381332468c44a9c0420bfe991c/'+location.lat+','+location.lng;
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparantTemperature = response.data.currently.apparantTemperature;
  console.log(`It's currently ${temperature} in ${argv.address}. It feels like ${apparantTemperature}`);
}).catch( (e) => {
  console.log(e.message);
});
