import axios from 'axios'
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../constance/authConstance";
import absoluteURL from 'next-absolute-url'

export const test = (req) => async(dispatch) => {
    try {
        const  {origin} = absoluteURL(req)
        const data = 'hello'
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error
        })
    }
}

// export const register = (req, { ...data }) => async (dispatch) => {
//     try {
//         return
//     } catch (error) {
//         return
//     }
// }