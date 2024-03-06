import React, { useState } from 'react'

const ElectronicsContainers = ({ lihover, electronicslist }) => {
    const [lihovered, setLihovered] = useState(0);

    const containers = [
        {
            id: 1, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Bluetooth Headphones" },
                { id: 3, name: "Wired Headphones" },
                { id: 4, name: "True Wireless Earbuds" },
                { id: 5, name: "Bluetooth Speakers" },
                { id: 6, name: "Soundbars" },
                { id: 7, name: "Home Theaters" },
                { id: 8, name: "TV Streaming Device" },
                { id: 9, name: "Remote Control" },
                { id: 10, name: "DTH Set top box" },
                { id: 11, name: "Headphones Pouch & Case Covers" },
            ]
        },
        {
            id: 2, items: []
        },
        {
            id: 3, items: [
                { id: 1, name: "All" },
                { id: 2, name: "DSLR & Mirrorless" },
                { id: 3, name: "Sports & action" },
                { id: 4, name: "Point & Shoot" },
                { id: 5, name: "Instant Cameras" },
                { id: 6, name: "Camcorders" },
                { id: 7, name: "Camera tripods" },
                { id: 8, name: "Camera Lenses" },
                { id: 9, name: "Drone" },
                { id: 10, name: "Flashes" },
                { id: 11, name: "Gimbals" },
                { id: 12, name: "Binoculars" },
                { id: 13, name: "Other Camera Accessories" },
            ]
        },
        {
            id: 4, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Printers" },
                { id: 3, name: "Monitors" },
                { id: 4, name: "Projectors" },
                { id: 5, name: "Portable Projectors" },
                { id: 6, name: "Ink Cartridges" },
                { id: 7, name: "Ink Bottles" },
                { id: 8, name: "Receipt Printers" },
                { id: 9, name: "Lamination Machines" },
                { id: 10, name: "Note Counting Machines" },
                { id: 11, name: "Barcode Scanners" },
                { id: 12, name: "Currency Detectors" },
            ]
        },
        {
            id: 5, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Gaming Consoles" },
                { id: 3, name: "Gaming Mouse" },
                { id: 4, name: "Gaming Keyboards" },
                { id: 5, name: "Gamepads" },
                { id: 6, name: "Games" },
                { id: 7, name: "Accessory Kits" },
                { id: 8, name: "Gaming Accessories Combo" },
                { id: 9, name: "Gaming Mousepads" },
                { id: 10, name: "Membership Cards" },
                { id: 11, name: "Controllers" },
                { id: 12, name: "Other Gaming Accessories" },
                { id: 13, name: "Gaming Components" },
            ]
        },
        {
            id: 6, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Trimmers" },
                { id: 3, name: "Shavers" },
                { id: 4, name: "Hair Straighteners" },
                { id: 5, name: "Hair Dryers" },
                { id: 6, name: "Epilators" },
                { id: 7, name: "Glucometer and Accessories" },
                { id: 8, name: "Blood Pressure Monitors" },
                { id: 9, name: "Digital Thermometers" },
                { id: 10, name: "Weighing Scales" },
                { id: 11, name: "Massagers" },
                { id: 12, name: "Nebulizers" },
                { id: 13, name: "Vaporizes" },
            ]
        },
        {
            id: 7, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Mouse" },
                { id: 3, name: "Laptop Keyboards" },
                { id: 4, name: "Router" },
                { id: 5, name: "Data Cards" },
                { id: 6, name: "UPS" },
                { id: 7, name: "USB Gadgets" },
                { id: 8, name: "Security Software" },
                { id: 9, name: "Laptop Battery" },
                { id: 10, name: "Laptop Adapter" },
                { id: 11, name: "Wireless USB Adapter" },
                { id: 12, name: "Processor" },
                { id: 13, name: "Other Accessories" },
            ]
        },
        {
            id: 8, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Laptops" },
                { id: 3, name: "Gaming Laptops" },
                { id: 4, name: "Desktop PCs" },
                { id: 5, name: "All In One PCs" },
                { id: 6, name: "Mini PCs" },
                { id: 7, name: "Tower PCs" },
                { id: 8, name: "PC Finder" },
            ]
        },
        {
            id: 9, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Plain Cases" },
                { id: 3, name: "Designer Cases" },
                { id: 4, name: "Screen Guards" },
                { id: 5, name: "Camera Lens Protectors" },
                { id: 6, name: "Tablet Accessories" },
                { id: 7, name: "MobileCable" },
                { id: 8, name: "MobileCharging MobileCharger" },
                { id: 9, name: "MobilePouches" },
                { id: 10, name: "MobileFlash" },
                { id: 11, name: "MobileHolder" },
                { id: 12, name: "MobileUSBGadget" },
                { id: 13, name: "Mobiles Accessories Combos" },
            ]
        },
        {
            id: 10, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Powerbank" },
            ]
        },
        {
            id: 11, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Smart Assistants" },
                { id: 3, name: "Smart Lights" },
                { id: 4, name: "Smart Cameras" },
                { id: 5, name: "Smart Switches" },
                { id: 6, name: "Smart Door locks" },
                { id: 7, name: "Sensors & Alarms" },
            ]
        },
        {
            id: 12, items: [
                { id: 1, name: "Smart Bands" },
                { id: 2, name: "Smart Glasses" },
            ]
        },
        {
            id: 13, items: [
                { id: 1, name: "All" },
                { id: 2, name: "MobileMemoryCard" },
                { id: 3, name: "ComputerStoragePendrive" },
                { id: 4, name: "MobileStoragePendrive" },
                { id: 5, name: "ExternalHardDrive" },
                { id: 6, name: "InternalHardDrive" },
            ]
        },
        {
            id: 14, items: [
                { id: 1, name: "All" },
                { id: 2, name: "Tablets With Call Facility" },
                { id: 3, name: "Tablets Without Call Facility" },
            ]
        }
    ];

    const container = containers.filter((item) => item.id === lihover)[0];
    const container_head = electronicslist.filter((item) => item.id === lihover)[0];

    return (
        <>
            {container.items.length > 0 &&
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
            }
        </>
    )
}

export default ElectronicsContainers