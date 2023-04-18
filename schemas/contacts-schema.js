import mongoose from "mongoose";
const contactsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        content: String,
        createdAt: { type: Date, default: Date.now },
    },
    { collection: "contacts" }
);
export default contactsSchema;