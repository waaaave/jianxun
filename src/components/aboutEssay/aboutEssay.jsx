import React from 'react'
import  './aboutEssay.css'

// console.log(title);

const AboutEssay = (props) => {
  return(
    <div className='main'>
      <h3>{props.title}</h3>
      <h5>{props.auther}</h5>
      <p>{props.essay}</p>
    </div>
  )
}

export default AboutEssay