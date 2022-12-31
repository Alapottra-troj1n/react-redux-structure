import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      <h1>This is cart</h1>
    </div>
  );
};

export default Cart;
