import React, { useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import ShowImage from '../showImg/showImg'
import './slideShow.css'

const SlideShow = (props) => {
  const { images } = props
  useEffect(() => {
    setTimeout(() => {
      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })
    }, 100)
  }, [])
  return (
    <div>
      <div className="swiper">
        <div className="swiper-wrapper">
          {
            images.map((item, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={item} key={index} alt="" />
                  <div>123</div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>

    // <>
    //   <div>
    //     {
    //       images.map((item,index) => {
    //         return(
    //           <div>
    //             <ShowImage images={images} />
    //           </div>
    //         )
    //       })
    //     }
    //   </div>
    // </>
  )
}

export default SlideShow