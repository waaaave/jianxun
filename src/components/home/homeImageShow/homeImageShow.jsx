import React from 'react';

const HomeImageShow =(props) => {

  const { images } = props

  return(
    <>
      <div className="home">
        <img src={images} alt="" />
      </div>
    </>
  )
}

export default HomeImageShow