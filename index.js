import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch"; // Import the WeatherSearch component

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <WeatherSearch /> {/* Render the WeatherSearch component here */}
    </div>
  </StrictMode>
);
