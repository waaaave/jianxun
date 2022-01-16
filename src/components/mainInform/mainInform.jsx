import React, { useEffect, useRef } from 'react';
import yidu from './icon/yidu.png'
import shoucang from './icon/shoucang.png'
import pinglun from './icon/pinglun.png'
import sousuo from './icon/sousuo.png'

import './mainInform.css'


const MainInform = () => {

  return (
    <div className='mainInform'>
      <div className='mainInform-base' >
        <div className='mainInform-nav'>
          <img src={yidu} alt="" />
        </div>

        <div className='mainInform-nav'>
          <img src={shoucang} alt="" />
        </div>

        <div className='mainInform-nav'>
          <img src={pinglun} alt="" />

        </div>

        <div className='mainInform-nav'>
          <img src={sousuo} />

        </div>
      </div>
    </div>
  )
}

export default MainInform