import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      {/* Blog Card */}
      <div className="relative mt-[120px] w-[340px] flex-col rounded-lg border bg-white shadow-sm">
        {/* Image */}
        {/* janky fix, <Image /> sets it's own height to auto */}
        <div className="relative h-[288px]">
          <Image
            className="inline-block rounded-t-lg object-cover"
            src="/living_room.jpg"
            fill
            alt="example living room"
          />
        </div>
        {/* Description Container */}
        <div className="px-4 py-6">
          {/* Tag/Pill */}
          <span className="mb-2 inline-block rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-sm font-normal text-green-700">
            Interior
          </span>
          {/* Title */}
          <p className="mb-3 text-lg font-semibold text-neutral-900">
            Top 5 Living Room Inspirations
          </p>
          {/* Description */}
          <p className="mb-6 text-base font-medium text-neutral-600">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          {/* Button/CTA */}
          <button className="-m-0.5 px-0.5 py-0.5 text-indigo-700 hover:text-indigo-800 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] disabled:text-neutral-400">
            Read more{" "}
            <RiArrowRightLine
              className="ml-1 inline-block align-text-top"
              size={20}
            />
          </button>
        </div>
      </div>

      {/* <!-- Attribute this challenge to yourself! --> */}
      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          &nbsp;GreatFrontEnd Projects
        </a>
        . Built by
        <a
          href="https://www.greatfrontend.com/projects/u/danieo"
          target="_blank"
        >
          &nbsp;danieo
        </a>
        .
      </div>
    </main>
  );
}
