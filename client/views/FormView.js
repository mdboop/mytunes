var FormView = Backbone.View.extend({

  tagName: "div",

  template: _.template('<input><button>Add Playlist</button>'),

  events: {

    'click button': "addPlayList"

  },

  initialize: function() {
    this.render()
  },

  render: function(){
    return this.$el.html(this.template());
  },

  addPlayList: function(e){
    var name = this.$el.find('input').val();
    this.model.addPlayList(name);
  }


});