import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="text-center text-3xl bg-gray-600 text-white p-5">
      User:{userid}
    </div>
  );
};

export default User;
