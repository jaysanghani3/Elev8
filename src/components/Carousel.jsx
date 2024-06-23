/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

const Carousel = ({ slides, styles }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className='flex flex-col items-center justify-center gap-0'>
            <img src={slides[currentIndex]} alt='carousel' className={styles} />
            <div className='flex justify-center text-2xl mt-2'>
                {slides.map((_, slideIndex) => (
                    <svg className="cursor-pointer" onClick={() => setCurrentIndex(slideIndex)} key={slideIndex} width="50px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L20 12" stroke={slideIndex === currentIndex ? '#01204E' : 'gray'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ))}
            </div>
        </div>
    )
}

export default Carousel