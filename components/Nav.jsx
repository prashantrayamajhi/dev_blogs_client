import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <div className="flex justify-between align-middle  py-5">
      <div>
        <Link href={"/"} className="text-2xl font-bold ">
          Dev_blogs
        </Link>
      </div>
      <div className="flex gap-8 ">
        <Link href={"/"} className="text-sm">
          <Button>Contact</Button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
