import React, { use } from 'react'
import { ShoppingCart } from "lucide-react"; // optional icon (if you use lucide-react)
import { useSelector, useDispatch } from 'react-redux';
import { clearAllItem } from '../reducers/slice';


function AddtoCart() {

    const selector = useSelector((state) =>state.cart.value);
    const dispatch = useDispatch();

  return (
   <>
   <div className="relative cursor-pointer">
        <ShoppingCart className="w-7 h-7 group text-white hover:text-purple-600" />

        {/* Cart Counter */}
        
          <span className="
          absolute -top-2 -right-2
           bg-red-500 text-white 
           text-xs w-5 h-5 flex items-center 
           justify-center group-hover:bg-white rounded-full ">
               {selector}
            </span>
      
      </div>

             <button
               onClick={() =>dispatch(clearAllItem(0))}
                className="flex items-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-all"
              >
                <ShoppingCart className="w-5 h-5" />
                Clear Cart
              </button>
   </>
  )
}

export default AddtoCart