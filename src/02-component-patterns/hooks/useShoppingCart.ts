import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldshoppingCart) => {
      const productInCart: ProductInCart = oldshoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldshoppingCart,
          [product.id]: productInCart,
        };
      }

      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldshoppingCart;
      return rest;

      /*  if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldshoppingCart;
            return { ...rest };
          }
          return {
            ...oldshoppingCart,
            [product.id]: { ...product, count },
          }; */
    });
  };
  return {
    onProductCountChange,
    shoppingCart,
  };
};
