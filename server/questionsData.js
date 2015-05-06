if (Questions.find().count() === 0) {
    Questions.insert({
        email: "jess@example.com",
        body: 'example message'
    });
}
