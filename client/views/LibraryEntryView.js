// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="song">(<%= artist %>)</td> \
                          <td class="song"><%= title %></td> \
                          <td><button>+</button></th>'),

  events: {
    'click .song': function() {
      this.model.play();
      //call the put-in-queue function
      console.log('click');
    },
    'click button':function(){
      this.model.enqueue();
      console.log('buttonClick');
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
