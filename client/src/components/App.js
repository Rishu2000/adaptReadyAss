import React, {useState, useEffect} from 'react'
import "../styles/App.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
    <Router>
      <Switch>
        <Route path="/checkOut">
          <h1>Check out Page</h1>
        </Route>
        <Route path="/" exact>
          <h1>Home Page</h1>
        </Route>
      {/* <div>
        {products?JSON.stringify(products):"eerg"}
      </div> */}
      </Switch>
    </Router>
  )
}

export default App