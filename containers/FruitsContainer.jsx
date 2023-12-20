import FruiteList from "@/components/molecules/FruiteList";
import routes from "@/utils/routes";
import axios from "axios";
import React, { useEffect, useState } from "react";

const FruitsContainer = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios
      .get(routes.fruits.list)
      .then((res) => {
        setFruits(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <FruiteList fruits={fruits} />;
};

export default FruitsContainer;
