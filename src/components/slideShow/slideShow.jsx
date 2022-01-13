import React, { useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import EssayInform from '../essayInform/essayInform'
import ShowImage from '../showImg/showImg'
import './slideShow.css'

const SlideShow = (props) => {
  const { images } = props
  console.log(images, '11111111111111111');
  useEffect(() => {
    setTimeout(() => {
      new Swiper('.swiper-container', {
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },

      })
    }, 100)
  }, [])
  return (
    <div className='slideShow' >
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            images.map((item, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  {/* <img src={item} key={index} alt="" /> */}
                  <ShowImage images={item[0]} />
                  <h2>{item[1]}</h2>
                  <p>{item[2]}</p>
                  <p>{item[3]}</p>
                  <div>
                  </div>
                  <EssayInform />
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination" style={{ display: 'none' }}></div>
      </div>
    </div>
  )
}

export default SlideShow