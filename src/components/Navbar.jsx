import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Close, Logo } from '../assets';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menus = [
        { name: 'Home', route: '/' },
        { name: 'Products', route: '/products' },
        { name: 'Downloads', route: '/downloads' },
        { name: 'About Us', route: '/aboutus' },
        { name: 'Contact Us', route: '/contactus' },
    ];

    const RenderToggleButton = () => (
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? (
                <img src={Close} alt="Close" className="h-6" />
            ) : (
                <img src={Menu} alt="Menu" className="h-6" />
            )}
        </button>
    );
    return (
        <nav className="bg-gray-200 sticky top-0 z-50 h-[9vh] flex justify-between items-center px-10">
            <Link to='/'>
                <img src={Logo} className="h-10" alt="Elev8" />
            </Link>
            <div className="sm:hidden">
                <RenderToggleButton />
            </div>
            <div className={`fixed inset-0 z-50 flex flex-col bg-gray-200 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:relative sm:flex-row sm:translate-x-0 sm:items-center sm:justify-end sm:bg-transparent sm:space-x-1 md:space-x-4 sm:p-0`}>
                <div className="flex items-center justify-between p-4 sm:hidden">
                    <img src={Logo} className="h-10" alt="Elev8" />
                    <RenderToggleButton />
                </div>
                {
                    menus.map((link, index) => (
                        <Link key={index} to={link.route} onClick={() => setIsOpen(!isOpen)} className="p-4 hover:bg-gray-800 hover:text-white rounded text-center font-semibold sm:p-0 sm:px-2 md:px-4 sm:py-2">
                            {link.name}
                        </Link>
                    ))
                }
            </div>
        </nav>
    );
};

export default Navbar;
