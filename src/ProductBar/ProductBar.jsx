import React from 'react'
import GroceryButton from './GroceryButton';
import MobilesButton from './MobilesButton';
import FashionButton from './Fashion/FashionButton';
import ElectronicsButton from './Electronics/ElectronicsButton';
import Home_FurnitureButton from './Home_Furniture/Home_FurnitureButton';
import AppliancesButton from './AppliancesButton';
import TravelButton from './TravelButton';
import Beauty_ToysButton from './Beauty_Toys/Beauty_ToysButton';
import Two_wheelerButton from './Two_Wheelers/Two_wheelerButton';

const ProductBar = () => {
    return (
        <div className='bg-white flex gap-x-5 py-3 justify-center mt-2 mx-5'>
            <GroceryButton />
            <MobilesButton />
            <FashionButton />
            <ElectronicsButton />
            <Home_FurnitureButton />
            <AppliancesButton />
            <TravelButton />
            <Beauty_ToysButton />
            <Two_wheelerButton />
        </div>
    )
}

export default ProductBar