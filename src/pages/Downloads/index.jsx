import CertificateOfCompliance from '../../assets/pdfs/2250_HIGHREACH.pdf';
import ISO_Stander_Certificate from '../../assets/pdfs/2253_HIGHREACH.pdf';
import ISO_Validation_Certificate from '../../assets/pdfs/HIGHREACH_ISO_9001_2015_CERTIFICATE.pdf'

const Downloads = () => {

  const handleDownload = (fileUrl, fileName) => {
    window.open(fileUrl, '_blank');
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const certificates = [
    {
      title: "Company Catalog",
      description: "Explore our company catalog for detailed information on our latest products, services, and innovations. Understand our full range of capabilities and solutions. Download now to see how we can meet your industrial needs.",
      fileUrl: CertificateOfCompliance,
      fileName: '2250_HIGHREACH.pdf',
      buttonText: "Company Catalog"
    },
    {
      title: "Certificate Of Compliance",
      description: "Explore our company catalog for detailed information on our latest products, services, and innovations. Understand our full range of capabilities and solutions. Download now to see how we can meet your industrial needs.",
      fileUrl: CertificateOfCompliance,
      fileName: '2250_HIGHREACH.pdf',
      buttonText: "Certificate of Compliance"
    },
    {
      title: "ISO Standard Certificates",
      description: "Explore our company catalog for detailed information on our latest products, services, and innovations. Understand our full range of capabilities and solutions. Download now to see how we can meet your industrial needs.",
      fileUrl: ISO_Stander_Certificate,
      fileName: '2253_HIGHREACH.pdf',
      buttonText: "ISO Stander Certificate"
    },
    {
      title: "ISO Validation Certificates",
      description: "Explore our company catalog for detailed information on our latest products, services, and innovations. Understand our full range of capabilities and solutions. Download now to see how we can meet your industrial needs.",
      fileUrl: ISO_Validation_Certificate,
      fileName: 'HIGHREACH_ISO_9001_2015_CERTIFICATE.pdf',
      buttonText: "ISO Validation Certificates"
    }
  ];

  return (
    <div className="w-full flex justify-center items-center bg-[#eef2fd]">
      <div className="w-[60%] flex flex-col rounded-xl p-10 justify-center my-10 shadow-slate-400 shadow-lg bg-white">
        <h1 className="text-4xl">Download</h1>
        <p className="text-md">Download our company Certificates, catalog, ISO Certificates ...</p>
        <div className="flex flex-col py-9 gap-10">
          {certificates.map((cert, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-9 justify-center items-center">
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-[#01204E]">{cert.title}</p>
                <p className='text-justify'>{cert.description}</p>
              </div>
              <div className="flex gap-3">
                <button
                  className="bg-[#01204E] text-white px-10 py-2 text-nowrap rounded-lg"
                  onClick={() => handleDownload(cert.fileUrl, cert.fileName)}
                >
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Downloads;
