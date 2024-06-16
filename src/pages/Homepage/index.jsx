import { Link } from "react-router-dom";
import { Carousel, Milestones } from "../../components";
import { C0, C1, C2, C3, C4, A0 } from "../../assets";
import Vd from "../../assets/VTLMARKETING.webm";

const Homepage = () => (
  <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold text-center my-5  text-[#01204E]">Welcome to Elev8</h1>
    <p className="text-lg text-center my-5">Working at height made EASY, SAFE & AFFORDABLE with Elev8.</p>
    <div className="md:w-8/12 mx-auto mb-7">
      <Carousel slides={[C0, C1, C2, C3, C4]} height={"w-full h-[250px] md:h-[560px]"}/>
    </div>
    <video className="md:w-8/12 mx-auto rounded-lg" autoPlay muted controls controlsList="nodownload">
      <source
        src={Vd}
        type="video/mp4"  
      />
      Your browser does not support the video tag.
    </video>
    <Link to="/products" className="flex justify-between p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-10 hover:bg-gray-100">
      <div className="md:w-9/12 pr-5 flex flex-col">
        <h1
          className="text-gray-800 text-3xl font-bold tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 "
        >
          Our Products
        </h1>
        <p className="text-justify mt-11">
          Elev8 is the leading manufacturer of aerial work platforms that are used in construction, maintenance, and
          other applications. Our vision is to provide the best possible equipment for our customers, so they can work
          safely and efficiently at height. We are committed to providing innovative solutions that meet the needs of
          our customers and help them succeed in their work.
        </p>
      </div>
      <div className="md:w-3/12 hidden md:block p-3">
        <img src={C0} alt="construction" className="object-cover rounded-lg" />
      </div>
    </Link>
    <Link
      to="/aboutus" className="flex justify-between flex-row-reverse p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-10 hover:bg-gray-100">
      <div className="md:w-9/12 pr-5 flex flex-col">
        <h1
          className="text-gray-800 text-3xl font-bold tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 self-end"
        >
          About Us
        </h1>
        <p className="text-justify mt-11">
          Elev8 Lifts is the premier manufacturer of aerial work platforms for construction, maintenance, and more. Our
          mission is to ensure safety and efficiency at height by providing top-quality equipment. We are dedicated to
          innovation, offering cutting-edge solutions tailored to our customers needs. At Elev8 Lifts, we strive to help
          our customers achieve success through reliable, advanced, and safe aerial work platforms.
        </p>
      </div>
      <div className="md:w-3/12 hidden md:block p-3">
        <img src={A0} alt="construction" className="object-cover rounded-lg" />
      </div>
    </Link>
    <Milestones />
  </div>
);

export default Homepage;
