import { Construction } from 'lucide-react';

export default function Page() {
    return (
        <main className="flex flex-col gap-3 items-center justify-center min-h-screen bg-[#00140d] px-10 sm:px-15">
            <div className="flex gap-6 items-center text-[#4ba351] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <h1>
                    Coming Soon!
                </h1>
                <Construction className="text-white w-[1em] h-[1em]"/>
            </div>
            
            <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl">
                Give me some time to work on this...
            </p>
        </main>
    );
};