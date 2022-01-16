
import {useState, useEffect} from 'react'

function useFecth (url){
    const [state,setState] = useState({
        loading: true,
        bands:null
    })

    useEffect(() => {
        setState({
            loading:true,
            data:null
        })

        try {
           fetch(url)
           .then(response => response.json())
           .then( data => {
               setState({
                   loading:false,
                   bands: data
               })
           
           })
            
        } catch (error) {
            console.log(error)
        }

    }, [url])
    return state
}

export default useFecth;