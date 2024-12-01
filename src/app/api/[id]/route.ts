import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const client = await clientPromise;
    const db = client.db("bloggingSite");

    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid blog ID" }, { status: 400 });
    }

    const blog = await db
      .collection("blogs")
      .findOne({ _id: new ObjectId(id) });

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Success", blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Failed to fetch blog", error: error.message },
        { status: 500 }
      );
    }
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const client = await clientPromise;
    const db = client.db("bloggingSite");

    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid blog ID" }, { status: 400 });
    }

    const { title, content, author } = await req.json();

    const updatedFields: Record<string, string> = {};
    if (title) updatedFields.title = title;
    if (content) updatedFields.content = content;
    if (author) updatedFields.author = author;

    const result = await db
      .collection("blogs")
      .updateOne({ _id: new ObjectId(id) }, { $set: updatedFields });

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog updated successfully" });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Failed to update blog", error: error.message },
        { status: 500 }
      );
    }
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const client = await clientPromise;
    const db = client.db("bloggingSite");

    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid blog ID" }, { status: 400 });
    }

    const result = await db
      .collection("blogs")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Failed to delete blog", error: error.message },
        { status: 500 }
      );
    }
  }
};
