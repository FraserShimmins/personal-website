import LineSeperator from "../ui/LineSeperator";
import Image from "next/image";
import { Download, Eye } from "lucide-react";
import Link from 'next/link';

export default function AboutSection(){
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-6 gap-6 mt-45">

                {/* Section Header */}
                <div className="col-span-full md:col-start-2 md:col-end-10">
                    <div className="flex items-center">
                        <div className="flex-grow">
                            <LineSeperator />
                        </div>
                        <p id="about-section" className="px-4 text-white text-center font-bold text-4xl sm:text-5xl lg:text-6xl whitespace-nowrap scroll-mt-24">
                            About Me
                        </p>
                        <div className="flex-grow">
                            <LineSeperator />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-white mt-5 md:col-start-6 md:col-end-11 md:row-start-2 md:row-end-6 text-base sm:text-lg lg:text-xl">
                    <p className="my-4">
                        I  started my computer science journey at 10 when I discovered the game making platform Scratch
                        and was blown away watching my simple code come to life before my eyes.
                    </p>
                    <p className="my-4">
                        Since then I’ve studied hard and kept coding to realise my childhood dream of programming for life. 
                        Graduating from <span className="text-[#4ba351]">King’s School Rochester</span> and enrolling at 
                        <span className="text-[#4ba351]">King’s College London</span> where I now study.
                    </p>
                    <p className="my-4">
                        I’m a <span className="text-[#4ba351]">3D printer enthusiast</span> who loves all things gaming and anime so I’m often working on a cosplay
                        or cool prop to show off at a Convention. Once I’ve got my Blog up and running feel free to see my works!
                    </p>
                    <p className="my-4">
                        I love to play <span className="text-[#4ba351]">Badminton</span> and <span className="text-[#4ba351]">
                        Poker</span> so if we ever meet you are welcome to try best me at either (you will lose).
                    </p>
                </div>

                <div className="contents md:flex md:flex-col md:justify-center md:gap-12 md:col-start-2 md:col-end-5 md:row-start-2 md:row-span-3">
                    <button className="px-1 py-1 w-fill rounded-3xl bg-[#2d755c] text-white">
                            <div className="flex items-center justify-center gap-4 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-3xl px-5 py-2 text-base sm:text-lg lg:text-xl">
                                <Download className="w-[1em] h-[1em]"/>
                                <p className="whitespace-nowrap text-left">Download My CV</p>
                            </div>
                    </button>
                    
                    <button className="px-1 py-1 w-fill rounded-3xl bg-[#2d755c] text-white">
                        <div className="flex items-center justify-center gap-4 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-3xl px-5 py-2 text-base sm:text-lg lg:text-xl">
                            <Eye className="w-[1em] h-[1em]"/>
                            <p className="whitespace-nowrap text-left">Checkout My Blog</p>
                        </div>
                    </button>
                </div>
            
                <div className="md:col-start-2 md:col-end-5 md:row-start-5 md:row-span-1">
                    <Link href="https://github.com/FraserShimmins" className="flex items-center justify-start gap-5 md:gap-10 px-2 py-2 w-fill rounded-2xl text-white hover:bg-[#2d755c]/10 active:bg-[#2d755c]/20">
                    
                        <div className="relative w-10 lg:w-20 aspect-square place-self-center">
                            <Image
                                src="/images/github-mark-white.svg"
                                alt="Gmail Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <p className="whitespace-nowrap text-left text-base sm:text-lg lg:text-xl">FraserShimmins</p>
                    </Link>
                </div>
                
            </div>
        </section>
    );
};

