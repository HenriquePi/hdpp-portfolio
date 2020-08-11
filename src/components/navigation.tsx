import React, {MouseEvent, useState } from "react";
import "./style/_navigation.scss"
import About from "pages/about"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Greeting } from "pages/greeting";
import PCGen from "pages/pro-con";
import MusicPlayer from "pages/music";

export const Nav = () => {

    const [isNavOpen, setNavOpen] = useState(false);

    const handleNavClick = (event: MouseEvent) => {
        setNavOpen(!isNavOpen)
    }

    return(
        <div>
            <Router>
            <nav className="navbar is-dark" role="navigation" aria-label="dropdown navigation">
                <div className="navbar-brand">
                    <a className="navbar-item"><Link to ="/">INO:{isNavOpen.toString()}</Link></a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={handleNavClick}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu" id="main-menu">
                    <Link to="/about" className="navbar-item">About</Link>
                    <div className="navbar-item has-dropdown is-hoverable ">
                        <a className="navbar-link">Demo</a>
                        <div className="navbar-dropdown">
                            <Link to="/demo/pro-con-generator" className="navbar-item is-dark">Pro Con Gen</Link>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Music</a>
                        <div className="navbar-dropdown">
                            <Link to="/music" className="navbar-item">Song 1</Link>
                        </div>
                    </div>
                </div>


                
                {
                    isNavOpen && (
                        <div className="nav-overlay" >    
                            <aside className="menu">
                                <ul className="menu-list">
                                    <li><Link to="/about">About</Link></li>
                                    <li>
                                        <a>Demo</a>
                                        <ul>
                                            <li><Link to="/demo/pro-con-generator">Pro Con Gen</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/music">Music</Link>
                                        <ul>
                                            <li><Link to="/music">Song 1</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    )
                }

            </nav>
            <Switch>
                    <Route exact path="/">
                        <Greeting />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    {/* Demo List */}
                    <Route exact path="/demo/pro-con-generator">
                        <PCGen />
                    </Route>
                    {/* Music Player */}
                    <Route exact path="/music">
                        <MusicPlayer />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}