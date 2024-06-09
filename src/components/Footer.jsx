import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, LocationIcon } from '../assets'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="flex px-3 justify-around sm:items-start gap-10 sm:gap-20 py-10 text-xs md:text-sm">
        <div className=" flex flex-col gap-6">
          <h2 className="text-2xl font-bold underline underline-offset-[12px] decoration-4 decoration-blue-400">Quick Links</h2>
          <nav className="flex flex-col gap-2">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/downloads">Downloads</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/contactus">About Us</Link>
          </nav>
          <div className="flex flex-col gap-4 mt-4">
            <Link to="/products" className="bg-white text-gray-800 font-bold py-2 px-4 text-center rounded">View Products</Link>
            <Link to="/downloads" className="bg-black text-white font-semibold py-2 px-4 text-center rounded">Downloads</Link>
            <Link to="/contactus" className="bg-white text-gray-800 font-bold py-2 px-4 text-center rounded">Get in Touch</Link>
          </div>
        </div>

        <div className=" flex flex-col gap-6">
          <h2 className="text-2xl font-bold underline underline-offset-[12px] decoration-4 decoration-blue-400">Elev8</h2>
          <div className="mt-2">
            <div className="flex my-5">
              <img src={PhoneIcon} alt="phone" className="w-6 h-6 mr-4  " />
              <span>+91 8850332794</span>
            </div>
            <div className="flex my-5">
              <img src={MailIcon} alt="mail" className="w-6 h-6 mr-4  " />
              <a href="mailto:sales@elev8lift.in">sales@elev8lift.in</a>
            </div>
            <div className="flex my-5">
              <img src={LocationIcon} alt="location" className="w-6 h-6 mr-4  " />
              <address className="not-italic">
                <p>HIGH REACH</p>
                <p>Road C, AJI GIDC</p>
                <p>Rajkot, Gujarat 360003</p>
              </address>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-5 bg-gray-900 text-xs md:text-sm">&copy; 2022 HighReach Elev8</p>
    </footer>
  );
};

export default Footer;
