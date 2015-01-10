Instamart.Views.StoreForm = Backbone.View.extend({
  template: ['stores/form'],

  events: {
    'click button': 'submit'
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    
    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        this.collection.add(this.model, {merge: true});
        Backbone.history.navigate('', {trigger: true});
      }.bind(this)
    })
  },

  render: function () {
    var content = this.template({
      store: this.model
    });

    this.$el.html(content);
    return this;
  }
})
