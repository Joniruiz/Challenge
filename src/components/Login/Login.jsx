import React,{useState,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { useDispatch,useSelector } from 'react-redux'
import {login} from '../../actions/actions'

const Login = () => {

    const [user, setUser] = useState({})
    const dispatch = useDispatch()

    const {register,errors,handleSubmit} = useForm()

    
    const onSubmit = (data) =>{
        setUser(data)
    }
    useEffect(() => {
        dispatch(login(user))   
    }, [user])
    
      
    
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                   
                <section className="flex justify-center items-center h-screen bg-gray-800">
                        <div className="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
                    <div className="mb-4">
            <p className="text-gray-400">Sign In</p>
            
        </div>
        <div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type='text'
                name='email' placeholder='Email'
                {...register('email',{required:true
                }
                )}
            />
        </div>
        <div>
            <input className="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Password"  {...register ('password',{
                    required:true,})}
            />
        </div>
        <div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
        </div>
    </div>
</section>
</form>
        </div>
    )
}

export default Login
