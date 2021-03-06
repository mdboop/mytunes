describe('SongQueue', function() {
  var playSpy, library,appView; /* songData1, songData2;*/

  beforeEach(function() {
    playSpy = sinon.spy(SongQueue.prototype, 'playFirst');
    // songData1 = {
    //   artist: 'data',
    //   url: '/test/testsong.mp3',
    //   title:'test song'
    // };
    // songData2 = {
    //   artist: 'data',
    //   url: '/test/testsong2.mp3',
    //   title:'test song 2'
    // };
    library = new Songs([
      {
        url: "mp3s/08 4 Page Letter.mp3",
        title: "4 Page Letter",
        artist: "Aaliyah"
      },
      {
        url: "mp3s/11 We Need A Resolution.mp3",
        title: "We Need A Resolution",
        artist: "Aaliyah"
      },
      {
        url: "mp3s/A Third Song.mp3",
        title: "The Third Song",
        artist: "Aaliyah"
      }
    ]);
    appView = new AppView({model: new AppModel({library: library})});
  });

  afterEach(function() {
    SongQueue.prototype.playFirst.restore();
  });

  describe('when a song is added', function() {
    describe('when it is the only song in the song queue', function() {
      it('plays it', function() {
        var songQueue = new SongQueue();
        songQueue.add(library.at(0));
        expect(playSpy).to.have.been.called;
      });
    });

    describe('when it is not the only song in the song queue', function() {
      it('does nothing', function() {
        var songQueue = new SongQueue(library.at(0));
        songQueue.add(library.at(1));
        expect(playSpy).to.have.not.been.called;
      });
    });
  });

  describe('when a song ends', function() {
    it('removes the song from the queue', function() {
      //var songQueue = new SongQueue([library.at(0), library.at(1)]);
      var songQueue = new SongQueue();
      var song1 = library.at(0);
      var song2 = library.at(1);
      songQueue.add(song1);
      songQueue.add(song2);
      //song2 = songQueue.at(1);
      expect(songQueue.length).to.equal(2);
      songQueue.at(0).trigger('ended');
      expect(songQueue.length).to.equal(1);
      expect(songQueue.at(0)).to.equal(song2);
    });

    describe('if there are any songs left in the queue', function() {
    it('plays the first song in the queue', function() {
        var songQueue = new SongQueue([library.at(0), library.at(1)]);
        songQueue.at(0).ended();
        expect(playSpy).to.have.been.called;
      });
    });

    describe('if there are no songs left in the queue', function() {
      it('does nothing', function() {
        var songQueue = new SongQueue(library.at(0));
        songQueue.at(0).ended();
        expect(playSpy).to.have.not.been.called;
      });
    });
  });

  describe('when a song is dequeued', function() {
      it('removes the song', function() {
      removeSpy = sinon.spy(SongQueue.prototype, 'remove');
      var songQueue = new SongQueue(library.at(0));
      songQueue.at(0).dequeue();
      expect(removeSpy).to.have.been.called;
      SongQueue.prototype.remove.restore();
    });
  });

  describe('playFirst', function() {
    it('plays the first song in the queue', function() {
      sinon.spy(SongModel.prototype, 'play');
      var songQueue = new SongQueue(library.at(0));
      songQueue.playFirst();
      expect(songQueue.at(0).play).to.have.been.called;
      SongModel.prototype.play.restore();
    });
  });
});
