import React from 'react'
import Contact from './Contact';
import FooterLinks from './FooterLinks';

const Footer = () => {
    const titles = [
        { id: 1, name: "ABOUT" },
        { id: 2, name: "GROUP COMPANIES" },
        { id: 3, name: "HELP" },
        { id: 4, name: "CONSUMER POLICY" },
    ];

    const lists = [
        {
            id: 1, items: [
                { id: 1, name: "Contact Us" },
                { id: 2, name: "About Us" },
                { id: 3, name: "Careers" },
                { id: 4, name: "Flipkart Stories" },
                { id: 5, name: "Press" },
                { id: 6, name: "Corporate Information" },
            ]
        },
        {
            id: 2, items: [
                { id: 1, name: "Myntra" },
                { id: 2, name: "Flipkart Wholesale" },
                { id: 3, name: "Cleartrip" },
                { id: 4, name: "Shopsy" },
            ]
        },
        {
            id: 3, items: [
                { id: 1, name: "Payments" },
                { id: 2, name: "Shipping" },
                { id: 3, name: "Cancellation & Returns" },
                { id: 4, name: "FAQ" },
                { id: 5, name: "Report Infringement" },
            ]
        },
        {
            id: 4, items: [
                { id: 1, name: "Cancellation & Returns" },
                { id: 2, name: "Terms Of Use" },
                { id: 3, name: "Security" },
                { id: 4, name: "Privacy" },
                { id: 5, name: "Sitemap" },
                { id: 6, name: "Grievance Redressal" },
                { id: 7, name: "EPR Compliance" },
            ]
        }
    ];

    return (
        <>
            <footer className='bg-black bg-opacity-85 text-white text-[12px] flex py-10'>
                <div className='grid grid-cols-4 px-20 gap-x-20'>
                    {titles.map((title) => (
                        <div key={`Title ${title.id}`}>
                            <h1
                                className='text-gray-400 my-3'
                            >{title.name}</h1>
                            <div>
                                {lists.map((list) => list.id === title.id && (
                                    <ul key={list.id}>
                                        {list.items.map((item) => (
                                            <li key={item.id}
                                                className='font-semibold hover:cursor-pointer'
                                            >
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div>
                    <hr className='w-52 rotate-90 -ml-20 mt-[7rem] border-slate-600' />
                </div>

                <Contact />
            </footer>

            <FooterLinks />
        </>
    )
}

export default Footer