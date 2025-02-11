import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useFetch from "../../Utility/useFetch";
import CartItem from "./CartItem";

const Cart = () => {
  const selector = useSelector((store) => store.cart.items);
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const [prod, setProd] = useState([]);

  useEffect(() => {
    if (data && data.products) {
      const prd = selector
        .map((title) => data.products.find((item) => item.title === title))
        .filter((item) => item); // Filter out undefined values
      setProd(prd);
    }
  }, [data, selector]);

  const handleTotal = () => {
    // Dynamically calculate the total
    return prod.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  if (prod.length === 0) {
    return <div>No products in cart!</div>;
  }

  return (
    <div>
      {prod.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="masterTotal">
        <h2>Master Total: ${handleTotal()}</h2>
      </div>
    </div>
  );
};

export default Cart;
