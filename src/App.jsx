// App.js
import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./redux/actions/productActions";

function App() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Hi</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
