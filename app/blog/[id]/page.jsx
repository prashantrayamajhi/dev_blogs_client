import Axios from "@/api/server";

const fetchBlog = async (id) => {
  try {
    const res = await Axios.get(`/blogs/slug/${id}`, {
      revalidate: 1000,
    });
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export async function generateMetadata({ params }) {
  const res = await fetchBlog(params.id);
  return { title: res.title, description: res.description };
}

const Blog = async ({ params }) => {
  const blog = await fetchBlog(params.id);

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
