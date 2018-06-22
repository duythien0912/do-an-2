import uuidv4 from "uuid/v4";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  },
  password: String,
  nickname: String,
  role: { type: String, default: "user" }
});
const userModel = mongoose.model("user", userSchema);

const emailAdmin = process.env.ADMIN_EMAIL || "admin@gmail.com";

userModel.findOne({ "email": emailAdmin }, (err, user) => {

  if (err) {
    console.log("Error", err);
  } else {
  if (!user) {
    var user = new userModel({
      email: process.env.ADMIN_EMAIL || "admin@gmail.com",
      password: process.env.ADMIN_PASSWORD || uuidv4(),
      nickname: "admin",
      role: "admin"
    });

    user.save((err, user) => {
      if (err) {
        console.log("Error create new Admin account", err);
      }
      console.log("New Admin account: ", user.email, user.password);
    });
  } else {
  console.log("Admin account: ", user.email, "pass: ", user.password);
   }
  };
});

export default userModel;
