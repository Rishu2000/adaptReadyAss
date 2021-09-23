import React from 'react'
import {useHistory} from 'react-router-dom'

const Home = ({products, cartItems, setCartItems}) => {
    // console.log(products);

const history = useHistory();

// Handle the click event to go to the Cart Page
const handleClick = (e) => {
    e.preventDefault();
    history.push('/checkOut');
}

const handleCart = (product) => {
    const {image, price, rating, title, id} = product;
    setCartItems([...cartItems, {image, price, rating, title, id}]);
}

    return (
        <div className="container">
            <div className="row pt-3">
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <div></div>
                    <h1 className="text-center">Products</h1>
                    <div>
                        {/* Created a button to go to the Cart Page. */}
                        <button className="btn btn-primary" onClick={handleClick}>
                            My Cart
                        </button>
                    </div>
                </div>
                <div className="pt-3" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    {/* Products */}
                    {products?products.map((product, key) => (
                        <div key={key} className="p-2 m-2" style={{backgroundColor:"#b3e0ff", borderRadius:"5px", width:"250px"}}>
                            <h5 style={{height:"70px"}}>{product.title}</h5>
                            <img src={product.image} alt="Product1" width="100%" height="300px"/>
                            <div className="pt-2" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <h6><i>Price:</i> {product.price}</h6>
                                <h6><i>Rating:</i> {product.rating.rate}({product.rating.count})</h6>
                            </div>
                            <div className="pt-2" style={{display: 'flex', justifyContent: 'center'}}>
                                <button className="btn btn-info" style={{height: '40px'}} 
                                    onClick={() => handleCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                    :(
                        <h1>No Products found.</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home
