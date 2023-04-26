import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeItems from "../../data/items.json";
import { formatCurrency } from "../../utils/formatCurrency";
import "./cartItem.scss";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="cartItem">
      <div className="left">
      <div className="img">
        <img src={item.imgUrl} alt={item.name} className="cartItemImg" />
      </div>
      <div className="info">
        <div className="cart-item-info">
          <div className="cart-item-name">
            {item.name}{" "}
            {quantity > 1 && (
              <span className="cart-item-quantity">x{quantity}</span>
            )}
          </div>
          <div className="cart-item-price">{formatCurrency(item.price)}</div>
        </div>
        <div className="cart-item-total">
          {formatCurrency(item.price * quantity)}
        </div>
      </div>
        </div>
      <div className="right">
        <button
          className="cart-item-remove"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
