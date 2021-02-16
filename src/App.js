import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { commerce } from './lib/commerce'
import Navbar from './components/Navbar';
import Items from './components/Items';
import Cart from './components/Cart';
import Checkout from './components/Checkout/Checkout';
function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setLoading(false);
  }
  const fetchCartProducts = async () => {
    setCartProducts(await commerce.cart.retrieve());
  }

  const AddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCartProducts(item.cart);
  };

  const RemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCartProducts(response.cart);
  };
  const clearCart = async () => {
    const response = await commerce.cart.empty();

    setCartProducts(response.cart);
  };

  const updateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCartProducts(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCartProducts();
  }, [])

  console.log(cartProducts);

  if(loading) {
    return(
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
  }

  return (
    <Router>
      <div className='App'>
        <Navbar cartProducts={cartProducts}/>
        <div className="bgcolor">
        <Switch>
          <Route exact path='/'>
            <Items products={products} AddToCart={AddToCart}/>
          </Route>
          <Route exact path='/cart'>
            <Cart cartProducts={cartProducts} RemoveFromCart={RemoveFromCart} clearCart={clearCart} updateCartQty={updateCartQty} />
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
