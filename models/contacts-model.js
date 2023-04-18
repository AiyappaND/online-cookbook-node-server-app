import mongoose from "mongoose";
import contactsSchema from "../schemas/contacts-schema.js";

const contactsModel = mongoose.model("contacts", contactsSchema);

export default contactsModel;
