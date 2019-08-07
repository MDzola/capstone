import React, { Component } from "react"
import "./cardflip.css"

export default class CardFlip extends Component {



    render() {


        return (
            <div className="card-container">
            <div className="card">
              <div className="front">
                <h1>Ciluk</h1>
              </div>
              <div className="back">
             <img src="http://placehold.it/200/200" alt="" />
                <h1>Ba!</h1>
              </div>
            </div>
          </div>
     )
   }
}


