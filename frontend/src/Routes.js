import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from "./core/PrivateRoute";

import About from "./core/About";
import Contact from "./core/Contact";
import Home from "./core/Home";
import Dashboard from "./core/Dashboard";
import AdminPanel from "./core/AdminPanel";
import Product from "./core/Product";
import Checkout from "./core/Checkout";
import Signin from "./user/Signin";
import Signup from "./user/Signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <PrivateRoute exact path="/admin" component={AdminPanel} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/product" component={Product} />
        <PrivateRoute exact path="/checkout" component={Checkout} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
