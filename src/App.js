import { Provider } from "react-redux";
import Body from "./pages/Body";
import appStore from "./util/redux-store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Watch from "./component/Watch";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
