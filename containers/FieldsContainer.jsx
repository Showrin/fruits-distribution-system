import FieldList from "@/components/molecules/FieldList";
import routes from "@/utils/routes";
import axios from "axios";
import React, { useEffect, useState } from "react";

const FieldsContainer = () => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    axios
      .get(routes.fields.list)
      .then((res) => {
        setFields(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <FieldList fields={fields} />;
};

export default FieldsContainer;
