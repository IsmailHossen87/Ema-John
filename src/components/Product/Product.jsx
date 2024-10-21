import React from 'react'
import './Product.css'

export default function Product({product,againPassing}) {
    // console.log(product)
    const {img,seller,price,name,stock} = product
  return (
    <div className='product'>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
        <h3 className='productName'>{name}</h3>
        <br/>
        <p><small>by:{seller}</small></p>
        <p>$ {price}</p>
        <br />
        <p><small>Only {stock} left in stock -Order soon</small></p>
   
       <button className='mainbutton' onClick={()=> againPassing(product)}>add to card</button>
        </div>
    </div>
  )
}
