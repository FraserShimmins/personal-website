import Link from 'next/link';
import NavLink from '../ui/NavLink';
import ProgressBar from '../ui/ProgressBar';

const linksData = [
    {
        id: 1,
        text: "About",
        link: "/#about-section",
    },
    {
        id: 2,
        text: "Projects",
        link: "/#projects-section",
    },
    {
        id: 3,
        text: "Contact",
        link: "/#contact-section",
    },
]


export default function NavBar(){
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#00140d]/90">
            <div className="flex flex-wrap items-center justify-between mx-auto py-2 md:py-3 px-5 md:px-10">
                {/*Site Logo*/}
                <Link href={'/'} className="text-1xl md:text-2xl text-white font-semibold rounded-sm hover:bg-slate-800 px-2 active:bg-slate-900">
                    <span className="text-[#4ba351]">Fraser</span> Shimmins
                </Link>

                {/* Wrapper For the Scroll Buttons */}
                <div className="flex justify-end gap-4">

                    {/* Set up Links */}
                    <div className="grid md:grid-cols-3 gap-3 md:gap-12">
                        {linksData.map((navLink) => <NavLink key={navLink.id} href={navLink.link} text={navLink.text}/>)}
                    </div>
                </div>
                
                
            </div>
            <ProgressBar/>
        </nav>
    );
};