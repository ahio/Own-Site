Meteor.publish('projects', function() {
    return Projects.find();
});

Meteor.publish('questions', function () {
    return Questions.find();
});