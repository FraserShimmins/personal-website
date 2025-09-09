import ImageCarousel from '../../ui/ImageCarousel';
import { CalendarDays, CircleUserRound, CodeXml } from 'lucide-react';

const images = ["AssemblyLights.png", "GhostTraveller2.png", "GhostTraveller3.png", "GhostTraveller4.png", 
                "GhostTraveller5.png", "GhostTraveller6.png", "GhostTraveller7.png", "PracticalPilot8.png"];




export default function Page()
{

    return (
        <main className="min-h-screen bg-[#00140d]">
            <div className="flex flex-col gap-10 mx-6 sm:mx-10 w-fill pt-20 pb-40 justify-start">

                {/* TITLE OF PROJECT */}
                <h1 className="text-[#4ba351] font-bold text-4xl sm:text-5xl lg:text-6xl">
                    Assembly Lights
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
                        Solo Project
                    </div>

                    <div className="rounded-full bg-white px-15 py-0.25 sm:p-1 sm:px-1"/>

                    {/* Programming Language Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CodeXml className="w-[2em] h-[2em]"/>
                        ARM Assembly
                    </div>

                </div>

                <ImageCarousel images={images}/>


                {/* PROJECT WRITE UP */}
                <div className="flex flex-col gap-5 justify-start rounded-xl w-full text-white text-sm md:text-lg lg:text-xl">
                    {/* Intro Paragraph*/}
                    <p>
                        <span className="text-[#4ba351] font-bold">Assembly Lights</span> - My first attempt at <span className="text-[#4ba351] font-bold">real world</span> programming with <span className="text-[#4ba351] font-bold">Assembly code</span>!
                    </p>

                    <p>
                        This project was as a <span className="text-[#4ba351] font-bold">solo programming project</span> completed as <span className="text-[#4ba351] font-bold">coursework</span> for my Computer Systems module (CS1)
                        Which achieved a solid [INSERT GRADE]%.
                    </p>

                    <p>
                        The assignent was to write a complete assembly program that controlled LEDs in a breadboard circuit, to encode,
                        display and manipulate data. For which various tasks were assigned for me to complete and demonstrate mastery over.
                    </p>

                    <p>
                        Below are some of the <span className="text-[#4ba351] font-bold">Key features</span> of the Assembly Lights program.
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">&quot;K-Number Display&quot;</span> is shown first. Where the LEDs sequentially outputted each figit
                        of my KCL university ID in a binary format.
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">&quot;Initals Display&quot;</span> where my initals were encoded into a binary format provided for the project.
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">&quot;Morse Code Transmission&quot;</span>, where the first 3 letters of my name are then displayed by the LEDs. This being
                        displayed via using precise on/off timings of the LEDs to achieve dots, dashes and spaces.
                    </p>

                    <p>
                        <span className="text-[#4ba351] font-bold">&quot;Iteration Logic&quot;</span> is present also (Assigned as a challenge task), where the morse code loops 50 times. With every
                        odd iteration in the loop displaying the letters normally, every even iteration showing the letters in reverse, and every 5th
                        iteration appending a &quot;5&quot; to the end of the morse code pattern.
                    </p>

                    <p>
                        Finally the program displays a <span className="text-[#4ba351] font-bold">&quot;Ping-Pong&quot; animation</span>, creating an infinite loopinf pattern across the LEDs where
                        a single light apears to move back and forth across the LEDs smoothly.
                    </p>
                </div>

                <p className="text-red-700 text-sm md:text-lg lg:text-xl font-bold">
                    *No Github repo is provided for this project due to privacy regulations with Offically Graded KCL Courseworks
                </p>


            </div>
        </main>
    );
};