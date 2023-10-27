import Axios from "@/api/server";

const fetchBlog = async (id, metadata) => {
  try {
    const res = await Axios.get(`/blogs/slug/${id}`);
    metadata.title = res.data.data.title;
    metadata.description = res.data.data.description;
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
  const blog = await fetchBlog(params.id, metadata);

  return (
    <>
      <div className="prose prose-slate prose-md md:prose-lg max-w-screen-lg  pt-7 pb-20 dark:prose-invert">
        <h1>{blog.title}</h1>
        <p>{blog.previewText}</p>
        <article
          className="mt-5"
          dangerouslySetInnerHTML={{
            __html: blog.blog,
          }}
        ></article>
      </div>
    </>
  );
};

export default Blog;
