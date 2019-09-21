import React from "react";
import { Provider } from "react-redux";

// import BasicList from "./components/BasicList";
import "./App.scss";

import Main from './components/Main';
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
