import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import Menu from "./components/Menu"
import Tables from "./components/Tables"
import History from "./components/History"

import "./styles.css";

export default function Restaurant() {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <NavLink activeStyle={{fontWeight: "bold"}} to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{fontWeight: "bold"}} to="/tables">Tables</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{fontWeight: "bold"}} to="/history">History</NavLink>
            </li>
          </ul>
        </nav>
       <Switch>
          <Route path="/menu">
            <Menu/>
          </Route>
          <Route path="/tables">
          <Tables/>
          </Route>
          <Route path="/history">
          <History/>
          </Route>
         <Route path="/">
           <Redirect to="/menu" />
         </Route>
        </Switch>
    </Router>
  );
}
