import React from "react";
import ImageSlider from "./ImageSlider";
import SlideFromRight from "./SlideTexts";
import Customer from "./Customers";
export default function Body(){
    const customersData = [
        {
            logoUrl: "src/assets/customer-1.png",
            companyName: "پرتو‌صنعت پاژ",
        },
        {
            logoUrl: "src/assets/customer-2.png",
            companyName: "طاها‌ قالب توس",
        },
        {
            logoUrl: "src/assets/customer-3.png",
            companyName: "پارت لاستیک",
        },
        {
            logoUrl: "src/assets/customer-4.png",
            companyName: "ایمن خودرو شرق",
        },
        {
            logoUrl: "src/assets/customer-5.png",
            companyName: "تولید قطعات خاور",
        },
        {
            logoUrl: "src/assets/customer-6.webp",
            companyName: "کالا کودک توس",
        },
        {
            logoUrl: "src/assets/customer-7.png",
            companyName: "پارسایاران خراسان",
        },
        {
            logoUrl: "src/assets/customer-8.png",
            companyName: " توس فیوز",
        },
        {
            logoUrl: "src/assets/customer-9.jpg",
            companyName: "کیهان صنعت قائم",
        },
        {
            logoUrl: "src/assets/customer-10.png",
            companyName: "آوند پلاستیک",
        },
        {
            logoUrl: "src/assets/customer-11.png",
            companyName: "لاستیک پولاد آروین",
        },
        
    ];
    const text1=`این مجموعه با در اختیار داشتن یکی از پیشرفته ترین دستگاههای اسکن سه بعدی جهت ابعاد برداری و طراحی مدلهای سه بعدی پیچیده به روش ابر نقاط بدون تماس با قطعه و با دقت ۱۰ میکرون قابلیت اسکن سه بعدی از قطعات را جهت انجام عملیات مهندسی معکوس ، بازرسی و کنترل دقت قطعات ساخته شده را دارا می باشد.`
  

    return(
        <div  >
            <ImageSlider  />
            <div  className="back-color my-[5vh] lg:my-[7vh]  ">
            <h1  id="services" className="text-center text-[2rem] m-3 p-2 header-farsi">خدمات پیشگام&nbsp;صنعت&nbsp;توس</h1>
            <SlideFromRight id="1" image="src/assets/pic-1.jpg" title="اسکن&nbsp;سه&nbsp;بعدی" text={text1} />
                <SlideFromRight id="2" image="src/assets/pic-2.jpg" title="طراحی‌ و مدلسازی "   text=" مدلسازی سه بعدی قطعات قبل از تولید آن به شما کمک می کند تا تصویر سه بعدی از محصول نهایی داشته باشید تا بتوانید مشکلات و عیوب آن را بر اساس نیاز خود بر طرف کنید، از فایل های خروجی نرم افزارهای طراحی میتوان جهت استفاده در تحلیل یا ساخت  استفاده کرد. خدمات این بخش شامل مهندسی معکوس کلیه قطعات،     طراحی کلیه قالبهای صنعتی،      طراحی فیکسچرهای کنترلی-تولیدی،     طراحی ماشین آلات خطوط تولید میباشد." />
                <SlideFromRight id="3" image="src/assets/pic-3.jpg" title="فتوگرامتری" text="در مواردی که ابعاد قطعه خیلی بزرگ  یا قطعه در جایی قرار داشته باشد که امکان استفاده از دستگاه اسکنر وجود نداشته باشد،  از روش فتوگرامتری استفاده میکنیم. فتوگرامتری علم اندازه گیری و تفسیر از روی تصاویری است که از یک جسم یا منطقه اخذ شده است. به عبارتی دیگر می توان بیان کرد که فتوگرامتری راهی است برای تهیه نقشه و یا مدل سه بعدی با استفاده از تصاویر دیجیتال یا آنالوگ بنا به فاصله دوربین تصویربرداری تا جسم.
" />        <span id="photos" ></span>
                <SlideFromRight id="4" image="src/assets/pic-4.jpg" title="ساخت" text="در پیشگام‌صنعت‌توس فعالیت در زمینه‌های مختلف ساخت را با کیفیت بالا و تخصصی ارائه می‌دهیم. از جمله فعالیت‌های ما می‌توان به ساخت کلیه قالب‌های صنعتی از جمله تزریق پلاستیک (Injection Molding)، قالب بادی (Blow Molding)، قالب دایکست (Die-casting) و بومی‌سازی قطعات صنعتی اشاره کرد. هدف ما ارائه راهکارهای بهینه و دقیق برای نیازهای صنعتی شماست." />
                <SlideFromRight id="5" image="src/assets/pic-5.jpg" title="کارشناسی&nbsp;عیوب" text="بطور کلی عیوب هندسی عبارتست از کلیه انحرافات هندسی و عددی موجود در وجوه و سطوح قطعات که باعث عدم کارکرد صحیح یا ضایع شدن محصول نهایی گردد. در بعضی مواقع قطعات، قالبها، گیج ها، فیکسچرها و ماشین آلات دقیق وجود دارند که دارای عیوب هندسی بوده و باعث شده اند محصول تولیدی مغایر با محصول مورد تائید شود. بعضا این مسئله منجر به اختلافات میان صنعتگران و صاحبان سرمایه شده است. این مجموعه قادر است تا با استفاده از اسکن سه بعدی و تکنولوژی ابرنقاط، عیوب موجود در قطعات و قالبها را شناسایی و ضمن اعلام علل وجود آن، نسبت به رفع عیوب احتمالی راهکارهایی را ارائه دهد." />
            </div>
            <h1 className="header-farsi mb-[3vh] mx-auto  text-[1.5rem] text-center">برخی از مشتریان</h1>
            <Customer customers={customersData} />
        </div>
    )
}