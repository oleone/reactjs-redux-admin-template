import React from "react";
import { Provider } from "react-redux";

import BasicList from "./components/BasicList";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BasicList />
    </Provider>
  );
};

export default App;
