import React from 'react';
import { HighReach1,HighReach2,HighReach3,HighReach4,HighReach5 } from '../../assets/index';

const Certificate = () => {
  
  const HRCertificate = [HighReach1,HighReach2,HighReach3,HighReach4,HighReach5]
  return (
    <div className='w-full bg-cover text-center' >
      <h1 className='text-3xl text-center py-11 inline-block border-b-4 border-[#9da2ac]'>
        Certificates
      </h1>
      <div className='flex flex-wrap justify-center items-center gap-5'>
            {
                HRCertificate.map((ele,index) =>{
                  return  <img src={ele} key={index} className='w-[200px] h-[280px] py-5 px-3'/>
                })
            }
      </div>
    </div>
  );
}

export default Certificate;
