import React from "react";
import "../../styles/index.css";

//components
import Card from "./card.jsx";
import Newnavbar from "./navBar";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
  return (
    <>
      <Newnavbar />
      <Jumbotron />
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
	  </div>
    </>
  );
};

export default Home;
