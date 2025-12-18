import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducers/ProductsSlice";
import { addItem, removeItem } from "../reducers/slice";

function ProductCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


   const cartSelector = useSelector((state) =>state.cart.item);

  const productSelector = useSelector((state) => state.products.items);

  return (
    <>
      <div className="container mx-auto">
        <h1 class="text-4xl font-bold pt-6 text-violet-900 text-center ">
        
          Redux toolkit small project
        </h1>
        <div className=" mt-10  mx-auto max-w-[75rem]"></div>
        <div className="w-full  mt-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
          {productSelector.length > 0 ? (
            productSelector.map((item) => (
              <div
                key={item.id}
                class=" bg-white rounded-xl flex flex-col justify-between shadow-lg p-4 hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div class="w-full h-56 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      class="h-full object-contain"
                    />
                  </div>

                  <h3 class="mt-4 text-lg font-semibold text-gray-800 line-clamp-2">
                    {item.title}
                  </h3>

                  <p class="mt-2 text-gray-600 text-sm line-clamp-3 h-16 overflow-hidden">
                    {item.description}
                  </p>

                  <div class="flex items-center gap-1 mt-2">
                    <h5 className="flex items-center">
                      <span className="font-semibold pe-2 text-purple-600">
                        Rating
                      </span>{" "}
                      {item.rating.rate} / {item.rating.count}
                    </h5>
                  </div>
                </div>

                <div class="flex flex-col  mt-auto pt-4">
                  <p class="text-xl font-bold text-purple-600">
                    $ {item.price}
                  </p>
                  <div class="mt-4 flex justify-between">

                 {cartSelector.find(cartItem => cartItem.id === item.id) ? (
    <button
      // onClick={() => dispatch(removeItem(item.id))}
      className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
      onClick={()=>dispatch(removeItem(item))}
    >
      Remove from Cart
    </button>
  ) : (
    <button
      onClick={() => dispatch(addItem(item))}
      className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
    >
      Add to Cart
    </button>
  )}

                    {/* <button
                      onClick={() => dispatch(addItem(item))}
                      class="flex w-full justify-center cursor-pointer
      items-center gap-2 bg-purple-600 
       text-white py-3 px-4 rounded-lg  font-semibold
       hover:bg-purple-700 transition-all"
                    >
                      Add to Cart
                    </button> */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;