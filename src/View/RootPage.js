import React from 'react'
import { Header } from '../commanComponents'
import { Cards, CarouselSection, CNCMarbleWork, DayaMarbleSlider } from '../Components/Dashboard'


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

      <div className=' daya-marbale-section'>
        <div className='text-center'>
          <div className='title-section '>
            <h3 style={{ marginBottom: "0px" }}>Daya Marble</h3>
            <img src="images/red-underline.png" alt="line" width={"108px"} />
          </div>
          <ul className='daya-list'>
            <li> Mandir</li>
            <li>Jain Temple</li>
            <li>Marble Slab</li>
          </ul>
        </div>
        <DayaMarbleSlider />



      </div>
      {/* CNC Marble Work  */}
      <div className='container  rootpage'>
        <div className='a1-section mt-4 text-center'>
          <div className='title-section '>
            <h3>CNC Marble Work</h3>
            <img src="images/red-underline.png" alt="line" width={"175px"} />
          </div>
          <p className='paragraph-section'>Explore our exclusive collection of design templates crafted by top designers worldwide.
            Elevate your projects with professional, customizable designs that cater to all your creative needs.</p>
        </div>
        <CNCMarbleWork />
      </div>
      <div className=' daya-marbale-section'>
       <div className='row'>
        <div className='col-6'>
          
        </div>
        <div className='col-6'>
        </div>
       </div>
      </div>


    </>
  )
}

export default RootPage