import { HighReach1, HighReach2, HighReach3, HighReach4, HighReach5 } from '../../assets/index';
import { Carousel } from '../../components';

const Certificate = () => {

  return (
    <div className='mx-auto text-center bg-[#F6F9FC] md:px-10 pb-10' >
      <h1 className='text-4xl text-[#26256B] font-semibold text-center py-11 inline-block tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 '>
        Certificates
      </h1>
      <div className='flex flex-wrap justify-center items-center'>
        <Carousel slides={[HighReach1, HighReach2]} styles={'w-[280px] border rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] me-0 sm:me-9'}/>
        <Carousel slides={[HighReach3, HighReach4]} styles={'w-[280px] border rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:me-9'} />
        <img src={HighReach5} className='w-[280px] border rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-10' loading='lazy' />
      </div>
    </div>
  );
}

export default Certificate;
