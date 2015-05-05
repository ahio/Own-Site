/**
 * Created by Ahio on 06.04.2015.
 */
Questions = new Mongo.Collection("questions");

Meteor.methods({

    questionInsert: function (questionAttributes) {

        var NonEmptyString = Match.Where(function (x) {
            check(x, String);
            return x.length > 0;
        });

        check(questionAttributes, {
            email: NonEmptyString,
            body: NonEmptyString
        });

        var question = _.extend(questionAttributes, {
            submitted: new Date()
        });

        var questionId = Questions.insert(question);

        return {
            _id: questionId
        };
    }
});
