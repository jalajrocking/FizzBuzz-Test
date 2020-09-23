const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const actions = require('./middlewares/actions');

// Instance of express framework 
const app = express();

// General Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// HTTP request logger for better understanding of response, status and performance
if (app.get('env') == 'development')
  app.use(morgan('tiny'));

require('./bootstrap/routes')(app);

// Common handler for uncaught exceptions
process.on('uncaughtException', function (err, req, res) {
  res.send({result: false, message: actions.SOMETHING_WRONG})
})

const port = process.env.PORT || 8000;

app.listen(port);

