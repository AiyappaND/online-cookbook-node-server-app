import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
}, {collection: 'contacts'});
export default contactSchema;
