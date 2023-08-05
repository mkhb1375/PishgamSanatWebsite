import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Customer({ customers, direction }) {
    const settings = {
        dots: true,
        arrows: false, 
        infinite: true, // Set this to true for continuous movement
        speed: 5000, // Adjust the speed (lower value for lower speed)
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Set this to 0 to enable continuous movement
        cssEase: "linear",
        rtl: direction === "rtl", // Set rtl to true if the direction prop is "rtl"
        beforeChange: (current, next) => {
            // Do something before the slide changes (optional)
        },
        afterChange: (current) => {
            // Do something after the slide changes (optional)
        },
    };

    return (
        <div className="mx-auto my-[10vh] text-[1rem] text-center lg:w-[70vw] bg-white">
            

            <Slider {...settings} className="customer-slider">
                {customers.map((customer, index) => (
                    <div key={index} className="customer-slide flex items-baseline">
                        <img
                            className="block text-center mx-auto"
                            src={customer.logoUrl}
                            alt={customer.companyName}
                            style={{ width: "auto", height: "80px", maxWidth: "200px" }}
                        />
                        <p className="block text-center mx-auto">{customer.companyName}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
