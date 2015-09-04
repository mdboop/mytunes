// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    playCount:0
  },

  enqueue: function(){
    this.trigger('enqueue',this);
  },

  dequeue: function(){
    this.trigger('dequeue',this);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  ended: function() {
    this.set('currentSong', null);
    var count = this.get('playCount')
    this.set('playCount', count + 1);
    this.dequeue();
    this.trigger('ended', this); 
  }

});
