
import { Link } from 'react-router-dom'

export const Homepage = () => {

  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <Link to="/login" >Login</Link>
            <Link  to="/register" >Signup</Link>
            <Link to="/post">PostPage</Link>
        </div>
     

    </div>
  )
}
