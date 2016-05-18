
Template.postsList.helpers({
  posts: function(){
    return Posts.find().fetch();
  }
});

Template.postsList.onCreated(function(){
  this.subscribe('Posts');
})
