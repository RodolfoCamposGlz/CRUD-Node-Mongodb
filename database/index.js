const mongoose = require('mongoose');
const mongo_uri = 'mongodb+srv://devsprout:hola123321@devf-iaq4o.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(
    mongo_uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true 
     })

    .then(() => console.log('connected to mongo atlas'))
    .catch(()=> console.log('Error conntecting Mongo'));