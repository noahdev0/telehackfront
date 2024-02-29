"use client";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp, IoHome, IoPerson } from "react-icons/io5";
import InfoCard from "@/components/InfoDisplay";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/shared/Sidebar";
import { url } from "inspector";
import { useAppSelector } from "@/lib/hooks/reduxHooks";
import { useCheckRole } from "@/lib/hooks/useCheckRole";

export default function Page() {
  
  useCheckRole();

  const ListClass =
    "flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700";
  const linkClass = "flex items-center space-x-4";
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const links = [
    {
      linkClass: linkClass,
      ListClass: ListClass,
      Icon: IoHome,
      title: "Dashboard",
      url: "user/test1",
    },
    {
      linkClass: linkClass,
      ListClass: ListClass,
      Icon: IoPerson,
      title: "Users",
      url: "user/test2",
    },
  ];

  const infos = [
    {
      title: "Total Users",
      value: 1245,
      bg: "bg-destructive/30",
    },
    {
      title: "Orders",
      value: 645,
      bg: "bg-secondary",
    },
    {
      title: "Resolved",
      value: 80,
      bg: "bg-ring",
    },
    {
      title: "Main Tasks",
      value: 8,
      bg: "bg-accent",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900  ">
      <Sidebar links={links} />
      <main className="flex-1 p-6  overflow-hidden">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 ">
          {infos.map((info, index) => (
            <InfoCard
              key={index + info.title}
              title={info.title}
              value={info.value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
