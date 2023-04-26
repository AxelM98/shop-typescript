import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utils/formatCurrency";
import "./storeItem.scss";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  const handleAddToCart = () => {
    increaseCartQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    decreaseCartQuantity(id);
  };

  const handleRemoveItem = () => {
    removeFromCart(id);
  };

  return (
    <div className="storeItem">
      <img
        className="storeItemImage"
        src={imgUrl}
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
        />
      <div className="storeItemDetails">
        <div className="storeItemTitle">
          <span className="storeItemName">{name}</span>
          <span className="storeItemPrice">{formatCurrency(price)}</span>
        </div>
        <div className="storeItemAction">
        <Link className="link" to={`/product/${id}`}>
          <button className="navToProductPageBtn">To Product Page</button>
          </Link>
          {quantity === 0 ? (
            <button className="addToCartBtn" onClick={handleAddToCart}>
              Add To Cart
            </button>
          ) : (
            <div className="storeItemQuantity">
              <div className="storeItemQuantityControls">
                <button
                  className="decreaseBtn"
                  onClick={handleDecreaseQuantity}
                >
                  -
                </button>
                <div className="quantityValue">
                  <span style={{ fontSize: "2rem" }}>{quantity}</span> in Cart
                </div>
                <button className="increaseBtn" onClick={handleAddToCart}>
                  +
                </button>
              </div>
              <div className="remove">
                <button onClick={handleRemoveItem}>
                  Remove from Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
