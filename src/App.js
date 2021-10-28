import React, { useState, useRef } from "react";
//Import Styles
import "./styles/app.scss";

//import router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import pages
import LoginPage from "./pages/Login";
import MainPage from "./pages/Main";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <LoginPage />} />
          <ProtectedRoute path="/Main" exact component={() => <MainPage />} />
        </Switch>
      </Router>
    </div>
  )
};

export default App;
