import Link from 'next/link';


export default function NavBar(){
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#00140d]/90">
            <div className="flex flex-wrap items-center justify-between mx-auto py-2 md:py-4 px-5 md:px-10 ">
                {/*Site Logo*/}
                <Link href={'/'} className="text-1xl md:text-2xl text-white font-semibold">
                    <span className="text-[#4ba351]">Fraser</span> Shimmins
                </Link>
            </div>
        </nav>
    );
};