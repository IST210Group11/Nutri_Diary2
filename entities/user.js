import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    "user_id": String,
    gender: String,
    height: Number,
    age: Number,
    weight: Number,
    factor: Number
}, { collection: "user" }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)