import Card from "@/components/ui/card";
import Axios from "@/api/server";

const fetchBlogs = async () => {
  try {
    const res = await Axios.get("/blogs");
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

const page = async () => {
  const blogs = await fetchBlogs();
  return (
    <>
      <div className="pt-8 pb-14">
        {blogs.map((item) => {
          return <Card key={item.id} blog={item} />;
        })}
      </div>
    </>
  );
};

export default page;
