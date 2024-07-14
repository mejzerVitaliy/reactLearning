import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import CreatePostBtn from '../components/UI/button/CreatePostBtn'
import { AuthContext } from '../context'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)


    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    
    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={login}>
                <MyInput type='text' placeholder='login' />
                <MyInput type='password' placeholder='password' />
                <CreatePostBtn type="submit">Log in</CreatePostBtn>
            </form>
        </div>
        
    )
}

export default Login