import React, { useEffect, useState } from 'react';
import './homeImageShow.css'
import Setting from '../beginButton/icon/setting.png'
import Light from '../beginButton/icon/light.png'
import Flash from '../beginButton/icon/flash.png'

const HomeImageShow = (props) => {
  const { images=[], base } = props
  const [index, setIndex] = useState(base)

  const flash = () =>{
    setIndex(parseInt(Math.random()*10))
  }

  return (
    <>
      <div className="home">
        <div className="home-icon">
          <img src={Light} />
          <img src={Setting} />
        </div>
        <img src={images[index]} className='home-images'/>
        <img src={Flash} className='home-flash' onClick={flash} />
      </div>
    </>
  )
}

export default HomeImageShow