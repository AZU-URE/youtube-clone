import { Provider } from "react-redux";
import Body from "./pages/Body";
import appStore from "./util/redux-store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Watch from "./component/Watch";
import Results from "./component/Results";
import VideoContainer from "./component/VideoContainer";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            {
              path: "/",
              element: <VideoContainer />,
            },
            { path: "/results", element: <Results /> },
          ],
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
