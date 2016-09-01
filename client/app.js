// -------------------------------------- //
// client-side code --------------------- //
// -------------------------------------- //
PostSubs = new SubsManager();

// -------------------------------------- //
// Page --------------------------------- //
// -------------------------------------- //
Template.blogHome.onCreated(function() {
    var self = this;
    self.ready = new ReactiveVar();
    self.autorun(function() {
        var handle = PostSubs.subscribe('getPosts');
        self.ready.set(handle.ready());
    });
});

Template.blogHome.helpers({
    postReady: function() {
        console.log('postReady code ran');
        return Template.instance().ready.get();
    },
    posts: function() {
        console.log('this code ran');
        var posts = "test";
        //var posts = Posts.find({}, {sort: {LocName: 1}}) || {};
        return posts;
    }
});

// -------------------------------------- //
// Page --------------------------------- //
// -------------------------------------- //
Template.blogPost.onCreated(function() {
    var self = this;
    
    self.ready = new ReactiveVar();
    self.autorun(function() {
        var postId = FlowRouter.getParam('postId');
        var handle = PostSubs.subscribe('singlePost', postId);
        self.ready.set(handle.ready());
    });
});

Template.blogPost.helpers({
    postReady: function() {
        console.log('postReady');
        return Template.instance().ready.get();
    },
    post: function() {
        console.log('this code ran');
        console.log('the id:', postId);
        var postId = FlowRouter.getParam('postId');
        var post = Posts.findOne({_id: postId}) || {};
        return post;
    }
});
