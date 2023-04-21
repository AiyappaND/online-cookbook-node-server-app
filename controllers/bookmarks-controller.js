import * as bookmarksDao from '../daos/bookmarks-dao.js'

const updateBookmarks = async (req, res) => {
    const username = req.params['username'];
    const updates = req.body;
    const status = await bookmarksDao
        .updateBookmark(username,
            updates);
    res.json(status);
}

const getBookmarkByUsername = async (req, res) => {
    const username = req.params['username'];
    const foundBookmarks = await bookmarksDao.findBookmarksByUser(username);
    res.json(foundBookmarks);
}

export default (app) => {
    app.get('/api/bookmarks/:username', getBookmarkByUsername);
    app.post('/api/bookmarks/:username', updateBookmarks);
}
