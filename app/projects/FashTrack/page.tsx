import Link from 'next/link';
import ImageCarousel from '../../ui/ImageCarousel';
import { CalendarDays, CircleUserRound, CodeXml } from 'lucide-react';

const images = ["FashTrack1.png", "FashTrack2.png"];




export default function Page()
{

    return (
        <main className="min-h-screen bg-[#00140d]">
            <div className="flex flex-col gap-10 mx-6 sm:mx-10 w-fill pt-20 pb-40 justify-start">

                {/* TITLE OF PROJECT */}
                <h1 className="text-[#4ba351] font-bold text-4xl sm:text-5xl lg:text-6xl">
                    FashTrack
                </h1>

                {/* PROJECT SPECS */}
                <div className="flex flex-col gap-2 items-start sm:flex-row sm:gap-10 sm:items-center justify-start">
                    
                    {/* Completion Time Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CalendarDays className="w-[2em] h-[2em]"/>
                        November 2024
                    </div>

                    <div className="rounded-full bg-white px-15 py-0.25 sm:p-1 sm:px-1"/>
                    
                    {/* Project Team Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CircleUserRound className="w-[2em] h-[2em]"/>
                        4 Person Project
                    </div>

                    <div className="rounded-full bg-white px-15 py-0.25 sm:p-1 sm:px-1"/>

                    {/* Programming Language Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CodeXml className="w-[2em] h-[2em]"/>
                        Nuxt.JS Website
                    </div>

                </div>

                <ImageCarousel images={images}/>


                {/* PROJECT WRITE UP */}
                <div className="flex flex-col gap-5 justify-start rounded-xl w-full text-white text-sm md:text-lg lg:text-xl">
                    {/* Intro Paragraph*/}
                    <p>
                        This project was made for the <span className="text-[#4ba351] font-bold">CMCI Hackathon 2024</span> (CultureHack)
                    </p>

                    <p>
                        FashTrack is a mockup of a website that helps people in the fashion industry apply for jobs. We used a <span className="text-[#4ba351] font-bold">Nuxt.JS 
                        3.0 website</span> with a Serverless Functions backend to serve the site.
                    </p>

                    <p>
                        For the backend, a <span className="text-[#4ba351] font-bold">mongoDB database</span> was used to store data about jobs, users and mentors.
                    </p>
                </div>

                {/* BUTTON TO SEE GITHUB REPO */}
                <Link href="https://github.com/dylankainth/fashtrack" className="px-2 py-2 w-fit rounded-xl bg-[#2d755c] text-white">
                    <div className="bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-xl px-4 py-4 text-xl sm:text-3xl lg:text-4xl">
                        Check Out The Code!
                    </div>
                </Link>


            </div>
        </main>
    );
};