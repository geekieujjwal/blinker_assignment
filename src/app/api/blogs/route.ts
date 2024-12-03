import connectToDatabase from "@/lib/mongoose";
import Blog from "@/models/Blog";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") ?? "";
    const page = parseInt(searchParams.get("page") ?? "1", 10);
    const limit = 6;

    const filter =
      query !== "undefined"
        ? {
            $or: [
              { title: { $regex: query, $options: "i" } },
              { author: { $regex: query, $options: "i" } },
            ],
          }
        : {};

    const totalBlogs = await Blog.countDocuments(filter);

    const blogs = await Blog.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalBlogs / limit);

    return NextResponse.json({
      message: "Success",
      blogs,
      currentPage: page,
      totalPages,
      totalBlogs,
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
    await connectToDatabase();

    const { title, content, author } = await req.json();

    if (!title || !content || !author) {
      return NextResponse.json(
        { message: "Title, content, and author are required." },
        { status: 400 }
      );
    }

    const newBlog = new Blog({ title, content, author });
    const savedBlog = await newBlog.save();

    revalidateTag("blogs");

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
