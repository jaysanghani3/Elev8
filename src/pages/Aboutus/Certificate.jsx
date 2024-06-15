import { HighReach1, HighReach2, HighReach3, HighReach4, HighReach5 } from '../../assets/index';

const Certificate = () => {

  const HRCertificate = [HighReach1, HighReach2, HighReach3, HighReach4, HighReach5]
  return (
    <div className='mx-auto text-center bg-[#F6F9FC] md:px-10 pb-10' >
      <h1 className='text-4xl text-[#26256B] font-semibold text-center py-11 inline-block tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 '>
        Certificates
      </h1>
      <div className='flex flex-wrap justify-center md:justify-between items-center'>
        {
          HRCertificate.map((ele, index) => <img src={ele} key={index} className='w-[300px] border rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-6' />)
        }
      </div>
    </div>
  );
}

export default Certificate;
