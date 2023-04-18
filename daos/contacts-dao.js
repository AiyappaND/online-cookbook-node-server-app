import contactsModel from "../models/contacts-model.js";

export const createContact = (contact) => contactsModel.create(contact);