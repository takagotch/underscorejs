function entitize(str){
  str = str.split("&").join("&amp;");
  str = str.split("<").join("&lt;");
  str = str.split(">").join("&gt");
  str = str.split('"').join("&quot;");
  str = str.split("{").join("&#123;");
  str = str.split("}").join("&#125;");
  str = str.split("'").join("&#039");
  return str;
}

var format = "<% _.each(people, function(name){ %> <li><%= name %></li> <% }); %>";
var result = _.template();

log(entitize(result));


