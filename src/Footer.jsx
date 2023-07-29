import React from "react";

export default function Footer(){
    return(
        <div className="w-full bg-myGray  border-t-[10px] lg:border-t-[5px] border-t border-borderColor 
        border-solid  mt-[60px] lg:mt-[30px] flex felex-wrap justify-around text-[1.3rem]">
            
            <div className=" m-2 p-1">
                <p className="text-center alight-right  m-1 ">کلیه حقوق برای شرکت پیشگام صنعت توس محفوظ است </p>
                <p className="text-center alight-right  m-1 "> آدرس: خراسان رضوی،مشهد،شهرک صنعتی توس، فلزتراشان ۳، پلاک ۴۵ </p>
                <p className="text-center alight-right  m-1 "> تلفن:09158579112 </p>
                
            </div>
           
            <div className=" m-2 p-1">
           
                <p className="text-center alight-right  m-1  " > طراحی و اجرا :محمدرضا خطیبی </p>
                    
                <a href="email:m_khb75@yahoo.com" className="ttext-center eng2 block m-1 " > m_khb75@yahoo.com </a>
                <a href="https://t.me/mkhb1375" className="text-center eng2 block m-1 " > t.me/mkhb1375 </a>
                
            </div>
            
            
            
        </div>
    )
}