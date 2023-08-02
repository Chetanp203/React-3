import React, { useEffect, useState } from 'react'
import "./../29-07/AllProducts.css"
import { useNavigate} from 'react-router-dom';

const AllProducts = () => {

    const [productPresent, setProductPresent] = useState(false);
    const [products, setProducts] = useState();
    const router = useNavigate(); 
    



    useEffect(() => {

        const productsFromDB = JSON.parse(localStorage.getItem("Products"))
        if (productsFromDB) {
            setProductPresent(true);
            setProducts(productsFromDB);
        } else {
            setProductPresent(false);
        }
    }, [])

    const redirect = (id) => {
        console.log(id,"-id")
        // alert('working..')
        router(`/single-product/${id}`)

    }
    return (
        <div className='prod-page'>
            {!productPresent ? <div>No Products</div>
                :
                <div className='pro-container'>
                    {products && products.map((pro) => (
                        <div key={pro.name} className='pro-card' onClick={() => redirect(pro.id)}>
                            <img src={pro.image} />
                            <h3>{pro.name}</h3>
                            <p>{pro.category}</p>
                            <h3>$.{pro.price}</h3>


                        </div>
                    ))}
            </div>
            }


        </div>
    )
}

export default AllProducts