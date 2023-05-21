const express = require('express');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const backend = require('i18next-node-fs-backend');

const app = express(); 

//Initialize i18next and confuguration of the backend
i18next
.use(backend)
.init({
    backend: {
        loadPath: 'Languages/{{lng}}/{{ns}}.json', //this shows the path to my transaltion file
    },
  fallbackLng: 'en', //default language
  preload: ['en', 'fr'],//preload available languages
  saveMissing: true, //This enables saving missing tranlations 
});



//now let's configure the i18next middleware
app.use(i18nextMiddleware.handle(i18next));

//This is to serve translation files statically
app.use('Languages', express.static('Languages'));

// set up the rest of the server
//app.listen(3001, () => {
 //   console.log('server is listening on port 3001')
//});
//setting up my desired port number to be 3000
const port = 3002;

//middleware
app.use((err, req, res, next) => {
    console.error(err);
res.status(500).json({ error: 'Internal Server Error'})
});

//To start my server
app.listen(port, () => {
    console.log('server is running on port 3002');
});


