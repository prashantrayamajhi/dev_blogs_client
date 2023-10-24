"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Nav = () => {
  const { setTheme, theme } = useTheme();
  const [mode, setMode] = useState("dark");

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
            // className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            className=" h-[1.2rem] w-[1.2rem] rotate-0"
          />
        ) : (
          <Sun
            onClick={() => {
              setTheme("light");
            }}
            // className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            className=" h-[1.2rem] w-[1.2rem] rotate-0 "
          />
        )}
        {/* <Link href={"/"} className="text-sm">
          <Button>Contact</Button>
        </Link> */}
      </div>
    </div>
  );
};

export default Nav;
