import React from 'react';
import HomeImageShow from './homeImageShow/homeImageShow';

const Home =(props) => {

  const { images } = props
  let index = +(Math.random()*10)
  console.log(index);
  return(
    <>
      <div className="home">
        {/* <HomeImageShow images={images[index]} /> */}
        home
      </div>
    </>
  )
}

export default Home