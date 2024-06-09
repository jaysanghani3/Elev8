/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

const ProductCarousel = (props) => {
    const { images } = props;
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3500);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="md:flex">
            <div className='flex md:flex-col justify-around mr-4 mb-4 md:mb-0'>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="carousel"
                        className='md:w-16 w-14 md:h-16 h-14 object-cover rounded-md cursor-pointer shadow-md hover:scale-125 transform transition-transform duration-500 ease-in-out'
                        onClick={() => setCurrentIndex(index)}
                    />
                ))
                }
            </div>
            <img src={images[currentIndex]} alt='carousel' className='rounded-lg object-contain md:w-[30rem] md:h-96' />
        </div>
    )
}

export default ProductCarousel
