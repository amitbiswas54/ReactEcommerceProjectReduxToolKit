import React from 'react'

function Hero() {
  return (
    <>
<div className="w-full bg-sky-300 py-5 px-4 sm:px-6 lg:px-8 my-7 rounded-lg">
  <div className=" mx-auto text-center">
    
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
      About This Project
    </h2>

    <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed  mx-auto">
      Built a responsive eCommerce web application using 
      <span className="font-semibold text-gray-800"> React JS</span> and 
      <span className="font-semibold text-gray-800"> Redux Toolkit</span> with real-time product data fetched from APIs.
      The application supports 
      <span className="font-semibold text-gray-800"> add to cart</span>, 
      <span className="font-semibold text-gray-800"> remove from cart</span>, and 
      <span className="font-semibold text-gray-800"> quantity management</span> with dynamic <span className="font-semibold text-gray-800"> price calculations.</span>
      Search performance is optimized using 
      <span className="font-semibold text-gray-800"> debouncing</span>, and the UI is styled with 
      <span className="font-semibold text-gray-800"> Tailwind CSS</span> for a modern, mobile-first experience.
    </p>

  </div>
</div>

    
    </>
  )
}

export default Hero