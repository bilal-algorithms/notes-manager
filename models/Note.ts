import mongoose, { Schema, Document } from "mongoose";

interface INote extends Document {
  title: string;
  content: string;
}

const noteSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model<INote>("Note", noteSchema);
export default Note;
