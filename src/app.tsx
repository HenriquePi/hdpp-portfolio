<<<<<<< HEAD
import React, { useState, FC } from "react";
=======
import React, { useState, useEffect, FC } from "react";
>>>>>>> 572d464d14e59652d489c49f07ed184ceb3e7f55
import { Switch, Route, useHistory, useLocation, BrowserRouter as Router } from "react-router-dom";
import { Greeting } from "pages/greeting";
import About from 'pages/about';
import MusicPlayer from 'pages/music';
import PCGen from './pages/pro-con';

type LocationState = {
  from: Location;
} 

export const App: FC = () => {

<<<<<<< HEAD
  const history = useHistory();
  const location = useLocation();
  // const prevLocation = React.useRef(location);
  // const modal = location.state?.modal;
=======
  // const history = useHistory();
  console.log();
  const location = useLocation<LocationState>();
  console.log(location);
  // const prevLocation = React.useRef(location);
  // // const modal = location.state?.modal;
>>>>>>> 572d464d14e59652d489c49f07ed184ceb3e7f55

  // React.useEffect(() => {
  //   if (history.action !== 'POP') {
  //     prevLocation.current = location;
  //   }
  // }, [location, history.action])

  // const isModalOpen = modal && prevLocation.current !== location;

  return(
    <Router>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/demo/pro-con-generator" component={PCGen}/>
          <Route exact path="/music" component={MusicPlayer}/>
        </Switch>
      </Router>
=======
      <Switch>
        <Route exact path="/" component={About}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/demo/pro-con-generator" component={PCGen}/>
        <Route exact path="/music" component={MusicPlayer}/>
      </Switch>
    </Router>
>>>>>>> 572d464d14e59652d489c49f07ed184ceb3e7f55
  );
}
