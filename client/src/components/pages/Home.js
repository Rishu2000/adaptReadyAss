import React from 'react'

const Home = () => {
    return (
        <div className="container">
            <div className="row pt-3">
                <h1 className="text-center">Products</h1>
                <div className="pt-3">
                    <div className="p-2 w-25" style={{backgroundColor:"#b3e0ff", borderRadius:"5px"}}>
                        <h5>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product1" width="100%"/>
                        <div className="pt-2" style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h6><i>Price:</i> 109.95</h6>
                            <h6><i>Rating:</i> 3.9(120)</h6>
                        </div>
                        <div className="pt-2" style={{display: 'flex', justifyContent: 'center'}}>
                            <button className="btn btn-info" style={{height: '40px'}}>Add to Cart</button>
                        </div>
                        <h6 className="pt-2">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
