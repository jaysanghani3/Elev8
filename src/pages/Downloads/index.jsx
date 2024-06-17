import CertificateOfCompliance from '../../assets/pdfs/2250_HIGHREACH.pdf';
import ISO_Stander_Certificate from '../../assets/pdfs/2253_HIGHREACH.pdf';
import ISO_Validation_Certificate from '../../assets/pdfs/HIGHREACH_ISO_9001_2015_CERTIFICATE.pdf'

const Downloads = () => {

  const handleDownload = (fileUrl) => {
    window.open(fileUrl, '_blank');
  }

  const certificates = [
    {
      title: "VTL DC Series Catalog",
      description:  "Explore our VTL DC Series catalog for detailed information on our latest product features and innovations.Understand our full range of capabilities and solutions.Download now to see how we can meet your industrial needs.",
      fileUrl: CertificateOfCompliance,
    },
    {
      title: "CERTIFICATE OF COMPLIANCE - CE",
      description: "",
      fileUrl: CertificateOfCompliance,
    },
    {
      title: "CERTIFICATE OF COMPLIANCE - ISO 16368:2010",
      description: "",
      fileUrl: ISO_Stander_Certificate,
    },
    {
      title: "CERTIFICATE OF COMPLIANCE - ISO 9001:2015",
      description: "",
      fileUrl: ISO_Validation_Certificate,
    }
  ];

  return (
    <div className="w-full flex justify-center items-center bg-slate-300">
      <div className="md:w-7/12 w-11/12 flex flex-col rounded-xl p-8 justify-center my-5 md:my-10 shadow-slate-400 shadow-lg bg-white">
        <h1 className="text-2xl md:text-4xl">Download</h1>
        <p className="text-lg ">Download our company Certificates, catalog, ISO Certificates ...</p>
        <div className="flex flex-col py-9">
          {certificates.map((cert, index) => (
            <div key={index} className={`flex flex-col lg:flex-row lg:justify-between lg:items-center ${index % 2 != 0 ? 'bg-slate-100' : ''} my-2 p-3 rounded-lg`}>
              <div className="flex flex-col lg:me-4 mb-2">
                <p className="text-lg md:text-xl text-red-600 font-semibold">{cert.title}</p>
                <p className='text-justify text-[#01204E]'>{cert.description}</p>
              </div>
                <button
                  className="bg-[#01204E] text-white px-10 py-2 text-nowrap rounded-lg"
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
