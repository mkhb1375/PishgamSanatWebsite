import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
    const customers = [
        {
            logoUrl: "src/assets/gl2.jpg",
            companyName: ""
        },
        {
            logoUrl: "src/assets/gl3.jpg",
            companyName: "پیشگام‌صنعت‌توس"
        },
        {
            logoUrl: "src/assets/gl4.jpg",
            companyName: ""
        },
        {
            logoUrl: "src/assets/gl5.jpg",
            companyName: ""
        }
    ];
   
    // Function to show the next slide
    const nextSlide = () => {
        sliderRef.current.slickNext();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => {
            // Do something before the slide changes (optional)
        },
        afterChange: (current) => {
            // Do something after the slide changes (optional)
        }
    };

    // State to manage the visibility of the full-screen image
    const [showFullScreenImage, setShowFullScreenImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(customers[0].logoUrl);

    // useEffect to show the first image in the full-screen container on component mount
    useEffect(() => {
        setShowFullScreenImage(true);
    }, []);

    // Function to handle when an image is clicked
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowFullScreenImage(true);
    };

    // Function to close the full-screen image
    const closeFullScreenImage = () => {
        setShowFullScreenImage(false);
    };

    return (
        <div id="customers" className="my-10 mx-auto text-white lg:text-[1.3rem] text-[0.9rem] text-center lg:w-[90vw] bg-white">
            <h1 className="header-farsi m-4 p-2 text-[1.6rem] text-black">گالری تصاویر</h1>
            <h1 className="header-farsi m-4 p-2 text-[0.8rem] text-black">برای بزرگنمایی روی تصویر کلیک کنید</h1>
            {/* Previous and Next buttons */}
            
            <button  className="absolute -translate-y-2/4 bg-[rgba(0,0,0,0.5)] text-[white] cursor-pointer text-lg px-4 py-2 border-[none] top-2/4 " onClick={nextSlide}>
                
            </button>
            
            <Slider {...settings} className="customer-slider border-4 border-borderColor bg-black rounded">
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className="customer-slide flex items-baseline"
                        onClick={() => handleImageClick(customer.logoUrl)}
                    >
                        <img
                            className="block text-center py-[4vh] w-auto   lg:py-0 mx-auto cursor-pointer lg:border-[black] lg:border-4 lg:hover:border-borderColor rounded mt-5 border-borderColor"
                            src={customer.logoUrl}
                            alt={customer.companyName}
                            
                        />
                        <p className="block text-center my-1 mx-auto">{customer.companyName}</p>
                    </div>
                ))}
            </Slider>

            {/* Full-screen image overlay */}
            <div
                className="full-screen-image-overlay"
                onClick={closeFullScreenImage}
                style={{ display: showFullScreenImage ? "block" : "none" }}
            >
                <img
                    className="full-screen-image mx-auto my-10  rounded border-4 border-borderColor"
                    src={selectedImage}
                    alt="Enlarged View"
                />
            </div>
        </div>
    );
}