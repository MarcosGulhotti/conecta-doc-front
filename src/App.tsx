import Router from "./routes";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import store from "./store/index";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        <GlobalStyle />
        <Toaster />
      </Provider>
    </>
  );
}

export default App;
