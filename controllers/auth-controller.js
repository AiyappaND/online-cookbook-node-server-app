import * as usersDao from "../daos/users-dao.js";

const AuthController = (app) => {
    const register = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao
            .findUserByUsername(username);
        if (user || (password === undefined)) {
            res.sendStatus(409);
            return;
        }
        const newUser = await usersDao
            .createUser(req.body);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };

    const login = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao
            .findUserByCredentials(username, password);
        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };

    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        res.json(currentUser);
    };

    const anonymousProfile = async (req, res) => {
        const username = req.params['username'];
        const userToView = await usersDao.findUserByUsername(username);
        res.json(userToView);
    }

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    const update   = async (req, res) => {
        const uid = req.params['uid'];
        const userToUpdate = await usersDao
            .findUserById(uid);
        const updates = req.body;
        const status = await usersDao
            .updateUser(userToUpdate,
                updates);
        res.json(status);
    };


    app.post("/api/users/register", register);
    app.post("/api/users/login",    login);
    app.post("/api/users/profile",  profile);
    app.post("/api/users/logout",   logout);
    app.put ("/api/users/:uid",     update);
    app.get ("/api/users/:username",     anonymousProfile);
};

export default AuthController;
