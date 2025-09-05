import Link from 'next/link';
//import Image from "next/image";
import { CalendarDays, CircleUserRound, CodeXml } from 'lucide-react';
import { Card, CardContent } from "../../../shadcomponents/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../shadcomponents/ui/carousel";

export default function Page()
{

    return (
        <main className="min-h-screen bg-[#00140d]">
            <div className="flex flex-col gap-10 mx-6 sm:mx-10 w-fill pt-20 pb-40 justify-start">

                {/* TITLE OF PROJECT */}
                <h1 className="text-[#4ba351] font-bold text-4xl sm:text-5xl lg:text-6xl">
                    Practical Pilot
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

                {/* PROJECT PHOTO SLIDER */}
                <div className="flex justify-center relative overflow-hidden rounded-lg bg-[#181818] w-full px-15 h-60 md:h-75 lg:h-90 place-self-center">
                    
                    <Carousel className="w-full">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}

                        {/* */}
                        <CarouselItem key="6">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{6}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    </Carousel>


                </div>


                {/* PROJECT WRITE UP */}
                <div className="flex flex-col gap-5 justify-start rounded-xl w-full text-white text-sm md:text-lg lg:text-xl">
                    {/* Intro Paragraph*/}
                    <p>
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo vv
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                        Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo Demo demo 
                        Demo demo Demo demo 
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