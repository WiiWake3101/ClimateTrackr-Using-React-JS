import React from "react";
import "./index.css"; // Import CSS styles
import Card from "./Weathercard";

const App = () => {
  return (
    <div className="App">
      <MenuBar />
      <ContentBox />
      {}
    </div>
  );
};

const MenuBar = () => {
  return (
    <div className="Menu_bar_rect">
      <p className="Menu_bar_font">ClimateTrackr</p>
      <hr className="below_menu_bar_line" /> {/* Properly closed <hr> tag */}
    </div>
  );
};

const ContentBox = () => {
  return (
    <div className="Content_box">
      <Card />
    </div>
  );
};

export default App;
