import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FcShop} from 'react-icons/fc'

function Navbar({cartProducts}) {
    if(!cartProducts.line_items) {
        return(
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        )
    }
    return(
        <div className='navbar'>
            <div className='nav-container'>
                <div><FcShop size='2rem'/> <span style={{fontSize: '2rem'}}>Commerce.js</span> </div> 
                <div className='nav-cart'><a href='cart'><AiOutlineShoppingCart color='black' size='2rem'/></a> <span className={cartProducts.line_items.length > 0 ? 'cart-num' : 'none'}>{cartProducts.line_items.length}</span> </div>
            </div>
        </div>
    )
}

export default Navbar;