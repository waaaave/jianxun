import React from 'react';
import { Link } from 'react-router-dom';
import move from './icon/move.png'
import './beginButton.css'

const BeginButton = () => {
  return(
    <div className="beginButton">
      <div className='beginButton-move'><img src={move} alt="" /></div>
      <button className='beginButton-button'><Link to='/jianxun/main' >ιζΊεη―</Link></button>
    </div>
  )
}

export default BeginButton