import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        firstName: String, lastName: String, dob: Date,
        email: String,
        createdAt: { type: Date, default: Date.now },
        isAuthor: { type: Boolean, default: false },
        isPremium: { type: Boolean, default: false },
        role: {
            type: String,
            default: "user",
            enum: ["author", "user", "guest", "premiumUser"],
        },
    },
    { collection: "users" }
);
export default usersSchema;