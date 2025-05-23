import React, { useContext, useState } from "react";
import UserContex from "../Contex/UserContex";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContex);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(userName, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="UserName"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
