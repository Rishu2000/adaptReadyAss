import React from 'react'
import {useHistory} from 'react-router-dom'

const CheckOut = ({cartItems, setCartItems}) => {

const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
    <div className="container">
        <div className="row pt-3">
            <div style={{display: 'flex', justifyContent:'space-between'}}>
                <div></div>
                <h1 className="text-center">My Cart</h1>
                <div>
                    {/* Created a button to go to the Cart Page. */}
                    <button className="btn btn-primary" 
                        onClick={handleClick}>
                        Products
                    </button>
                </div>
            </div>
            <div className="pt-3" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {/* Products */}
                {cartItems.length > 0 ?cartItems.map((product, key) => (
                    <div key={key} className="p-2 m-2" style={{backgroundColor:"#b3e0ff", borderRadius:"5px", width:"250px"}}>
                        <h5 style={{height:"70px"}}>{product.title}</h5>
                        <img src={product.image} alt="Product1" width="100%" height="300px"/>
                        <div className="pt-2" style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h6><i>Price:</i> {product.price}</h6>
                            <h6><i>Rating:</i> {product.rating.rate}({product.rating.count})</h6>
                        </div>
                        <div className="pt-2" style={{display: 'flex', justifyContent: 'center'}}>
                            <button className="btn btn-danger" style={{height: '40px'}} 
                                // onClick={() => handleCart(product)}
                                >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
                :(
                    <div className="alert alert-info"><h1>Cart is Empty</h1></div>
                )}
            </div>
            {cartItems.length > 0 &&
            (<div className="pt-2"style={{display: 'flex', justifyContent:'center'}}>
                <button className="btn btn-primary btn-lg" style={{width:"150px"}}>
                    Buy
                </button>
            </div>)}
        </div>
    </div>
    )
}

export default CheckOut
