import React from 'react';

import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps>  = ({product, showDescription, showStockStatus, onAddToCart, children}) =>{
    return(
        <div>
            <img className="p-2 w-32 h-32 mx-auto" src={product.imageUrl}></img>
            <div className="p-4">
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-blue-500 font-bold">${product.price}</p>
                <p className="text-gray-600">{showDescription?product.description:""}</p>
                <p className="text-green-700">{showStockStatus?(product.inStock?"In Stock":"Out of Stock"):""}</p>
            </div>
            {onAddToCart && (<button className="bg-blue-500 px-25 py-1 text-white rounded hover:bg-blue-700" onClick={()=>{onAddToCart(product.id)}}>Add to Cart</button>)}
        <div>
            {children}
        </div>
        </div>

    )
}