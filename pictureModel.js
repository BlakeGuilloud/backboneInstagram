var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/bb2model',
  idAttribute: '_id',
  defaults: {
    title: 'Default Image',
    image: 'http://fillmurray.com/200/300',
    likes: 0
  },
  initialize: function(){

  }
});
