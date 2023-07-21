

import React from "react";

export default function Header() {


    return (
        <>
            <header className="header">
                <div className="header-main">
                    <div>
                        <h1 className="h1-header div-header"> Pishgam Sanat Toos </h1>
                        <h3 className="div-header">
                            {" "}
                            Design Manufacturing 3Dscanning Reverse-Engineering Modeling
                        </h3>
                    </div>
                    <img className="logo" src="./Logo.png" alt="Pishgam Sanat logo" />
                    <div>
                        <h1 className="farsi div-header"> پیشگام صنعت توس </h1>
                        <h3 className="farsi div-header">
                            طراحی،ساخت،ماشینکاری،اسکن&nbsp;سه&nbsp;بعدی،مهندسی&nbsp;معکوس،مدلسازی
                        </h3>
                    </div>
                </div>
                
            </header>
        </>
    )
}








