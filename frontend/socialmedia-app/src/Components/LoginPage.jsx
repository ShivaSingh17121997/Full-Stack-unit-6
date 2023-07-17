import React, { useReducer } from 'react'
import axios from "axios"

function LoginPage() {
    let [state, dispatch] = useReducer(reducer,initialstate)
    const {email,password} = state
    const BaseUrl = process.env.React_APP_URL;

    const handlesubmit = (e) =>{
        e.peventDefault();
        axios.post(`${BaseUrl}/users/login`,state)
        .then((res)=>{
            console.log(res)
            localStorage.setItem("token",res.data.token)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handlesubmit} >
                email:- <input type="email" onChange={(e) => dispatch({ type: email, payload: e.target.value })} />
                password:- <input type="password" onChange={(e) => dispatch({ type: password, payload: e.target.value })} />
                <input type="submit" />
            </form>

        </div>
    )
}

export default LoginPage