import * as contactsDao from "../daos/contacts-dao.js";

const ContactController = (app) => {
    const create = async (req, res) => {
        const { name, email, content } = req.body;
        if (name === undefined || email === undefined || content === undefined) {
            res.sendStatus(409);
            return;
        }
        const newContact = await contactsDao.createContact(req.body);
        res.json(newContact);
    };

    app.post("/api/contact", create);
};

export default ContactController;
