var $ = require('jquery');
var app = require('./app');
var PictureCollection = require('./pictureCollection');
var PictureModel = require('./pictureModel');

$(document).ready(function(){

  app.init();
  window.pictureCollection = new PictureCollection();

});
