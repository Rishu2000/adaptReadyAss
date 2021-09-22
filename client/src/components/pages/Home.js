import React from 'react'

const Home = ({products}) => {
    console.log(products);
    return (
        <div className="container">
            <div className="row pt-3">
                <h1 className="text-center">Products</h1>
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
                                <button className="btn btn-info" style={{height: '40px'}}>Add to Cart</button>
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
