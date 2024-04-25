import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-5 py-2 m-2 rounded-xl bg-gray-300">{name}</button>
  );
};

export default Button;
