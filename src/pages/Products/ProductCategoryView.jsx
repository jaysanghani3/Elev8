// import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../../Data';
import { ProductCarousel } from '../../components';

const ProductCategoryView = () => {
  const { categoryId } = useParams();
  const categoryData = categoryId === 'vtl' ? productsData.vtl : productsData.scl;

  return (
    <div className="p-4 mx-auto md:w-10/12">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quod facere dignissimos distinctio accusantium minus, eligendi sapiente eius expedita illo perferendis at suscipit, tempora itaque necessitatibus! Modi, fugiat porro! Quidem.</p>
      {categoryData.map((item) => (
        <div key={item.id} className="flex flex-wrap border-b-2 p-4 py-10 justify-between items-center">
          <ProductCarousel images={item.image} />
          <div className={`flex flex-col p-2 md:w-6/12`}>
            <h1 className="font-bold text-[#01204E] text-2xl">{item.name}</h1>
            {item.specifications.map((dataItem, index) => (
              <div
                key={dataItem.title}
                className={`flex border-b-2 py-1 ${index % 2 !== 0 && 'bg-slate-100'}`}
              >
                <div className="text-sm w-7/12 md:w-6/12 font-semibold flex p-2">{dataItem.title}</div>
                <div className="text-sm w-5/12 md:w-6/12 p-2">
                  {dataItem.metricValue}  | {dataItem.imperialValue}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCategoryView;
