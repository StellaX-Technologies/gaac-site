import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please provide your name"],
    },
    email:{
        type:String,
        required:[true,"Please provide an email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
    },
    register:{
        type:String,
        required:[true,"Please provide your Registration number"],
    },
    year:{
        type:String,
        required:[true, "Please provide year"]
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    verifyToken: String,
    verifyTokenExpiry:Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;