import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators'
import './Readed.css'
import ReadedComponent from '../../components/readed/readed.jsx'
import BackButton from '../../components/backButton/backButton';

const Readed = (props) => {

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
      <div className='head'>
        <BackButton/>
        <p>已读</p>
      </div>
      <div className="readed-pages">
        {
          essays.map((item) => {
            return (
              <div className="readed-boxs" key={item[4]}>
                <ReadedComponent essays={item} />
              </div>
            )
          })
        }
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

export default connect(mapStateToProps, mapStateToDispatch)(Readed)