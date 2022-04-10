const app  = require('express')()
const mongoose = require('mongoose');
const routeController = require('./routes.js')

app.use(routeController)

const URI = 'mongodb://127.0.0.1:27017/test?compressors=none'
const db =  mongoose.connect(URI, {}, err => {
    if (err) throw new Error(err)
    app.listen(3333, ()=>{
        console.log('listening...');
    });
});
