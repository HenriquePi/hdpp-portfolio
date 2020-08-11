import React, { useState, FC } from "react";
import { Greeting } from "pages/greeting";
import Layout from "components/layout";
import { RoutT } from "components/router-test";

export const App: FC = () => {

  return(
    <div className="my-app">
      <Layout>
      </Layout>
    </div>
  );
}
