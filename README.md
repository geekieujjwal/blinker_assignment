# Blinker Assignment - Blog Post Manager

This repository contains the completed **Blinker Assignment**, which includes all base requirements as well as the bonus features. The project demonstrates a fully functional blog post manager built using **Next.js**, **TypeScript**, and **MongoDB**, deployed on **Vercel**.

---

## Features

### Core Features
1. **Database (MongoDB)**
   - A MongoDB database is set up to store blog posts.
   - Each post has the following fields:
     - `title` (string, required)
     - `content` (string, required)
     - `author` (string, required)
     - `createdAt` (date, auto-generated)

2. **API Routes**
   - **Create Blog**: `POST /api/blogs`
   - **Get All Blogs**: `GET /api/blogs`
   - **Get Single Blog**: `GET /api/blogs/[id]`
   - **Update Blog**: `PATCH /api/blogs/[id]`
   - **Delete Blog**: `DELETE /api/blogs/[id]`

3. **Frontend Pages**
   - **Home Page**:
     - Lists all blog posts with title and author and truncated content.
     - Includes links to view, edit, and delete each post.
   - **Post Details Page (`/blogs/[id]`)**:
     - Displays the full details of a blog post, including title, content, author, and creation date.
     - Includes a "Back to Home" button.
   - **Create Post Page**:
     - A form to add a new blog post (fields: title, content, author).
     - Includes validation and error messages for missing fields.
   - **Edit Post Page (`blogs/edit?id=[id]`)**:
     - A pre-filled form to update an existing blog post.

### Bonus Features
- **Search Bar**: Filter blog posts by title or author.
- **Pagination**: Added to the home page for better usability with large datasets.
- **Enhanced UI/UX**:
  - Tailwind CSS for styling.
