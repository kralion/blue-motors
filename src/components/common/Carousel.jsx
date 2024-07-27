import { useState } from 'react';

export default function Carousel({ images }) {
    const [currentImage, setCurrentImage] = useState(0);


    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg" style={{minHeight: '300px'}}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                            index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                        />

                    </div>
                ))}
            </div>
            <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
                Prev
            </button>
            <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
                Next
            </button>
        </div>
    );
}