// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    inQueue: false,
  },

  //put in queue function
  enqueue: function(){
    this.set('inQueue',true);
    this.trigger('enqueue',this);
  },

  dequeue: function(){
    this.set('inQueue',false);
    this.trigger('dequeue',this);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  ended: function() {
    this.dequeue();
    this.trigger('ended', this); 
  }

});
