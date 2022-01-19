import * as actionTypes from './constants';

const defaultstate = {
    informsdata: [],
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        
        case actionTypes.CHANGE_INFORMSDATA:
            return { ...state, informsdata: action.data }
        case actionTypes.CHANGE_LOGIN:
            return { ...state,  informsdata: {
                ...state.informsdata,
                isLogin: !state.informsdata.isLogin
            }}
        
        default:
            return state;
    }
}
export default reducer;