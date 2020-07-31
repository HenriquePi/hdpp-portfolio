import React, { FC } from "react";
import { Greeting } from "components/greeting";
import { Footer } from "components/footer"
import { Hero } from "components/hero";
import { Nav } from "components/navigation";

export const App: FC = () => (
  <div className="my-app">
    <Nav />
    <Hero /> 
    <div className="columns is-centered">
      <div className="column">
        <h1 className="title is-1 has-text-centered">
          React Typescript SPA Starter
        </h1>
      </div>
    </div>
    <Greeting />
    <Footer />
  </div>
);
