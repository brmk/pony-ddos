Meteor.methods({
  addPost: function(post){
    Posts.insert(post);
  },
  getPost: function(postId){
    check(postId, String);
    return Posts.findOne(postId);
  }
})
