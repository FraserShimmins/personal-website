import Link from 'next/link';
import ImageCarousel from '../../ui/ImageCarousel';
import { CalendarDays, CircleUserRound, CodeXml } from 'lucide-react';

const images = ["HeroesAndHorrors1.png", "HeroesAndHorrors2.png", "HeroesAndHorrors3.png", "HeroesAndHorrors4.png", 
                "HeroesAndHorrors5.png", "HeroesAndHorrors6.png", "HeroesAndHorrors7.png"];




export default function Page()
{

    return (
        <main className="min-h-screen bg-[#00140d]">
            <div className="flex flex-col gap-10 mx-6 sm:mx-10 w-fill pt-20 pb-40 justify-start">

                {/* TITLE OF PROJECT */}
                <h1 className="text-[#4ba351] font-bold text-4xl sm:text-5xl lg:text-6xl">
                    Heroes & Horrors
                </h1>

                {/* PROJECT SPECS */}
                <div className="flex flex-col gap-2 items-start sm:flex-row sm:gap-10 sm:items-center justify-start">
                    
                    {/* Completion Time Stat */}
                    <div className="flex gap-4 items-center rounded-2xl text-white text-lg sm:text-2xl lg:text-3xl">
                        <CalendarDays className="w-[2em] h-[2em]"/>
                        Janurary 2024
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
                        <span className="text-[#4ba351] font-bold">Heroes & Horrors</span> - A 2D <span className="text-[#4ba351] font-bold">magic card game</span> of Hero and Monster cards.
                    </p>

                    <p>
                        Heroes & Horrors is a <span className="text-[#4ba351] font-bold">turn based local versus</span> card game where players take turns playing cards and spells ready for
                        attack phases where they try reduce the health (or life points) of the opponent to zero to win the game.
                    </p>

                    <p>
                        <span className="text-[#4ba351] font-bold">Each turn</span> a player can draw 3 cards, these being monster cards (Horrors) or Hero cards. A random amount of coins is assigned equally
                        to both players at the start of a turn whith higher maximum and minimum coins being given as the turn number increases. With each player
                        being delt a random selection of 35 Hero and 35 Horror cards each.
                    </p>

                    <p>
                        Each card also has it&apos;s own respective health, which when reduced to 0 will <span className="text-[#4ba351] font-bold">destroy</span> the card. Cards have an attack power aswell, which will
                        be used in the attack phase to attack anything in the &quot;lane&quot; infornt of it. If no cards are opposing a given card, it will attack the opponent directly
                        reducing their health. Each turn a player <span className="text-[#4ba351] font-bold">only sees the previous state</span> of the feild and it&apos;s lanes, 
                        meaning that neither player knows what the other has played on a given turn until the attack phase. Hoving over a card will display it&apos;s properties and 
                        full description for ease of use and teaching purposes.
                    </p>

                    <p>
                        <span className="text-[#4ba351] font-bold"> Cards</span>, coloured <span className="text-[#4ba351] font-bold">blue</span> are played onto the board by hiring their services. This is done by spending coins to place them on the feild,
                        with cards being one of 4 rarities, null, bronze, silver and gold (null cards can be played for free). Each rarity costs more than the last
                        but are in return more powerful.
                    </p>

                    <p>
                        <span className="text-[#4ba351] font-bold">Monster Cards</span>, coloured <span className="text-[#4ba351] font-bold">green</span> are played onto the board via sacrifices. These can either card sacrifices or blood sacrifices. In Card Sacrifices, cards on your side
                        of the board must be purposefully destroyed by your own hand to gain &quot;Sacrifice Tokens&quot; to summon the monster, monsters summoned this way come in 3 rarities, common, uncommon
                        and rare, with each taking 1, 2 and 3 &quot;Sacrifice Tokens&quot; to summon respectively. In Blood Sacrifices, the player sacrifices their own health inorder to summon the card,
                        this means that players can harm themselves inorder to player extremely strong cards and deal out even more harm to their opponent.
                    </p>

                    <p>
                        Cards can also be <span className="text-[#4ba351] font-bold">spells or have a magic effect</span>, this is seen through the <span className="text-[#4ba351] font-bold">blue icon</span> on the top right of a card. Spell cards all have unique effects
                        other than their health and hit points like other cards. For example, &quot;The World Snake&quot;, when played will wrap around your entire side of the board filling up all
                        empty fields with it&apos;s body parts as sheilds, or the &quot;Hole&quot; which will trap and kill any card which kills it.
                    </p>

                    <p>
                        This project was well and truely a <span className="text-[#4ba351] font-bold">passion project</span> which was conceptualised in a single night when me and a close friend spent an evening devising our dream turn based card game. Many of the pixel art for the cards being created the following morning
                        as I instantly began development of the game.
                    </p>
                </div>

                {/* BUTTON TO SEE GITHUB REPO */}
                <Link href="https://github.com/FraserShimmins/cardgame-2d-unity" className="px-2 py-2 w-fit rounded-xl bg-[#2d755c] text-white">
                    <div className="bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-xl px-4 py-4 text-xl sm:text-3xl lg:text-4xl">
                        Check Out The Code!
                    </div>
                </Link>


            </div>
        </main>
    );
};