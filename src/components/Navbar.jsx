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
            <div className="md:hidden">
                <RenderToggleButton />
            </div>
            <div className={`fixed inset-0 z-50 flex flex-col bg-gray-200 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:flex-row md:translate-x-0 md:items-center md:justify-end md:bg-transparent md:space-x-6 md:p-0`}>
                <div className="flex items-center justify-between p-4 md:hidden">
                    <img src={Logo} className="h-10" alt="Elev8" />
                    <RenderToggleButton />
                </div>
                {
                    menus.map((link, index) => (
                        <Link key={index} to={link.route} onClick={() => setIsOpen(!isOpen)} className="p-4 hover:bg-gray-800 hover:text-white rounded text-center font-semibold md:p-0 md:px-4 md:py-2">
                            {link.name}
                        </Link>
                    ))
                }
            </div>
        </nav>
    );
};

export default Navbar;
