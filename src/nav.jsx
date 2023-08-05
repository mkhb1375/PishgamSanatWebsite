
import React, { useState, useEffect } from "react";
export default function Nav() {
    const [isLoading, setIsLoading] = useState(true);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const navElement = document.getElementById("nav");
        const navTop = navElement.offsetTop;

        const handleScroll = () => {
            if (window.scrollY > navTop) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === 'complete') {
            setIsLoading(false);
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);
    return (
        <div
            id="nav"
            className={`${isFixed ? "fixed top-0" : ""
                } right-0 left-0 z-[4] border-b-[5px] block lg:border-b-[2px] bg-[white]  pt-3 border-b border-borderColor`}
        >
            {isLoading ? (
                <div className="relative text-center p-4">
                    <div className="absolute top-[-15px] lg:top-[-10px] right-0 left-0 animate-spin text-4xl">
                        <i className="fas fa-spinner fa-spin" style={{ display: 'block', margin: '0 auto' }}></i>
                    </div>
                </div>
            ) : (

                <div className='mt-[-10px] p-1 z-[2] lg:w-[50vw] mx-auto bg-[white] text-center text-[1rem] justify-between items-baseline flex header-farsi lg:text-[1rem]'>
                    <a
                        className="hover:text-borderColor inline-block mx-2 lg:mx-4"
                        href="#main"
                        id="nav"

                    >
                        صفحه‌اصلی
                    </a>
                    <a
                        className="hover:text-borderColor inline-block mx-2 lg:mx-4"
                        href="#services"
                        id="nav"

                    >
                        خدمات
                    </a>

                    <a
                        className="hover:text-borderColor inline-block mx-2 lg:mx-4"
                        href="#customers"
                        id="nav"

                    >
                        مشتریان
                    </a>
                    <a
                        className="hover:text-borderColor inline-block mx-2 lg:mx-4"
                        href="#photos"
                        id="nav"

                    >
                        گالری‌ تصاویر
                    </a>
                    <a
                        className="hover:text-borderColor inline-block mx-2 lg:mx-4"
                        href="#contacts"
                        id="nav"

                    >
                        تماس با ما
                    </a>
                </div>

            )}
        </div>
    );
} 