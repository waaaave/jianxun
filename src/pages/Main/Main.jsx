import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import SlideShow from '../../components/slideShow/slideShow'
import LazyLoad from 'react-lazyload'
import BackButton from '../../components/backButton/backButton.jsx';
import Comment from '../../components/comment/comment'



const Main = (props) => {
  const { maindata } = props
  const { getMainDataDispatch } = props

  const [isShowComment, setIsShowComment] = useState(false)


  const { essays = [] } = maindata


  useEffect(() => {
    if (!maindata.length) {
      getMainDataDispatch()
    }
  }, [])

  const openPinglun = () => {
    setIsShowComment(!isShowComment)
  }


  return (
    <>

      <div>
        <BackButton />
        <LazyLoad>
          <SlideShow abcd={essays} openPinglun={openPinglun} />
        </LazyLoad>
        {/* <div className="comments-box"> */}
          {isShowComment ? <Comment openPinglun={openPinglun}  /> : ''}
        {/* </div> */}

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