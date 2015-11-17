var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var PictureModel = require('./pictureModel');
var PictureCollection = require('./pictureCollection');

module.exports = app = {
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
        + '<span>'
        + el.likes
        + ' Likes</span>'
        + '<i class="fa fa-thumbs-o-up" data-index='
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
      + '<span>'
      + newPictureModel.get('likes')
      + ' Likes</span>'
      + '<i class="fa fa-thumbs-o-up" data-index='
      + newPictureModel.get('id')
      + '></i>'
      + '</div>')
    });

    $("body").on("click",".fa",function (e) {
      var id = $(this).data('index');
       var pictureCollection = new PictureCollection();
       pictureCollection.fetch().then(function(data){
       _.each(data, function(el){
         if(id === el._id){
           var picture = new PictureModel({_id: el._id});
           el.likes = el.likes + 1;
          //  picture.fetch();
           picture.set({
             likes: el.likes,
             image: el.image,
             comment: el.comment,
             title: el.title
           });
           picture.save();
         }
       });
     });
   });
  },
}
