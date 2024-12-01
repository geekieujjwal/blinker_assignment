import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("bloggingSite");
    const blogs = await db.collection("blogs").find({}).toArray(); // Fetch all blogs
    return NextResponse.json({
      message: "Success",
      blogs, // This is now a JSON-serializable array of documents
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
  console.log("response:", req);
  return NextResponse.json({
    message: "Blog created successfully",
  });
  try {
    const client = await clientPromise;
    const db = client.db("bloggingSite");

    const { title, content, author } = await req.json();

    // Validation
    if (!title || !content || !author) {
      return NextResponse.json(
        { message: "Title, content, and author are required." },
        { status: 400 }
      );
    }

    const newBlog = {
      title,
      content,
      author,
      createdAt: new Date(),
    };

    const result = await db.collection("blogs").insertOne(newBlog);

    return NextResponse.json({
      message: "Blog created successfully",
      blogId: result.insertedId,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { message: "Failed to create blog" },
      { status: 500 }
    );
  }
};
