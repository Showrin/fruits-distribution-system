import { useContext, useState } from "react";
import FdsAppBar from "@/components/molecules/FdsAppBar";
import UserContext from "@/contexts/UserContext";
import axios from "axios";
import routes from "@/utils/routes";

const AppBarContainer = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const onLogout = () => {
    // setIsLoggingOut(true);

    // axios
    //   .post(routes.users.logout, { user })
    //   .then(() => {
    //     setUser(null);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   })
    //   .finally(() => {
    //     setIsLoggingOut(false);
    //   });

    setUser(null);
  };

  return <FdsAppBar onLogout={onLogout} isLoggingOut={isLoggingOut} />;
};

export default AppBarContainer;
