import React, { useState, useEffect } from "react";

export default function SlideTexts(props) {
    const [isVisible, setIsVisible] = useState(false);
    const image = <img src={props.image} alt="image" />;
    const imageContainer = (
        <div
            className="w-[100vw]   lg:w-[40vw]  hover:cursor-pointer rounded hover:border-borderColor transition-transform duration-300 transform-gpu hover:scale-105"
        >
            {image}
        </div>
    );
    const direction = parseInt(props.id) % 2 === 0 ? "right" : "left";

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById(props.id);
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [props.id]);

    return (
        <div
            className={`${isVisible
                    ? `slide-${direction}-show`
                    : `slide-${direction}-hide`
                } relative  lg:mb-[7vh]  border-t-[5px] lg:border-t-[2px] border-t border-borderColor border-solid   before:content-[''] 
            before:absolute z before:opacity-25  
            before:bg-[url(https://studio9.co/wp-content/uploads/Twill-05.png)]
             before:bg-repeat before:left-0 before:top-0 before:bottom-0 before:right-0  py-2 my-2 block 
             bg-white mx-auto`}
        >
            <div
                id={props.id}
                className={`block w-full lg:w-[80vw] mx-auto flex flex-wrap ${direction === "right"
                        ? "justify-end flex-row-reverse"
                        : "justify-start"
                    } lg:mt-auto`}
            >
                <div className=" lg:w-[30vw] mx-[2vw]">
                    <h2
                        style={{ fontWeight: "bold" }}
                        className="header-farsi text-[1.5rem] p-1 m-2 text-center titles"
                    >
                        {props.title}
                    </h2>

                    <p className="paragraph text-[1.1rem]  text-justify">
                        {props.text}
                    </p>
                </div>
                {imageContainer}
            </div>
        </div>
    );
}
