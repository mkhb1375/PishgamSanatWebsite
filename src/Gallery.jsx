import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-modal";

export default function Gallery() {
    // Function to show the next slide
    const sliderRef = React.createRef();
    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const [slidesToShow, setSlidesToShow] = useState(3);

    const updateSlidesToShow = () => {
        if (window.innerWidth < 1000) {
            setSlidesToShow(2);
        } else {
            setSlidesToShow(3);
        }
    };

    useEffect(() => {
        // Initial check
        updateSlidesToShow();

        // Add event listener to detect window resize
        window.addEventListener("resize", updateSlidesToShow);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", updateSlidesToShow);
        };
    }, []);

    const customers = [
        {
            logoUrl: "src/assets/gl1.jpg",
            companyName: "طراحی و ساخت دستگاه هات‌پلیت (جوش پلاستیک)",
        },
        {
            logoUrl: "src/assets/gl2.jpg",
            companyName: "طراحی و ساخت ست مجموعه قالب",
        },
        {
            logoUrl: "src/assets/gl3.jpg",
            companyName: "طراحی و ساخت قالب تزریق پلاستیک قطعات خودرو۲",
        },
        {
            logoUrl: "src/assets/gl4.jpg",
            companyName: "طراحی و ساخت قالب تزریق پلاستیک قطعات خودرو۳",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
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

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // Initialize with null


    // useEffect to show the first image in the modal on component mount
    useEffect(() => {
        // Do not show the modal on mount
    }, []);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowModal(true);
        sliderRef.current.slickPause(); // Pause the slider when the modal is open
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
        sliderRef.current.slickPlay(); // Resume the slider when the modal is closed
    };

    


    return (
        <div className={` 
          text-black my-[10vh] py-[25vh] glbg text-[0.9rem] text-center relative ${showModal && selectedImage ? 'blurred-background' : ''}`}>
            <h1 id="photos" className="header-farsi  p-2 text-[2rem] text-black">گالری تصاویر</h1>
            <h1 className="header-farsi m-1 p-2 text-[0.8rem] text-black">برای بزرگنمایی روی تصاویر کلیک کنید</h1>

          

            <div className=" lg:w-[90vw] 2xl:w-[80vw] 3xl:w-[70vw]  mx-auto relative   ">
                <Slider {...settings} className="customer-slider  " ref={sliderRef}>
                    {customers.map((customer, index) => (
                        <div
                            key={index}
                            className="customer-slide flex flex-wrap items-baseline "
                            onClick={() => handleImageClick(customer.logoUrl)}
                           
                        >
                            <img
                                className="block text-center h-[300px] lg:py-0 mx-auto cursor-pointer 
                                lg:border-[transparent] lg:border-4 lg:hover:border-borderColor rounded mt-5 border-borderColor"
                                src={customer.logoUrl}
                                alt={customer.companyName}
                                style={{ width: "auto",  objectFit: "contain" }}
                            />
                            <p className="block text-center my-1 mx-auto">{customer.companyName}</p>
                        </div>
                    ))}
                </Slider>

                {/* React Modal */}
                {selectedImage && (
                    <Modal
                        isOpen={showModal}
                        onRequestClose={closeModal}
                        contentLabel="Enlarged View"
                        ariaHideApp={false}
                        className="modal-content absolute top-0 left-0  z-[2] "
                        overlayClassName="modal-overlay"
                    >
                        {/* Overlay to capture clicks and close modal */}
                        <div
                            className="overlay-clickable"
                            onClick={closeModal}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                zIndex: 5, // Make sure it's below the modal but above the content
                                pointerEvents: "auto", // Enable click events on the overlay
                                backgroundColor: "transparent", // Set the overlay background to transparent
                            }}
                        >
                            </div>
                        <div className="fixed top-[45vh] -translate-y-2/4 left-0
                         lg:top-[33vh] lg:left-[33vw] lg:-translate-y-1/4 lg:-translate-x-1/4 ">
                           
                            <img
                                className="full-screen-image mx-auto rounded border-4 lg:border-2  border-borderColor"
                                src={selectedImage}
                                alt="Enlarged View"
                            />
                            <p className="block block w-fit p-1 bg-white rounded text-center my-1 mx-auto absolute bottom-0 left-0 right-0">{customers.filter((customer) => customer.logoUrl === selectedImage)[0].companyName}</p>

                            </div>
                            
                        
                    </Modal>
                )}

                {/* Overlay for blurred background */}
                {showModal && <div className="overlay-blur"></div>}
            </div>
        </div>
  
);
}