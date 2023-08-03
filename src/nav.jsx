import React from "react";


export default function Nav(){

  


   


    return(
        <div

            className="fixed top-0 right-0 left-0 z-[4] border-b-[5px] lg:border-b-[2px] bg-[white] pt-2 border-b border-borderColor
         "
        >
            <div className='mt-[-10px] p-1 z-[2] lg:w-[50vw] mx-auto bg-[white] text-center text-[0.8rem] justify-between items-baseline flex header-farsi lg:text-[1rem]'>
                <a
                    className="hover:text-borderColor inline-block mx-4"
                    href="#main"
                    id="nav"
                  
                >
                    صفحه‌اصلی
                </a>
                <a
                    className="hover:text-borderColor inline-block mx-4"
                    href="#services"
                    id="nav"
                    
                >
                    خدمات
                </a>

                <a
                    className="hover:text-borderColor inline-block mx-4"
                    href="#customers"
                    id="nav"
                   
                >
                    مشتریان
                </a>
                <a
                    className="hover:text-borderColor inline-block mx-4"
                    href="#photos"
                    id="nav"
                 
                >
                    گالری‌ تصاویر
                </a>
                <a
                    className="hover:text-borderColor inline-block mx-4"
                    href="#contacts"
                    id="nav"
                    
                >
                    تماس با ما
                </a>
            </div>

        </div>
    )
}