import React, {useState, useEffect} from 'react'
import "../styles/App.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CheckOut from './pages/CheckOut';
import Home from './pages/Home';

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
        {/* Created seprate Compenents for Check Out Pages. */}
          <h1><CheckOut/></h1>
        </Route>
        <Route path="/" exact>
        {/* Created seprate Compenents for Home Pages. */}
          <h1><Home/></h1>
        </Route>
      {/* <div>
        {products?JSON.stringify(products):"eerg"}
      </div> */}
      </Switch>
    </Router>
  )
}

export default App