import React from 'react'
import { heroData } from '../../utils/data'
import Delivery from "../images/delivery.png"
import HeroBg from "../images/heroBg.png"
import i1 from "../images/i1.png"

export default function HomeContainer() {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
            <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike delivery</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow=xl'>
                        <img
                            src={Delivery}
                            className="w-full h-full object-contain"
                            alt='delivery'
                        />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
                    The Fastest Delivery in <span className='text-orange-600 text-[3rem] md:text-[5rem]'>Your City</span>
                </p>

                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse ipsa facilis quis dolore sit facere ducimus amet blanditiis,
                    harum deserunt! Quisquam praesentium alias natus repellendus consequatur,
                    autem earum rerum ut.
                </p>

                <button
                    className='bg-gradient-to-br from-orange-400 to-orange-500 
          w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out
          duration-100'
                    type='button'>
                    Order Now
                </button>
            </div>
            <div className='py-2 flex-1 flex items-center relative'>
                <img className="ml-auto h-420 w-full lg:w-auto lg:h-650" src={HeroBg} alt='hero-bg' />

                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap'>
                    {heroData && heroData.map((el) => (
                        <div key={el.id} className=' lg:w-150 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                            <img className='w-20 lg:w-40 -mt-10 lg:-mt-20' src={el.imageSrc} alt='i1' />
                            <p className='text-base lg:text-xl font-semibold text-textColor mt-4'>{el.name}</p>

                            <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{el.desp}</p>

                            <p className='text-sm font-semibold text-headingColor'>
                                <span className='text-xs text-red-600'>$</span> {el.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
