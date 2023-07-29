import React from "react";

export default function Customer({ customers }) {
    return (
        <div id="customers" className="mx-[auto] text-center text-[1.5rem] mt-[10vh] mb-[5vh]  block border-[8px] lg:border-[2px] border border-borderColor border-solid p-3 rounded lg:w-[70vw] ">
            <h1 className="header-farsi">برخی از مشتریان</h1>
            <div className="flex text-center justify-center items-baseline flex-wrap">
                {customers.map((customer, index) => (
                    <div key={index} className="m-4 p-2">
                        <img
                            src={customer.logoUrl} 
                            alt={customer.companyName} 
                            style={{ width: "300px", height: "auto" }}
                        />
                        <p>{customer.companyName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
