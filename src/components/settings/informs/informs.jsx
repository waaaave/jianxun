import React from 'react';
import './informs.css'
import avat from '../statics/images/black_smile.jpg'
import { useHistory } from 'react-router-dom';

const Informs = () => {

  const history = useHistory()

  return (
    <div className='informs'>
      <div className='loginInform'>
        <div className="loginInform-avatar">
          <img src={avat} alt="" onClick={() => history.push('/jianxun/login')} />
        </div>
        <div className="loginInform-words">
          <div className="loginInform-userName">
            <p>未登录简讯</p>
          </div>
          <div className="loginInform-userID">
            <p>点击头像立即登录</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Informs