// THIS FILE IS THE STARTING POINT OF THE API APPLICATION

// Starting the express server according to the ENV config
const app = require('./configs/express').app;
// Connecting database with mongoose
// Here as a parameter we will send the database name we should use
require('./middleware/mongoose.connect')('admin');
// Modules required for our application
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const util = require('./helpers/util');

// Path of the route folder
const normalizedPath = path.join(__dirname + `\\routes`);

const routes = util.getFileExports(normalizedPath);

// Adding middleware to the application
app.use(cors());

// Parsing json data
app.use(bodyParser.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello world');
});

