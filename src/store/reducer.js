import { combineReducers } from 'redux';
import { reducer as mainReducer } from '../pages/Main/store/index'
import { reducer as homeReducer } from '../pages/Home/store/index'
import { reducer as informsReducer } from '../pages/login/store/index'



export default combineReducers({
    main: mainReducer,
    home: homeReducer,
    informs: informsReducer
});