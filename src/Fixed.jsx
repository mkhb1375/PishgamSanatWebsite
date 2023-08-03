import React from "react";

export default function Fixed(){


    return(
        <div>
        <div className='fixed z-[4] lg:flex gap-2.5 lg:left-2 lg:bottom-[1px] left-2 bottom-5 '>
        <a className='lg:inline-block block lg:w-[30px] lg:h-[30px] w-[60px] h-[60px] my-3  lg:my-1 lg:hover:scale-[1.2]' href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/whatsapp.svg" alt="whatsapp icon" />
        </a>
        <a className='lg:inline-block block lg:w-[30px] lg:h-[30px] w-[60px] h-[60px] my-3  lg:my-1 lg:hover:scale-[1.2]' href="https://t.me/mostafa_khatibi" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/telegram.svg" alt="telegram icon" />
        </a>
        <a className='lg:inline-block block lg:w-[30px] lg:h-[30px] w-[60px] h-[60px] my-3  lg:my-1 lg:hover:scale-[1.2]' href="https://www.instagram.com/your-instagram-id" target="_blank" rel="noopener noreferrer">
          <img src="src/assets/whatsapp.png" alt="whatsapp icon" />
        </a>
      </div>
      <a className=' fixed header-farsi flex gap-2.5 right-2 bottom-[1px] items-center lg:hover:scale-[1.1]' href="tel:09157877836" target="_blank" rel="noopener noreferrer">
        <h2 className='tel'>09157877836</h2>
        <img className='  inline-block lg:w-[30px] lg:h-[30px] w-[60px] h-[60px] my-1  ' src="src/assets/telephone.png" alt="telephone icon" />
      </a>
        </div>
    )
}