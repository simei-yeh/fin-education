const express = require( 'express' );

const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get( '/hi', ( req, res ) => {
  res.send({ greeting: 'Hello world !' });
});

module.exports = app;