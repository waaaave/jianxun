import React, { useEffect, useRef } from 'react';
import yidu from './icon/yidu.png'
import shoucang from './icon/shoucang.png'
import pinglun from './icon/pinglun.png'
import sousuo from './icon/sousuo.png'

import './mainInform.css'
import { useHistory } from 'react-router-dom';


const MainInform = () => {

  const history = useHistory()

  const toReaded = () => {
    history.push('/jianxun/readed')
  }

  const toLiked = () => {
    history.push('/jianxun/liked')
  }

  const toComments = () => {
    history.push('/jianxun/comments')
  }

  const toSearch = () => {
    history.push('/jianxun/search')
  }

  return (
    <div className='mainInform'>
      <div className='mainInform-base' >
        <div className='mainInform-nav' onClick={toReaded}>
          <img src={yidu} alt="" />
          <p>已读</p>
        </div>

        <div className='mainInform-nav'>
          <img src={shoucang} alt="" onClick={toLiked} />
          <p>收藏</p>
        </div>

        <div className='mainInform-nav'>
          <img src={pinglun} alt="" onClick={toComments} />
          <p>评论</p>
        </div>

        <div className='mainInform-nav'>
          <img src={sousuo} onClick={toSearch}/>
          <p>搜索</p>
        </div>
      </div>
    </div>
  )
}

export default MainInform