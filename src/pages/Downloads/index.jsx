import VCL_Catalog from '../../assets/pdfs/Elev8 VTL DC series calatog.pdf';
const Downloads = () => {

  const handleDownload = (fileUrl) => {
    window.open(fileUrl, '_blank');
  }

  const certificates = [
    {
      title: "VTL DC Series Catalog",
      description:  "Explore our VTL DC Series catalog for detailed information on our latest product features and innovations.Understand our full range of capabilities and solutions.Download now to see how we can meet your industrial needs.",
      fileUrl: VCL_Catalog,
    },
    {
      title: "SCL DC Series Catalog",
      description:  "Explore our SCL DC Series catalog for detailed information on our latest product features and innovations.Understand our full range of capabilities and solutions.Download now to see how we can meet your industrial needs.",
      fileUrl: VCL_Catalog,
    }
  ];

  return (
    <div className="w-full flex justify-center items-center bg-slate-300">
      <div className="md:w-7/12 w-11/12 flex flex-col rounded-xl p-8 justify-center my-5 md:my-10 shadow-slate-400 shadow-lg bg-white">
        <h1 className="text-2xl md:text-4xl">Downloads</h1>
        <div className="flex flex-col py-9">
          {certificates.map((cert, index) => (
            <div key={index} className={`flex flex-col lg:flex-row lg:justify-between lg:items-center ${index % 2 != 0 ? 'bg-slate-100' : ''} px-3 rounded-lg`}>
              <div className="flex flex-col lg:me-4 mb-2">
                <p className="text-[#01204E] col-span-full text-2xl font-bold underline decoration-yellow-400 underline-offset-8 decoration-4 mt-3 mb-6">{cert.title}</p>
                <p className='text-justify text-[#01204E] pe-24'>{cert.description}</p>
              </div>
                <button
                  className="bg-[#01204E] text-white px-10 py-2 text-nowrap rounded-lg mt-10"
                  onClick={() => handleDownload(cert.fileUrl)}
                >
                  Download
                </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Downloads;
