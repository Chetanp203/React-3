import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const AddProducts = () => {

    const [productData, setProductData] = useState({name:"", price:"",image:"",category:"Others"});
    const router = useNavigate();

    const handleChange= (event) => {
       setProductData({...productData, [event.target.name] : event.target.value})
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        if(productData.name && productData.price && productData.image && productData.category){
            const productArray = JSON.parse(localStorage.getItem("Products")) || [];

           
            productArray.push(productData);
            localStorage.setItem("Products", JSON.stringify(productArray));
            setProductData({name:"", price:"",image:"",category:"Others"})
            alert("Product added successfully")
            router('/all-products')
        } else {
            alert("All fields mandatory")
        }
    }
    
    function slelectRole(event){
        // console.log(event.target.value,"-role");
        setProductData({...productData,["category"]: event.target.value})
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Current-user"))
        if (user){
            if (user && user?.role == "Buyer") {
                alert("You are not a seller")
                router('/login')
            }
            } else {
                alert("You are not logged in!!")
                router('/login')
            }
    }, [])
    return (
        <div>
            <h1>AddProducts</h1>
             <form  onSubmit={handleSubmit} style={{border:'1px solid black',fontSize:'30px',padding:'50px',margin:'auto'}}>
            <label >Product Name:</label><br />
            <input value={productData.name} type="text" name='name'  onChange={handleChange} style={{width:'250px',height:'40px'}}/><br />
           <label>Product Category:</label><br />
            <select onChange={slelectRole} style={{width:'250px',height:'40px'}}>
                <option value="Others">Others</option>
                <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Kids">Kids</option>
                <option value="Furniture">Furniture</option>
                <option value="Beauty">eauty</option>
                <option value="Electronics">Electronics</option>
            </select>
            <br />

            <label >Product Price:</label><br />
            <input value={productData.price} type="number" name='price' onChange={handleChange} style={{width:'250px',height:'40px'}}/><br />
            <label >Product Image: </label><br />
            <input value={productData.image} type="text" name='image' onChange={handleChange} style={{width:'250px',height:'40px'}}/><br />
            <input type="submit" value="Add Product" style={{width:'250px',height:'40px',backgroundColor:'purple',border:'none',borderRadius:'5px',color:'white',marginTop:'20px'}} /><br />
           
        </form>
        </div>
    )
}

export default AddProducts