import ImageCarousel from '../../ui/ImageCarousel';
import { CalendarDays, CircleUserRound, CodeXml } from 'lucide-react';

const images = ["PredatorPreySimulation1.svg", "PredatorPreySimulation2.png", "PredatorPreySimulation3.png", "PredatorPreySimulation4.png", 
                "PredatorPreySimulation5.png", "PredatorPreySimulation6.png"];




export default function Page()
{

    return (
        <main className="min-h-screen bg-[#00140d]">
            <div className="flex flex-col gap-10 mx-6 sm:mx-10 w-fill pt-20 pb-40 justify-start">

                {/* TITLE OF PROJECT */}
                <h1 className="text-[#4ba351] font-bold text-4xl sm:text-5xl lg:text-6xl">
                    Predator-Prey Simulation
                </h1>

                {/* PROJECT SPECS */}
                <div className="flex flex-col gap-2 items-start sm:flex-row sm:gap-10 sm:items-center justify-start">
                    
                    {/* Completion Time Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CalendarDays className="w-[2em] h-[2em]"/>
                        February 2025
                    </div>

                    <div className="rounded-full bg-white px-15 py-0.25 sm:p-1 sm:px-1"/>
                    
                    {/* Project Team Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CircleUserRound className="w-[2em] h-[2em]"/>
                        2 Person Project
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
                        <span className="text-[#4ba351] font-bold">Predator-Prey Simulation</span>  - Offically submitted under the name &quot;Legend Of Kölling: Breath of the BlueJ&quot;.
                    </p>

                    <p>
                        This project was a <span className="text-[#4ba351] font-bold">paired programming project</span> completed as part of <span className="text-[#4ba351] font-bold">coursework</span> for my Programming Practice And Applications module
                        (PPA). Which achieved a solid 95%.
                    </p>

                    <p>
                        The project models a living world with <span className="text-[#4ba351] font-bold">8 unique species</span>. These include producers, herbivoursm and predators, each of which interact
                        dynamically within randomly generated biomes (Grass, Water or Neutral). Each speicies was given unique breeding rules, food sources and
                        environmental advantages, creating emergent behaviours where ecosystems can both flourish and collapse. If any of the species present goes
                        extinct the simulation immeadiately concludes.
                    </p>

                    <p>
                        Below are some of the <span className="text-[#4ba351] font-bold">key features</span> of the project.
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">Day/Night cycle and Weather system</span> were added. This directly impacted animal activity, for example, predators would sleep at night, stopping
                        all activity, whilst herbivours would continue un-distrubed, or how water based animals like <span className="text-[#4ba351] font-bold">&quot;Zora&quot;</span> and <span className="text-[#4ba351] font-bold">&quot;Fish&quot;</span> would gain a bonus to reproduction
                        and movement during Rainfall and would remove the negative impact of the wrong biome.
                    </p>

                    <p>
                       <span className="text-[#4ba351] font-bold">Biomes</span> where added in a random arrangement. These would give animals specalised for these biomes to have advantages in their corresponding biome but
                       disadvantages in foreign biomes. Encouraging certain species to thrive in specific sections of the simulation.
                    </p>

                    <p>
                       A <span className="text-[#4ba351] font-bold">Disease</span> feature was added, where an infection once started spreads via proximity, breeding with hosts and the consumption of a host of the disease.
                       The infected organism will either recover or die, however, the disease was programmed to be very deadly and so will most often kill the host. <span className="text-[#4ba351] font-bold"> Infected
                       organisms</span> are shown in <span className="text-[#4ba351] font-bold">bright red</span> in the simulation.
                    </p>
                </div>

                <p className="text-red-700 text-sm md:text-lg lg:text-xl font-bold">
                    *No Github repo is provided for this project due to privacy regulations with Offically Graded KCL Courseworks
                </p>


            </div>
        </main>
    );
};