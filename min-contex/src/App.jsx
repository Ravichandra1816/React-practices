import React from "react";
import UserContexProvider from "./Contex/UserContexProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <UserContexProvider>
      <h1>Hello min contex</h1>
      <Login />
      <Profile />
    </UserContexProvider>
  );
};

export default App;
