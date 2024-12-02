import BlogListClient from "./BlogListClient";

const BlogListPage = async () => {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  const data = await res.json();

  return <BlogListClient blogs={data.blogs} />;
};

export default BlogListPage;
