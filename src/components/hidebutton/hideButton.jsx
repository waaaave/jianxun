import React from 'react';
import { useHistory } from 'react-router-dom';
import back from './icon/back.png'
import './hideButton.css'

const HideButton = (props) => {
  // console.log(props)
  const { openPinglun } = props


  return (
    <>
      <div className="hideButton" onClick={openPinglun}>
        <img src={back}  />
      </div>
    </>
  )
}

export default HideButton