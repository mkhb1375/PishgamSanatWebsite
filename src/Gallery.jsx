import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
    const customers = [
        {
            logoUrl: "src/assets/gl1.jpg",
            companyName: ""
        },
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
    const [selectedImage, setSelectedImage] = useState("");

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
        <div id="customers" className="my-10 mx-auto text-white  lg:text-[1.3rem]  text-[0.9rem] text-center lg:w-[90vw] bg-white   ">
            <h1 className="header-farsi m-4 p-2">گالری تصاویر</h1>
            <Slider {...settings} className="customer-slider border-4 border-borderColor bg-black rounded">
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className="customer-slide flex items-baseline"
                        onClick={() => handleImageClick(customer.logoUrl)}
                    >
                        <img
                            className="block text-center mx-auto"
                            src={customer.logoUrl}
                            alt={customer.companyName}
                            style={{ width: "auto", height: "400px" }}
                        />
                        <p className="block text-center mx-auto">{customer.companyName}</p>
                    </div>
                ))}
            </Slider>

            {/* Full-screen image overlay */}
            {showFullScreenImage && (
                <div className="full-screen-image-overlay " onClick={closeFullScreenImage}>
                    <img
                        className="full-screen-image mx-auto  my-10 rounded border-4 border-borderColor "
                        src={selectedImage}
                        alt="Enlarged View"
                    />
                </div>
            )}
        </div>
    );
}
