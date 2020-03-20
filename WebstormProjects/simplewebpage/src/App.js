import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/HomePage";

import Navbars from "./components/Navbar";
import {BrowserRouter as Router,Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
            <Navbars/>
            <Route path='/' component={Home}/>

        </Router>

    );
  }
}

export default App;
