import mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  name: String,
  type: String,
  url: String,
  owner: { type: String, default: "admin" }
});

export default mongoose.model("image", imageSchema);
