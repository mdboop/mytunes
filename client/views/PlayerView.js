// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  // el: '<audio controls autoplay />',
  tagName: "div",

  template: _.template('<div class="title"><%= title %></div> \
                        <audio controls autoplay src=<%= url %>></audio>'),

  events: {
    'ended':'donePlaying'
  },  

  initialize: function() {
    this.render();
  },

  donePlaying: function(){
    this.model.ended();
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    if(this.model.get('title')) {
      return this.$el.html(this.template(this.model.attributes));
    } else {
      return this.$el.html('<audio controls autoplay src=<%= url %>></audio>');
    }
    // return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
