import React, { useState, FC } from "react";
import { Switch, Route, useHistory, useLocation, BrowserRouter as Router } from "react-router-dom";
import { Greeting } from "pages/greeting";
import Layout from "components/layout";
import { RoutT } from "components/router-test";
import About from 'pages/about';
import MusicPlayer from 'pages/music';
import PCGen from './pages/pro-con';

export const App: FC = () => {

  const history = useHistory();
  const location = useLocation();
  // const prevLocation = React.useRef(location);
  // const modal = location.state?.modal;

  // React.useEffect(() => {
  //   if (history.action !== 'POP') {
  //     prevLocation.current = location;
  //   }
  // }, [location, history.action])

  // const isModalOpen = modal && prevLocation.current !== location;

  return(
    <Router>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/demo/pro-con-generator" component={PCGen}/>
          <Route exact path="/music" component={MusicPlayer}/>
        </Switch>
      </Router>
  );
}
