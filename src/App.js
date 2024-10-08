import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Head from "./components/Head.js";
import Body from "./components/Body.js";
import store from "./utils/store.js";
import MainContainer from "./components/MainContainer.js";
import WatchPage from "./components/WatchPage.js";
import SearchResults from "./components/SearchResults.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search/:query",
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
