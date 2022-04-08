import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import './App.css';

import Main from "../containers/Main/Main";
import Book from "../containers/Book/Book";
import Category from "../containers/Category/Category"
// import Reader from "../containers/Reader/Reader";
import Header from "../components/Navigation/Header/Header";
import Footer from "../components/Navigation/Footer/Footer";
import NotFound from "../components/404/404";
import Terms from "../components/Terms/Terms"
import MobileApp from '../components/App/App'

import RouterChangeTracker from "../utils/RouterChangeTracker";

const TRACKING_ID = "G-3ZEN57B31R"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <BrowserRouter basename="/">
      <React.Fragment>
        <RouterChangeTracker />
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/category/:categoryId" component={Category} />
          <Route path="/book/:categoryId/:bookId" component={Book} />
          {/* <Route path="/reader/:bookId" component={Reader} /> */}
          <Route path="/terms" component={Terms} />
          <Route path="/app" component={MobileApp} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
