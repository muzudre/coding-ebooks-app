import React, { Component } from "react";
import { categories } from "../../config/data/categories";
import Categories from "../../components/Categories/Categories";
import Hero from "../../components/Hero/Hero";
import { API_URL } from "../../config/config";

class Main extends Component {
  state = {
    randomBook: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`${API_URL}others.json`)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          randomBook: result[Math.floor(Math.random() * 13) + 1],
          loading: true,
        });
      })
      .catch((error) => console.log("Error:", error));
  };

  render() {
    return (
      <>
        <Hero loading={this.state.loading} random={this.state.randomBook} />
        <Categories categories={categories} />
      </>
    );
  }
}

export default Main;
