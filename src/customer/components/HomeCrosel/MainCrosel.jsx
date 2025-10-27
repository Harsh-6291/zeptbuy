import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import  { MainCroselData } from './MainCroselData';



const MainCrosel = () => {
   
    const items = MainCroselData.map((item) => <img className='curser-pointer h-96.5 w-full'
     role='presentation' src={item.image} alt="carousel-item" />)

   return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={1100} 
    
/>)
};


export default MainCrosel;