// import Budget from "./pages/Budget";
import React, {Component} from "react";
import Home from "./pages/Home";
import Page from "./pages/Page"

// import Login from "./pages/Login";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    render() {
      return (
        <Router>
          <div className="app">
            <header> 
              {<Home />}
            </header>
            <main>
             
              <section className="page">
                {<Page />}
              </section>
            </main>
           
          </div>
        </Router>
      );
    }
  }
  
  export default App;