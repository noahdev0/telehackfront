"use client";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import InfoCard from "@/components/InfoDisplay";
import Sidebar from "@/components/shared/Sidebar";
import { HandleComlaint } from "@/components/shared/handle-comlaint";

export default function Page() {
  const ListClass =
    "flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700";
  const linkClass = "flex items-center space-x-4";
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
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
  const complaints = [
    {
      name: "Complaint 1",
      phone: "123456789",
      issue: "the issue is not resolved",
    },
    {
      name: "Complaint 1",
      phone: "123456789",
      issue: "the issue is not resolved",
    },
    {
      name: "Complaint 1",
      phone: "123456789",
      issue: "the issue is not resolved",
    },
  ];
  const links = [
    {
      linkClass: linkClass,
      ListClass: ListClass,
      Icon: IoCloseSharp,
      title: "Dashboard",
      url: "user/test1",
    },
    {
      linkClass: linkClass,
      ListClass: ListClass,
      Icon: IoCloseSharp,
      title: "Users",
      url: "user/test2",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900  ">
      <div className="min-w-16 relative">
        <Sidebar links={links} />
      </div>{" "}
      <main className="flex-1 p-6  overflow-x-hidden overflow-y-scroll h-screen">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Dashboard
        </h1>
        <div className="flex flex-col gap-5 flex-nowrap ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 ">
            {infos.map((info, index) => (
              <InfoCard
                key={index + info.title}
                title={info.title}
                value={info.value}
              />
            ))}
          </div>
          <HandleComlaint />
        </div>
      </main>
    </div>
  );
}
