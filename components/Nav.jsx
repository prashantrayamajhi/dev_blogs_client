"use client";
import React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Nav = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex justify-between align-middle  py-5">
      <div>
        <Link href={"/"} className="text-2xl font-bold ">
          Dev_blogs
        </Link>
      </div>
      <div className="flex gap-8 cursor-pointer">
        {theme === "light" ? (
          <Moon
            onClick={() => {
              setTheme("dark");
            }}
            className=" h-[1.2rem] w-[1.2rem] rotate-0"
          />
        ) : (
          <Sun
            onClick={() => {
              setTheme("light");
            }}
            className=" h-[1.2rem] w-[1.2rem] rotate-0 "
          />
        )}
      </div>
    </div>
  );
};

export default Nav;
