// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


      //this was listening for 'dequeue', but changed to 'ended' for tests
    params.library.on('ended',function(song){
      var queue = this.get('songQueue');
      queue.remove(song);
      // var next = queue.first() || new SongModel();
      // console.log(queue);
      // this.set('currentSong',next);
    }, this);


    params.library.on('enqueue', function(song) {
      var queue = this.get('songQueue');
      
      queue.add(song);
      this.set('songQueue',queue);
    },this);


    params.library.on('play', function(song) {
      console.log(song.get('title'));
      this.set('currentSong', song);
    }, this);


  }

});
