/* eslint-disable react/no-unknown-property */
import { Dummy } from "../assets";
const Marquee = () => (
  <div className="my-8 overflow-hidden w-11/12 lg:w-9/12 mx-auto flex justify-between flex-col p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-10">
    <h1 className="text-gray-800 text-3xl font-bold tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 self-end">Our Clients</h1>
    <marquee behavior="scroll" direction="left" className="flex items-center space-x-4 mt-7" scrolldelay={150}>
      {[0, 1, 2, 3, 4].map((ele, index) => <img key={index} src={Dummy} width="200" alt="Natural" className="inline-block pr-4 " />
      )}
    </marquee>
  </div>
)
export default Marquee