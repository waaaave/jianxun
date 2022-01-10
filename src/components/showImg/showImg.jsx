import React, { useRef, useState } from 'react';
import style from './showImg.module.css'

const ShowImage = (props) => {

  const { images } = props
  console.log(images, '////////////////////');

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
            console.log(item, '1111111111111');
            return (
              <div  className={style.show} key={index}>
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