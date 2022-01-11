import React, { useRef, useState } from 'react';
import './showImg.css'

const ShowImage = (props) => {

  const { images } = props

  const bigRef = useRef()
  const baseRef = useRef()
  const show = () => {
    bigRef.current.style.display = 'block'
    baseRef.current.style.display = 'none'
  }
  const hidden = () => {
    baseRef.current.style.display = 'block'
    bigRef.current.style.display = 'none'
  }


  return (
    <>
      <div>
              <div  className='show' >
                <img src={images}  className='img' onClick={show} ref={baseRef} alt="" />

                <div className='bigImg' ref={bigRef} >
                  <img src={images}  className='img1' onClick={hidden} />
                </div>
              </div>
      </div>
    </>
  )
}

export default ShowImage