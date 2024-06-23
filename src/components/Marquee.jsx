/* eslint-disable react/no-unknown-property */
import { Dummy } from "../assets";
const Marquee = () => (
  <div className="h-44 my-8 overflow-hidden w-10/12 mx-auto">
    <h1 className="text-gray-800 text-3xl font-bold tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 self-end">Our Clients</h1>
    <marquee behavior="scroll" direction="left" className="flex items-center space-x-4 mt-7">
      {[0, 1, 2, 3, 4].map((ele, index) => <img key={index} src={Dummy} width="200" alt="Natural" className="inline-block pr-4 " />
      )}
    </marquee>
  </div>
)
export default Marquee