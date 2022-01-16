import { types } from "../types/types";

export const search = (keywords) => {
    return async (dispatch) =>{
    try {
        const res = await fetch(`https://my-json-server.typicode.com/improvein/dev-challenge/bands?q=${keywords}`)
        const data = await res.json()
        console.log(data)
        dispatch({
            type: types.searchBands,
            payload : data,
            keywords
        })
    } catch (error) {
        console.log(error)
    }
}
}