import { useParams } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import "./product.scss";
import storeItems from "../../data/items.json";

interface ProductProps {}

const Product: React.FC<ProductProps> = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const product = storeItems.find((s) => s.id.toString() === id);

  if (!product) {
    return <span>Product not found</span>;
  }

  const quantity = getItemQuantity(product.id);

  const handleAddToCart = (): void => {
    increaseCartQuantity(product.id);
  };

  const handleDecreaseQuantity = (): void => {
    decreaseCartQuantity(product.id);
  };

  const handleRemoveItem = (): void => {
    removeFromCart(product.id);
  };

  return (
    <div className="product">
      <div className="left">
        <div className="imgContainer">
          <img src={product.imgUrl} alt={product.name} />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <span>${product.price.toFixed(2)}</span>
        <div className="productAction">
          {quantity === 0 ? (
            <button className="addToCartBtn" onClick={handleAddToCart}>
              Add To Cart
            </button>
          ) : (
            <div className="productQuantity">
              <div className="productQuantityControls">
                <button
                  className="decreaseBtn"
                  onClick={handleDecreaseQuantity}
                >
                  -
                </button>
                <div className="quantityValue">
                  <span>{quantity}</span> in Cart
                </div>
                <button className="increaseBtn" onClick={handleAddToCart}>
                  +
                </button>
              </div>
              <div className="remove">
                <button onClick={handleRemoveItem}>Remove from Cart</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
