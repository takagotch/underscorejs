//$("#libryry-template").html()
//{'library': self.collectiono.toJSON()}
//self.$el.append(output);

render: function(){
  var self = this;
  var output = _.template($("#library-template").html(),
	  {'library': self.collection.toJSON()});
  self.$el.append(output);
  return self;
}


LibraryView = Backbone.View.extend({
  
  template _.template($("#library-template").html()),
  render: function(){
    //...
  }
});


var templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};

_.templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};



