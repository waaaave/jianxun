import * as actionType from './constants.js';
import { reqhome } from '../../../api/index.js'

//主页数据
export const changeHomeData = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.CHANGE_HOMEDATA,
        data: data
    }
}

export const getHomeData = () => {
    return (dispatch) => {
        reqhome()
            .then((res) => {
                // console.log(res);
                dispatch(changeHomeData(res.data.data))
            })
            .catch((e) => {
                console.log('出错了', e);
            }) 
    }
}