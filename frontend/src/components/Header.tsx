import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import resLogo from "../images/favicon2.png"
const Header = () => {
    return (
        <div className="border-b-2 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={resLogo} alt="logo" style={{height:"64px", width:'64px'}} />
                    <Link to='/' className='text-3xl font-bold tracking-tight text-amber-500'>
                        Pixel Plate
                    </Link>
                </div>

                <div className="md:hidden">
                    <MobileNav />
                </div>
                <div className="hidden md:block">
                    <MainNav />
                </div>
            </div>
        </div>
    )
}

export default Header;