import React, { useEffect, useRef } from 'react';
import pinglun from './icon/pinglun.png'
import heizan from './icon/heizan.png'
import fenxiang from './icon/fenxiang.png'
import fankui from './icon/fankui.png'
import shoucang from './icon/shoucang.png'
import shouqi from './icon/shouqi.png'
import hongzan from './icon/hongzan.png'
import shengluehao from './icon/shengluehao.png'
import './essayInform.css'


const EssayInform = () => {

  const lessRef = useRef()
  const moreRef = useRef()
  const heizanRef = useRef()
  const hongzanRef = useRef()
  const mHeizanRef = useRef()
  const mHongzanRef = useRef()

  const showLess = () => {
    lessRef.current.style.display = 'grid',
      moreRef.current.style.display = 'none'

  }

  const showMore = () => {
      lessRef.current.style.display = 'none',
      moreRef.current.style.display = 'grid'

  }

  const dianzan = () => {
    heizanRef.current.style.display = 'none',
    mHeizanRef.current.style.display = heizanRef.current.style.display
    hongzanRef.current.style.display = ''
    mHongzanRef.current.style.display = hongzanRef.current.style.display
    
    
  }
  const budianzan = () => {
    heizanRef.current.style.display = '',
    mHeizanRef.current.style.display = heizanRef.current.style.display
    hongzanRef.current.style.display = 'none'
    mHongzanRef.current.style.display = hongzanRef.current.style.display

  }

  return (
    <div className='essayInform'>
      <div className='essayInform-base' id='less' ref={lessRef} >
        <div className='essayInform-nav'>
          <img src={pinglun} alt="" />
        </div>

        <div className='essayInform-nav'>
          <img src={heizan} alt="" ref={heizanRef} onClick={dianzan} />
          <img src={hongzan} alt="" ref={hongzanRef} onClick={budianzan} style={{display:'none'}} />

        </div>

        <div className='essayInform-nav'>
          <img src={fenxiang} alt="" />

        </div>

        <div className='essayInform-nav' onClick={showMore}>
          <img src={shengluehao} />

        </div>
      </div>
      <div className='essayInform-all' id='more' ref={moreRef} >
        <div className='essayInform-nav'>
          <img src={pinglun} alt="" />
        </div>

        <div className='essayInform-nav'>
          <img src={heizan} alt="" ref={mHeizanRef} onClick={dianzan} />
          <img src={hongzan} alt="" ref={mHongzanRef} onClick={budianzan} style={{display:'none'}} />

        </div>

        <div className='essayInform-nav'>
          <img src={fenxiang} alt="" />
        </div>

        <div className='essayInform-push' onClick={showLess} >
          <img src={shouqi} alt="" />
        </div>

        <div className='essayInform-nav'>
          <img src={fankui} alt="" />
        </div>

        <div className='essayInform-nav'>
          <img src={shoucang} alt="" />
        </div>



      </div>
    </div>
  )
}

export default EssayInform