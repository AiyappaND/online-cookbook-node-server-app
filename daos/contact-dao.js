import contactModel from '../models/contact-model.js';

export const findContacts = () => contactModel.find().sort('createdAt');

export const createContact = (contact) => contactModel.create(contact);

export const updateContact = (cid, contact) => contactModel.updateOne({_id: cid}, {$set: contact})
