// $(document).ready(function() {
//   todoPage.init();  // initialize todo object literal
// });
//
// var todoPage = {
//   init: function() {
//     todoPage.styling();
//     todoPage.events();
//   },
//
//   styling: function() {
//
//   }, // end of styling object
//
//   events: function() {


    /* Get all tasks inputed in input field*/
    // getTasks: function() {
    //   return newTasks;
    // },
    // add task to array newTasks array
    // addTask: function(newTask) {
    //   newTasks.push(newTask);
    // },
    // delete task from newTasks array
    // deleteTask: function(idx) {
    //   newTasks.splice(idx, 1);
    // },
    // edit current task in array
    // editTask: function(idx) {
    //   newTasks.splice(idx, 1);
    // },

    // getTemplate: function(templateName) {
    //
    // },
  // }  // end of events object

  var newTasks = [
    {
      content: "Grocery store",
      completed: false,
      idx: 0
    },
  ];

  var templates = {
      task: [
      "<li data-index='<%= idx %>' data-completed='<%= completed %>'>",
      "<input type='checkbox'><%= content %></li>",
    ].join("")
  }

  function getTasks() {
    return newTasks;
  }

  function addTask(newTask) {
    newTasks.push(newTask);
  }

  function deleteTask(idx) {
    newTasks.splice(idx, 1);
  }

  function editTask(idx) {
    newTasks.splice(idx, 1);
  }


  // ADD POST TO DOM
  function addTaskToDom(item, templateStr, $target) {
      var tmpl = _.template(templateStr);
      $target.append(tmpl(item));
  }

// ADD ALL TASKS TO <UL> #allTasks
function addAllTasks(arr) {
  $('#allTasks').html('');
  _.each(getTasks(), function (el, idx) {
    el.idx = idx;
    addTaskToDom(el, templates.task, $('#allTasks'));
  })
}

// GET TASK FROM DOM INPUT
function getTaskFromDom() {
  var taskContent = $('#new-task').val();
    return {
      content: taskContent,
      completed: false
    };
}

$(document).ready(function() {

// on click getting new task, posting to DOM and adding it to array
$('form').on('submit', function (event) {
    event.preventDefault();
    var newTask = getTaskFromDom();
      addTask(newTask);
      addAllTasks(getTasks());
      $('input').val('');
  });

$('#bottom-nav').on('click', '#clear', function(event) {
  event.preventDefault();
  $('input:checked').each(function(idx,el) {
    var idxOfTask = $(el).parent().data('idx')
    deleteTask(idxOfTask);
});
addAllTasks(getTasks());
});

}); // end of document ready
