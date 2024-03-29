
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./animatedText";

export function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Welcome to{" "}
              <AnimatedText text="Algerie" className="text-green-900" />{" "}
              {" Platform"}
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Algerie Telecom is a leading Algerian telecommunications company,
              providing a wide range of services including fixed-line, mobile,
              and internet services. With a strong presence in the Algerian
              market, Algerie Telecom plays a crucial role in connecting people
              and businesses across the country.
            </p>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Get An Offer
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border  border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Check
              </Link>
            </div>
          </div>
        </div>
        <Image
          alt="Hero"
          className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
          height="300"
          src="/hero.jpg"
          width="1270"
        />
      </div>
    </section>
  );
}
