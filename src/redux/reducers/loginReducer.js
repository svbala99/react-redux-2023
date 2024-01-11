import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/loginAction";

const initState = {
    loading: false,
    data:null
}

const loginReducer = (state= initState, action={}) => {
    switch(action?.type){
        case LOGIN_REQUEST:{
            return{
                ...state, loading:true
            }
        };

        case LOGIN_SUCCESS:{
            return{
                ...state,loading:false, data: action?.response
            }
        };

        case LOGIN_ERROR:{
            return{
                ...state,
                loading:false
            }
        };

        default:{
            return{
                ...state
            }
        }
    }
}

export default loginReducer;