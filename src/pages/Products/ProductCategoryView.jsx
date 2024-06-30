import { useParams } from "react-router-dom";
import { productsData } from "../../Data";
import { Carousel } from "../../components";

const ProductCategoryView = () => {
  const { categoryId } = useParams();
  const categoryData = categoryId === "vtl" ? productsData.vtl : productsData.scl;

  return (
    <div className="p-4 mx-auto sm:w-11/12">
      {categoryId === "vtl" &&
        <>
          <div className="sm:w-11/12 xl:w-9/12  mx-auto my-11 p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
            <h1 className="text-[#01204E] col-span-full text-2xl font-bold underline decoration-yellow-400 underline-offset-8 decoration-4 mt-3 mb-6 text-center">Introducing VTL Series</h1>
            <p className="text-justify lg:text-lg">
              The VTL series, short for VERTICAL LIFT SERIES, is a push around machine that works on single mast technology. It runs a 12 V DC battery which makes it a very versatile machine. Some of the USPs of these types of machines include light weight for easy maneuverability, compact size for movement around tight spaces, one man operation, robust construction etc. There are five variants available in this series
            </p>
          </div>
          <div className="flex flex-col border-b-2 pb-8 sm:w-11/12 xl:w-9/12  mx-auto my-11 p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
            <h1 className="text-[#01204E] col-span-full text-2xl font-bold underline decoration-yellow-400 underline-offset-8 decoration-4 mt-2 text-center">Models</h1>
            <div className="flex flex-wrap mt-6 justify-between">
              {categoryData.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-200 px-4 lg:px-6 xl:px-12 py-2 my-2 rounded-lg text-center cursor-pointer"
                  onClick={() => document.getElementById(`product-${item.id}`).scrollIntoView({ behavior: 'smooth' })}
                >
                  <h2 className="text-sm font-semibold">{item.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </>
      }
      {categoryData.map((item) => (
        <div
          key={item.id}
          id={`product-${item.id}`}
          className="flex flex-wrap border-b-2 p-2 mt-5 justify-between sm:w-11/12 xl:w-9/12 mx-auto items-center"
        >
          <div className={`flex flex-col p-2 w-full ${categoryId === "vtl" ? 'lg:w-5/12' : 'lg:w-6/12'}`}>
            <h1 className="font-bold text-[#01204E] text-center lg:text-left text-2xl lg:text-3xl ps-3 tracking-wider underline decoration-yellow-400 underline-offset-8 decoration-4 pb-8">{item.name}</h1>
            <Carousel
              slides={item.image}
              styles={`w-full object-scale-down ${categoryId === "scl" ? 'h-[220px] sm:h-[330px] lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[450px]' : (item.id === 'V04' || item.id === 'V05') ? 'h-[550px] lg:w-[400px] lg:h-[500px] xl:h-[600px]' : ' h-[420px] lg:h-[420px] xl:h-[550px]'}`}
            />
          </div>
          <div className={`flex flex-col items-end w-full ${categoryId === "vtl" ? 'lg:w-7/12' : 'lg:w-6/12'}`}>
            <img
              src={item.specsImg}
              alt={item.name}
              className={`object-cover rounded-lg lg:mt-5 ${categoryId === "scl" ? 'lg:h-[400px] xl:h-[450px]' : (item.id === 'V04' || item.id === 'V05') ? 'lg:h-[500px] xl:h-[600px]' : 'lg:h-[400px] xl:h-[550px]'}`}
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCategoryView;
