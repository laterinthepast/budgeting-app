// import Budget from "./pages/Budget";
import React, { Component } from "react";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Budget from "./pages/Budget";
import Home from "./pages/Home";

// import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            {<Navbar />}
          </header>
          <main>
            <section className="page">
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/budget" element={<Budget />}></Route>
              </Routes>

            </section>
          </main>

        </div>
      </Router>
    );
  }
}

export default App;