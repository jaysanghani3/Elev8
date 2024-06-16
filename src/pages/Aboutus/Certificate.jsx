import { HighReach1, HighReach2, HighReach3, HighReach4, HighReach5 } from '../../assets/index';
import { Carousel } from '../../components';

const Certificate = () => {

  return (
    <div className='mx-auto text-center bg-[#F6F9FC] md:px-10 pb-10' >
      <h1 className='text-4xl text-[#26256B] font-semibold text-center py-11 inline-block tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 '>
        Certificates
      </h1>
      <div className='flex flex-wrap justify-center items-center'>
        <Carousel slides={[HighReach1, HighReach2]} height={'w-[300px] md:me-12 border rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'}/>
        <Carousel slides={[HighReach3, HighReach4]} height={'w-[300px] md:me-12 border rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'} />
        <img src={HighReach5} className='w-[300px] border rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-10' />
      </div>
    </div>
  );
}

export default Certificate;
