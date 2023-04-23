import mongoose from "mongoose";
const contactUsSchema = new mongoose.Schema(
    {
        email: String,
        createdAt: { type: Date, default: Date.now },
        message:String,
        subject: String,
        name:String,
        read:{ type: Boolean, default:false }
    },
    { collection: "contactUs" }
);
export default contactUsSchema;