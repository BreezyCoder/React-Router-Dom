import React from "react";
//import React-router-dom Redirect component
import { Route, Redirect } from "react-router-dom";

//export the function so that App.js can import it and use the component logic
export default function ProtectedRoute({
  //create & pass isAuth and component as a argument then deliver the rest of the component props using
  //Spred syntax to merge attributes
  isAuth: isAuth,
  component: Component,
  ...rest
}) {
  return (
    //credate the Redirect component logic
    <Route
      //pass all attributes of the flowing component to this component e.g "location e.g: /home or /signup or /login"
      {...rest}
      //render the props to pass auth properties
      render={(props) => {
        if (isAuth) {
          //return the compoent if isAuth is set to true
          return <Component />;
        }
        //else return the isAuth argument, if is set to false, redirect the user to the signin page
        return (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        );
      }}
    />
  );
}
