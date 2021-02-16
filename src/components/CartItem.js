import React from 'react';

function CartItem( {cartProduct, RemoveFromCart, updateCartQty} ) {
    const {id, description, media, name, price, quantity} = cartProduct;

    return (
        <div className="item-container">
            <div className='img-cont'> <img src={media.source}></img> </div>
                <div className='item-info'>
                    <p>{name}</p>
                    <p>${price.raw*quantity}</p>
                </div>
                <div className='cart-item-btns'>
                    <div className='cart-item-quantity'>
                        <button onClick={() => updateCartQty(id, quantity-1)}>-</button>
                            <p>{quantity}</p>
                        <button onClick={() => updateCartQty(id, quantity+1)}>+</button>
                    </div>
                    <button className='cart-remove-btn' onClick={() => RemoveFromCart(id)}>Remove</button>
                </div>
        </div>
    )
            

}

export default CartItem;
