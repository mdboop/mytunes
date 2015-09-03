// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    
    this.on('add',function(){
      if(this.length === 1){
        this.playFirst();
      }
    },this);
    
    this.on('remove', this.playNext,this);
    // this.on('remove', this.removeSong(song), this);
  
  },

  playFirst: function(){
    this.at(0).play();
  },

  // removeSong: function(song) {
  //   this.remove(song);
  //   this.playNext();
  // },

  //maybe add addSong method here
 
  playNext: function(){
    this.at(0).play();
  }

});