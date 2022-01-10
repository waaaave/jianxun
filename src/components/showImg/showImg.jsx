import React, { useRef, useState } from 'react';
import style from './showImg.module.css'

const ShowImage = (props) => {
  const { images } = props

  const bigRef = useRef()
  const show = () => {
    bigRef.current.style.display = 'block'
  }
  const hidden = () => {
    bigRef.current.style.display = 'none'
  }


  return (
    <>
    
      <div>
        {
          images.map((item, index) => {
            return (
              <div  className={style.show}>
                <img src={item} key={index} className={style.img} onClick={show} alt="" />

                <div className={style.bigImg} ref={bigRef} >
                  <img src={item} key={index} className={style.img1} onClick={hidden} />
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ShowImage