const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
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

geocode.geocodeAddress(argv.address,(results,errormessages) => {
  if(errormessages !== undefined) {
    console.log(errormessages);
  } else {
    console.log(JSON.stringify(results,undefined,2));
    if(results !== undefined) {
      weather.getTemperature({
        lat:results.lat,
        lng:results.lng
      },(result,errormessages) => {
        if(errormessages !== undefined) {
          console.log(errormessages);
        } else {
          console.log('Apparent temperature in the area is '+JSON.stringify(result,undefined,2));
        }
      });
    }
  }
});
