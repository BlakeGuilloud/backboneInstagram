var Backbone = require('backbone');
var PictureModel = require('./pictureModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/bb3model',
  model: PictureModel
});
