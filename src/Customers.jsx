import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Customer({ customers }) {
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
        },
    };

    return (
        <div id="customers" className="mx-auto  text-[1.5rem] text-center lg:w-[70vw] bg-white">
            <h1  className="header-farsi my-10">برخی از مشتریان</h1>
           
            <Slider {...settings} className="customer-slider">
                {customers.map((customer, index) => (
                    <div  key={index} className="customer-slide flex items-baseline ">
                        <img
                            className="block text-center mx-auto"
                            src={customer.logoUrl}
                            alt={customer.companyName}
                            style={{ width:"auto" , height: "90px" , maxWidth:"225px" }}
                        />
                        <p className="block text-center mx-auto ">{customer.companyName}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
