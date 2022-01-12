import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import Homes from '../../components/home/home'


const Home = (props) => {
  const { homedata }  = props
    console.log(homedata,'1111111111111111111111111111');

  const {getHomeDataDispatch}  = props

  // const { images=[] } = homedata


  useEffect(()=>{
    if (!homedata.length) {
      getHomeDataDispatch()
    }
  },[])

  return (
    <>
      
        <div>
          {/* <Homes images={images} /> */}
          home
        </div>

    </>
  )
}

const mapStatrToProps = (state) => {
  return {
    homedata: state.main.homedata
  }
}

const mapStatrToDispatch = (dispatch) => {
  return{
    getHomeDataDispatch(){
      dispatch(actionTypes.getHomeData())
    }
  }
}

export default connect(mapStatrToProps, mapStatrToDispatch)(Home)