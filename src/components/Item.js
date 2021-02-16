import React, { useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'

function Item({product, AddToCart}) {
    const {id, description, media, name, price} = product;

  return (
    <div className='item'>
        <div className="item-container">
            <div className='img-cont'> <img src={media.source}></img> </div>
            <div className='item-info'>
                <p>{name}</p>
                <p>${price.formatted}</p>
            </div>
            <p dangerouslySetInnerHTML={{__html: description}} className='item-about' />
            <button onClick={() => AddToCart(product.id, 1)} className='item-cart'> <MdAddShoppingCart size='1.2rem' /> </button>
        </div>
    </div>
  );
}

export default Item;
