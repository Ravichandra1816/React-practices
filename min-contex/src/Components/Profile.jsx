import React, { useContext } from "react";
import UserContex from "../Contex/UserContex";

const Profile = () => {
  const { user } = useContext(UserContex);
  if (!user) {
    return <div>Plese Login</div>;
  } else {
    return <div>Welcome {user.userName}</div>;
  }
};

export default Profile;
