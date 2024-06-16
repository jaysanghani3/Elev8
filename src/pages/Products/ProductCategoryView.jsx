// import { useState } from 'react';
import { useParams } from "react-router-dom";
import { productsData } from "../../Data";
import { Carousel } from "../../components";

const ProductCategoryView = () => {
  const { categoryId } = useParams();
  const categoryData = categoryId === "vtl" ? productsData.vtl : productsData.scl;

  return (
    <div className="p-4 mx-auto md:w-10/12">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quod facere dignissimos distinctio accusantium
        minus, eligendi sapiente eius expedita illo perferendis at suscipit, tempora itaque necessitatibus! Modi, fugiat
        porro! Quidem.
      </p>
      {categoryData.map((item) => (
        <div key={item.id} className="flex flex-wrap border-b-2 p-2 mt-5 justify-center  items-center">
          <div className={`flex flex-col p-2 w-full md:me-12 ${categoryId === "vtl" ? 'md:w-4/12' :'md:w-5/12'}`}>
            <h1 className="font-bold text-[#01204E] text-3xl md:text-4xl ps-3 tracking-wider mb-7 underline decoration-yellow-400 underline-offset-8 decoration-4 ">{item.name}</h1>
            <Carousel slides={item.image} height={`w-full ${(item.id === 'V04' || item.id === 'V05') ? 'h-[550px] md:h-[700px]' :'h-[420px] md:h-[550px]' }`} />
          </div>
          <div className="flex flex-col items-center w-full md:w-6/12 p-2 pe-4">
            <img src={item.specsImg} alt={item.name} className={`object-cover rounded-lg ${(item.id === 'V04' || item.id === 'V05') ? ' md:h-[680px]' : ' md:h-[520px]' }`} />
            </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCategoryView;
