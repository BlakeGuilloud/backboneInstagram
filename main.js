var $ = require('jquery');
var app = require('./app');
var PictureCollection = require('./pictureCollection');
var PictureModel = require('./pictureModel');

$(document).ready(function(){

  app.init();
  window.pictureCollection = new PictureCollection();


  var myModel = new PictureModel({
    image: 'http://placecage.com/200/300',
    title: 'This is Nick Cage'
  });
  // myModel.save();
  pictureCollection.fetch().then(function(collectionData){
    console.log(pictureCollection.models[0].attributes.image)
  });
  console.log(myModel.get('image'))
  $('body').append(myModel.get('title'))


});
