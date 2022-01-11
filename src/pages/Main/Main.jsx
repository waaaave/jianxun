import React, { useEffect } from 'react'
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import Images from '../../components/showImg/showImg'
import SlideShow from '../../components/slideShow/slideShow'


const Main = (props) => {
  const {maindata}  = props
  const {getMainDataDispatch}  = props

  const { images=[] } = maindata


  useEffect(()=>{
    if (!maindata.length) {
      getMainDataDispatch()
    }
  },[])

  return (
    <>
      
        <div>
          <SlideShow images={images} />
        
        </div>

    </>
  )
}

const mapStatrToProps = (state) => {
  return {
    maindata: state.main.maindata
  }
}

const mapStatrToDispatch = (dispatch) => {
  return{
    getMainDataDispatch(){
      dispatch(actionTypes.getMainData())
    }
  }
}

export default connect(mapStatrToProps, mapStatrToDispatch)(Main)