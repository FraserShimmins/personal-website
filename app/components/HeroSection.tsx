import React from "react";
import Image from "next/image";
import LineSeperator from "../ui/LineSeperator";

export default function HeroSection() {
  return (
    <section>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">

            {/* Text (2nd on mobile, 1st on md+) */}
            <div className="order-2 md:order-1 md:col-span-7 place-self-center max-w-full text-left">
            <h1 id="hero-section" className="scroll-mt-35 text-white font-bold mb-4 text-4xl sm:text-5xl lg:text-6xl">
                Hey, I&apos;m <span className="text-[#4ba351]">Fraser</span>
            </h1>

            <div className="text-white mb-4 text-base sm:text-lg lg:text-xl my-6">
                <p>
                I&apos;m a 2nd year <span className="text-[#4ba351]">Computer Science Undergraduate</span> at Kings College London 
                working towards being a professional in Software Engineering. My goal is to be able to build anything I can think up 
                and hone my skills in programming to best it can be.
                </p>
                <p className="my-3">
                    <span className="text-[#4ba351]">Read on</span> to learn more about my personal journey.
                </p>
            </div>
            </div>

            {/* Image (1st on mobile, 2nd on md+) */}
            <div className="order-1 md:order-2 md:col-span-3 flex justify-center">
            <div className="relative overflow-hidden rounded-full bg-[#181818] w-40 sm:w-56 lg:w-100 aspect-square place-self-center">
                <Image
                src="/images/heroicon.jpg"
                alt="hero image"
                fill
                className="object-cover object-top"
                />
            </div>
            </div>

            {/* Visual Divider */}
            <div className="order-3 col-span-full md:col-start-2 md:col-end-10 md:row-start-2 mt-3 md:mt-10">
                <LineSeperator/>
            </div>
        </div>
    </section>
  );
}
