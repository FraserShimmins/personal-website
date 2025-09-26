"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function EmailSection() {

  {/* UseStates */}
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      console.log("POST /api/send ->", res.status);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      {/* ON SUCCESS --> clear fields, and start a tiny cooldown */}
      setEmail("");
      setSubject("");
      setMessage("");

      setCooldown(true);
      setTimeout(() => setCooldown(false), 2000); // 2s lockout
    } 
    catch (err) {
      console.error("Send failed:", err);
    } 
    finally {
      setSending(false);
    }
  }

  return (
    <section className="flex min-h-screen flex-col bg-[#00140d]">
      <div className="mx-6 sm:mx-10 w-fill mt-20 mb-40">
        <h1 className="text-white font-bold mb-12 text-4xl sm:text-5xl lg:text-6xl">
          <span className="text-[#4ba351]">Message</span> Me
        </h1>

        <form onSubmit={handleSubmit} className="text-white">
          {/* Email */}
          <label htmlFor="email" className="block text-lg sm:text-xl">
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
                value={email}
                onChange={(email) => setEmail(email.target.value)}
                className="w-full bg-black text-white placeholder-white/60 rounded-full
                           px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d755c]"
              />
            </div>

            <button
              type="submit"
              disabled={sending || cooldown}
              className="w-fill rounded-3xl bg-[#2d755c] text-white
                         px-1 py-1
                         text-base sm:text-lg lg:text-xl
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
                <div className="flex items-center justify-center gap-2 bg-[#00140d] hover:bg-slate-800 active:bg-slate-900 rounded-3xl px-5 py-2">
                    <Send className="ml-[-5px] w-[3em] h-[3em]" />
                    <span>
                        {sending ? "Sending…" : cooldown ? "Sent!" : "Send"}
                    </span>
                </div>
            </button>
          </div>

          {/* Subject */}
          <label htmlFor="subject" className="block mb-2 text-lg sm:text-xl">
            Subject:
          </label>

          <div className="rounded-full border-2 border-[#2d755c] p-1 mb-8 md:max-w-3xl w-full">
            <input
              name="subject"
              id="subject"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(subject) => setSubject(subject.target.value)}
              className="w-full bg-black text-white placeholder-white/60 rounded-full
                         px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d755c]"
            />
          </div>

          {/* Message */}
          <label htmlFor="message" className="block mb-2 text-lg sm:text-xl">
            Message:
          </label>
          
          <div className="rounded-3xl border-2 border-[#2d755c] p-1 w-fill">
            <textarea
              name="message"
              id="message"
              rows={16}
              placeholder="Type your message…"
              value={message}
              onChange={(message) => setMessage(message.target.value)}
              className="w-full rounded-3xl bg-black text-white placeholder-white/60
                         px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#2d755c]"
            />
          </div>

        </form>
      </div>
    </section>
  );
}
