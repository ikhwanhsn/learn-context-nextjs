import { cartContext } from "@/app/page";
import { useContext } from "react";

const AddToCart = () => {
  let { totalCart, setTotalCart } = useContext(cartContext);
  return (
    <main>
      <button
        onClick={() => setTotalCart(totalCart + 1)}
        className="btn btn-primary"
      >
        Add To Cart
      </button>
      <button
        onClick={() => setTotalCart(totalCart - 1)}
        className="btn btn-primary"
      >
        Min To Cart
      </button>
    </main>
  );
};

export default AddToCart;
