
import React from 'react'

export const Homepage = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-around"}} >
            <Link to="login" >Login</Link>
            <Link to="/register" >Signup</Link>
            <Link to="/post" >PostPage</Link>

        </div>
    )
}
