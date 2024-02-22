import React from 'react'
import "./Home.scss"
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import companies from "../../assets/companies.png"


const Home = () => {
  return (
    <div className='Home'>
      <div className="tagline">
        Turn your career dreams into reality.
      </div>
      <div className="mid">
        <p>Trending Charts on JobVista</p>
        <div className="images">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
        </div>
        <div className='companies'>
          Top Comapanies trust us
          <img src={companies} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home