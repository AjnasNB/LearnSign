import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"; // Import the NavBar component
import Baseline from "./pages/Baseline";

function App() {
  return (
    <>
      <NavBar /> {/* Include the NavBar component */}
      <Switch>
        <Route exact path="/" component={Baseline} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
