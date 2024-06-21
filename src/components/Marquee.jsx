import React from 'react'

const marqueImg = ["https://static.startuptalky.com/2022/09/Tata-group-success-story-startuptalky.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDqdhaSnlSMRmdvB3iRIEbeqTGXI1tSVQJw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDqdhaSnlSMRmdvB3iRIEbeqTGXI1tSVQJw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDqdhaSnlSMRmdvB3iRIEbeqTGXI1tSVQJw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoU1pY7uxZZoxMQ3TNKxwk9T1EnqIpPHKzA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFoI7ld_e7ECu73aZw8SUWfK2YswEJJ2UCw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXoU1pY7uxZZoxMQ3TNKxwk9T1EnqIpPHKzA&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFoI7ld_e7ECu73aZw8SUWfK2YswEJJ2UCw&s"]
const Marquee = () => {
  return (
    
      <div className="h-44 my-8 overflow-hidden px-4 sm:px-6">
        <h1 className='text-center text-2xl text-gray-800'>Our Clients</h1>
      <marquee behavior="scroll" direction="left" className="flex items-center space-x-4 mt-7">
        {marqueImg.map((ele)=>{
           return   <img src={ele} width="200"  alt="Natural" className="inline-block pr-4 " />
        })}
       
        
      </marquee>
    </div>
  )
}

export default Marquee
