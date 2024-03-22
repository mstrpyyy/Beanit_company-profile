import ProductCard from '@/components/productcard'
import Subhero from '@/components/subhero'
import React from 'react'
import prod1 from '../../../public/coffee/1.webp'
import prod2 from '../../../public/coffee/2.webp'
import prod3 from '../../../public/coffee/3.webp'
import prod4 from '../../../public/coffee/4.webp'
import prod5 from '../../../public/coffee/5.webp'
import prod6 from '../../../public/coffee/6.webp'
import prod7 from '../../../public/coffee/7.webp'
import prod8 from '../../../public/coffee/8.webp'
import prod9 from '../../../public/coffee/9.webp'
import Testimony from '@/components/testimony'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Products",
    description: "Bean It! products",
  };


export default function Product() {
  return (
    <div>
        <Subhero bgimage='bgproduct' title='Products' />
        <div className='flex flex-col items-center bg-xblack'>
            <div className='flex flex-col items-center md:w-[60vw] pt-10'>
                <h1 className="text-4xl md:text-5xl font-bold text-blue2 mb-5 max-md:text-center">
                    Single Origin Beans
                </h1>
                <h2 className="text-xwhite text-xl md:text-2xl font-light text-center mb-10">
                Indulge in the pure taste of single origin beans, sourced sustainably and ethically to preserve the land and support communities.
                </h2>
                <div data-aos="fade-up" className='flex justify-center gap-5 flex-wrap w-[90vw] xl:w-[1000px]'>
                    <ProductCard
                    modalId={'modal1'}
                    bgproduct={'bgprod1'} 
                    name={'Aceh Gayo Natural'} 
                    type={'Single origin coffee'} 
                    origin={'Aceh'} 
                    notes={'Strawberry, Citrus, Almond, Mild Body with Clean Aftertaste'} 
                    taste={'Acidity 3, Body 4, Sweetness 4'} 
                    roast={'Light-Medium Roast'} 
                    modalimage={prod1} />
                
                    <ProductCard 
                    modalId={'modal2'}
                    bgproduct={'bgprod2'} 
                    name={'Mt. Batukaru'} 
                    type={'Single origin coffee'} 
                    origin={'Bali'} 
                    notes={'Honey, Maple Syrup, Starfruit, Brown Sugar, Grape'} 
                    taste={'Acidity 3, Body 4, Sweetness 4'} 
                    roast={'Light-Medium Roast'} 
                    modalimage={prod2} />

                    <ProductCard 
                    modalId={'modal3'}
                    bgproduct={'bgprod3'} 
                    name={'Solok Natural'} 
                    type={'Single origin coffee'} 
                    origin={'West Sumatra'} 
                    notes={'Green Apple, Smooth Body, Roasted Cashew'} 
                    taste={'Acidity 4/5, Body 4/5, Sweetness 5/5'} 
                    roast={'Light-Medium Roast'} 
                    modalimage={prod3} />

                    <ProductCard 
                    modalId={'modal4'}
                     bgproduct={'bgprod4'} 
                    name={'Toraja Sapan'} 
                    type={'Single origin coffee'} 
                    origin={'Sulawesi'} 
                    notes={'Delicate body with notes of lime juice, ginger and blackcurrant'} 
                    taste={'Acidity 5, Body 3, Sweetness 4'} 
                    roast={'Light-Medium Roast'} 
                    modalimage={prod4} />

                    <ProductCard  
                    modalId={'modal5'}
                    bgproduct={'bgprod5'} 
                    name={'Mandailing Washed'} 
                    type={'Single origin coffee'} 
                    origin={'North Sumatra'} 
                    notes={'Malt, Nutty, Bitter Sweet, Strong Body, Long Aftertaste'} 
                    taste={'Acidity 2, Body 4, Sweetness 4'} 
                    roast={'Light-Medium Roast'} 
                    modalimage={prod5} />

                    <ProductCard  
                    modalId={'modal6'}
                    bgproduct={'bgprod6'} 
                    name={'Flores Lemonade'} 
                    type={'Single origin coffee'} 
                    origin={'Flores'} 
                    notes={'Mollases, Dried Grapes, Lemonade'} 
                    taste={'Acidity 4, Body 3, Sweetness 3'} 
                    roast={'Medium Roast'} 
                    modalimage={prod6} />
                </div>
            </div>
            
            <div  className='flex flex-col items-center md:w-[60vw] pb-20'>
                <h1 className="text-4xl md:text-5xl font-bold text-blue2 mb-5 mt-16 max-md:text-center">
                    Premium Blend
                </h1>
                <h2 className="text-xwhite text-xl md:text-2xl font-light text-center mb-10">
                Savor the exquisite flavor of our premium blend, crafted with sustainable and ethically sourced beans for a deliciously responsible cup.
                </h2>
                <div data-aos="fade-up" className='flex justify-center gap-5 flex-wrap w-[90vw] xl:w-[80vw]'>
                    <ProductCard  
                    modalId={'modal7'}
                    bgproduct={'bgprod7'} 
                    name={'Forte'} 
                    type={'For Espresso'} 
                    origin={'Premium blend'} 
                    notes={'Notes of Roasted peanut, chocolaty with slight lime acidity'} 
                    taste={'Acidity 3, Body 4, Sweetness 3'} 
                    roast={'Medium-Dark Roast'} 
                    modalimage={prod7} />
                
                    <ProductCard 
                    modalId={'modal8'}
                     bgproduct={'bgprod8'} 
                    name={'Breakfast'} 
                    type={'For Espresso'} 
                    origin={'Premium blend'} 
                    notes={'Dark Chocolate, Bitter Sweet, Spice, Strong Body'} 
                    taste={'Acidity 2/5, Body 5/5, Sweetness 3/5'} 
                    roast={'Medium Roast'} 
                    modalimage={prod8} />

                    <ProductCard  
                    modalId={'modal9'}
                    bgproduct={'bgprod9'} 
                    name={'Arabica Premium'} 
                    type={'For Espresso'} 
                    origin={'Premium blend'} 
                    notes={'Sweet Fruits, Pear, Roasted Peanut, Lime Acidity'} 
                    taste={'Acidity 4, Body 3, Sweetness 4'} 
                    roast={'Medium Roast'} 
                    modalimage={prod9} />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-blue2 pt-20 mb-5 text-center">What They Say About Bean It!</h1>
                <p className="text-xwhite text-2xl font-light max-md:text-center mb-10">Our sustainable global journey and glowing customer testimonials.</p>
                <Testimony />
            </div>
        </div>
    </div>
  )
}
