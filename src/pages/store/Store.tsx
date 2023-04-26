import { StoreItem } from "../../components/storeItem/StoreItem";
import storeItems from "../../data/items.json";
import "./store.scss"

export function Store() {
  return (
    <div className="store">
      <h1>Store</h1>
      <div className="store-items">
        {storeItems.map((item) => (
          <div className="store-item-col" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}