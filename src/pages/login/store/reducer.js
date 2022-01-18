import * as actionTypes from './constants';

const defaultstate = {
    informslogin: false,
    informsdata: [],
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INFORMSDATA:
            return { ...state, informsdata: action.data }
        case actionTypes.CHANGE_Login:{
            return { ...state, informslogin: action.data }
        }
        default:
            return state;
    }
}
export default reducer;