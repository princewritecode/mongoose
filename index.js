const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp').then(() => {
    console.log("connection open");
}).catch((err) => {
    console.log("Oh got error");
    console.log(err);
});
const movieSchema = new mongoose.Schema({
    title: String, year: Number, score: Number, rating: String
});
const Movie = mongoose.model('watchmovie', movieSchema);
//creating movie using the schema created movieschema
Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
    { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
]).then((data) => {
    console.log("It worked");
    console.log(data);
});

/*
Movie is a model that will help to create a collection and using different methods we can find update and delte the data in a collectio.
Document consist of collection of collections which are created based on the schema following the type the different key can have.
whenever we try to print Movie it will give us the model Movie
Movie.find().then((data)=>{console.log(data)}) this command can help us to find the data that is in collection with it's values.
Movie.inserMany([{}]) can help us insert mulitple values of the data.

Movie.find({year:{$gte:2015}}).then((data)=>{console.log(data)}) can be used to find the movies matching what ever we are looking for like year
Movie.findById("64c0e12bb911986025004500").then(data=>console.log(data))
we can also use findby id and enter the id and it will give us some object related to it.

Movie.updateOne({title:"Moonrise Kingdom"},{year:1984}).then((data)=>{console.log(data)})
to update movies
*/