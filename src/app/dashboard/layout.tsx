import { cn } from "@/lib/utils";
import StoreProvider from "../StoreProvider";
import { Inter } from "next/font/google";
import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StoreProvider>
    {children}
    </StoreProvider>;
}
