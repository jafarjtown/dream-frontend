import { LOGIN_FAIL, LOGIN_SUCCESS } from "../constance/authConstance";


export const allAuthsReducer = (state = { token: null, user: null, loginError: undefined, loginSucess: undefined }, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                loginSucess: true,
                loginError: false
            }
           ;
        case LOGIN_FAIL:
            return {
                loginSucess: false,
                loginError: true
            }
            
        default:
            return state
            ;
    }
}