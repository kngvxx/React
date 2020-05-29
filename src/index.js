import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const rootElement = document.getElementById("root");

function Greeting(props) {
  let windowWidth = window.innerWidth;
  if (windowWidth >= 768) {
    return (
      <div>
        <DesktopNavigation /> <App />
      </div>
    );
  } else {
    return (
      <div>
        <MobileNavigation />
        <App />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Greeting size={true} />
  </React.StrictMode>,
  rootElement
);
