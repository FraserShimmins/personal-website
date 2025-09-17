"use client"

import { Send } from 'lucide-react';

export default function EmailSection() {
    
    async function handleSubmit(){
        
        const url = "/api/send";

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const text = await response.text();
        console.log(text);
    }
    
    return(
        <section className="flex min-h-screen flex-col bg-[#00140d]">
            <div className="mx-6 sm:mx-10 w-fill mt-20 mb-40">
                <h1 className="text-white font-bold mb-12 text-4xl sm:text-5xl lg:text-6xl">
                    <span className="text-[#4ba351]">Message</span> Me
                </h1>

                <form onSubmit={(e) => { e.preventDefault()}}>

                    {/* Email */}
                    <label htmlFor="email" className="block text-white mb-2 text-lg sm:text-xl">
                        Email:
                    </label>

                    <div className="flex items-center gap-12 mb-8">
                        <div className="rounded-full border-2 border-[#2d755c] p-1 w-3xl">
                        <input
                            name="email"
                            id="email"
                            type="email"
                            required
                            placeholder="example@gmail.com"
                            className="w-full rounded-full bg-black text-white placeholder-white/60
                                    px-4 py-3 outline-none
                                    focus:ring-2 focus:ring-[#2d755c]"
                        />
                        </div>

                        <button 
                            type="submit"
                            onClick={() => handleSubmit()}
                            className="px-1 py-1 w-fill rounded-3xl bg-[#2d755c] text-white">
                                <div className="flex items-center justify-center gap-4 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-3xl px-5 py-2 text-base sm:text-lg lg:text-xl">
                                    <Send className="ml-[-5px] w-[3em] h-[3em]"/>
                                </div>
                        </button>
                    </div>

                    {/* Subject */}
                    <label htmlFor="subject" className="block text-white mb-2 text-lg sm:text-xl">
                        Subject:
                    </label>
                    <div className="rounded-full border-2 border-[#2d755c] p-1 mb-8 md:max-w-3xl w-full">
                        <input
                            name="subject"
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            className="w-full rounded-full bg:black bg-black text-white placeholder-white/60
                                    px-4 py-3 outline-none
                                    focus:ring-2 focus:ring-[#2d755c]"
                        />
                    </div>

                    {/* Message */}
                    <label htmlFor="message" className="block text-white mb-2 text-lg sm:text-xl">
                        Message:
                    </label>
                    <div className="rounded-3xl border-2 border-[#2d755c] p-1 w-fill">
                        <textarea
                            name="message"
                            id="message"
                            rows={16}
                            placeholder="Type your message…"
                            className="w-full rounded-3xl bg-black text-white placeholder-white/60
                                    px-4 py-3 outline-none resize-none
                                    focus:ring-2 focus:ring-[#2d755c]"
                        />
                    </div>
                </form>
                
            </div>

        </section>
    );
};