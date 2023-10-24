import Link from "next/link";
import React from "react";

const Card = ({ blog }) => {
  return (
    <>
      <Link href={`/blog/${blog.slug}`}>
        <div className="bg-white w-full max-w-screen-lg mx-auto border-t-4 border-blue-500 p-4 sm:p-6 pb-8 pt-6 rounded-lg shadow-lg mb-10">
          <div className="mb-4 ">
            <span className="inline-block py-1 px-2 border border-blue-500 rounded-md text-blue-500 text-xs sm:text-sm font-semibold hover:bg-blue-500 hover:text-white hover:border-transparent transition duration-300 ease-in-out">
              {blog.topics[0].name}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl  font-extrabold text-gray-900 mb-4">
            {blog.title}
          </h2>
          <p className="text-gray-800 text-base sm:text-md mb-4">
            {blog.previewText}
          </p>
          <span className="text-blue-500 font-semibold hover:underline">
            Read more...
          </span>
        </div>
      </Link>
    </>
  );
};

export default Card;
