import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'


function App() {
  const [count,setCount]=useState([])
  useEffect(()=>{
    fetch('./products.JSON')
    .then(res => res.json())
    .then(data=> setCount(data))
  })
const handledata = (product) =>{
  console.log(product)
}

  return (
   <div>

    <Header></Header>
    <Shop
    passingData = {handledata}
    count={count}></Shop>
   </div> 
  )
}

export default App
