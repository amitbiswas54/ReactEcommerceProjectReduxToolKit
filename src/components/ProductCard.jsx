import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducers/ProductsSlice";
import { addItem, removeItem } from "../reducers/slice";
import SearchProducts from "./SearchProducts";
import Hero from "./Hero";

function ProductCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


   const cartSelector = useSelector((state) =>state.cart.item);

  // const productSelector = useSelector((state) => state.products.items);
  const productSelector = useSelector(
  (state) => state.products.filteredItems
);


  return (
    <>
      <div className="container mx-auto">
        <Hero/>

      <SearchProducts/>

        <div className="w-full  mt-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
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

                  <h3 class="mt-4 text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
                    {item.title.length> 30 ? item.title.slice(0, 30) + '...':item.title }
                  </h3>
    <h5 ><span className="text-white bg-sky-500 text-sm capitalize px-2 py-1 rounded-md">{item.category}</span> 
                  </h5>
                  

                  <p class="mt-2 text-gray-600 text-sm line-clamp-3 h-16 overflow-hidden">
                    {item.description}
                  </p>

                  <div class="flex items-center gap-1 mt-2">
                    <h5 className="flex items-center">
                      <span className="font-semibold pe-2 text-sky-600">
                        Rating
                      </span>{" "}
                      {item.rating.rate} / {item.rating.count}
                    </h5>
                  </div>
                </div>

                <div class="flex flex-col  mt-auto pt-4">
                  <p class="text-2xl font-bold text-sky-600">
                    $ {item.price}
                  </p>
                  <div class="mt-4 flex justify-between">

                 {cartSelector.find(cartItem => cartItem.id === item.id) ? (
    <button
      // onClick={() => dispatch(removeItem(item.id))}
      className="w-full bg-gray-400 text-white py-3 cursor-pointer rounded-lg font-semibold hover:bg-gray-800"
      onClick={()=>dispatch(removeItem(item))}
    >
      Remove from Cart
    </button>
  ) : (
    <button
      onClick={() => dispatch(addItem(item))}
      className="w-full bg-sky-700 text-white py-3 rounded-lg cursor-pointer font-semibold hover:bg-sky-800"
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