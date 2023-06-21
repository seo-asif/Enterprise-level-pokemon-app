import React from "react";
import { createRoot } from "react-dom/client";
import { store } from "../src/app/store";
import { Provider } from "react-redux";
import App from "./App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
