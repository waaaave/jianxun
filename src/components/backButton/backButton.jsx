import React from 'react';
import { useHistory } from 'react-router-dom';
import back from './icon/back.png'
import './backButton.css'

const BackButton = () => {

  const history = useHistory()

  return (
    <>
      <div className="backButton">
        <img src={back} onClick={() => history.go(-1)} />
      </div>
    </>
  )
}

export default BackButton