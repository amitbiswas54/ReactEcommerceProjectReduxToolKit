import React, { use } from 'react'
import { ShoppingCart } from "lucide-react"; // optional icon (if you use lucide-react)
import { useSelector, useDispatch } from 'react-redux';
import { clearAllItem } from '../reducers/slice';
import { Link } from 'react-router-dom';


function AddtoCart() {

    const cartSelector = useSelector((state) =>state.cart.item);
    const dispatch = useDispatch();

  return (
   <> <Link to='/cartlist'>
   <div className="relative flex gap-2 cursor-pointer bg-purple-600 text-white py-2 px-4 
                rounded-lg hover:bg-purple-700 transition-all">
      <ShoppingCart className="w-7 h-7 group text-white hover:text-purple-600" />
        {/* Cart Counter */}
        Cart Item
          <span className="
          absolute -top-2 -right-2
           bg-red-500 text-white 
           text-xs w-5 h-5 flex items-center 
           justify-center group-hover:bg-white rounded-full ">
               {cartSelector.length? cartSelector.length:0}
            </span>
      
      </div>
</Link>
            
   </>
  )
}

export default AddtoCart