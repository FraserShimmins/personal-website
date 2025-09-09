'use client'

import { useState } from 'react';
import MenuOverlay from '../ui/MenuOverlay'
import Link from 'next/link';
import NavLink from '../ui/NavLink';
import ProgressBar from '../ui/ProgressBar';
import { Menu, X } from 'lucide-react';

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
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#00140d]/90">
            <div className="flex flex-wrap items-center justify-between mx-auto py-2 md:py-3 px-5 md:px-10">
                {/*Site Logo*/}
                <Link href={'/#hero-section'} className="text-1xl md:text-2xl text-white font-semibold rounded-sm hover:bg-slate-800 px-2 active:bg-slate-900">
                    <span className="text-[#4ba351]">Fraser</span> Shimmins
                </Link>

                {/* Wrapper For the Nav Buttons On Mobile screens*/}
                <div className="mobile-menu block md:hidden text-white"> 
                    {navbarOpen ? (
                        <button onClick={() => setNavbarOpen(false)} className="mobile-menu flex items-center justify-end gap-4">
                            <X className="w-5] h-5"/>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(true)} className="mobile-menu flex items-center">
                            <Menu className="w-5 h-5"/>
                        </button>
                    )}
                </div>

                {/* Wrapper For the Nav Buttons On Desktop screens*/}
                <div className="menu hidden md:block">

                    {/* Set up Links */}
                    <div className="grid md:grid-cols-3 gap-3 md:gap-12">
                        {linksData.map((navLink) => <NavLink key={navLink.id} href={navLink.link} text={navLink.text}/>)}
                    </div>
                </div>
                
                
            </div>
            {navbarOpen ? <MenuOverlay pLinksData={linksData}/> : null}
            <ProgressBar/>
        </nav>
    );
};