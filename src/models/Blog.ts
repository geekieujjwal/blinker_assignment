import mongoose, { Schema, Document } from "mongoose";

export interface BlogDocument extends Document {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Blog =
  mongoose.models.Blog || mongoose.model<BlogDocument>("Blog", BlogSchema);

export default Blog;
