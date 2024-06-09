
const Downloads = () => {

  return (
    <div className="w-full flex justify-center items-center bg-[#eef2fd]">
      <div className="w-[60%]  flex flex-col rounded-xl p-10 justify-center my-10 shadow-slate-400 shadow-lg bg-white">
           <h1 className="text-4xl">Download</h1>
           <p className="text-md">Download our comapany Certificates , catlog , ISO Certificates ...</p>
           <div className="flex flex-col py-9 gap-10">
              <div className="flex flex-col  sm:flex-row gap-9 justify-center items-center">
                <div className="flex flex-col">
                  <p className="text-2xl font-bold text-[#01204E] ">Company Catalog</p>
                  <p>Explore our company catalog for detailed information on our latest products, services, and innovations. Understand our full range of capabilities and solutions. Download now to see how we can meet your industrial needs.</p>
                </div>
                
                <button className="bg-[#01204E] text-white px-2 h-10 text-nowrap rounded-lg">Company Catalog</button>   
              </div>
              <div className="flex  flex-col  sm:flex-row gap-9 justify-center items-center">
                <div className="flex flex-col">
                  <p className="text-2xl font-bold text-[#01204E] ">Certificate Of Compliance</p>
                  <p>Explore our company catalog for detailed information on our latest products, services, and innovations. Understand our full range of capabilities and solutions. Download now to see how we can meet your industrial needs.</p>
                </div>
                <button className="bg-[#01204E] text-white px-2 h-10 text-nowrap rounded-lg" >certificate of compliance</button>   
              </div>
              <div className="flex flex-col  sm:flex-row gap-9 justify-center items-center">
                <div className="flex flex-col">
                  <p className="text-2xl font-bold text-[#01204E] ">ISO Stander Certificates</p>
                  <p>Explore our company catalog for detailed information on our latest products, services, and innovations. Understand our full range of capabilities and solutions. Download now to see how we can meet your industrial needs.</p>
                </div>
                <button className="bg-[#01204E] text-white px-2 h-10 text-nowrap rounded-lg">Download Catalog</button>   
              </div>
              <div className="flex flex-col  sm:flex-row gap-9 justify-center items-center">
                <div className="flex flex-col">
                  <p className="text-2xl font-bold text-[#01204E] ">ISO Validation Certificates</p>
                  <p>Explore our company catalog for detailed information on our latest products, services, and innovations. Understand our full range of capabilities and solutions. Download now to see how we can meet your industrial needs.</p>
                </div>
                
                <button className="bg-[#01204E] text-white px-2 h-10 text-nowrap rounded-lg">Download Catalog</button>   
              </div>
           </div>
      </div>
    </div>
  )
}

export default Downloads
