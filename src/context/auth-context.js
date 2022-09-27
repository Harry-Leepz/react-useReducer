import React from "react";

// createContext takes an arguement, which is normally an object aka STATE
// createContext returns an object that holds a component
const AuthContext = React.createContext({
  isLoggedIn: false,
});

// Once exported this context object needs to provide and then consumed.
export default AuthContext;
