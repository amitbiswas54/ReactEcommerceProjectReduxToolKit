import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import ProductCard from './components/ProductCard';

function App() {


  return (
    <>      
    <Header/>
<h1 class="text-4xl 
font-bold 
 from-pink-500
  to-purple-500
   bg-clip-text 
   text-transparent
    ">
  Gradient Text Example
</h1>
<div className=" mt-10  mx-auto max-w-[75rem]">
<ProductCard/>
</div>
     </>
  )
}

export default App
