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
        <div key={item.id} className="flex flex-wrap border-b-2 p-2 mt-5 justify-center items-center">
          <div className='flex flex-col p-2 w-full md:w-4/12'>
            <h1 className="font-bold text-[#01204E] text-3xl md:text-4xl ps-3 tracking-wider mb-7 underline decoration-yellow-400 underline-offset-8 decoration-4 ">{item.name}</h1>
            <Carousel slides={item.image} height={"h-[400px] md:h-[500px]"} />
          </div>
          <div className="flex flex-col items-center w-full md:w-3/12 p-2 pe-4">
            {
              item.specsImg.map((img, index) => (
                <img key={index} src={img} alt={item.name} className="object-cover rounded-lg w-64" />
              ))
            }
          </div>
          <div className="flex flex-col w-full md:w-5/12 border-2 text-center">
            <div className="flex text-white justify-between items-center p-2 bg-gray-800">
              <span className="font-bold w-6/12">Specifications</span>
              <span className="font-bold w-3/12">Metric</span>
              <span className="font-bold w-3/12">Imperial</span>
            </div>
            {item.specs.map((spec, index) => (
              <div
                key={index}
                className={`flex justify-between items-center border-b-2 p-2 ${index % 2 ? "bg-slate-100" : ""}`}
              >
                <span className="text-[#01204E] w-6/12 ps-2 text-sm ">{spec.name}</span>
                <span className="w-3/12 text-sm ">{spec.metric}</span>
                <span className="w-3/12 text-sm ">{spec.imperial}</span>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
};
export default ProductCategoryView;
