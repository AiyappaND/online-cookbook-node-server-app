import mongoose from 'mongoose';

import contactSchema from '../schemas/contact-schema.js'

const contactModel = mongoose
    .model('ContactModel', contactSchema);
export default contactModel;
