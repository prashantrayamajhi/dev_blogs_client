import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <>
      <div class="bg-white w-full max-w-screen-lg mx-auto border-t-4 border-blue-500 p-4 sm:p-6 pb-8 pt-6 rounded-lg shadow-lg mb-10">
        <div class="mb-4 ">
          <a
            href="#"
            class="inline-block py-1 px-2 border border-blue-500 rounded-md text-blue-500 text-xs sm:text-sm font-semibold hover:bg-blue-500 hover:text-white hover:border-transparent transition duration-300 ease-in-out"
          >
            Category
          </a>
        </div>
        <h2 class="text-2xl sm:text-3xl  font-extrabold text-gray-900 mb-4">
          Blog Post Title
        </h2>
        <p class="text-gray-700 text-base sm:text-md mb-4">
          Your engaging and informative blog post description goes here. It's
          designed to grab readers' attention and provide valuable insights.
        </p>
        <a href="#" class="text-blue-500 font-semibold hover:underline">
          Read more
        </a>
      </div>
    </>
  );
};

export default Card;
