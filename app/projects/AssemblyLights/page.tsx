import Link from 'next/link';
import ImageCarousel from '../../ui/ImageCarousel';
import { CalendarDays, CircleUserRound, CodeXml } from 'lucide-react';

const images = ["GhostTraveller1.png", "GhostTraveller2.png", "GhostTraveller3.png", "GhostTraveller4.png", 
                "GhostTraveller5.png", "GhostTraveller6.png", "GhostTraveller7.png", "PracticalPilot8.png"];




export default function Page()
{

    return (
        <main className="min-h-screen bg-[#00140d]">
            <div className="flex flex-col gap-10 mx-6 sm:mx-10 w-fill pt-20 pb-40 justify-start">

                {/* TITLE OF PROJECT */}
                <h1 className="text-[#4ba351] font-bold text-4xl sm:text-5xl lg:text-6xl">
                    Ghost Traveller
                </h1>

                {/* PROJECT SPECS */}
                <div className="flex flex-col gap-2 items-start sm:flex-row sm:gap-10 sm:items-center justify-start">
                    
                    {/* Completion Time Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CalendarDays className="w-[2em] h-[2em]"/>
                        March 2024
                    </div>

                    <div className="rounded-full bg-white px-15 py-0.25 sm:p-1 sm:px-1"/>
                    
                    {/* Project Team Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CircleUserRound className="w-[2em] h-[2em]"/>
                        Solo Project
                    </div>

                    <div className="rounded-full bg-white px-15 py-0.25 sm:p-1 sm:px-1"/>

                    {/* Programming Language Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CodeXml className="w-[2em] h-[2em]"/>
                        Python
                    </div>

                </div>

                <ImageCarousel images={images}/>


                {/* PROJECT WRITE UP */}
                <div className="flex flex-col gap-5 justify-start rounded-xl w-full text-white text-sm md:text-lg lg:text-xl">
                    {/* Intro Paragraph*/}
                    <p>
                        Ghost Traveller - A 3D Point-And-Click puzzle game.
                    </p>

                    <p>
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo vv
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                    </p>

                    <p>
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo vv
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                    </p>

                    <p>
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo vv
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                    </p>
                </div>

                {/* BUTTON TO SEE GITHUB REPO */}
                <Link href="/projects/PracticalPilot" className="px-2 py-2 w-fit rounded-xl bg-[#2d755c] text-white">
                    <div className="bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-xl px-4 py-4 text-xl sm:text-3xl lg:text-4xl">
                        Check Out The Code!
                    </div>
                </Link>


            </div>
        </main>
    );
};