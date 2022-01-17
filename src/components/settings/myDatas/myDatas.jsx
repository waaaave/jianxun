import React from 'react';
import './myDatas.css'
import lock from '../statics/icons/lock.png'
import { useHistory } from 'react-router-dom';

const MyDatas = () => {

  const history = useHistory()


  return(
    <div className="myDatas">
      <div className="myDatas-inform">
        <ul className='myDatas-ul'>
          <li className='myDatas-li' onClick={() => history.push('/jianxun/login')}  ><img src={ lock } alt="" /><p>账户管理</p></li>
          <li className='myDatas-li'><img src={ lock } alt="" /><p>订单管理</p></li>
          <li className='myDatas-li'><img src={ lock } alt="" /><p>我的评论</p></li>
          <li className='myDatas-li'><img src={ lock } alt="" /><p>我的收藏</p></li>
          <li className='myDatas-li'><img src={ lock } alt="" /><p>我的已读</p></li>
          <li className='myDatas-li'><img src={ lock } alt="" /><p>我的关注</p></li>
          <li className='myDatas-li'><img src={ lock } alt="" /><p>我的粉丝</p></li>
        </ul>
      </div>
    </div>
  )
}

export default MyDatas