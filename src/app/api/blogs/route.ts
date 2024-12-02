import connectToDatabase from "@/lib/mongoose";
import Blog from "@/models/Blog";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDatabase(); // Connect to the database

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") ?? ""; // Retrieve query parameter
    const page = parseInt(searchParams.get("page") ?? "1", 10); // Get the page number
    const limit = 6; // Number of blogs per page

    // Create a filter for case-insensitive search on title and author
    const filter =
      query !== "undefined"
        ? {
            $or: [
              { title: { $regex: query, $options: "i" } },
              { author: { $regex: query, $options: "i" } },
            ],
          }
        : {};

    console.log("---->>>>>", filter);

    // Count total blogs matching the filter
    const totalBlogs = await Blog.countDocuments(filter);

    // Apply pagination and fetch blogs
    const blogs = await Blog.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    // Calculate total pages
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
