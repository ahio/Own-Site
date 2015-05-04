/**
 * Created by Ahio on 17.04.2015.
 */
if (Projects.find().count() === 0) {
    Projects.insert({
        title: 'My own website',
        description: 'I created this project to show You my skills.',
        url: 'http://localhost:3000'
    })
}