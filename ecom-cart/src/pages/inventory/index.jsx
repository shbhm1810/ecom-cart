import "./styles.scss";

import { Button } from "reactstrap";
import { useContext } from "react";
import { AppContext } from "../../App";

const ItemCard = ({ item }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  return (
    <div
      className="d-flex p-2  w-50 border border-1 my-3 justify-content-between"
      key={item.id}
    >
      <h5>{item.name}</h5>
      <Button
        onClick={() => {
          setCartItems([...cartItems, item]);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};

const mockData = [
  {
    id: 1,
    name: "Iphone 12",
    quantity: 10,
  },
  {
    id: 2,
    name: "Iphone 13",
    quantity: 13,
  },
];

const Inventory = () => {
  const { cartItems, setCartItems } = useContext(AppContext);

  return (
    <div className="container-fluid pt-5 px-5">
      <div>
        <h1>Inventory</h1>
        {mockData.map((item) => {
          return <ItemCard item={item} />;
        })}
      </div>
      <Button disabled={!cartItems.length}>Place Order</Button>
    </div>
  );
};

export default Inventory;
