import React from 'react';
import HomeImageShow from './homeImageShow/homeImageShow';
import BeginButton from './beginButton/beginButton'

const Home =(props) => {
  const { images=[] } = props
  let base = parseInt(Math.random()*10)
  
  

  return(
    <>
      <div className="home">
        <HomeImageShow base={base} images={images} />
        <BeginButton/>
        
      </div>
    </>
  )
}

export default Home