import React, { useState } from 'react'

const Beauty_ToysContainers = ({ lihover, beauty_toyslist }) => {
    const [lihovered, setLihovered] = useState(0);

    const containers = [
        {
            id: 1, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Bath & Oral Care" },
                { id: 3, name: "Personal Hygiene" },
                { id: 4, name: "Eye Makeup" },
                { id: 5, name: "Face Makeup" },
                { id: 6, name: "Lip Makeup" },
                { id: 7, name: "Hair Care" },
                { id: 8, name: "Bath Essentials" },
                { id: 9, name: "Women's Personal Hygiene" },
                { id: 10, name: "Body & Skin Care" },
                { id: 11, name: "Top Brand Deals" },
            ]
        },
        {
            id: 2, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Face Washes" },
                { id: 3, name: "Beard Oils" },
                { id: 4, name: "Hair Styling" },
                { id: 5, name: "Shaving Essentials" },
                { id: 6, name: "Aftershave" },
                { id: 7, name: "Face Creams & Face Packs" },
                { id: 8, name: "Soaps & Bodywashes" },
                { id: 9, name: "Men's Grooming  Combos" },
                { id: 10, name: "Sexual Wellness" },
            ]
        },
        {
            id: 3, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Nuts & Dry Fruits" },
                { id: 3, name: "Cooking Essentials" },
                { id: 4, name: "Breakfast Items" },
                { id: 5, name: "Snacks Corner" },
                { id: 6, name: "Jams, spreads & Honey" },
                { id: 7, name: "Ready to Cook & Eat" },
                { id: 8, name: "Chocolates" },
                { id: 9, name: "Baking Essentials" },
                { id: 10, name: "Sweets Store" },
                { id: 11, name: "Top Brand Deals" },
            ]
        },
        {
            id: 4, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Masks" },
                { id: 3, name: "Ayurvedic Supplements" },
                { id: 4, name: "Health Drinks" },
                { id: 5, name: "Vitamin Supplements" },
                { id: 6, name: "Protein Supplements" },
                { id: 7, name: "Women's Safety" },
                { id: 8, name: "Home Medicines" },
                { id: 9, name: "Home Medical Supplies" },
                { id: 10, name: "Healthcare Comos" },
                { id: 11, name: "Professional Medical Supplies" },
                { id: 12, name: "Top Brand Deals" },
            ]
        },
        {
            id: 5, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Baby Diapers" },
                { id: 3, name: "Baby Wipes" },
                { id: 4, name: "Baby Bath & Grooming" },
                { id: 5, name: "Baby Gift Sets & Combo" },
                { id: 6, name: "Baby Medical & Health Care" },
                { id: 7, name: "Nursing &  Breast Feeding" },
                { id: 8, name: "Feeding Bottles, Utensils & Accessories" },
                { id: 9, name: "Baby Food" },
                { id: 10, name: "Baby Bedding" },
                { id: 11, name: "Baby Gear" },
                { id: 12, name: "Top Brand Deals" },
            ]
        },
        {
            id: 6, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Remote Control Toys" },
                { id: 3, name: "Soft Toys" },
                { id: 4, name: "Puzzles" },
                { id: 5, name: "Board Games" },
                { id: 6, name: "Learning & Educational Toys" },
                { id: 7, name: "Cars & Die-Cast Vehicles" },
                { id: 8, name: "Baby Toys" },
                { id: 9, name: "Gifting Toys" },
                { id: 10, name: "School Bags & Backpacks" },
                { id: 11, name: "School Supplies" },
                { id: 12, name: "Top Brand Deals" },
            ]
        },
        {
            id: 7, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Badminton" },
                { id: 3, name: "Cricket" },
                { id: 4, name: "Cycling" },
                { id: 5, name: "Football" },
                { id: 6, name: "Fitness Equipments" },
                { id: 7, name: "Supports" },
                { id: 8, name: "Shakers & Sippers" },
                { id: 9, name: "Gym Gloves" },
                { id: 10, name: "Dumbbells" },
                { id: 11, name: "Yoga" },
                { id: 12, name: "Top Brand Deals" },
            ]
        },
        {
            id: 8, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Test prep" },
                { id: 3, name: "Academics" },
                { id: 4, name: "Literature & Fiction" },
                { id: 5, name: "Non Fiction" },
                { id: 6, name: "Young Readers" },
                { id: 7, name: "Audio Books" },
                { id: 8, name: "Stage Equipment & Accessories" },
            ]
        },
        {
            id: 9, items: [
                { id: 1, name: "Musical Instruments" },
                { id: 2, name: "Music & Tv Shows" },
                { id: 3, name: "Acoustic Guitars" },
                { id: 4, name: "Keys and Synthesizer" },
                { id: 5, name: "Microphones" },
                { id: 6, name: "Studio and Stage equipment" },
                { id: 7, name: "String Instruments" },
                { id: 8, name: "Indian instruments" },
                { id: 9, name: "Wind instruments" },
                { id: 10, name: "Musical keyboards" },
            ]
        },
        {
            id: 10, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Pens & Gift Sets" },
                { id: 3, name: "Notebooks & Diaries" },
                { id: 4, name: "Art Supplies" },
                { id: 5, name: "Calculators" },
                { id: 6, name: "Keychains" },
                { id: 7, name: "Card Holders" },
                { id: 8, name: "Desk Organizers" },
                { id: 9, name: "Office Supplies" },
                { id: 10, name: "Office Equipments" },
                { id: 11, name: "Party Supplies" },
                { id: 12, name: "Top Brand Deals" },
            ]
        },
        {
            id: 11, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Bike Essentials" },
                { id: 3, name: "Car & Bike Covers" },
                { id: 4, name: "CarAirFreshener" },
                { id: 5, name: "CarBluetoothDevice" },
                { id: 6, name: "CarLubricant" },
                { id: 7, name: "CarMediaPlayer" },
                { id: 8, name: "Helmet" },
                { id: 9, name: "Vehicle Washing & Cleaning Products" },
                { id: 10, name: "Tyres" },
            ]
        },
        {
            id: 12, items: [
                { id: 1, name: "View All" },
                { id: 2, name: "Masks" },
                { id: 3, name: "Sanitizers" },
                { id: 4, name: "Hand Wash" },
                { id: 5, name: "Gloves" },
                { id: 6, name: "PPE Kits" },
                { id: 7, name: "Face Shields" },
                { id: 8, name: "UV Sterilizer Box" },
                { id: 9, name: "Safety Goggles" },
                { id: 10, name: "Vitamins for Immunity" },
            ]
        }
    ];

    const container = containers.filter((item) => item.id === lihover)[0];
    const container_head = beauty_toyslist.filter((item) => item.id === lihover)[0];

    return (
        <>
            <ul className='absolute ml-20 bg-white rounded-md ring-[0.03rem] ring-slate-400 w-56
                shadow-xl shadow-[rgba(0,0,0,0.5)] z-20'
                onMouseLeave={() => setLihovered(0)}
            >
                <h1
                    className="px-5 py-3 w-full text-xs font-bold
                    flex justify-between items-center"
                    onMouseEnter={() => setLihovered(0)}
                >More in {container_head.name}</h1>
                {container.items.map((item) => (
                    <li key={item.id}
                        className={`px-5 py-3 w-full text-xs
                        flex justify-between items-center hover:cursor-pointer
                        ${item.id === lihovered && "font-semibold"}`}
                        onMouseEnter={() => setLihovered(item.id)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Beauty_ToysContainers