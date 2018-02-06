import React, { Component } from "react";
import logo from "./logo.svg";
import routes from "./routes";
import "./App.css";
import Route1 from "./Route1";
import { Link } from 'react-router-dom';

class App extends Component {
 render() {
   return (
     <div className="App">
       <header className="App-header">
         {routes}
         <h1 className="App-title">Welcome to React</h1>

         <Link to="/">Route1</Link>
         <Link to="/Route2">Route2</Link>
         <Link to="/Route3">Route3</Link>
       </header>
       <p className="App-intro">
         To get started, edit <code>src/App.js</code> and save to reload.
       </p>
     </div>
   );
 }
}

export default App;