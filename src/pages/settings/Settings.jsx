import React, { memo } from 'react';
import { connect } from 'react-redux';
import Informs from '../../components/settings/informs/informs.jsx'
import MyDatas from '../../components/settings/myDatas/myDatas.jsx'
import BackButton from '../../components/backButton/backButton.jsx';

import './Settings.css'

const Settings = () => {
  return (
    <div className='settings'>
      <BackButton />

      <Informs />
      <MyDatas />
    </div>
  )
}

// const mapStatrToProps = (state) => {
//   return {
//     data: state.home.homedata
//   }
// }

// const mapStatrToDispatch = () => {
//   return{
//     getHomeDataDispatch(){
//       dispatch(actionTypes.getHomeData())
//     }
//   }
// }

// export default connect{ mapStatrToProps, mapStatrToDispatch } (memo(Login))
export default Settings