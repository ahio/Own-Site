Template.ask.events({
    "submit .form": function (e) {
        e.preventDefault();

        var question = {
            email: $(e.target).find("[name=email]").val(),
            body: $(e.target).find("[name=text]").val()
        };

        Meteor.call('questionInsert', question, function (error, result) {
            if(error) {
                return alert("Something is wrong, please check email or text field");
            } else {
                Router.go('postAsk');
            }
        });
    },

    "click .home": function() {
        window.scrollTo(0, 0);
    }
});
