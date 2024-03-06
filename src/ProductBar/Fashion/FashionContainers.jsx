import React, { useState } from 'react'

const FashionContainers = ({ lihover, fashionlist }) => {
    const [lihovered, setLihovered] = useState(0);

    const containers = [
        {
            id: 1, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Men's T-Shirts" },
                { id: 3, name: "Men's Casual Shirts" },
                { id: 4, name: "Men's Formal Shirts" },
                { id: 5, name: "Men's Kurtas" },
                { id: 6, name: "Men's Ethnic Sets" },
                { id: 7, name: "Men's Blazers" },
                { id: 8, name: "Men's Raincoat" },
                { id: 9, name: "Men's Windcheaters" },
                { id: 10, name: "Men's Suit" },
                { id: 11, name: "Men's Fabrics" },
            ]
        },
        {
            id: 2, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Men's Jeans" },
                { id: 3, name: "Men's Trousers" },
                { id: 4, name: "Men's Trackpants" },
                { id: 5, name: "Men's Shorts" },
                { id: 6, name: "Men's Cargos" },
                { id: 7, name: "Men's Threefourths" },
                { id: 8, name: "Men's Pyjamas & Loungepants" },
                { id: 9, name: "Men's Dhoti" },
                { id: 10, name: "Men's Ethnic Pyjama" },
            ]
        },
        {
            id: 3, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Women Sarees" },
                { id: 3, name: "Women Kurtas & Kurtis" },
                { id: 4, name: "Women Kurta Sets & Salwar Suits" },
                { id: 5, name: "Ethnic Dresses" },
                { id: 6, name: "Women Dress Materials" },
                { id: 7, name: "Women Gowns" },
                { id: 8, name: "Women Lehenga Cholis" },
                { id: 9, name: "Women Leggings & Patialas" },
                { id: 10, name: "Women Palazzos & Shararas" },
                { id: 11, name: "Women Blouse" },
                { id: 12, name: "Women Dupatta" },
            ]
        },
        {
            id: 4, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Women Tops" },
                { id: 3, name: "Women Dresses" },
                { id: 4, name: "Women T-shirts & Polo T-shirts" },
                { id: 5, name: "Women Jeans" },
                { id: 6, name: "Women Nighties & Night Dresses" },
                { id: 7, name: "Women NightSuit" },
                { id: 8, name: "Women Track Pants" },
                { id: 9, name: "Women Trouser" },
                { id: 10, name: "Women Jumpsuit" },
                { id: 11, name: "Women Shapewear" },
                { id: 12, name: "Women Sports Bra" },
            ]
        },
        {
            id: 5, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Men's Sport Shoes" },
                { id: 3, name: "Men's Casual Shoes" },
                { id: 4, name: "Men's Sandals & Floaters" },
                { id: 5, name: "Men's Slippers & Flip Flops" },
                { id: 6, name: "Men's Formal Shoes" },
                { id: 7, name: "Men's Ethnic Shoes" },
                { id: 8, name: "Shoe Care" },
            ]
        },
        {
            id: 6, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Women Flats" },
                { id: 3, name: "Women Heels" },
                { id: 4, name: "Women Wedges" },
                { id: 5, name: "Women Slipper Flip Flops" },
                { id: 6, name: "Women Casual Shoes" },
                { id: 7, name: "Women Sport Shoes" },
                { id: 8, name: "Women Ballerinas" },
                { id: 9, name: "Women Ethnic Shoes" },
                { id: 10, name: "Women Sneakers" },
                { id: 11, name: "Women Walking Shoes" },
                { id: 12, name: "Women Boots" },
            ]
        },
        {
            id: 7, items: [
                { id: 1, name: "Men & Women Watches" },
                { id: 2, name: "Men & Women Sunglasses" },
                { id: 3, name: "Wallets" },
                { id: 4, name: "Men & Women Belts" },
                { id: 5, name: "Men Fashion Jewellery" },
                { id: 6, name: "Precious Articles" },
                { id: 7, name: "Kids Accessories" },
                { id: 8, name: "Women Fashion Jewellery" },
            ]
        },
        {
            id: 8, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Bags & Backpacks" },
                { id: 3, name: "Suitcases & Trolleys" },
                { id: 4, name: "Dufflebags" },
                { id: 5, name: "Rucksacks" },
                { id: 6, name: "Handbags" },
                { id: 7, name: "Slingbags" },
                { id: 8, name: "Women's Clutches & Wallets" },
                { id: 9, name: "Messenegr Bags" },
                { id: 10, name: "Travel Accessories" },
            ]
        },
        {
            id: 9, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Girls Dresses" },
                { id: 3, name: "Boys & Girls Tshirts" },
                { id: 4, name: "Boys & Girls Combosets" },
                { id: 5, name: "Boys & Girls Ethnic Wear" },
                { id: 6, name: "Boys & Girls Jeans" },
                { id: 7, name: "Boys & Girls Shorts" },
                { id: 8, name: "Boys & Girls Trackpants" },
                { id: 9, name: "Boys & Girls Innerwear" },
                { id: 10, name: "Infant Wear" },
                { id: 11, name: "Kid Slipper Flip Flops" },
                { id: 12, name: "Kid Sports Shoes" },
            ]
        },
        {
            id: 10, items: [
                { id: 1, name: "Men's Briefs & Trunks" },
                { id: 2, name: "Men's Vests" },
                { id: 3, name: "Men's Boxers" },
                { id: 4, name: "Women Lingerie Sets" },
                { id: 5, name: "Women Bra" },
                { id: 6, name: "Women Panty" },
                { id: 7, name: "Women Sarees" },
                { id: 8, name: "Women Kurtas" },
                { id: 9, name: "Women Kurta Sets & Salwar Suits" },
                { id: 10, name: "Boys Innerwear" },
                { id: 11, name: "Girls Innerwear" },
                { id: 12, name: "Women Slipper Flip Flops" },
            ]
        },
        {
            id: 11, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Boys Innerwear" },
                { id: 3, name: "Men's Jackets" },
                { id: 4, name: "Men's Sweatshirts" },
                { id: 5, name: "Men's Sweaters" },
                { id: 6, name: "Men's Thermals" },
                { id: 7, name: "Women's Jackets" },
                { id: 8, name: "Women's Sweatshirts" },
                { id: 9, name: "Women's Sweaters & Cardigans" },
                { id: 10, name: "Women's Shrugs" },
                { id: 11, name: "Kids Sweatshirts" },
                { id: 12, name: "Women Kurtas" },
                { id: 13, name: "Kids Jackets" },
            ]
        }
    ];

    const container = containers.filter((item) => item.id === lihover)[0];
    const container_head = fashionlist.filter((item) => item.id === lihover)[0];

    return (
        <>
            <ul className='absolute ml-12 bg-white rounded-md ring-[0.03rem] ring-slate-400 w-56
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

export default FashionContainers