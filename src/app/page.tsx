import { Hero } from "@/components/hero";
import Navbar from "@/components/shared/Navbar";
import { useAppSelector } from "@/lib/hooks/reduxHooks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
