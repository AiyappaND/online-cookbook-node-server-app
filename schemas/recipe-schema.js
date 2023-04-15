import mongoose from 'mongoose';

const schema = mongoose.Schema({
    title: String,
    author: String,
    cuisine: String,
    process: String,

    prep_time: Number,
    cook_time: Number,
    bookmarks: Number,

    ingredients: [{
        name : String,
        quantity : String
    }]
}, {collection: 'recipes'});
export default schema;
