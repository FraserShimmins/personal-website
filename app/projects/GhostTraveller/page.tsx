import Link from 'next/link';
import ImageCarousel from '../../ui/ImageCarousel';
import { CalendarDays, CircleUserRound, CodeXml } from 'lucide-react';

const images = ["GhostTraveller1.png", "GhostTraveller2.png", "GhostTraveller3.png", "GhostTraveller4.png", 
                "GhostTraveller5.png", "GhostTraveller6.png", "GhostTraveller7.png"];




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
                        Februrary 2024
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
                        C# (Unity)
                    </div>

                </div>

                <ImageCarousel images={images}/>


                {/* PROJECT WRITE UP */}
                <div className="flex flex-col gap-5 justify-start rounded-xl w-full text-white text-sm md:text-lg lg:text-xl">
                    {/* Intro Paragraph*/}
                    <p>
                        <span className="text-[#4ba351] font-bold">Ghost Traveller</span> - A 3D <span className="text-[#4ba351] font-bold">Point-And-Click</span> puzzle game.
                    </p>

                    <p>
                        <span className="text-[#4ba351] font-bold">Ghost Traveller</span> is a puzzle game based in purgatory where the player must complete 
                        <span className="text-[#4ba351] font-bold">5 puzzle sections</span> (each colour coded) inorder to finally unlock the door to the house of the player 
                        and regain your memories, escaping purgatory. The player is prevented from entering any other section until the current puzzle is solved. Only nearby tiles 
                        are rendered and revealed to the player, as to not reveal the entirety of the map to the player apon loading in and to create a mysterious atmosphere.
                    </p>

                    <p>
                        Various <span className="text-[#4ba351] font-bold">letters</span> can be found on the ground in the game, which when stepped on will cover the screen with a written note. These are often used to explain
                        puzzles and give insights into controls.
                    </p>
                    <p>
                        The <span className="text-[#4ba351] font-bold">Green &quot;Forest&quot; section</span>, is the begining section and simply means to teach the player how to control the ghost by making them collect coins and
                        navigate throughout the map to find various hidden coins. However, since the player agent has pathfinding to where the user clicks, this is often an easy 
                        task, however this is not intended to be hard, as it acts as the tutorial.
                    </p>

                    <p>
                        The <span className="text-[#4ba351] font-bold">brown &quot;Cave&quot; section</span>, is a riddle room. A riddle retelling the story of the players last day alive is shown, with objects and items from this day literring the cave.
                        Pressing on the buttons next to the objects in the order in which they where encountered in the player&apos;s final day, will unlock the next door.
                    </p>

                    <p>
                        The <span className="text-[#4ba351] font-bold">purple &quot;Crystal&quot; section</span>, is a puzzle of &quot;Complete the Circuit&quot;. It contains 3 rooms, each of larger size, containing circuits of differnt wire pieces.
                        These pieces can be straight lines, tri-connectors, quad-connectors, corner-connectors etc. The player pressing &quot;E&quot; can rotate this circuit tiles to try and
                        create a direct path from the yellow power source to the target node at the end of the room. A button exists in the room, which will send power from the yellow
                        source into the circuit to test if a complete path to the end has been created. Once powered fully, the puzzle locks in place and unlocks the door to the next circuit 
                        / puzzle.
                    </p>

                    <p>
                        The <span className="text-[#4ba351] font-bold">red &quot;Lava&quot; section</span>, is a puzzle of a hidden pathway. The ground ahead of the player is fragile and could crumble beneath their ghostly body. Only a predeterminded 
                        path is safe, with all other tiles sending the player back to the start of the puzzle section, however any path or lava revealed will remain for their next attempt. 
                        Flowers are shown to grow on solid ground and can be used to try predict the direction of the path and chart out a course to the other side of the puzzle room. Once reaching 
                        the end, the next puzzle will unlock.
                    </p>

                    <p>
                        The <span className="text-[#4ba351] font-bold">black &quot;Lights&quot; section</span>, is a puzzle of &quot;Simon Says&quot;. Where the player will face 4 memory games of simon says of increasing difficulty. Each room having more buttons which
                        can be used in sequences and longer sequences. Each attempt is entirely randomised as to prevent players from simply brute forcing the puzzle and winning in a non-skillful way.
                    </p>

                    <p>
                        This game was created inorder for me to <span className="text-[#4ba351] font-bold">experiment with 3D games</span> in Unity and allowed me to use different aspects of the Unity engine not present in my 2D card game <span className="text-[#4ba351] font-bold">&quot;Heroes & Horrors&quot;</span>.
                    </p>
                </div>

                {/* BUTTON TO SEE GITHUB REPO */}
                <Link href="https://github.com/FraserShimmins/puzzle-game-3d-unity" className="px-2 py-2 w-fit rounded-xl bg-[#2d755c] text-white">
                    <div className="bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-xl px-4 py-4 text-xl sm:text-3xl lg:text-4xl">
                        Check Out The Code!
                    </div>
                </Link>


            </div>
        </main>
    );
};