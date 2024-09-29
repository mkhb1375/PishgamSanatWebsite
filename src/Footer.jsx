import React from "react";
import Mymap from "./Mymap";
export default function Footer(){
    return(
        <div id="contacts" >
            <div className="w-full flex-wrap  border-t-[10px] lg:border-t-[5px] border-t border-borderColor 
        border-solid  mt-[60px] lg:mt-[30px] items-center flex felex-wrap justify-around text-[1.1rem] footer-main"> 
        
            <div className=" m-2 p-1">
                <p className="text-right alight-right  border-b-[1px] border-b-[gray] m-3 p-2 ">اطلاعات تماس</p>
                
                    <p className="text-right alight-right  border-b-[1px] border-b-[gray] text-[0.8rem] lg:text-[1rem] m-3 p-2 ">
                        <img className="lg:w-[30px] w-[60px] inline-block  mx-1" src="src/assets/location.png" alt="location" /> <a className="hover:font-bold" target="_blank" href="https://nshn.ir/bb_b1qEOVJAgVY">شهرک صنعتی توس ، فاز یک ، بلوار تعاون جنوبی ، نبش تعاون جنوبی ۳ ، قطعه ۳۰۳ </a> 
                      
                       </p>
                <p className="text-right alight-right   m-3 p-2 ">
                        <img className="lg:w-[30px] w-[60px] inline-block  mx-1" src="src/assets/phone.png" alt="phone" />
                     09157877836 - 09158579112 </p>
                
            </div>
                <div className="lg:w-[35vw] w-full block p-3 m-3">

            <h1 className="text-center  ">موقعیت روی نقشه:</h1>
                    <a target="_blank" href="https://nshn.ir/bb_b1qEOVJAgVY" className="block border-4 rounded border-[white] cursor-pointer hover:border-borderColor "><img src="src/assets/map.jpg" alt="map"></img></a> 
                    </div>

            </div>
            
            <div className="  lg:py-2 text-center bg-[black] text-[white] text-[0.85rem] border-t-[5px] lg:border-t-[2px] border-t border-borderColor 
        border-solid">
                <h1 className="lg:px-4 p-2"> Copyright© Pishgam Sanat Toos</h1>
                <div className="flex lg:ml-[12vw] 2xl:ml-[9vw] 3xl:ml-[7vw] ml-2 justify-end"> <h1 className="mx-2" >  طراحی و اجرا :محمدرضا خطیبی </h1> <a className="eng2 hover:font-bold" href="https://t.me/mkhb1375"> t.me/mkhb1375</a></div>
            
            </div>
        </div>
    )
}
