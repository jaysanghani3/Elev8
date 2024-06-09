import { Link } from "react-router-dom";
import { Carousel, Milestones } from "../../components";
import { P12, abus } from "../../assets";

const Homepage = () => (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-5  text-[#01204E]">Welcome to Elev8</h1>
      <p className="text-lg text-center my-5">Working at height made EASY, SAFE & AFFORDABLE with Elev8.</p>
      <div className="flex">
        <div className="md:w-8/12">
        <Carousel />
        </div>
        <div className="w-4/12 md:flex hidden flex-col justify-center">
          <h1 className="text-2xl font-bold text-[#01204E]">Why Elev8?</h1>
          <p className="text-justify my-5">
            Elev8 is the leading manufacturer of aerial work platforms that are used in construction, maintenance, and other applications. Our vision is to provide the best possible equipment for our customers, so they can work safely and efficiently at height. We are committed to providing innovative solutions that meet the needs of our customers and help them succeed in their work.
          </p>
          <Link to="/aboutus" className="bg-[#01204E] text-white px-4 py-2 rounded-lg self-end">About Us</Link>
        </div>
      </div>
      <video className="md:w-7/12 mx-auto rounded-lg" autoPlay muted controls>
      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex justify-between p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-10">
        <div className="md:w-9/12 pr-5 flex flex-col">
          <Link to="/products" className="text-gray-800 text-3xl font-bold tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 ">Our Products</Link>
          <p className="text-justify mt-11">
            Elev8 is the leading manufacturer of aerial work platforms that are used in construction, maintenance, and other applications. Our vision is to provide the best possible equipment for our customers, so they can work safely and efficiently at height. We are committed to providing innovative solutions that meet the needs of our customers and help them succeed in their work.
          </p>
        </div>
        <div className="md:w-3/12 hidden md:block p-3">
          <img src={P12} alt="construction" className="object-cover rounded-lg" />
        </div>
      </div>
      <div className="flex justify-between flex-row-reverse p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-10">
        <div className="md:w-9/12 pr-5 flex flex-col">
          <Link to="/aboutus" className="text-gray-800 text-3xl font-bold tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 self-end">About Us</Link>
          <p className="text-justify mt-11">
            Elev8 Lifts is the premier manufacturer of aerial work platforms for construction, maintenance, and more. Our mission is to ensure safety and efficiency at height by providing top-quality equipment. We are dedicated to innovation, offering cutting-edge solutions tailored to our customers needs. At Elev8 Lifts, we strive to help our customers achieve success through reliable, advanced, and safe aerial work platforms.
          </p>
        </div>
        <div className="md:w-3/12 hidden md:block p-3">
          <img src={abus} alt="construction" className="object-cover rounded-lg" />
        </div>
      </div>
      <Milestones />
    </div>
  )

export default Homepage
