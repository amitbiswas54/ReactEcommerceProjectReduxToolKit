import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../reducers/ProductsSlice";

function SearchProducts() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      className="w-full mt-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
}

export default SearchProducts;
