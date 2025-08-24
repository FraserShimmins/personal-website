import LineSeperator from "../ui/LineSeperator";

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

                <div className="flex flex-col justify-evenly md:col-start-2 md:col-end-5 md:row-start-2 md:row-span-3">
                    <button className="px-6 py-3 w-full rounded-full mr-4 bg-gradient-to-br from-purple-300 via bg-purple-500 to-purple-800 hover:bg-slate-200 text-white">
                        Download My CV
                    </button>
                    <button className="px-6 py-3 w-full rounded-full mr-4 bg-gradient-to-br from-purple-300 via bg-purple-500 to-purple-800 hover:bg-slate-200 text-white">
                        Check Out My Blog
                    </button>
                </div>
            
                <button className="md:col-start-2 md:col-end-5 md:row-start-5 md:row-span-1 px-6 py-3 w-full rounded-full mr-4 bg-gradient-to-br from-purple-300 via bg-purple-500 to-purple-800 hover:bg-slate-200 text-white">
                    GitHub
                </button>
            </div>
        </section>
    );
};

