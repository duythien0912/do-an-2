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

export default userModel;

userModel.findOne({ email: "admin@gmail.com" }, (err, user) => {
  if (err) {
    console.log("Error", err);
  }
  if (!user) {
    var user = new userModel({
      email: "admin@gmail.com",
      password: "admin",
      nickname: "admin",
      role: "admin"
    });

    user.save((err, user) => {
      if (err) {
        console.log("Error create new Admin account");
      }
      console.log("New Admin account: ", user.email, user.password);
    });
  }
  console.log("Admin account: ", user.email, user.password);
});
