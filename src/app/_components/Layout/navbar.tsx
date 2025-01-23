"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconArticle,
} from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Create Playlist",
      link: "/projects",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    // {
    //   name: "Pricing",
    //   link: "/pricing",
    //   icon: <IconArticle className="h-4 w-4 text-white" />,
    // },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
