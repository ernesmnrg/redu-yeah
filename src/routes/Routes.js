import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../pages/landing-page/LandingPage";
import Admin from "../pages/admin/AdminPage";
const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={LandingPage} />
      <Route path="/admin" exact component={Admin} />
    </div>
  );
};

export default Routes;
