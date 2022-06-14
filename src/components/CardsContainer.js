import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./cards.css"

export default class CardsContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
        {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains",
        },
        {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications",
        },
      ],
    }; 
  }

  render() {
    return (
      <div className="cardContainer">
        <h3>Why Choose Tradeling?</h3>
        <div style={{ display: "flex", justifyContent: "space-around"}}>
          {this.state.data.map((item) => (
            <>
              <Card style={{ width: "18rem", flexDirection: "row", color: "black" }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.catchPhrase}</Card.Text>
                  <Card.Link href="#">Read More</Card.Link>
                </Card.Body>
              </Card>
            </>
          ))}
        </div>
      </div>
    );
  }
}
