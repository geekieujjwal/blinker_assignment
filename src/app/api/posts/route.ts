import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("bloggingSite");
    const posts = await db.collection("posts").find({}).toArray(); // Fetch all posts
    return NextResponse.json({
      message: "Success",
      posts, // This is now a JSON-serializable array of documents
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Failed to fetch posts" },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
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

    const newPost = {
      title,
      content,
      author,
      createdAt: new Date(),
    };

    const result = await db.collection("posts").insertOne(newPost);

    return NextResponse.json({
      message: "Post created successfully",
      postId: result.insertedId,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { message: "Failed to create post" },
      { status: 500 }
    );
  }
};
