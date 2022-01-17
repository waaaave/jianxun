import * as actionTypes from './constants';

const defaultstate = {
    informsdata: [],
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_INFORMSDATA:
            return {...state, informsdata: action.data }
        default:
            return state;
    }
}
export default reducer;