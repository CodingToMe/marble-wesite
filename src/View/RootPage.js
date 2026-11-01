import React from 'react'
import { Footer, Header } from '../commanComponents'
import { Cards, CarouselSection, CNCMarbleWork,MarbleSection  } from '../Components/Dashboard'
import CNCTool from '../Components/Dashboard/CNCTool'
import YouTubeCarousel from '../Components/Dashboard/YouTubeCarousel'



const RootPage = () => {
  return (
    <>
      <Header />
      <CarouselSection />
      <div className='container  rootpage mt-4'>
        <div className='a1-section mt-4 text-center'>
          <div className='title-section '>
            <h3>Home Marble Mandir</h3>
            <img src="images/red-underline.png" alt="line" width={"175px"} />
          </div>
          <p className='paragraph-section'>A meticulously crafted Home Marble Mandir featuring an elegant peacock design, carved from pristine white marble with intricate carvings inspired by Makrana craftsmanship. It serves as a luxurious and peaceful spiritual centerpiece for modern home interiors.</p>
        </div>
        <Cards />
      </div>

      {/* Marble Section */}
      <MarbleSection/>
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
       <CNCTool/>
      </div>

      <div className=' youtube-section'>
       <YouTubeCarousel/>
      </div>
      <>
      <Footer />
      </>


    </>
  )
}

export default RootPage