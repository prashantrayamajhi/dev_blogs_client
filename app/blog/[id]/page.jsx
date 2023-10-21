import Axios from "@/api/server";

const fetchBlog = async (id) => {
  try {
    const res = await Axios.get(`/blogs/${id}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export const metadata = {
  title: ``,
  description: "",
};

const Blog = async ({ params }) => {
  const blog = await fetchBlog(params.id);

  metadata.title = blog.title;
  metadata.description = blog.previewText;

  return (
    <div className="prose prose-slate prose-lg max-w-screen-lg text-black  pt-7 pb-20">
      <h1>{blog.title}</h1>
      <p>{blog.previewText}</p>
      <article
        className="mt-5"
        dangerouslySetInnerHTML={{
          __html: blog.blog,
        }}
      ></article>
    </div>
  );
};

export default Blog;
