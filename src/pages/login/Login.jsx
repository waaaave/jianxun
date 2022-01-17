import React, { memo, useEffect } from 'react';
import * as actionTypes from './store/actionCreators'
import BackButton from '../../components/backButton/backButton.jsx';
import { connect } from 'react-redux';
import logo from './images/logo.png';
import './Login.css'

const Login = (props) => {
console.log(props,'aaaaaaaaaaaaaaaaaaaaaaaaaa');
  const { informsdata  } = props
  // const { informsdata } = informs
  const { userInforms = [] } = informsdata
  const { getInformsDataDispatch, setIsLoginDataDispatch  } = props

  const isLogin = userInforms[0]? userInforms[0].isLogin:null
  // const { isLogin } = userInforms
// console.log(isLogin,'111111111111111111111111111');
  useEffect(() => {
    if (!informsdata.length) {
      getInformsDataDispatch()
    }
  }, [])


  const changeLogin = () => {
    setIsLoginDataDispatch(!isLogin)
  }

  return(
    <>
      <BackButton/>
      <img src={logo} alt="" />
    <div className="login-container" onClick={()=>changeLogin()}>
    {
      isLogin? 
        <div className="button" >
          <p>已经登录了</p>
          <button >注销</button >
        </div>
        :<div className="button">
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
    informsdata: state.informs.informsdata
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