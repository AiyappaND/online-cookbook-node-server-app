import mongoose from "mongoose";
import contactUsSchema from "../schemas/contactUs-schema.js";
const contactUsModel = mongoose.model("contacts", contactUsSchema);
export default contactUsModel;
