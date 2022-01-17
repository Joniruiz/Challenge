
import {types} from '../types/types';

const initialState = {
        searchResult :[],
        keywords: '',
        user:{},
        islogged:false,
}
export default function reducer(state = initialState , action){
    switch (action.type) {
        case types.searchBands:
            return {...state, searchResult :action.payload}
        case types.login:
            return {...state , user:action.payload ,islogged:action.islogged}
        case types.logout:
                return {
                    islogged : false
                }
        default:
            return state
            
    }
}