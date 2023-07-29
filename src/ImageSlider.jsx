import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
    const images = [
        "src/assets/1.jpg",
        "src/assets/2.jpg",
        "src/assets/3.jpg",
        "src/assets/4.jpg",
        "src/assets/5.jpg",
    ];

    const captions = [
        "اسکن۳‌بعدی با دقت بسیار بالا",
        " طراحی قطعات صنعتی",
        "ابعاد‌برداری ‌دقیق با استفاده از تجهیزات و نرم‌افزار پیشرفته",
        " مدل‌سازی رایانه‌ایی ",
        "ساخت قطعات با ماشین‌آلات دقیق",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [captionClass, setCaptionClass] = useState("caption-hide");
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        beforeChange: (current, next) => {
            setCurrentSlide(next);
            setCaptionClass("caption-hide"); 
        },
    };

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
        resetAutoChangeTimer();
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
        resetAutoChangeTimer();
    };

    const resetAutoChangeTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            handleNextClick();
        }, 6000);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            handleNextClick();
        }, 6000);

        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        const captionTimeout = setTimeout(() => {
            setCaptionClass("caption-show");
        }, 300);

        return () => clearTimeout(captionTimeout);
    }, [currentSlide]); 

    return (
        <div className="slider-container w-full  mx-auto overflow-hidden border-b border-borderColor border-solid  border-b-[10px] lg:border-b-[5px] bg-[black]  relative">
            <Slider {...settings} ref={sliderRef} className="slider-wrapper">
                {images.map((image, index) => (
                    <div key={index} className="slide relative">
                        <img
                            className="slider-image w-full lg:h-[80vh] h-[50vh] object-cover object-center"
                            src={image}
                            alt={`Image ${index + 1}`}
                        />
                    </div>
                ))}
            </Slider>
            <span className={`${captionClass} text-[1.5rem] w-[70vw] lg:w-max`}>
                {captions[currentSlide]}
            </span>
            <button className="prev-arrow" onClick={handlePrevClick}>
                &lArr;
            </button>
            <button className="next-arrow" onClick={handleNextClick}>
                &rArr;
            </button>
        </div>
    );
}
