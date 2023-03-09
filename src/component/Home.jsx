import React from 'react'
import CarouselBanner from './CarouselBanner'
import Products from './Products'

const Home = () => {
  return (
    <>
      <div className='hero '>
        <CarouselBanner/>
        <Products/>
      </div>
    </>
  )
}

export default Home