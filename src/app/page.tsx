import AnimatedText from "@/components/animatedText";
import { Dashboard } from "@/components/dashboard";
import Navbar from "@/components/shared/Navbar";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background ">
        <h1 className="text-6xl font-bold">
          Welcome to Algerie{" "}
          <>
            <AnimatedText text="Telecom" />
          </>{" "}
        </h1>
        <Image
          src="/algerie-telecom.png"
          alt="Algerie Telecom"
          width={500}
          height={500}
        />
        <Link href="/dashboard" className="btn">
          Go to Dashboard
        </Link>
      </div>
    </>
  );
}
