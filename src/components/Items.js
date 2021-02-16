import React, { useState } from 'react';
import Item from './Item';

function Items( {products, AddToCart} ) {

  return (
    <div className='items'>
        <div className="items-container">
            {products.map((el) => {
                const {id} = el;
                return (
                    <div key={id}>
                        <Item product={el} AddToCart={AddToCart} />
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Items;
