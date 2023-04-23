import contactUsModel from "../models/contactUs-model.js";

export const createContactUs = (data) => contactUsModel(data).save();

export const findAllContactUs = () => contactUsModel.find();

export const findContactUsById = (uid) => contactUsModel.findById(uid);

export const updateContact = (uid, contact) =>
contactUsModel.updateOne({ _id: uid }, contact);