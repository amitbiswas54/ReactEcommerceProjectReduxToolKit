import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, clearAllItem } from '../reducers/slice'
import { Link, useNavigate } from 'react-router-dom'

function CartList() {
  const cartSelector = useSelector((state) => state.cart.item)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [cartItem, setCartItem] = useState(cartSelector)

  useEffect(() => {
    setCartItem(cartSelector)
  }, [cartSelector])

  const handleQuantityChange = (itemId, quantity = 1) => {
    let qty = parseInt(quantity) > 0 ? parseInt(quantity) : 1
    let cartTempItems = cartItem.map((item) =>
      item.id === itemId ? { ...item, quantity: qty } : item
    )
    setCartItem(cartTempItems)
  }

  const placeOrder = () => {
    localStorage.clear()
    dispatch(clearAllItem())
    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-6">
      
      {/* Header */}
      <div className="border-b pb-4 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h2 className="text-2xl font-bold text-sky-800">Cart List</h2>
        <p className="text-lg font-semibold text-gray-800">
          Total Items: {cartItem?.length || 0}
        </p>
      </div>

      {/* Cart Items */}
      {cartItem && cartItem.length > 0 ? (
        <div className="space-y-6">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 
                         flex flex-col lg:flex-row gap-4 lg:items-center"
            >
              {/* Image */}
              <div className="flex justify-center lg:w-40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>

                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="mt-3 inline-block bg-red-600 hover:bg-red-700
                             text-white px-3 py-1 rounded-md text-sm"
                >
                  Remove Item
                </button>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between lg:flex-col lg:items-start gap-2">
                <label className="text-sm font-semibold">Quantity</label>
                <input
                  type="number"
                  min="1"
                  defaultValue={item.quantity || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  className="w-20 border rounded-md px-2 py-1"
                />
              </div>

              {/* Price */}
              <div className="text-right lg:w-32">
                <p className="text-2xl font-bold text-sky-900">
                  $
                  {(
                    item.quantity
                      ? item.price * item.quantity
                      : item.price
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-700 font-bold text-2xl mt-10">
          Your cart is empty.
        </p>
      )}

      {/* Footer */}
      {cartItem.length > 0 && (
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          
          <div className="flex gap-3">
            <button
              onClick={placeOrder}
              className="bg-sky-900 hover:bg-sky-800 text-white
                         px-5 py-2 rounded-lg transition"
            >
              Place Order
            </button>

            <Link
              to="/"
              className="bg-gray-900 hover:bg-gray-800 text-white
                         px-5 py-2 rounded-lg transition"
            >
              Products
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Total: $
            {cartItem
              .reduce(
                (total, item) =>
                  item.quantity
                    ? total + item.quantity * item.price
                    : total + item.price,
                0
              )
              .toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  )
}

export default CartList
