import * as actionTypes from './constants';

const defaultstate = {
    homedata: [],
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOMEDATA:
            return {...state, homedata: action.data }
        default:
            return state;
    }
}
export default reducer;