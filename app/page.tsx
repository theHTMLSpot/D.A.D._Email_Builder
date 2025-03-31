"use client";

import { Zap as Lightning, MousePointer, MonitorSmartphone } from "lucide-react";
import DescriptionBlock from "@/components/description_block/page";
import HowToBlock from "@/components/how_to_block/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/hero.jpg')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        {/* Hero Content */}
        <div className="relative grid place-items-center text-white z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-300 mb-6">
            D.A.D. Email Builder
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 w-3/4 sm:w-2/3 md:w-1/2 mb-8">
            Create beautiful emails with ease. Easy-to-use drag-and-drop email builder.
          </p>
          <button className="bg-blue-500 text-white text-lg py-3 px-8 rounded-xl mt-6 hover:bg-blue-600 transition-all duration-300">
            Try Now
          </button>
        </div>
      </div>

      {/* Description Blocks Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-8 py-16 gap-10 place-items-center">
        <DescriptionBlock
          Icon={Lightning}
          text="Our email builder is completely free with no hidden costs."
        />
        <DescriptionBlock
          Icon={MousePointer}
          text="Super easy to use, with no coding required—just drag and drop elements."
        />
        <DescriptionBlock
          Icon={MonitorSmartphone}
          text="Fully responsive emails that look amazing on all devices."
        />
      </div>

      {/* How-To Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 py-16 place-items-center">
        <HowToBlock id={1} text="Create your free account." />
        <HowToBlock id={2} text="Design your email with simple drag-and-drop elements." />
        <HowToBlock id={3} text="Choose your email service and export your finished email." />
      </div>

      {/* Email Call-to-Action */}
      <div className="flex flex-col items-center justify-center text-center aspect-16/5 py-16 bg-purple-400 text-white px-4 md:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Build Your Perfect Email</h1>
        <p className="text-lg sm:text-xl mt-4 max-w-2xl">
          Make your free account and start building amazing emails for all devices and platforms
          today with D.A.D. Email Builder.
        </p>
        <button className="bg-blue-500 text-white text-lg py-3 px-8 rounded-2xl mt-6 hover:bg-blue-600 transition-all duration-300">
          Try Now
        </button>
      </div>
    </div>
  );
}