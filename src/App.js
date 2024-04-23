import "./App.css";
import {Provider } from "react-redux";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Head from "./components/Head.js";
import React from "react";
import Body from "./components/Body.js";
import store from "./utils/store.js";
import MainContainer from "./components/MainContainer.js";
import WatchPage from "./components/WatchPage.js";

const appRouter= createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[
    {
      path:"/",
      element: <MainContainer/>,

    },
    {
      path:"watch",
      element: <WatchPage/>,

    },

  ]
}]);


function App() {
  return (

    <Provider store= {store}>
    <div >
        <Head/>
        <RouterProvider router={appRouter} />

        {/**
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         * MainContainer
         *  Buttons list
         *  VideoContainer
         *    VideoCard
         */}
    </div>
    </Provider>
  );  
}

export default App;
