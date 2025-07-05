import ReactDOM from "react-dom/client";

// import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import "../styles/globals.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MemoryRouter>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </MemoryRouter>
);
