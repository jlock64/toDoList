var templates = {};

templates.taskInput = [
    "<li data-index='<%= idx %>' data-completed='<%= completed %>'>",
    "<input type='checkbox'><%= content %></li>",
  ].join("")
