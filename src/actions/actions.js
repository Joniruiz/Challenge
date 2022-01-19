
import { types } from "../types/types";

export const allBands =() => async (dispatch) =>{
    try {
        const res = await fetch('https://my-json-server.typicode.com/improvein/dev-challenge/bands')
        const data = await res.json()
        dispatch({
            type:types.allBands,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

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

export const login = (user) => {
    return async(dispatch) =>{
        try {
           const res = await fetch(`http://localhost:3000/users`)
            const users = await res.json()
           const usuario =  users.find( element => element.email === user.email)
            if(usuario.password === user.password){
                sessionStorage.setItem('customer',JSON.stringify(usuario))
               dispatch({
                   type: types.login,
                   payload: usuario,
                   islogged:true
               })
           }
        } catch (error) {
            console.log(error)
        }
        
    }
}

 export const filter = (result) => async(dispatch) =>{
    try {
        dispatch({
            type: types.filter,
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
}

export const cleanSearch  = () => async (dispatch) =>{
    dispatch({
        type: types.cleanSearch,
        payload:[]
    })
} 