import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VTLCover, SCLCover } from '../../assets';

const ProductsCategories = () => {
    const categories = [
        { id: 'vtl', name: 'VTL SERIES', image: VTLCover },
        { id: 'scl', name: 'SCL SERIES', image: SCLCover },
    ];

    const [loadedImages, setLoadedImages] = useState({ vtl: false, scl: false });

    useEffect(() => {
        const loadImage = (id, src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => setLoadedImages(prev => ({ ...prev, [id]: true }));
        };
        categories.forEach(category => loadImage(category.id, category.image));
    }, [categories]);

    return (
        <div className="md:px-10 md:py-3 px-5">
            <h1 className='text-4xl font-bold text-[#01204E]'>Products</h1>
            <div className='flex flex-col md:flex-row justify-center mt-10'>
                {categories.map((category) => (
                    <Link
                        to={`/products/${category.id}`}
                        key={category.id}
                        className={`flex flex-col mb-10 items-center border shadow-md rounded-lg p-6 hover:bg-slate-100 justify-between ${category.id === 'vtl' ? 'md:me-10' : ''}`}
                    >
                        {!loadedImages[category.id] ? (
                            <div className="animate-pulse flex flex-col items-center border shadow-md rounded-lg p-6 w-80 h-[500px] bg-gray-300">
                                <div className="rounded-md bg-gray-400 w-full h-[450px]"></div>
                                <div className="rounded bg-gray-400 mt-4 w-3/4 h-8"></div>
                            </div>
                        ) : (
                            <img
                                src={category.image}
                                alt="products"
                                className='rounded-md object-cover w-80'
                                loading="lazy"
                            />
                        )}
                        <h1 className="text-center font-bold text-[#01204E] text-2xl pt-4">
                            {category.name}
                        </h1>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductsCategories;
