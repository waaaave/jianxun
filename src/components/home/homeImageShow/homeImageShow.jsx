import React, { useEffect, useState } from 'react';
import './homeImageShow.css'
import Setting from '../beginButton/icon/setting.png'
import Flash from '../beginButton/icon/flash.png'
import { useHistory } from 'react-router-dom';

const HomeImageShow = (props) => {
  const { images=[], base } = props
  const [index, setIndex] = useState(base)

  const flash = () =>{
    setIndex(parseInt(Math.random()*10))
  }

  const history = useHistory()
    

  return (
    <>
      <div className="home">
        <div className="home-icon">
          <img src={Setting} onClick={() => history.push('/jianxun/settings')} />
        </div>
        <img src={images[index]} className='home-images'/>
        <img src={Flash} className='home-flash' onClick={flash} />
      </div>
    </>
  )
}

export default HomeImageShow