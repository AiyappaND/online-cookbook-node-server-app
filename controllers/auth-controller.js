import * as usersDao from "../daos/users-dao.js";
import * as contactUsDao from "../daos/contactUs-dao.js";

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

    const update = async (req, res) => {
        const uid = req.params['uid'];
        const userToUpdate = await usersDao
            .findUserById(uid);
        const updates = req.body;
        const status = await usersDao
            .updateUser(userToUpdate,
                updates);
        res.json(status);
    };

    const contact_us = async (req, res) => {
        let contact = req.body;
        let saveContactUs = await contactUsDao.createContactUs(contact)
        res.json(saveContactUs);
    }

    const get_contact_us = async (req, res) => {
        let get_data = await contactUsDao.findAllContactUs()
        console.log('get-----------', get_data)
        res.json(get_data);

    }

    const contactUs_update = async (req, res) => {
        const uid = req.params['uid'];
        const contactUsToUpdate = await contactUsDao
            .findContactUsById(uid);

            console.log('con',contactUsToUpdate)

        const updates = { read: true }
        const status = await contactUsDao
            .updateContact(contactUsToUpdate,
                updates);
        res.json(status);
    }

    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.post("/api/users/profile", profile);
    app.post("/api/users/logout", logout);
    app.put("/api/users/:uid", update);
    app.get("/api/users/:username", anonymousProfile);
    app.post("/api/users/contact_us", contact_us);
    app.post("/api/users/get_contact_us", get_contact_us);
    app.put("/api/users/contactUs/:uid", contactUs_update);
};

export default AuthController;
