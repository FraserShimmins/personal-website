import Link from 'next/link';
import ImageCarousel from '../../ui/ImageCarousel';
import { CalendarDays, CircleUserRound, CodeXml } from 'lucide-react';

const images = ["PracticalPilot1.png", "PracticalPilot2.png", "PracticalPilot3.png", "PracticalPilot4.png", 
                "PracticalPilot5.png", "PracticalPilot6.png", "PracticalPilot7.png", "PracticalPilot8.png"];




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

                <ImageCarousel images={images}/>


                {/* PROJECT WRITE UP */}
                <div className="flex flex-col gap-5 justify-start rounded-xl w-full text-white text-sm md:text-lg lg:text-xl">
                    {/* Intro Paragraph*/}
                    <p>
                        <span className="text-[#4ba351] font-bold">Practical Pilot</span> - A-Level Physics practicals, <span className="text-[#4ba351] font-bold">streamlined.</span>
                    </p>

                    <p>
                        Practical Pilot is a desktop application designed to help A-Level Physics students record results, analyse data, and 
                        produce printable pdfs of grapghs + reports of results.
                    </p>

                    <p>
                        This project was my Coursework for my OCR A-Level in Computer Science. For which both my program and it&apos;s corresponding
                        write-up <span className="text-[#4ba351] font-bold">achieved an impressive 100% </span>.
                    </p>

                    <p>
                        The Project Consists of <span className="text-[#4ba351] font-bold">5 main screens</span> of core functionality.
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">&quot;Welcome Screen&quot;</span> which contained buttons to navigate between core functionality and included a built in Video Tutorial.
                        Which when clicked created a temporary video player in the application using the &apos;vlc&apos; library in python. Allowing for easy
                        teaching of core program features.
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">&quot;Exprement Screen&quot;</span> containing a large table of results for users to input experimental data into. This screen contained many unique features,
                        validation for significant figures of the user&apos;s input ensuring quality of scientific data entered as well as significant figure correction for data.
                        Automatic calculation for the means and uncertainties of data results was also added, along with data outlier detection, where users can dynamically set
                        the strength of outlier detection and highlight erroneous data in red.
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">&quot;Graph Screen&quot;</span> which allows users to plot their previously collected data onto scatter graphs. Optimal Lines Of Best Fit (LOBF) can be automatically 
                        generated for the data, with sliders being added in later iterations to allow users to manually adjust these LOBFs to better suit trends when extreme outliers
                        are present in the data. Much like the &quot;Experiment Screen&quot; outliers of variying strength can be spotted in these graphs. Error bars can also be plotted to 
                        graphically display uncertainty in the data.
                    </p>

                    <p>
                        A <span className="text-[#4ba351] font-bold">&quot;Report Generation Screen&quot;</span> was created to allow users to easily compile all data colleted and analised on my program into custom formatted pdfs which
                        can be later printed off and worked with offline. Users can toggle which features are included in the resulting pdf report and also select from aprox 12 pre-made
                        diagrams of &quot;Required Practicals&quot; present in the A-Level AQA syllabus. 
                    </p>

                    <p>
                        Finally a <span className="text-[#4ba351] font-bold">&quot;History Screen&quot;</span> allowing for users to access previously recorded results. This was achieved through using csv files, with each saved set of results having
                        a title, topic of study, save date and user written description. The famous algorithms Merge Sort and Binary Search were implemented to allow users to change the order
                        of displayed results and search for specific sets of results.
                    </p>

                    <p>
                        This project was deeply full filling as it allowed me to really show off my creativity and passion for physics (As this project was developed whilst also undertaking
                         A-Level Physics). I even got to personally use the project on several occations after completion within my own practicals and their corresponding write-ups.
                    </p>
                </div>

                {/* BUTTON TO SEE GITHUB REPO */}
                <Link href="https://youtu.be/rvPY4ZxT3XA" className="px-2 py-2 w-fit rounded-xl bg-[#2d755c] text-white">
                    <div className="bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-xl px-4 py-4 text-xl sm:text-3xl lg:text-4xl">
                        Check Out A Video Demonstration!
                    </div>
                </Link>

                <p className="text-red-700 text-sm md:text-lg lg:text-xl font-bold">
                    *No Github repo is provided for this project due to privacy regulations with Offically Graded A-Level Courseworks
                </p>


            </div>
        </main>
    );
};