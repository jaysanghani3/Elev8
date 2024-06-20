/* eslint-disable react/prop-types */
import { memo, useState, useEffect } from 'react';

const CarouselComponent = ({ slides, styles }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        const loadImage = (src) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
            });
        };

        const preloadImages = async () => {
            await Promise.all(slides.map(slide => loadImage(slide)));
            setLoaded(true);
        };

        preloadImages();
    }, [slides]);

    return (
        <div className='flex flex-col items-center justify-center gap-0'>
            {loaded ? (
                <img src={slides[currentIndex]} alt='carousel' className={styles} loading='lazy' />
            ) : (
                <div className={`animate-pulse ${styles} bg-gray-300 rounded-lg flex items-center justify-center`}>
                    <div className="w-10/12 h-10/12 bg-gray-400 rounded"></div>
                </div>
            )}
            <div className='flex justify-center text-2xl mt-2'>
                {slides.map((_, slideIndex) => (
                    <svg
                        className="cursor-pointer"
                        onClick={() => setCurrentIndex(slideIndex)}
                        key={slideIndex}
                        width="50px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 12L20 12"
                            stroke={slideIndex === currentIndex ? '#01204E' : 'gray'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ))}
            </div>
        </div>
    );
};

const Carousel = memo(CarouselComponent);
Carousel.displayName = 'Carousel';

export default Carousel;
