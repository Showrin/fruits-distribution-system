import ItemCard from "@/components/molecules/ItemCard";
import UserContext from "@/contexts/UserContext";
import routes from "@/utils/routes";
import axios from "axios";
import React, { useContext, useState } from "react";

const FruitItemContainer = (props) => {
  const { id, name, image, description, price, quantity, seller } = props;
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const { user } = useContext(UserContext);

  const onBookingButtonClick = () => {
    if (selectedQuantity === 0) {
      setSelectedQuantity(1);
    } else {
      axios
        .post(`${routes.fruits.book}${id}/`, {
          name,
          seller,
          fruit_requested: selectedQuantity,
          buyer: user.username,
          start_date: new Date().toISOString().split("T")[0],
          contact_email: user.username,
          contact_phone: "01012201019",
        })
        .then(() => {
          setSelectedQuantity(0);
        });
    }
  };

  const onAddItem = () => {
    setSelectedQuantity((prevCount) => prevCount + 1);
  };

  const onRemoveItem = () => {
    setSelectedQuantity((prevCount) => prevCount - 1);
  };

  return (
    <ItemCard
      name={name}
      image={image}
      description={description}
      price={price}
      quantity={quantity}
      selectedQuantity={selectedQuantity}
      onBookingButtonClick={onBookingButtonClick}
      onAddItem={onAddItem}
      onRemoveItem={onRemoveItem}
    />
  );
};

export default FruitItemContainer;
