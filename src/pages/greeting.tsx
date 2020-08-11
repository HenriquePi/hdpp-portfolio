import React, { FC, useState } from "react";

import "./style/_greeting.scss";

export const Greeting: FC = () => {
  const [name, setName] = useState("");
  return (
    <div className="component-greeting">

      <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-1 has-text-centered">
                React Typescript SPA Starter
              </h1>
            </div>
          </div>
          
      <div className="columns is-centered">
        <div className="column is-4">
          <div className="box">
            <div className="lead">
              {name?.length > 0 ? (
                <>
                  Hello, <strong>{name}</strong>
                </>
              ) : (
                "Please enter your name"
              )}
            </div>
            <label className="label" htmlFor="username">
              Name
            </label>
            <input
              className="input"
              name="username"
              id="username"
              type="text"
              defaultValue={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
