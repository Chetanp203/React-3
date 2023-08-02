import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: "Buyer",cart:[] });
    console.log(userData, "-userdata")
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            const array = JSON.parse(localStorage.getItem("Users")) || [];

            // const userDataObj = {
            //     name: userData.name,
            //     email: userData.email,
            //     password: userData.password,
            //     cart:[]
            // };
            array.push(userData);
            localStorage.setItem("Users", JSON.stringify(array));
            alert("Registration Successfull!!!")
            router('/login')
        } else {
            alert("All fields mandatory")
        }
    }

    function slelectRole(event) {
        console.log(event.target.value, "-role");
        setUserData({ ...userData, ["role"]: event.target.value })
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} style={{ border: '1px solid black', width: '250px', backgroundColor: 'yellow', fontSize: '30px', padding: '50px', margin: 'auto' }}>
                <label >Name:</label><br />
                <input type="text" name='name' onChange={handleChange} style={{ width: '250px', height: '40px' }} /><br />
                <label>Login Type:</label><br />
                <select onChange={slelectRole} style={{ width: '250px', height: '40px' }}>
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                </select>
                <br />

                <label >Email:</label><br />
                <input type="text" name='email' onChange={handleChange} style={{ width: '250px', height: '40px' }} /><br />
                <label >Password: </label><br />
                <input type="text" name='password' onChange={handleChange} style={{ width: '250px', height: '40px' }} /><br />
                <input type="submit" value="Register" style={{ width: '250px', height: '40px', backgroundColor: 'red', border: 'none', borderRadius: '5px', color: 'white', marginTop: '20px' }} /><br />
                <span>Already have an account?<span onClick={() => router("/login")} style={{ cursor: 'pointer' }}><b>Login here</b></span></span>
            </form>
        </div>
    )
}

export default Register