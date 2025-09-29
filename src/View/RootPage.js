import React from 'react'
import { Header } from '../commanComponents'
import { Cards, CarouselSection } from '../Components/Dashboard'


const RootPage = () => {
  return (
    <>
      <Header />
      <CarouselSection />
      <div className='container  rootpage'>
        <div className='a1-section mt-4 text-center'>
          <div className='title-section '>
            <h3>A1 Design Center</h3>
            <img src="images/red-underline.png" alt="line" width={"175px"} />
          </div>
          <p className='paragraph-section'>Explore our exclusive collection of design templates crafted by top designers worldwide.
             Elevate your projects with professional, customizable designs that cater to all your creative needs.</p>
        </div>

        <Cards />
      </div>
    </>
  )
}

export default RootPage