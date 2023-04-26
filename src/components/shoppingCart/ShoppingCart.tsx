import { useState, useEffect } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "../cartItem/CartItem";
import { formatCurrency } from "../../utils/formatCurrency";
import storeItems from "../../data/items.json";
import "./shoppingCart.scss";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const [isCartOpen, setIsCartOpen] = useState(isOpen);

  useEffect(() => {
    setIsCartOpen(isOpen);
  }, [isOpen]);

  return (
    <div className={`shopping-cart ${isCartOpen ? "open" : ""}`}>
      <div className="shopping-cart-header">
        <h3>Cart</h3>
        <button onClick={closeCart}>+</button>
      </div>
      <div className="shopping-cart-body">
        <div className="stack">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="shopping-cart-total">
            {`${formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}`}
          </div>
        </div>
      </div>
    </div>
  );
}
