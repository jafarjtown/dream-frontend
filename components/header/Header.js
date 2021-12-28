import {
	IoAlbumsOutline,
	IoApps,
	IoChatbubbleEllipsesOutline,
	IoHomeOutline,
	IoLibraryOutline,
	IoPeople,
	IoPersonCircleOutline,
	IoSearchOutline,
} from "react-icons/io5";
import Link from 'next/link'
export default function Header() {
	return (
		<div className="header">
            <div className="header_top">
                <Link href='/library' passHref>
                <IoLibraryOutline />
                </Link>
				<div className='header_search'>
					<input type="search" />
					<IoSearchOutline />
                </div>
                <Link href='/me' passHref={false}>
				<IoPersonCircleOutline />
                </Link>
			</div>
            <div className="header_bottom">
                <Link href='/'><IoHomeOutline /></Link>
                
                <Link href='/chat' passHref><IoChatbubbleEllipsesOutline /></Link>
                <Link href='/friends' passHref><IoPeople /></Link>
				
                
                <Link href='/files' passHref><IoAlbumsOutline /></Link>
                
                
                <Link href='/apps' passHref><IoApps /></Link>
                
				
			</div>
		</div>
	);
}
