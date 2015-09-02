if (Projects.find().count() === 0) {
    Projects.insert({
        title: 'Personal website',
        description: 'I created this project to show You my skills.',
        url: 'http://ahio.meteor.com'
    });

    Projects.insert ({
       title: 'Venues search',
       description: "This project is a Single Page Application using Meteor, where I made " +
        "authorization, integration with Foursquare and Google maps APIs. " +
        "After authorization, users can enter keyword of places and get info " +
        "about all places that match the keyword in some radius. Also, user " +
        "can save this info to CSV file.",
       url: 'http://meteor-gmaps.meteor.com/'
    })

}