import React, {useState, useEffect} from 'react'
import "../styles/App.css"

const App = () => {

const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
    const data = await fetch('./products.json');
    const productsData = await data.json();
    setProducts(productsData);
  }
  fetchProducts();
},[])

  return (
    <div>
      {products?JSON.stringify(products):"eerg"}
    </div>
  )
}

export default App