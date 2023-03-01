import React from 'react'
import CarouselBanner from './CarouselBanner'
import Products from './Products'

const Home = () => {
  return (
    <>
      <div classNameName='hero '>
        {/* <div className="card text-white border-0 ">
          <img src="/assets/p1.jpg" className="card-img rounded-0" alt="bgimage" height="550px"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
              <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
            </div>
        </div> */}
        <CarouselBanner/>
        <Products/>
      </div>
    </>
  )
}

export default Home