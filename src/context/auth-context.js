import React from "react";

// createContext takes an arguement, which is normally an object aka STATE
// createContext returns an object that holds a component
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

// Once exported this context object needs to provide and then consumed.
export default AuthContext;

/*
AuthContext here is not a component but an objext that contains the component which is the Provider.
To allow components to use this context and hook into the data, components that need access to the data must 
be wrapped in either the App.js file or the Index.js file.

In this project we'll use the provided in the App.js file.
*/
