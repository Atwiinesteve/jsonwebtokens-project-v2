//Importing Modules
const mongoose = require('mongoose');
require('dotenv').config();



// Establishig Database Connection.   
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
        //     useCreateIndex: true
}).then(() => {
    console.log('Server Connected Successfully')
}).catch(err => {
    console.log(err.message);
});



// Exporting Connection.
module.exports = mongoose;