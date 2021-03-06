import React, {useState, useEffect} from 'react'
import "../styles/App.css"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CheckOut from './pages/CheckOut';
import Home from './pages/Home';

const App = () => {

const [user, setUser] = useState(null);
const [products, setProducts] = useState([]);
const [cartItems, setCartItems] = useState([]);

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
          <CheckOut user={user} setUser={setUser} cartItems={cartItems} setCartItems={setCartItems}/>
        </Route>
        <Route path="/" exact>
        {/* Created seprate Compenents for Home Pages. */}
        {/* Passed the state products to the Home Component. */}
          <Home user={user} setUser={setUser} products={products} cartItems={cartItems} setCartItems={setCartItems}/>
        </Route>
      {/* <div>
        {products?JSON.stringify(products):"eerg"}
      </div> */}
      </Switch>
    </Router>
  )
}

export default App