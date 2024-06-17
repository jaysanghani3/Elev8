import { Link } from "react-router-dom";
import { Carousel, Milestones } from "../../components";
import { C0, C1, C2, C3, C4, A0 } from "../../assets";
import Vd from "../../assets/VTLMARKETING.webm";

const Homepage = () => (
  <div className="">
    <Carousel slides={[C0, C1, C2, C3, C4]} styles={"w-full h-[250px] sm:h-[400px] lg:h-[500px] lg:h-[600px] xl:h-[85vh] object-cover"} />
    <video className="w-11/12 lg:w-10/12 mx-auto rounded-lg mt-10 " autoPlay muted controls controlsList="nodownload">
      <source
        src={Vd}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <Link to="/products" className="w-11/12 lg:w-10/12 mx-auto flex justify-between p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-10 hover:bg-gray-100">
      <div className="lg:w-8/12 pr-5 flex flex-col">
        <h1
          className="text-gray-800 text-3xl font-bold tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 "
        >
          Our Products
        </h1>
        <p className="text-justify mt-11">
          “ Elev8 is a brand that prides itself on manufacturing some of the most reliable, agile, robust, and safety-focused Mobile Elevated Work Platforms (MEWPs). We have a range of <i>push around</i> and <i>self propelled</i> machines in our portfolio. Our customers can choose a suitable machine based on the application of work where they want to deploy our machines. Our machines can service heights as high as <i>40 feet / 12 m</i> using either <i>single vertical mast technology or a multi stack scissor technology. </i>”
        </p>
      </div>
      <img src={C0} alt="construction" className="lg:w-4/12 hidden lg:block mt-4 object-cover rounded-lg" />
    </Link>
    <Link
      to="/aboutus" className="w-11/12 lg:w-10/12 mx-auto flex justify-between flex-row-reverse p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-10 hover:bg-gray-100">
      <div className="lg:w-9/12 pr-5 flex flex-col">
        <h1
          className="text-gray-800 text-3xl font-bold tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 self-end"
        >
          About Us
        </h1>
        <p className="text-justify mt-11">
          “ Elev8 brand comes alive by its brilliant team of Design Engineers, Mechanics, Quality Control Personnel, Service Engineers, Sales Executives and many more! We pride ourselves on manufacturing premium quality Mobile Elevated Work Platforms (MEWPs) in INDIA. Our group has a rich history and extensive experience in the manufacturing industry. We are a family owned business and have been working in the manufacturing industry for the last 60 years. ”

        </p>
      </div>
      <img src={A0} alt="construction" className="lg:w-4/12 hidden lg:block object-scale-down rounded-lg " />
    </Link>
    <Milestones />
  </div>
);

export default Homepage;
