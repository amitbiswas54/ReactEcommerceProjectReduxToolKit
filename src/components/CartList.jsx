import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem } from '../reducers/slice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearAllItem } from '../reducers/slice';

function CartList() {

  const cartSelector = useSelector((state) =>state.cart.item);
  console.log(cartSelector)
  const dispatch = useDispatch();

  const [cartItem, setCartItem] = useState(cartSelector);

  // useEffect(()=>{
  //   setCartItem()
  // },[])

  const handleQuantityChange = (itemId, quantity=1) => {
    // Implement quantity change logic here
      let qty = parseInt(quantity) > 0 ? parseInt(quantity) : 1;
      let cartTempItems = cartItem.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: qty };
        }
        return item;
      });
      setCartItem(cartTempItems);
  }

  const navigat = useNavigate()

  const placeOrder =()=>{
   
    localStorage.clear()
    dispatch(clearAllItem())
    navigat('/')
  }

  useEffect(()=>{
    setCartItem(cartSelector)
  },[cartSelector])

  return (
   <>
   <div className="border-b-2 border-amber-950 p-4 m-4 ">
    <div className="flex justify-between items-center">
   <h2 className='text-2xl font-bold text-purple-600'>Cart List</h2>
     <h2 className='text-xl font-bold text-purple-900'>Total Item {cartItem ? cartItem.length:0 }</h2>
     </div>
   </div>

    <div>
      {cartItem && cartItem.length > 0 ? (
        cartItem.map((item) => (
          <div key={item.id} className="border-b-2 flex  justify-between items-center  border-gray-300  p-4 m-4 ">
            <div className="flex flex-8 items-center gap-4">
              <img
                src={item.image}  
                alt={item.title}

                className="w-40 h-40 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">  
                  {item.title}
                </h3>
                <p>{item.description}</p>
             
                <button onClick={()=>dispatch(removeItem(item))}
                className='bg-red-700 hover:bg-red-900 cursor-pointer text-white px-2 py-1 rounded-sm mt-3'
                >Remove Item</button>
              </div>    
               
            </div>
       <div className='flex flex-2 gap-2  justify-end'>
        <p>Quantaty</p>
      <input type="number" placeholder='1'   min="1"
      onChange={(e)=>handleQuantityChange(item.id, e.target.value)} />
    </div>
        <div className='flex-2'>
   <p className="text-purple-600 text-3xl font-bold text-end">$ {(item.quantity?item.price*item.quantity : item.price).toFixed(2) }</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-red-700 font-bold text-2xl">Your cart is empty.</p>
      )}
        
    </div>

    <div className='flex justify-between px-4'>
      <div>
        <button onClick={()=>placeOrder()}
          className='cursor-pointer bg-purple-600 text-white py-2 px-4 
                rounded-lg hover:bg-purple-700 transition-all'
          >Place Order</button>
      </div>
    <div>
    <h2 className='text-2xl font-bold text-gray-900 text-end m-4'>
      Total Price: $ {cartItem.reduce((total, item) => item.quantity? total + item.quantity*item.price: total+item.price , 0).toFixed(2)}</h2>
    </div>
</div>
   </>
  )
}

export default CartList;