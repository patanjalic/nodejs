const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine','hbs');

hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getCurrentYear', () => { return new Date().getFullYear() });
hbs.registerHelper('screamIt', (scream) => { return scream.toUpperCase()});

app.use( (req,res,next) => {
  console.log(`${new Date().toString()} ${req.method} ${req.url}`);
  next();
});
// app.use((req,res,next) => {
//   res.render('maintenance.hbs', {
//     pageTitle: 'Maintenance',
//     welcomeMessage: 'Site is currently under maintenance please come back later'
//   })
// });
app.get('/',(req,resp) => {
  resp.render('index.hbs', {
    pageTitle: 'Real world',
    welcomeMessage: 'welcome to the real world'
  });
});
app.get('/about',(req,res) => {
  res.render('index.hbs', {
    pageTitle: 'Real world',
    welcomeMessage: 'This website is about the real world stuff which is too heavy for you folks'
  });
});

app.get('/bad',(req,res) => {
  res.send({message:'Try again later',
            errorCode:4});
});
app.listen(3000);
