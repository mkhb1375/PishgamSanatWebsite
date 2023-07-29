

import React from "react";

export default function Header() {
    

    return (
        <>
            <header className=" border-b-[10px] lg:border-b-[5px] border-b border-borderColor border-solid  mb-[30px] lg:mb-[10px] ">
                <div className=" relative block w-full  
            
               before:content-[''] 
            before:absolute z before:opacity-30  
            before:bg-[url(https://studio9.co/wp-content/uploads/Twill-05.png)]
             before:bg-repeat before:left-0 before:top-0 before:bottom-0 before:right-0">
                <div className=" lg:flex lg:w-[90%] 2xl:w-[80%] 3xl:w-[80%] justify-center  mx-auto my-0">
                    
                  
                    <div className="hidden xl:block">
                        <h1 className="header lg:text-[2.5rem]  m-0.5 p-0.5"> Pishgam Sanat Toos </h1>
                        <h3 className="header m-0.5 p-0.5 lg:text-[1.1rem]">
                            {" "}
                            Design, Manufacturing, 3D Scanning, Modeling
                        </h3>
                    </div >
                    <img className="w-[300px] lg:w-[150px] 2xl:w-[225px] 3xl:w-[250px]  mx-auto h-auto" src="./src/assets/Logo.png" alt="Pishgam Sanat logo" />
                    <div className="lg:mr-0 mr-4"  >
                        <h1 lang="fa" className=" header-farsi mx-auto lg:text-right text-center text-[2.5rem] p-0.5"> پیشگام&nbsp;صنعت&nbsp;توس </h1>
                        <h3 lang="fa" className=" header-farsi mx-auto lg:text-right text-center lg:text-[1.1rem]  text-[1rem]  p-0.5">
                            طراحی،ساخت,مدلسازی,اسکن&nbsp;سه&nbsp;بعدی،مهندسی&nbsp;معکوس
                        </h3>
                        
                    </div>
                    
                </div>
                </div>
               
                
                
            </header>
        </>
    )
}








