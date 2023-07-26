const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp').then(() => {
    console.log("connection open");
}).catch((err) => {
    console.log("Oh got error");
    console.log(err);
});

const productSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    }, price: {
        type: Number, required: true
    }
});

const Product = mongoose.model('ProductD', productSchema);
const bike = new Product({ name: 'mountain bike', price: 599 });

bike.save().then((data) => {
    console.log(data);
    console.log("It worked");
}).catch(err => {
    console.log(err);
    console.log("Oh it's a error");
});