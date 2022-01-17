import * as actionType from './constants.js';
import { reqinforms } from '../../../api/index.js'

//主页数据
export const changeInformsData = (data) => {
    // console.log("进去成功...............");
    return {
        type: actionType.CHANGE_INFORMSDATA,
        data: data
    }
}

export const getInformsData = () => {
    return (dispatch) => {
        reqinforms()
            .then((res) => {
                console.log(res);
                // dispatch(changeInformsData(res.data.data))
            })
            .catch((e) => {
                console.log('出错了', e);
            }) 
    }
}