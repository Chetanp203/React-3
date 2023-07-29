import React, { useContext } from 'react'
import{AuthContext} from './../Context/Auth.context'

const Home = () => {
  const {state,logout} =useContext(AuthContext);
  return (
    <div style={{textAlign:'center'}}>Hello-{state?.user?.name}
    <br />
    <h2>Home</h2>
    {/* <button onClick={logout}>Logout
    </button> */}
    </div>
  )
}

export default Home