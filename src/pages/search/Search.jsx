import React from 'react';
import BackButton from '../../components/backButton/backButton'
import './search.css'
import search from './images/search.jpg'

const Search = () => {
  return(
    <>
      <div className="search-box">
        <div className="search-head">
          <BackButton/>
          <p>搜索</p>
        </div>
        <div className="search-show">
          <img src={search} alt="" />
        </div>
      </div>
    </>
  )
}

export default Search