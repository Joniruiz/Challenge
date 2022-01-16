import {types} from '../types/types';

const initialState = {
        searchResult :[],
        keywords: ''
}
export default function reducer(state = initialState , action){
    switch (action.type) {
        case types.searchBands:
            return {...state, searchResult :action.payload}
        default:
            return state
            
    }
}