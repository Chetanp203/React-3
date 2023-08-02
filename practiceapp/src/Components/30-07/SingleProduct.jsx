import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../Context/Auth.context';
import {toast} from "react-toastify";


const SingleProduct = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // allusers
    const [currentUserEmail, setCurrentUserEmail] = useState("");  // current user
    const [products, setProducts] = useState([]); // product
    const [singleProducts, setSingleProduct] = useState({});// singleproduct
    const {id}= useParams();
    const router = useNavigate();
    const{state}=useContext(AuthContext);// access login data 
    const[isProductExist,setIsProductExist]=useState(false);
    const[useData,setUserData]=useState({});
const[productData,setProductData]=useState({name:"",price:"",image:"",category:"Other"});
const[allowUpdate,setAllowUpdate]=useState(false)
    // console.log(products, "- products")
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(json => setProducts(json))
    // }, [])

    useEffect(()=> {
        if(state){
            setUserData(state.user);
        }
    },[state]);

    useEffect(()=>{
        const productFromDB = JSON.parse(localStorage.getItem("Products"));
        if(productFromDB){
            setIsProductExist(true);
            setProducts(productFromDB);
            console.log(productFromDB,"-productfromdb")
        }else{
            setIsProductExist(false);
        }
    },[]);

    useEffect(()=>{
        if(isProductExist){
            if(id && products.length){
                console.log(id,"-id")
                const res = products.find((pro)=> pro.id == id);
                console.log(res,"-res")
                setProductData(res);
            }
        }
    },[id,products]);



    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("Current-user"));
        console.log(user, "user")
        if (user) {
            setIsUserLoggedIn(true);
            setCurrentUserEmail(user.email)
        }
    }, [])

    // useEffect(() => {
    //     if (id && products.length) {
    //         const result = products.find((product) => product.id == id);
    //         setSingleProduct(result)
    //     }
    // }, [id, products])


    console.log(productData, "- singleProduct")


    function addCart() {
        if (isUserLoggedIn) {
            const users = JSON.parse(localStorage.getItem("Users"));

            for (var i = 0; i < users.length; i++) {
                if (users[i].email == currentUserEmail) {
                    users[i].cart?.push(productData);
                    localStorage.setItem("Users", JSON.stringify(users));
                    break;
                }
            }
            alert("Added to cart")
            router("/product-from-backend")
        } else {
            alert("Login to add items to cart..")
        }

    }


    return (
        <div >
             
            <div style={{ display: 'flex', justifyContent: "space-evenly", padding: '50' }}>
                <div style={{
                    width: "50%", cursor: 'pointer',
                    padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    <img style={{ width: "45%", border: '1px solid #ccc', padding: '7px', marginBottom: '20px' }} src={productData.image} />
                    <img style={{ width: "45%", border: '1px solid #ccc', padding: '7px', marginBottom: '20px' }} src={productData.image} />
                    <img style={{ width: "90%", border: '1px solid #ccc', padding: '7px', marginBottom: '20px' }} src={productData.image} />
                    <img style={{ width: "30%", border: '1px solid #ccc', padding: '7px', marginBottom: '20px' }} src={productData.image} />
                    <img style={{ width: "30%", border: '1px solid #ccc', padding: '7px', marginBottom: '20px' }} src={productData.image} />
                    <img style={{ width: "30%", border: '1px solid #ccc', padding: '7px', marginBottom: '20px' }} src={productData.image} />
                </div>
                <div style={{ width: "30%", padding: '20px' }}>
                    <h1>{productData.name}</h1>
                    <br />
                    <p>{productData.category}</p>
                    <br />
                    {/* <h5 style={{paddingTop:'30px', paddingBottom:'30px'}}>Description: {singleProduct.description}</h5> */}
                    <span style={{ paddingTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>₹{productData.price}
                        <strike style={{ color: 'grey' }}>-₹{productData.price}</strike><span style={{ color: 'orange' }}>.50% off</span></span>
                    <br />
                    <p style={{ color: 'grey' }}><b>Includes all taxes</b></p>
                    <br />
                    <span>
                        <i className="fa-solid fa-fire fa-xl" style={{ color: '#f18509' }}></i>
                        <span style={{ color: 'orange' }}><b>.433</b></span>
                        <span><b>.People Have Viewed This Product Recently!</b></span>
                    </span>
                    <br />
                    <br />
                    <h4>Sea Green</h4><br />
                    <img src={productData.image} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                    <br />
                    <span>
                        Find your perfect match!
                        <span><b>Ask your Expert Advisor</b></span>
                    </span><br />
                    <br />
                    <h4>Size</h4>
                    <br />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                        <button style={{ width: '18%', height: '40px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }} ><b>Large</b></button>
                        <button style={{ width: '18%', height: '40px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }} ><b>Medium</b></button>
                        <button style={{ width: '18%', height: '40px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }} ><b>Small</b></button>
                        <button style={{ width: '18%', height: '40px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }} ><b>X-Large</b></button>
                        <button style={{ width: '18%', height: '40px', border: '1px solid black', borderRadius: '20px', backgroundColor: 'white' }} ><b>XX-Large</b></button>
                    </div>
                    <p>14 days easy return and exchange applicable for this item</p>
                    <button onClick={addCart} style={{ width: '250px', height: '50px', fontWeight: 'bolder', fontSize: '20px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '5px', margin: '30px 0px' }}>Add to Bag</button>
                    <div style={{ width: '95%', border: '1px solid #ccc', padding: '10px' }}>
                        <p>2 offers</p>
                        <p style={{ color: 'orange' }}><b>FLAT 50% OFF</b></p>
                        <p>Buy Any One Or More Product And Get Flat 50% Off</p>
                        <hr />
                        <h4 style={{ textAlign: 'center' }}>+1 More</h4>

                    </div>

                    <div style={{ width: '95%', border: '1px solid #ccc', padding: '10px', margin: '20px 0px' }}>
                        <h3>Product Details</h3>
                        <br />
                        <h4>Product Description</h4>
                        <p>{productData.description}</p>
                        <div style={{ width: '100%', display: 'flex', margin: '20px 0px' }}>
                            <div>
                                <ul>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}><b>Product Type</b></li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}><b>Country of Origin</b></li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}><b>Length</b></li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}><b>Pack of</b></li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}><b>Fabric</b></li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}><b>Pattern</b></li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}><b>Fit</b></li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}><b>Waist Rise</b></li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}><b>Occasion</b></li>
                                </ul>
                            </div>
                            <div style={{ marginLeft: '30px' }}>
                                <ul>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}>Shorts</li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}>India</li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}>Knee Length</li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}>Single</li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}>Cotton</li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}>Solid</li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}>Regular</li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}>Mid Rise</li>
                                    <li style={{ listStyle: 'none', paddingBottom: '10px' }}>Casual Wear</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div style={{ width: '95%', border: '1px solid #ccc', padding: '10px' }}>
                        <h2>Style Note</h2>

                    </div>
                    <div style={{ width: '95%', border: '1px solid #ccc', padding: '10px' }}>
                        <h2>About Brand</h2>

                    </div>


                    <div style={{width:'100%',border:'1px solid #ccc',padding:'10px'}}>
                        <h3>Delivery Services</h3>
                        <br />
                        <p>View available service for your pincode</p>
                        <div style={{width:'95%',display:'flex'}}>
                            <input type="number" placeholder='410206' style={{width:'70%',height:'40px',border:'1x solid black'}} />
                            <button style={{width:'30%',border:'none',backgroundColor:'black',color:'white',height:'43px'}}>Change</button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleProduct