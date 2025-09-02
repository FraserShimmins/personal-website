import LineSeperator from "../ui/LineSeperator";
import CopyEmail from "../ui/CopyEmail";
import { Send, Search, Coffee } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';

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
                <div className="flex flex-col items-start justify-center md:justify-start gap-12 mt-5 md:col-start-1 md:col-end-5 md:row-start-2 md:row-end-5 px-4 ml-8">
                    
                    {/* Instagram Button */}
                    <div className="flex items-center justify-start gap-5 md:gap-10">
                        <div className="relative w-10 lg:w-20 aspect-square place-self-center">
                            <Image
                                src="/images/instagramIcon.svg"
                                alt="Instagram Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <Link href="https://www.instagram.com/frasershim?igsh=eHlpbTB3bzFvdmg0&utm_source=qr" className="px-1 py-1 w-fill rounded-3xl bg-[#2d755c] text-white">
                            <div className="flex items-center justify-center gap-4 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-3xl px-5 py-2 text-base sm:text-lg lg:text-xl">
                                <Search className="w-[1em] h-[1em]"/>
                                <p className="whitespace-nowrap text-left">My Instagram</p>
                            </div>
                        </Link>
                    </div>
                    
                    {/* LinkedIn Button */}
                    <div className="flex items-center justify-start gap-5 md:gap-10">
                        <div className="relative w-10 lg:w-20 aspect-square place-self-center">
                            <Image
                                src="/images/linkedInLogo.png"
                                alt="LinkedIn Logo"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <Link href="https://www.linkedin.com/in/fraser-shimmins-644a24331/" className="px-1 py-1 w-fill rounded-3xl bg-[#2d755c] text-white">
                            <div className="flex items-center justify-center gap-4 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-3xl px-5 py-2 text-base sm:text-lg lg:text-xl">
                                <Search className="w-[1em] h-[1em]"/>
                                <p className="whitespace-nowrap text-left">My LinkedIn</p>
                            </div>
                        </Link>
                    </div>

                    {/* Gmail Button */}
                    <div className="flex items-center justify-start gap-5 md:gap-10">
                        <div className="relative w-10 lg:w-20 aspect-square place-self-center">
                            <Image
                                src="/images/gmailIcon.svg"
                                alt="Gmail Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        
                        <CopyEmail/>
                    </div>
                </div>

                {/* Email Me Section */}
                <div className="flex flex-col justify-start gap-6 mt-5 md:col-start-6 md:col-end-11 md:row-start-2 md:row-end-5">

                    <Link href="/message" className="px-2 py-2 w-fill rounded-xl bg-[#2d755c] text-white">
                        <div className="flex items-center justify-center gap-4 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-xl px-5 py-8 text-xl sm:text-3xl lg:text-4xl">
                            <Send className="w-[1em] h-[1em]"/>
                            <p className="whitespace-nowrap">Send Me A Message</p>
                        </div>
                    </Link>

                    <p className="text-white text-left text-base sm:text-lg lg:text-xl mt-6">
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

                <div className="flex justify-center col-span-full md:col-start-4 md:col-end-8 md:row-start-5 md:row-span-1">
                    <Link href="https://buymeacoffee.com/frasershimmins" className="px-1 py-1 w-fill rounded-sm bg-[#b3826c] text-white col-span-full md:col-start-4 md:col-end-8 md:row-start-5 md:row-span-1 mt-3 md:mt-10">
                        <div className="flex items-center justify-center gap-4 bg-[#6F574E] hover:bg-[#5A3E2D] active:bg-[#3B281D] rounded-xl px-5 py-4 text-xl sm:text-3xl lg:text-4xl">
                            <p className="whitespace-nowrap">Treat Me To A Coffee</p>
                            <Coffee className="w-[1.5em] h-[1.5em]"/>
                        </div>
                    </Link>
                </div>
                
            </div>
        </section>
    );
};