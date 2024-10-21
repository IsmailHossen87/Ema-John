import React, { useState } from 'react'
import './shop.css'
import Product from '../Product/Product'


export default function Shop({count, passingData}) {
  const cuttingData = count.slice(0,10)


  
    
    // console.log(cuttingData)

  return (
      <div className="Shopcontainer">
        <div className="product-container">
          {
            cuttingData.map(prod => <Product 
              againPassing = {passingData}
              product={prod}></Product>)
            
          }
        </div>
        <div className="card-container">
            <h1>This is cart</h1>
        </div>
        
      </div>
  )
}
