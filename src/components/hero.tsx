import React from "react";

import "./style/_hero.scss"

export const Hero = () => {
    return (
        <section className="hero is-dark">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                    Medium title
                    </h1>
                    <h2 className="subtitle">
                    Medium subtitle
                    </h2>
                </div>
            </div>
            <div className="hero-foot">
            </div>
        </section>
    );
}