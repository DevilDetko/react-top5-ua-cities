import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Lorem ipsum dolor sit.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Ivano-Frankovsk.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="Ivano-Frankivsk"
              path="/IvanoF"
            />
            <CardItem
              src="images/Lviv.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="Lviv"
              path="/lviv"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Vinnytsia.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="Vinnytsia"
              path="/Vinnytsia"
            />
            <CardItem
              src="images/Kharkiv.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="Kharkiv"
              path="/Kharkiv"
            />
            <CardItem
              src="images/Ternopil.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="Ternopil"
              path="/Ternopil"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
