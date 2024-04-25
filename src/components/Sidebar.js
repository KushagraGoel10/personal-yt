import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="">
        <li>
          {" "}
          <Link
            to="/"
            className=" flex items-center ml-1 hover:bg-blue-200 rounded-lg w-50 "
          >
            <img
              className=" h-4 ml-0 "
              src="https://cdn-icons-png.flaticon.com/128/1946/1946436.png"
              style={{ marginRight: "8px" }}
            />{" "}
            Home
          </Link>{" "}
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
