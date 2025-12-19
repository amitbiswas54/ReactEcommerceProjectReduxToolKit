import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, clearSearch } from "../reducers/ProductsSlice";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SearchProducts() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm);

  const [input, setInput] = useState(searchTerm);
  const debouncedValue = useDebounce(input, 500);

  useEffect(() => {
    dispatch(setSearchTerm(debouncedValue));
  }, [debouncedValue, dispatch]);

  return (
    <div className="flex gap-4 bg-gray-900 items-center rounded-md py-3 px-4 text-white">
      <h2 className="font-bold text-xl">Search</h2>

      <div className="relative w-full">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search by title or category"
          className="w-full p-2 pr-10 rounded-md bg-transparent border border-gray-300 focus:outline-none"
        />

        {input && (
          <button
            onClick={() => {
              setInput("");
              dispatch(clearSearch());
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xl"
          >
            ❌
          </button>
        )}
      </div>

    </div>
  );
}

export default SearchProducts;
