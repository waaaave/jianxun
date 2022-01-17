import React, { useEffect } from 'react'
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import Images from '../../components/showImg/showImg'
import SlideShow from '../../components/slideShow/slideShow'
import BackButton from '../../components/backButton/backButton.jsx';



const Main = (props) => {
  const { maindata } = props
  const { getMainDataDispatch } = props

  const { essays = [] } = maindata


  useEffect(() => {
    if (!maindata.length) {
      getMainDataDispatch()
    }
  }, [])

  return (
    <>

      <div>
        <BackButton />

        <SlideShow abcd={essays} />

      </div>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    maindata: state.main.maindata
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getMainDataDispatch() {
      dispatch(actionTypes.getMainData())
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Main)