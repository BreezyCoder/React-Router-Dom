import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./addons/resources/ProtectedRoute";
import Nav from "./components/web/navbar";
import Home from "./components/web/home";
import Signin from "./components/web/login";
import Signup from "./components/web/signup";
//all is self explantory here as you import the components and pass them through the react-router-dom Router, Switch tags and then class them using the Route tag
//to enable client side routing and pass the imported components e.g: Home/Signup to the Route component.
export default function App() {
//creating a state variable to pass a isAuth state for "false authentication which will take place in the server side"
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
        //React-Router-Dom requires a exact path, which means it needs a path to directly land on when the website is loading its initial render.
          <Route path="/" exact component={Landing} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          //passing the protected route as a component to check isAuth and allow the ProtectRoute component to read logic and redirect if needed.
          <ProtectedRoute path="/home" component={Home} isAuth={isAuth} />
        </Switch>
      </Router>
    </div>
  );
}
