var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

var RestaurantApi = require('./client/src/models/restaurantApi');

app.listen(3000, function () {
  new RestaurantApi(app);
  console.log('App running on port '+this.address().port);
});