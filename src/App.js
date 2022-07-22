// import Budget from "./pages/Budget";
import React, { Component } from "react";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Budget from "./pages/Budget";
import Home from "./pages/Home";

// import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            {<Navbar />}
          </header>
          <main>
            <section className="d-flex justify-content-center align-items-center main">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="budget" element={<Budget />}></Route>
                <Route path="dashboard" element={<PublicRoute component={Dashboard}/>}/>
                <Route path="login" element={<PrivateRoute component={Login}/>}/>
                
              </Routes>
            </section>
          </main>

        </div>
      </Router>
    );
  }
}

export default App;


