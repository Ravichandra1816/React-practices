import React, { useEffect, useState } from "react";
import { data, useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Ravichandra1816")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center p-5 bg-gray-600 text-white text-3xl">
      <div>{data.name}</div> <br />
      Github followers: {data.followers}
      <img className=" rounded-full" src={data.avatar_url} width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Ravichandra1816");
  return response.json();
};
