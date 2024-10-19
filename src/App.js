import { Provider } from "react-redux";
import Body from "./pages/Body";
import appStore from "./util/redux-store/appStore";
function App() {
  return (
    <div className="">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
