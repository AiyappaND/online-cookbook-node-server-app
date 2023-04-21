import mongoose from "mongoose";
import bookmarksSchema from "../schemas/bookmarks-schema.js";
const bookmarksModel = mongoose.model("bookmarks", bookmarksSchema);
export default bookmarksModel;
