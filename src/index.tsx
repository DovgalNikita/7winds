import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Main from "./pages/Main";
import { Provider } from "react-redux"; 
import { store } from "./redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Main/>
        </Provider>
    </React.StrictMode>
);
