import Nav from "@/components/Nav";
import Card from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-4xl m-auto w-[92%]">
        <Nav />
        <div className="pt-6 pb-14">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default page;
