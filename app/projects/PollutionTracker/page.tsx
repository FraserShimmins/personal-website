import Link from 'next/link';
import ImageCarousel from '../../ui/ImageCarousel';
import { CalendarDays, CircleUserRound, CodeXml, Video } from 'lucide-react';

const images = ["GhostTraveller1.png", "GhostTraveller2.png", "GhostTraveller3.png", "GhostTraveller4.png", 
                "GhostTraveller5.png", "GhostTraveller6.png", "GhostTraveller7.png"];




export default function Page()
{

    return (
        <main className="min-h-screen bg-[#00140d]">
            <div className="flex flex-col gap-10 mx-6 sm:mx-10 w-fill pt-20 pb-40 justify-start">

                {/* TITLE OF PROJECT */}
                <h1 className="text-[#4ba351] font-bold text-4xl sm:text-5xl lg:text-6xl">
                    Pollution Tracker
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
                        4 Person Project
                    </div>

                    <div className="rounded-full bg-white px-15 py-0.25 sm:p-1 sm:px-1"/>

                    {/* Programming Language Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CodeXml className="w-[2em] h-[2em]"/>
                        Java
                    </div>

                </div>

                <ImageCarousel images={images}/>


                {/* PROJECT WRITE UP */}
                <div className="flex flex-col gap-5 justify-start rounded-xl w-full text-white text-sm md:text-lg lg:text-xl">
                    {/* Intro Paragraph*/}
                    <p>
                        Pollution Tracker - Offically submitted under the name &quot;SmogJ&quot;
                    </p>
                    
                    <p>
                        This project was a <span className="text-[#4ba351] font-bold">4 person group programming project</span> completed as part of coursework for my Programming Practice And Applications module
                        (PPA). Which <span className="text-[#4ba351] font-bold">achieved a solid 83%</span>. Tracking <span className="text-[#4ba351] font-bold">3 pollution types</span>: <span className="text-[#4ba351] font-bold">N02</span>, 
                         <span className="text-[#4ba351] font-bold">pm2.5</span> & <span className="text-[#4ba351] font-bold">pm10</span>
                    </p>

                    <p>
                        pollution data all across the UK. It provides users with a data-driven interface allowing users
                        to explore pollution levels by location, year and pollutant type. The program allows users to both
                        view national overviews of pollution and detailed grid-based statistics on a map of the UK. The data
                        used in this project when shown on the grid-based map showcases both live and historical data, with the
                        live data being taken from &quot;OpenWeatherMap&quot; API.
                    </p>

                    <p>
                        Listed below are some of the key features of the project.
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">&quot;Home&quot; Section</span>, which provides users with written explinations of features and video tutorials walking
                        through the features of each section. 
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">&quot;Map&quot; Section</span>, providing users with a detailed interactive map using <span className="text-[#4ba351] font-bold">&quot;MapJFX&quot;</span>, with grid overlays 
                        covering a 1km by 1km area per grid. The colours used are in levels of increasing pollution, Green, Yellow, Orange, Red, 
                        Light Purple, Dark Purple and lastly Black. Users can choose to filter what pollution type and what year of data is displayed
                        on the map via dropdown boxes.
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">&quot;Specfic Stats&quot; Section</span>, displays the data for a specifc grid point on the map. Which will update the displayed
                        data every time a <span className="text-[#4ba351] font-bold">new grid is clicked</span>. This section displays both line and bar charts showing pollution levels overtime for 3
                        different pollution types.
                    </p>

                    <p>
                        An <span className="text-[#4ba351] font-bold">&quot;Overview Stats&quot; Section</span>, which calculates and displays the average and highest pollution levels for a specified
                        year of historical pollution data. The overall trend is also displayined in a Average and highest pollution level line charts.
                    </p>

                    <p>
                        <span className="text-[#4ba351] font-bold">Unit testing</span> is also present in this project for the <span className="text-[#4ba351] font-bold">Specfic Stats</span> section and <span className="text-[#4ba351] font-bold">Overview stats</span> section.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-start">
                    <Link href="https://www.youtube.com/embed/3HF1SK8llAc?si=S_Mvd5hH175nS3Un" className="px-2 py-2 w-fit rounded-xl bg-[#2d755c] text-white">
                        <div className="flex items-center gap-3 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-xl px-4 py-4 text-xl sm:text-3xl lg:text-4xl">
                            Home Screen
                            <Video className="w-[1em] h-[1em]"/>
                        </div>
                    </Link>

                    <Link href="https://www.youtube.com/embed/qKfRfn-paLM?si=3tHPFftYT3uFzM5U" className="px-2 py-2 w-fit rounded-xl bg-[#2d755c] text-white">
                        <div className="flex items-center gap-3 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-xl px-4 py-4 text-xl sm:text-3xl lg:text-4xl">
                            Map Screen
                            <Video className="w-[1em] h-[1em]"/>
                        </div>
                    </Link>

                    <Link href="https://www.youtube.com/embed/RNyU4NT56K4?si=Qa-HQdQpCvRtVI3H" className="px-2 py-2 w-fit rounded-xl bg-[#2d755c] text-white">
                        <div className="flex items-center gap-3 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-xl px-4 py-4 text-xl sm:text-3xl lg:text-4xl">
                            Specific Stats
                            <Video className="w-[1em] h-[1em]"/>
                        </div>
                    </Link>

                    <Link href="https://www.youtube.com/embed/HsfNft5ZbgY?si=RXUiFTkreDPSsvD_" className="px-2 py-2 w-fit rounded-xl bg-[#2d755c] text-white">
                        <div className="flex items-center gap-3 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-xl px-4 py-4 text-xl sm:text-3xl lg:text-4xl">
                            Overview Stats
                            <Video className="w-[1em] h-[1em]"/>
                        </div>
                    </Link>
                </div>

                <p className="text-red-700 text-sm md:text-lg lg:text-xl font-bold">
                    *No Github repo is provided for this project due to privacy regulations with Offically Graded KCL Courseworks
                </p>

                
            </div>
        </main>
    );
};