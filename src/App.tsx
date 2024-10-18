import React from "react";
import { Provider } from "react-redux";
import store from "./types/store";
import ProductConfiguration from "./components/ProductConfiguration";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductConfiguration />
      </div>
    </Provider>
  );
};

export default App;
