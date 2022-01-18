import React from 'react';
import './readed.css'

const ReadedComponent = (props) => {
  const { essays } = props

  return (
    <>
      <div className="readed-component">
      <div className="readed-box">
        <div className="box-img">
          <img src={essays[0]} alt="" />
        </div>
        <div className="box-title">
          <p>{essays[1]}</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default ReadedComponent