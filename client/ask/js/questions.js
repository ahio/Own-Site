/**
 * Created by Ahio on 20.04.2015.
 */
Template.questions.helpers({
    posts: function () {
        return Questions.find();
    }
});