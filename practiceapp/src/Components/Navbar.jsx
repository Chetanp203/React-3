import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { useContext } from "react";
import { AuthContext } from "../Context/Auth.context";

function Navbar(){
    const {state, login,logout} =useContext(AuthContext);
    // console.log(state,"state from context in navbar")

    const router = useNavigate();
    const [user, setUser] = useState();

    useEffect(()=> {
       if(state?.user){
        setUser(state?.user)
       }else{
        setUser({});
       }
    },[state])

    
    return(
        <div style={{width:'100%', height:'60px',backgroundColor:'purple',color:'white',justifyContent:'space-around',alignItems:'center',display:'flex'}}>
           <div style={{width:'10%'}}>
            <h1 style={{cursor:'pointer'}} onClick={() => router('/')}><em>Awdiz</em></h1>
           </div>
           <div style={{width:'80%', display:'flex',justifyContent:'right',alignItems:'center'}}>
            {user?.email ?
            <>
            <h3 onClick={()=> router('/all-products')}>All Products</h3>
            {user?.role == "Seller" && <h3 onClick={()=> router('/add-products')} style={{cursor:'pointer',marginLeft:'30px'}} >Add Product</h3>}
            {user?.name && <h3 style={{marginLeft:'30px',cursor:'pointer'}} onClick={() => router("/profile")}>Profile-{user?.name}</h3>}
            <h3 onClick={logout} style={{marginLeft:'30px',cursor:'pointer'}}>Logout</h3>
            </>
            :
            <h3 onClick={() => router('/login')}>Login</h3>
               }
           </div>
        </div>
    )
}
export default Navbar