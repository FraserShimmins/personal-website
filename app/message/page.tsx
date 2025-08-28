
export default function Page()
{
    return(
        <main className="flex min-h-screen flex-col bg-[#00140d]">
            <div className="flex flex-col mt-20 mx-10 sm:mx-15">
                <h1 className="text-white font-bold mb-4 text-4xl sm:text-5xl lg:text-6xl">
                    <span className="text-[#4ba351]">Message</span> Me
                </h1>

                <div className="flex flex-col text-white mb-4 text-base sm:text-lg lg:text-xl my-6">
                    <p>
                        Email:
                    </p>
                </div>

                <div className="flex flex-col text-white mb-4 text-base sm:text-lg lg:text-xl my-6">
                    <p>
                        Subject:
                    </p>
                </div>

                <div className="flex flex-col text-white mb-4 text-base sm:text-lg lg:text-xl my-6">
                    <p>
                        Message:
                    </p>
                </div>
            </div>

        </main>
    );
};