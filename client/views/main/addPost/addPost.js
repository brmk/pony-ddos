Template.addPost.events({
  "submit #addPost": function(event, template) {
    event.preventDefault();
    var title = template.$("form#addPost #title").val(),
      content = template.$("form#addPost #content").val(),
      post = {
        title: title,
        content: content
      }
    Meteor.call('addPost', post, function(err) {
      if (err) {
        Materialize.toast(err);
      }
    })
  }
});
