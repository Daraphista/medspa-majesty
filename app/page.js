import Image from "next/image";
import hero1 from "../public/hero-1.jpg";
import hero2 from "../public/hero-2.jpg";
import hero3 from "../public/hero-3.jpg";
import hero4 from "../public/hero-4.jpg";
import hero5 from "../public/hero-5.jpg";

import angeloMendoza from "../public/angelo-mendoza.jpg";

export default function Home() {
  return (
    <main>
      <section className="relative isolate">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Ready to <span className="text-gradient">Double</span> your{" "}
                  <span className="text-gradient">MedSpa's</span> Website
                  Marketing?
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  Web Design, SEO, Conversion Rate Optimization - Let's skip all
                  the technical BS.{" "}
                  <b>
                    We'll double your traffic in{" "}
                    <span className="text-gradient">30 days</span> or get all
                    your money back.
                  </b>
                </p>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src={hero1}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src={hero2}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src={hero3}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src={hero4}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src={hero5}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-24 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 md:px-0 lg:pr-4 lg:pt-4 lg:col-start-2 lg:row-start-1">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-gradient w-fit">
                  Meet the CEO & Founder
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Hi! My name is Angelo.
                </p>
                <p className="mt-8 text-lg leading-8 text-gray-600">
                  I've been designing & developing websites for over 2 years.
                  Over the course of 2 years, I've put in countless hours into
                  learning the ins and outs of web design.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  After a year, I started diving into SEO, and conversion rate
                  optimization, and digital marketing in general.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  After years of talking with Medspa owners, I realized that
                  most of them were getting ripped off by their web designers.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Most Medspa owners don't care about Web Design, Website Speed,
                  or any technical bs. They just want more customers.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Most Medspa owners just want <b>results</b>. Once I realized
                  this perspective, I stopped delivering web design and started{" "}
                  <b>delivering results</b>.
                </p>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0 lg:col-start-1 lg:row-start-1">
              <Image className="rounded-3xl" src={angeloMendoza} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
