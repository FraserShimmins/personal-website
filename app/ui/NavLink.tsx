import Link from "next/link";

type propsType = {
    href: string;
    text: string;
}

export default function NavLink({href, text}: propsType){
    return(
        <Link href={href} className="text-1xl md:text-2xl text-white text-center font-semibold 
                                    rounded-sm hover:bg-slate-800 px-2 hover:text-[#4ba351]">
            {text}                                           
        </Link>
    );
};