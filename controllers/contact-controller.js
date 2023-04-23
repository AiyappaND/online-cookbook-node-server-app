import * as contactDao from '../daos/contact-dao.js'

const createContact = async (req, res) => {
    const newContact = req.body;
    const insertedContact = await contactDao
        .createContact(newContact);
    res.json(insertedContact);
}
const findContacts  = async (req, res) => {
    const contacts = await contactDao.findContacts();
    res.json(contacts);
}
const updateContact = async (req, res) => {
    const contactIdToUpdate = req.params['cid'];
    const updates = req.body;
    const status = await contactDao
        .updateContact(contactIdToUpdate,
            updates);
    res.json(status);
}

export default (app) => {
    app.post('/api/contact', createContact);
    app.get('/api/contact', findContacts);
    app.put('/api/contact/:cid', updateContact);
}
