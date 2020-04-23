import React from "react"
import "./App.css"
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Dashboard from "./components/dashboard/Dashboard"
import UserDetails from "./components/users/UserDetails"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateNewUser from "./components/users/CreateNewUser"
import UpdateUser from "./components/users/UpdateUser"
import {
  UserIsAuthenticated,
  UserIsNotAuthenticated,
} from "./components/help component/auth"
import NotFound from "./components/help component/NotFound"
import Home from "./components/homePage/Home"

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>

        <Switch>
          <Route
            exact={true}
            path="/dashboard"
            component={UserIsAuthenticated(Dashboard)}
          ></Route>
          <Route
            path="/user/:id"
            component={UserIsAuthenticated(UserDetails)}
          ></Route>
          <Route
            path="/update/:id"
            component={UserIsAuthenticated(UpdateUser)}
          ></Route>
          <Route
            path="/create"
            component={UserIsAuthenticated(CreateNewUser)}
          ></Route>
          <Route
            exact={true}
            path="/Firebase-React/"
            component={UserIsNotAuthenticated(Home)}
          ></Route>
          <Route
            path="/signin"
            component={UserIsNotAuthenticated(SignIn)}
          ></Route>
          <Route
            path="/signup"
            component={UserIsNotAuthenticated(SignUp)}
          ></Route>
          {/* <Route path="*" component={NotFound}></Route> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
