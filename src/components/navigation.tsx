import React, {MouseEvent, useState } from 'react';
import "./style/_navigation.scss"

export const Nav = () => {

    let bol = false;

    const [isNavOpen, setNavOpen] = useState(false);

    const handleNavClick = (event: MouseEvent) => {
        setNavOpen(!isNavOpen)
    }

    return(
        <div>
            <nav className="navbar" role="navigation" aria-label="dropdown navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">INO:{isNavOpen.toString()}</a>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={handleNavClick}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu" id="main-menu">
                    <a className="navbar-item">About</a>
                    <div className="navbar-item has-dropdown is-hoverable ">
                        <a className="navbar-link">Demo</a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item is-dark">Demonstration 1</a>
                        </div>
                    </div>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Music</a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">Song 1</a>
                        </div>
                    </div>
                </div>
                {
                    isNavOpen && (
                        <div className="nav-overlay" >    
                            <aside className="menu">
                                <ul className="menu-list">
                                    <li><a>About</a></li>
                                    <li>
                                        <a>Demo</a>
                                        <ul>
                                            <li><a>Demo1</a></li>
                                            <li><a>Demo2</a></li>
                                            <li><a>Demo3</a></li></ul>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    )
                }
            </nav>
        </div>
    );
}