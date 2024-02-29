"use client";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import InfoCard from "@/components/InfoDisplay";
import { useRouter } from "next/navigation";
import { useCheckRole } from "@/lib/hooks/useCheckRole";
import Sidebar from "@/components/shared/Sidebar";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  useCheckRole();

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

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9</button> 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
