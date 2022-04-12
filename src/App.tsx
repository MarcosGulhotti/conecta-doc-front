import Router from "./routes";
import GlobalStyle from "./styles/global";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
        <GlobalStyle />
      </Provider>
    </>
  );
}

export default App;
