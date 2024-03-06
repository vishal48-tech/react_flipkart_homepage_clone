import React, { useState } from 'react'

const Home_FurnitureContainers = ({ lihover, home_furniturelist }) => {
    const [lihovered, setLihovered] = useState(0);

    const containers = [
        {
            id: 1, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Bed Linens" },
                { id: 3, name: "Bedsheets" },
                { id: 4, name: "Blankets" },
                { id: 5, name: "Curtains & Accessories" },
                { id: 6, name: "Bath linen" },
                { id: 7, name: "Floor coverings" },
                { id: 8, name: "Covers & protectors" },
                { id: 9, name: "Cushions & Pillows" },
                { id: 10, name: "Kitchen Linen Sets" },
                { id: 11, name: "Table Linen Sets" },
                { id: 12, name: "Sofa & curtain fabrics" },
                { id: 13, name: "Branded Collections" },
            ]
        },
        {
            id: 2, items: []
        },
        {
            id: 3, items: [
                { id: 1, name: "Sofas Sets & Sectionals" },
                { id: 2, name: "TV Units" },
                { id: 2, name: "Dining Sets" },
                { id: 4, name: "Sofa Beds" },
                { id: 5, name: "Recliners" },
                { id: 6, name: "Living Room Chairs" },
                { id: 7, name: "Cabinet & Drawers" },
                { id: 8, name: "Bookshelves" },
                { id: 9, name: "Shoe Racks" },
            ]
        },
        {
            id: 4, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Cookware" },
                { id: 3, name: "Knives, Choppers & Cutters" },
                { id: 4, name: "Gas Stoves & Accessories" },
                { id: 5, name: "Kitchen tools" },
                { id: 6, name: "Tableware & Dinnerware" },
                { id: 7, name: "Containers & Kitchen Storage" },
                { id: 8, name: "Barware" },
                { id: 9, name: "Bakeware" },
                { id: 10, name: "Handjuicers & Grinders" },
                { id: 11, name: "Disposable Supplies" },
                { id: 12, name: "Outdoor cooking" },
            ]
        },
        {
            id: 5, items: [
                { id: 1, name: "Mattresses" },
                { id: 2, name: "Beds" },
                { id: 3, name: "Wardrobes" },
                { id: 4, name: "Side Tables" },
                { id: 5, name: "TV Units" },
                { id: 6, name: "Office Tables" },
                { id: 7, name: "Office Chairs" },
                { id: 8, name: "Bookshelves" },
                { id: 9, name: "Bar Cabinets" },
                { id: 10, name: "Bar Stools" },
                { id: 11, name: "Rocking Chairs" },
                { id: 12, name: "Benches" },
            ]
        },
        {
            id: 6, items: []
        },
        {
            id: 7, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Lightings" },
                { id: 3, name: "Stickers & Wallpapers" },
                { id: 4, name: "Paintings & Posters" },
                { id: 5, name: "Clocks" },
                { id: 6, name: "Showpieces & Decoratives" },
                { id: 7, name: "Wall Decor" },
                { id: 8, name: "Flowers & Vases" },
                { id: 9, name: "Home Fragrances" },
                { id: 10, name: "Windchimes & Dream catcher" },
                { id: 11, name: "Photo frames & Albums" },
                { id: 12, name: "Diyas, Candles & Holders" },
                { id: 13, name: "Festive & Giftng" },
            ]
        },
        {
            id: 8, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Hand tools" },
                { id: 3, name: "Power Tools" },
                { id: 4, name: "Measuring Tools" },
                { id: 5, name: "Home Storage & Organizers" },
                { id: 6, name: "Umbrellas" },
                { id: 7, name: "Appliance Trolley & Stands" },
                { id: 8, name: "Cloth Dryer Stand" },
                { id: 9, name: "Appliance Filter & Cartridges" },
                { id: 10, name: "Laundary Organization" },
                { id: 11, name: "Lock & Security" },
                { id: 12, name: "Fire & Personal Safety" },
                { id: 13, name: "Paint Supplies & Equipments" },
            ]
        },
        {
            id: 9, items: []
        },
        {
            id: 10, items: []
        },
        {
            id: 11, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Bulbs" },
                { id: 3, name: "Emergency Lights" },
                { id: 4, name: "Torches" },
                { id: 5, name: "Tubelights" },
                { id: 6, name: "Extension Cords" },
                { id: 7, name: "Outdoor Lamps" },
                { id: 8, name: "Batteries" },
                { id: 9, name: "ElectricalWire" },
                { id: 10, name: "ElectricalSocket" },
                { id: 11, name: "ElectricDoorBell" },
                { id: 12, name: "Solar Lights, Panels & Batteries" },
                { id: 13, name: "Electrical Hardware" },
            ]
        },
        {
            id: 12, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Mops" },
                { id: 3, name: "Cleaning Supplies" },
                { id: 4, name: "House Hold supplies" },
                { id: 5, name: "Air Fresheners" },
                { id: 6, name: "Cleaning Gloves" },
                { id: 7, name: "Liquid Detergents" },
                { id: 8, name: "Taps & Faucet" },
                { id: 9, name: "Toothbrush holder" },
                { id: 10, name: "Bathroom Rack & Shelves" },
                { id: 11, name: "Shower Heads" },
                { id: 12, name: "Bath & Kitchen Fittings" },
                { id: 13, name: "Bathroom Accesorries" },
            ]
        },
        {
            id: 13, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Plant Seeds" },
                { id: 3, name: "Soil Manure" },
                { id: 4, name: "Pots & Planters" },
                { id: 5, name: "Plant & Planters" },
                { id: 6, name: "garden tool set" },
                { id: 7, name: "watering Equipments" },
                { id: 8, name: "Dog Essentials" },
                { id: 9, name: "Cat Essentials" },
                { id: 10, name: "Fish & Aquatic" },
                { id: 11, name: "Pet Grooming & Hygiene" },
                { id: 12, name: "Pet Toys" },
                { id: 13, name: "Pet Health & Safety" },
            ]
        }
    ];

    const container = containers.filter((item) => item.id === lihover)[0];
    const container_head = home_furniturelist.filter((item) => item.id === lihover)[0];

    return (
        <>
            {container.items.length > 0 &&
                <ul className='absolute ml-16 bg-white rounded-md ring-[0.03rem] ring-slate-400 w-56
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
            }
        </>
    )
}

export default Home_FurnitureContainers