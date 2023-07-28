import React, { useState, useEffect } from "react";

export default function SlideTexts(props) {
    const [isVisible, setIsVisible] = useState(false);
    const image = <img   src={props.image} alt="image" />;
    const imageContainer = <div className="  w-[100vw] lg:w-[40vw] w-auto hover:cursor-pointer transition-transform hover:scale-120 rounded hover:border-borderColor"> {image} </div>
    const direction = (parseInt(props.id) % 2) ===0 ? 'right' : 'left';
   
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
        <div className={`${isVisible ? `slide-${direction}-show` : `slide-${direction}-hide`
                    } relative lg:mx-4 lg:my-[15vh]  border-2 border-solid border-borderColor lg:p-2 py-2 my-2   block  before:content-[''] 
            before:absolute z before:opacity-20  
            before:bg-[url(https://studio9.co/wp-content/uploads/Twill-05.png)]
             before:bg-repeat before:left-0 before:top-0 before:bottom-0 before:right-0 before:z-[-1] rounded`}>
            
            <div
                id={props.id}
                className={`  block w-full flex flex-wrap ${direction === "right" ? "justify-end flex-row-reverse" : "justify-start"}  lg:px-[10vw] lg:mt-auto `}>
                
                
                <div className="w-[100vw] lg:w-[30vw] p-4 mx-[2vw]">
                    <h2 style={{fontWeight:"bold"}} className="header-farsi text-[1.5rem] p-1 m-2 text-center">{props.title}</h2>
                    
                    <p className="paragraph text-[1.15rem] lg:text-[1.3rem] ">
                        {props.text}
                    </p>
                </div>
                {imageContainer}
            </div>
        </div>

    );
}
