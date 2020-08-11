import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Greeting } from "pages/greeting";
import About from "pages/about";

  export const RoutT = () => {
      return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dash">Dashboard</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/dash">
                        <Greeting />
                    </Route>
                </Switch>
            </div>
        </Router>
      );
  }

  const Home = () => {
        return(
            <div>
                <h2>
                    Home
                </h2>
            </div>
      );
  }
// //   const About = () => {
// //     return(
// //         <div>
// //             <h2>
// //                 About
// //             </h2>
// //         </div>
// //   );
// }
const Dash = () => {
    return(
        <div>
            <h2>
                Dashboard
            </h2>
        </div>
  );
}