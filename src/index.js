import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Capstone from "./components/Capstone"
import "bootstrap/dist/css/bootstrap.min.css"



ReactDOM.render(
    <Router>
        <Capstone />
    </Router>
    , document.getElementById('root'))
