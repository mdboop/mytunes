// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended':'donePlaying'
  },  

  initialize: function() {
    // this.('ended', function() {
    //   console.log(this.model);
    // }, this);
  },

  donePlaying: function(){
    //might need to move this into the model later
    // this.model.dequeue();
    this.model.ended();
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
