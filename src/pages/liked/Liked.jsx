import React, { useRef } from 'react';
import BackButton from '../../components/backButton/backButton'
import { Link } from 'react-router-dom';
import myliked from './images/myliked.jpg'
import likeds from './images/likeds.jpg'
import './Liked.css'

const Liked = () => {

  const likedsRef = useRef()
  const mylikedRef = useRef()

  const show1 = () => {
    likedsRef.current.style.display='block'

    mylikedRef.current.style.display='none'
  }

  const show2 = () =>{
    likedsRef.current.style.display='none'
    mylikedRef.current.style.display='block'
  } 

  return(
    <>
      <div className="liked-box">
        <div className="liked-head">
          <BackButton />
          <p>收藏</p>
        </div>
        <div className="liked-top-bar">
          <ul>
            <li ><Link onClick={show2}>我的收藏</Link></li>
            <li ><Link onClick={show1}>我赞过的</Link></li>
          </ul>
        </div>
          <div className="liked-show">
            <img src={myliked} alt="" ref={mylikedRef} />
            <img src={likeds} alt="" ref={likedsRef} />
          </div>
      </div>
    </>
  )
}

export default Liked