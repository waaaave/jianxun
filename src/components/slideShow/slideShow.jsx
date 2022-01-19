import React, { useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import EssayInform from '../essayInform/essayInform'
import ShowImage from '../showImg/showImg'
// import Comment from '../comment/comment'
import './slideShow.css'

const SlideShow = (props) => {
  const { abcd:images } = props
  // {abcd:images} = { adcd:{} } => images={}
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
            images.map((item) => {
              return (
                <div className="swiper-slide" key={item[4]}>
                  {/* <img src={item} key={index} alt="" /> */}
                  <ShowImage images={item[0]} />
                  <h2 className='show-title'>{item[1]}</h2>
                  <p className='show-auther'>{item[2]}</p>
                  <p className='show-essay'>{item[3]}</p>
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