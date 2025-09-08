import React from 'react';
import { MagnifyingGlassIcon, FilmIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
 
export default function ProjectCard({ imgUrl, title, description}){
    return (
        <div>
            <div className="border border-white bg-white/80 rounded-t-xl overflow-hidden relative group h-52 md:h-72">
                {/* Photo*/}
                <img
                    src={imgUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                {/* Links */}
                <div 
                    className="absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-80 flex 
                    flex-col items-center justify-center transition-all duration-500"
                >
                    {/* Search Icon */}
                    <h1 className="text-white font-bold w-full text-center text-lg md:text-xl lg:text-2xl">
                        {title}
                    </h1>

                </div>
            </div>

            {/* Text Content */}
            <div className="border border-white text-white rounded-b-xl bg-[#181818] py-6 px-4 ">
                <p className="text-base text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    )
};