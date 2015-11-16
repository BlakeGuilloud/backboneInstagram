var $ = require('jquery');
var _ = require('underscore');
var PictureModel = require('./pictureModel');
var PictureCollection = require('./pictureCollection');

module.exports = {
  init: function(){
    this.styling();
    this.events();
  },
  styling: function(){
    pictureCollection = new PictureCollection();
    pictureCollection.fetch().then(function(data){
      console.log(data)
      _.each(data, function(el, idx, array){
        $('.displayPics').append(
        '<div class = "col-md-4" >'
        + '<h2>'
        + el.title
        + '</h2>'
        + '<img src ="'
        + el.image
        + '">'
        + '</div>'
      )
      });
    });
  },
  events: function(){
    $('form').on('click', '#submitButton', function(event){
      event.preventDefault();
      var imageTitle = $('#titleInput').val();
      var imageUrl = $('#imageInput').val();
      var newPictureModel = new PictureModel({
        title: imageTitle,
        image: imageUrl
      });
      newPictureModel.save();
      $('#titleInput').val('');
      $('#imageInput').val('');
      $('.displayPics').prepend('<div class ="col-md-4">'
      + '<h2>'
      + newPictureModel.get('title')
      + '</h2>'
      + '<img src ="'
      + newPictureModel.get('image')
      + '">'
      + '</div>')
    });
  },
}
