const request = require('request');
const yargs = require('yargs');

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

console.log(argv);

var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+encodeURIComponent(argv.address);

request({
  url:url,
  json:true
},(error,response,body) => {
  //console.log(JSON.stringify(response,undefined,2));
  console.log(`Location: ${body.results[0].geometry.location.lat} ${body.results[0].geometry.location.lng}`);
  console.log(`Formatted address: ${body.results[0].formatted_address}`)
});
