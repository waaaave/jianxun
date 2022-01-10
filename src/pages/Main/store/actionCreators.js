import * as actionType from './constants.js';
import { reqmain } from '../../../api/index.js'

//主页数据
export const changeMainData = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.CHANGE_MAINDATA,
        data: data
    }
}

export const getMainData = () => {
    return (dispatch) => {
        reqmain()
            .then((res) => {
                // console.log(res);
                dispatch(changeMainData(res.data.data))
            })
            .catch((e) => {
                console.log('出错了', e);
            }) 
    }
}