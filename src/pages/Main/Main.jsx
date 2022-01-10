import React, { useEffect } from 'react'
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import ShowImage from '../../components/showImg/showImg'


const Main = (props) => {

  const {maindata}  = props
  const {getMainDataDispatch}  = props

  const { images=[] } = maindata

  console.log(maindata);

  useEffect(()=>{
    if (!maindata.length) {
      getMainDataDispatch()
    }
  },[])

  return (
    <>
      <Scroll
        direction={"vertical"}
        refresh={false}
      >
        <div>
        <ShowImage images={images}/>
        </div>
      </Scroll>

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