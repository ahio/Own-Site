/**
 * Created by Ahio on 17.04.2015.
 */
if (Questions.find().count() === 0) {
    Questions.insert({
        email: "jess@example.com",
        body: 'hello, how are you?'
    });
}
