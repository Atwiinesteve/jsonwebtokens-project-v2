//Importing Database Module.
require('./database/database.js');



//Importing Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();



// Importing Custom Routes.
const usersRoute = require('./controllers/users.js');
const usersPosts = require('./controllers/posts.js');





// Application Setup
const app = express();
const PORT = process.env.PORT || 8080;





// Modules
app.use(bodyParser.json());
app.use(cors());



// Application Middlewares
app.use('/api', usersRoute);
app.use('/api', usersPosts);




// Route
app.get('/', (req, res, next) => { res.send('JWT Application with Authorization and Authentication, Version 2') });






// Server Initialization.
app.listen(PORT, () => { console.log(`Server Application Running at http://localhost:${PORT}`); });