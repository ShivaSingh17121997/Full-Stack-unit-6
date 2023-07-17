import React, { useReducer } from 'react'
import axios from "axios"
let initalstate={
name:"",email:"",gender:"",password:"",is_married:"",city:"",age:""
}
const reducer=(state=initalstate,action)=>{

    switch(action.type){
        case "Name" :{
            return {
                ...state,
                name:action.payload
            }
        }
        case "Email" :{
            return {
                ...state,
                email:action.payload
            }
        }
        case "Password" :{
            return {
                ...state,
                password:action.payload
            }
        }
        case "Gender" :{
            return {
                ...state,
                gender:action.payload
            }
        }
        case "Age" :{
            return {
                ...state,
                age:action.payload
            }
        }
        case "City" :{
            return {
                ...state,
                city:action.payload
            }
        }
        case "is_married" :{
            return {
                ...state,
                is_married:action.payload
            }
        }
        default:{
            return state
        }
    }
}
export const SignupPage = () => {
    let [state,dispatch]=useReducer(reducer,initalstate)
    const {name,email,gender,password,age,city,is_married}=state
    const BaseUrl =process.env.REACT_APP_URL;
    const handlesubmit=(e)=>{
     e.preventDefault()
    axios.post(`${BaseUrl}/users/register`,state)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })

    }
  return (
    <div>
        <h1>SignupPage</h1>
        <form onSubmit={handlesubmit}>
           name :- <input type="text"  onChange={(e)=>dispatch({type:"Name",payload:e.target.value})} name='name' value={name} placeholder='Name' /> <br />
           Email :- <input type="text"  onChange={(e)=>dispatch({type:"Email",payload:e.target.value})} name='email' value={email} placeholder='email' /> <br />
           Password :- <input type="text"  onChange={(e)=>dispatch({type:"Password",payload:e.target.value})} name='password' value={password} placeholder='Password' /> <br />
           Gender:- <input type="text"  onChange={(e)=>dispatch({type:"Gender",payload:e.target.value})} name='gender' value={gender} placeholder='Gender' /> <br />
           Age:- <input type="text"  onChange={(e)=>dispatch({type:"Age",payload:e.target.value})} name='age' value={age} placeholder='age' /> <br />
           City:- <input type="text"  onChange={(e)=>dispatch({type:"City",payload:e.target.value})} name='city' value={city} placeholder='city' /> <br />
           married:- <input type="text"  onChange={(e)=>dispatch({type:"is_married",payload:e.target.value})} name='is_married' value={is_married} placeholder='is_married' /> <br />
           <input type="submit" /> 
        </form>
    </div>
  )
}
