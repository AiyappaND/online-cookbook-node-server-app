import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    title: String,
    author: String,
    cuisine: String,
    process: String,

    prep_time: Number,
    cook_time: Number,
    bookmarks: { type: Number, default: 0 },

    ingredients: [{
        name : String,
        quantity : String
    }],

    createdAt: { type: Date, default: Date.now },
}, {collection: 'recipes'});
export default recipeSchema;
