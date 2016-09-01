FlowRouter.route('/', {
  name: 'home',
  action: function() {
    console.log('home route');
    BlazeLayout.render("mainLayout", {content: "blogHome"});
  }
});

FlowRouter.route('/:_id', {
  name: 'blog',
  action: function(params) {
    console.log('detail route: ', params._id);
    BlazeLayout.render("mainLayout", {content: "blogPost"});
  }
});
