
export default function Page()
{
    return(
        <main className="flex min-h-screen flex-col bg-[#00140d]">
            <div className="mx-6 sm:mx-10 max-w-3xl w-full mt-20 mb-40">
                <h1 className="text-white font-bold mb-6 text-4xl sm:text-5xl lg:text-6xl">
                    <span className="text-[#4ba351]">Message</span> Me
                </h1>

                {/* Email */}
                <label htmlFor="email" className="block text-white mb-2 text-lg sm:text-xl">
                    Email:
                </label>
                <div className="rounded-full border-2 border-[#2d755c] p-1 mb-8">
                    <input
                        id="email"
                        type="email"
                        required
                        placeholder="example@gmail.com"
                        className="w-full rounded-full bg-black text-white placeholder-white/60
                                px-4 py-3 outline-none
                                focus:ring-2 focus:ring-[#2d755c]"
                    />
                </div>

                {/* Subject */}
                <label htmlFor="subject" className="block text-white mb-2 text-lg sm:text-xl">
                    Subject:
                </label>
                <div className="rounded-full border-2 border-[#2d755c] p-1 mb-8">
                    <input
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
                        id="message"
                        rows={16}
                        placeholder="Type your message…"
                        className="w-full rounded-3xl bg-black text-white placeholder-white/60
                                px-4 py-3 outline-none resize-none
                                focus:ring-2 focus:ring-[#2d755c]"
                    />
                </div>
            </div>

        </main>
    );
};