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
        '<div class = "singleImage" data-index='
        + el._id
        + ' >'
        + '<h2>'
        + el.title
        + '</h2>'
        + '<img src ="'
        + el.image
        + '">'
        + '<p>'
        + el.comment
        + '</p>'
        + '<i class="fa fa-heart-o" data-index='
        + el._id
        + '></i>'
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
      var imageComment = $('#commentInput').val();
      var newPictureModel = new PictureModel({
        title: imageTitle,
        image: imageUrl,
        comment: imageComment
      });
      newPictureModel.save();
      $('#titleInput').val('');
      $('#imageInput').val('');
      $('#commentInput').val('');
      $('.displayPics').prepend('<div class ="singleImage">'
      + '<h2>'
      + newPictureModel.get('title')
      + '</h2>'
      + '<img src ="'
      + newPictureModel.get('image')
      + '">'
      + '<p>'
      + newPictureModel.get('comment')
      + '</p>'
      + '<i class="fa fa-heart-o"></i>'
      + '</div>')
    });



    $('body').on('click', '.fa', function(){
      console.log('blue')
      $(this).toggleClass('fa-heart');
      $(this).toggleClass('fa-heart-o');
      favorites = [];
      var favoriteImageID = $(this).data('index');
      favorites.push(favoriteImageID);
      console.log(favorites);
    });
  },
}
