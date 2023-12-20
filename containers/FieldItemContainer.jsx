import { useContext, useState } from "react";
import ItemCard from "@/components/molecules/ItemCard";
import UserContext from "@/contexts/UserContext";
import routes from "@/utils/routes";
import axios from "axios";

const FieldItemContainer = (props) => {
  const { id, name, image, description, price, quantity, seller } = props;
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { user } = useContext(UserContext);

  const onBookingButtonClick = () => {
    if (selectedQuantity === 0) {
      setSelectedQuantity(0.25);
    } else {
      axios
        .post(`${routes.fields.book}${id}/`, {
          name,
          seller,
          acres_requested: selectedQuantity,
          farmer: user.username,
          start_date: new Date(startDate).toISOString().split("T")[0],
          end_date: new Date(endDate).toISOString().split("T")[0],
          contact_email: user.username,
          contact_phone: "01012201019",
        })
        .then(() => {
          setSelectedQuantity(0);
        });
    }
  };

  const onAddItem = () => {
    setSelectedQuantity((prevCount) => prevCount + 0.25);
  };

  const onRemoveItem = () => {
    setSelectedQuantity((prevCount) => prevCount - 0.25);
  };

  return (
    <ItemCard
      name={name}
      image={image}
      description={description}
      price={price}
      quantity={quantity}
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      selectedQuantity={selectedQuantity}
      onBookingButtonClick={onBookingButtonClick}
      onAddItem={onAddItem}
      onRemoveItem={onRemoveItem}
    />
  );
};

export default FieldItemContainer;
