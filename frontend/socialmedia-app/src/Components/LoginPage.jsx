import React, { useReducer } from 'react'
import axios from "axios"
let initalstate = {
    email: "", password: ""
}
const reducer = (state = initalstate, action) => {

    switch (action.type) {

        case "Email": {
            return {
                ...state,
                email: action.payload
            }
        }
        case "Password": {
            return {
                ...state,
                password: action.payload
            }
        }

        default: {
            return state
        }
    }
}

export const LoginPage = () => {
    let [state, dispatch] = useReducer(reducer, initalstate)
    const { email, password } = state
    const BaseUrl = process.env.REACT_APP_URL;
    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post(`${BaseUrl}/users/login`, state)
            .then((res) => {
                console.log(res)
                localStorage.setItem("token", res.data.token)
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return (
        <div>
            <h1>LoginPage</h1>
            <form onSubmit={handlesubmit}>
                Email :- <input type="text" onChange={(e) => dispatch({ type: "Email", payload: e.target.value })} name='email' value={email} placeholder='email' /> <br />
                Password :- <input type="text" onChange={(e) => dispatch({ type: "Password", payload: e.target.value })} name='password' value={password} placeholder='Password' /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}
