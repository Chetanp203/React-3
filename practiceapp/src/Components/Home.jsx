import React, { useContext } from 'react'
import{AuthContext} from './../Context/Auth.context'

const Home = () => {
  const {state,logout} =useContext(AuthContext);
  return (
    <div style={{textAlign:'center'}}>Home{state?.user?.name}
    <br />
    {/* <button onClick={logout}>Logout
    </button> */}
    </div>
  )
}

export default Home