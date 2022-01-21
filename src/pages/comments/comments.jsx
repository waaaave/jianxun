import React from 'react';
import BackButton from '../../components/backButton/backButton'
import './comments.css'
import comments from './images/comments.jpg'

const Comments = () => {
  return(
    <>
      <div className="comments-box">
        <div className="comments-head">
          <BackButton/>
          <p>我的评论</p>
        </div>
        <div className="comments-show">
          <img src={comments} alt="" />
        </div>
      </div>
    </>
  )
}

export default Comments