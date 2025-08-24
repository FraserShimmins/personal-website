import LineSeperator from "../ui/LineSeperator";

export default function ContactSection(){
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-6 gap-6 mt-35">

                {/* Section Header */}
                <div className="col-span-full md:col-start-2 md:col-end-10">
                    <div className="flex items-center">
                        <div className="flex-grow">
                            <LineSeperator />
                        </div>
                        <p id="contact-section" className="px-4 text-white text-center font-bold text-4xl sm:text-5xl lg:text-6xl whitespace-nowrap scroll-mt-24">
                            Contact Me
                        </p>
                        <div className="flex-grow">
                            <LineSeperator />
                        </div>
                    </div>
                </div>

                {/* Button Section */}
                <div className="flex flex-col items-center justify-center gap-12 mt-5 md:col-start-2 md:col-end-5 md:row-start-2 md:row-end-5">
                    <button className="text-white bg-green-400 rounded-sm px-4 py-2 w-fit text-sm whitespace-nowrap">
                        Send Me A Message
                    </button>

                    <button className="text-white bg-green-400 rounded-sm px-4 py-2 w-fit text-sm whitespace-nowrap">
                        Send Me A Message
                    </button>

                    <button className="text-white bg-green-400 rounded-sm px-4 py-2 w-fit text-sm whitespace-nowrap">
                        Send Me A Message
                    </button>
                </div>

                {/* Email Me Section */}
                <div className="flex flex-col justify-center gap-6 mt-5 md:col-start-6 md:col-end-11 md:row-start-2 md:row-end-5">
                    <button className="text-white px-3 py-6 bg-green-400 rounded-sm">
                        Send Me A Message
                    </button>

                    <p className="text-white text-left text-base sm:text-lg lg:text-xl">
                        All messages are welcomed! Whether you want to try network, recruit, or simply say hello, I will read and 
                        respond to anyone who decides to take time out of their day to reach out.
                    </p>

                    <div className="flex items-center">
                        <div className="flex-grow bg-white py-0.5 ml-5"></div>
                        <p className="px-4 text-white text-center text-base sm:text-lg lg:text-xl whitespace-nowrap">
                            [ Nothing is too trivial to tell me. ]
                        </p>
                        <div className="flex-grow bg-white py-0.5 mr-5"></div>
                    </div>
                </div>

                {/* Donation Button */}
                <button className="text-white bg-[#967a5c] rounded-xl col-span-full md:col-start-4 md:col-end-8 md:row-start-5 md:row-span-1 mt-3 md:mt-10">
                    Treat Me To A Coffee
                </button>


            </div>
        </section>
    );
};