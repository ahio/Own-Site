Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function () {
        return [ Meteor.subscribe('questions'), Meteor.subscribe('projects')];
    }
});

Router.route('/', {
    name: 'home'
});

Router.route('/projects', {
    name: 'projects'
});

Router.route('ask', {
    name: 'ask'
});

Router.route('/questions', {
    name: 'questions'
});

Router.route('/thanks', {
    name: 'postAsk'
});

var requireLogin = function () {
    if(!Meteor.users.findOne({username: 'ahioros'})) {
        if(Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('access_denied');
        }
    } else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin, {only: 'questions'});