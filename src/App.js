import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./containers/Main/Main";
import Book from "./containers/Book/Book";
import Category from "./containers/Category/Category"
import Reader from "./containers/Reader/Reader";
import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Navigation/Footer/Footer";
import NotFound from "./components/404/404";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/category/:categoryId" component={Category} />
          <Route path="/book/:categoryId/:bookId" component={Book} />
          <Route path="/reader/:bookId" component={Reader} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
