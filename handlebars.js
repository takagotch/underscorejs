<script type='text/template' id='book-template'>
  <li>
	<b><%=name %></b> by <%=author %>
  </li>
</script>


<script type='text/template' id='library-template'>
<ul>
	<% for (var i = 0; i < library.length; i++) { %>
	  <%= itemTemplate(library[i]) %>
	<% } %>
</ul>
</script>



LibraryView = Backbone.View.extend({
  template: _.template($('#library-template').html()),
  bookTemplate: _.template($('#book-template').html()),

  render: function(){
    var html = this.template({
      library: this.collection.toJSON(),
      itemTemplate: this.bookTemplate
    });
    $(this.el).append(html);
  }
});


