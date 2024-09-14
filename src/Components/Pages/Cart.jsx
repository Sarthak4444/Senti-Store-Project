import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {

  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div>
     {cart.cartItems}
     <br />
     {wishlist.wishlistItems}
    </div>
  )
}

export default Cart