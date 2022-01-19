import React, { memo, useEffect } from 'react';
import * as actionTypes from './store/actionCreators'
import BackButton from '../../components/backButton/backButton.jsx';
import { connect } from 'react-redux';
import logo from './images/logo.png';
import './Login.css'

const Login = (props) => {
  const { informsdata} = props
  let { isLogin } = informsdata
  const { getInformsDataDispatch, setIsLoginDataDispatch } = props

  useEffect(() => {
    if (!informsdata.length) {
      getInformsDataDispatch()
    }
  }, [])


  const changeLogin = (data) => {
    setIsLoginDataDispatch(data)
  }

  return (
    <>
      <BackButton />
      <img src={logo} alt="" />
      <div className="login-container" onClick={()=>changeLogin(isLogin)}>
        {
          isLogin ?
            <div className="button" >
              <p>已经登录了</p>
              <button>注销</button >
            </div>
            : <div className="button">
              <p>点击登录</p>
              <button >登录</button >
            </div>
        }
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    informsdata: state.informs.informsdata,
    informslogin: state.informs.informslogin
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    getInformsDataDispatch() {
      dispatch(actionTypes.getInformsData())
    },
    setIsLoginDataDispatch(data) {
      dispatch(actionTypes.setIsLoginData(data))
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Login)