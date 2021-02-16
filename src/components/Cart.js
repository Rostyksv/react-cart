import React from 'react';
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

function Cart( {cartProducts, RemoveFromCart, clearCart, updateCartQty} ) {
    console.log(cartProducts)
    if (!cartProducts.line_items) return 'Loading...';
  return (
    <div className='cart'>
        <p style={{fontSize:'40px', fontWeight:'500', marginBottom:'15px'}}>Your Shopping Cart</p>
            <div className='cart-container'>
            {cartProducts.line_items.map(el => {
                const {id} = el;
                return (
                 <div key={id} className="item">
                    <CartItem cartProduct={el} RemoveFromCart={RemoveFromCart} updateCartQty={updateCartQty}/>
                </div>
                )
            })}
            </div>
            <div className='cart-btm'>
                <h2>Subtotal: {cartProducts.subtotal.formatted_with_code}</h2>
                <div className='cart-btm-btns'>
                    <button onClick={clearCart}>CLEAR CART</button>
                    <Link to='/checkout'><button>CHECKOUT</button></Link>
                </div>
            </div>
    </div>
  );
}

export default Cart;
