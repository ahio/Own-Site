/**
 * Created by Ahio on 06.04.2015.
 */
Meteor.publish('projects', function() {
    return Projects.find();
});

Meteor.publish('questions', function () {
    return Questions.find();
});