import mongoose from "mongoose";
const bookMarksSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        bookmarks: [{
            recipeId : String,
            isLocal : { type: Boolean, default: true }
        }]
    },
    { collection: "bookmarks" }
);
export default bookMarksSchema;
