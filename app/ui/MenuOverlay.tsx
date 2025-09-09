import NavLink from "../ui/NavLink";

type NavLinkItem = {
  id: number;
  text: string;
  link: string;
};

interface MenuOverlayProps {
  pLinksData: NavLinkItem[];
}

export default function MenuOverlay({ pLinksData } : MenuOverlayProps){
    
    return(
        <div className="flex flex-col gap-3 items-center">
            {
                pLinksData.map((navLink) => <NavLink key={navLink.id} href={navLink.link} text={navLink.text}/>)
            }
        </div>
    );
};