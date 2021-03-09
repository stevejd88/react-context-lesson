import { createContext } from 'react';

const CartContext = createContext({
  hidden: true,
  toggleHiddem: () => {}
});

export default CartContext;
