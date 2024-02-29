"use client";
import { IoCloseSharp, IoHome, IoPerson } from "react-icons/io5";
import InfoCard from "@/components/InfoDisplay";
import Sidebar from "@/components/shared/Sidebar";
import { Complaint } from "@/components/complaint";
import { HandleComlaint } from "@/components/shared/handle-comlaint";

export default function Page() {
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
      title: "My Account",
      url: "user/test2",
    },
    {
      linkClass: linkClass,
      ListClass: ListClass,
      Icon: IoCloseSharp,
      title: "Logout",
      url: "user/test3",
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
      <main className="flex-1 p-6  overflow-x-hidden ">
        <Complaint />
      </main>
    </div>
  );
}
