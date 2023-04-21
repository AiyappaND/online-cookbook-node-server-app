import bookmarksModel from "../models/bookmarks-model.js";

export const findBookmarksByUser = (username) => bookmarksModel.findOne({username: username});

export const updateBookmark = (username, bookmarks) => bookmarksModel.findOneAndUpdate({username: username},
    {$set: bookmarks}, { upsert: true, new: true, setDefaultsOnInsert: true });
