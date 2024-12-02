import connectToDatabase from "@/lib/mongoose";
import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase(); // Connect to the database
    const blogs = await Blog.find(); // Fetch all blogs
    return NextResponse.json({
      message: "Success",
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await connectToDatabase(); // Connect to the database

    const { title, content, author } = await req.json();

    // Validation
    if (!title || !content || !author) {
      return NextResponse.json(
        { message: "Title, content, and author are required." },
        { status: 400 }
      );
    }

    const newBlog = new Blog({ title, content, author });
    const savedBlog = await newBlog.save();

    return NextResponse.json({
      message: "Blog created successfully",
      blog: savedBlog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { message: "Failed to create blog" },
      { status: 500 }
    );
  }
};
