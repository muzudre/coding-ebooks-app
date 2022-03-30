import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import { API_URL, IMAGE_BASE_URL } from "../../config/config";

class Category extends Component {
  state = {
    books: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`${API_URL}${this.props.match.params.categoryId.toLowerCase()}.json`)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          books: result,
          loading: true,
        });
      })
      .catch((error) => console.log("Error:", error));
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                {this.props.location.title}
              </h2>
              <p>{this.props.location.desc}</p>

              <div className="mt-6 grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-12">
                {this.state.books.map((item, i) => {
                  return (
                    <Link
                      to={{
                        pathname: `/book/${this.props.match.params.categoryId.toLowerCase()}/${
                          item.id
                        }`,
                      }}
                      key={i}
                      className="group relative"
                    >
                      <div className="aspect-w-1 aspect-h-1 rounded-md  group-hover:opacity-75 lg:aspect-none">
                        <img
                          src={`${IMAGE_BASE_URL}${item.cover}`}
                          alt="Fro"
                          className="rounded-lg shadow-2xl w-52"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-md text-black font-medium">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description.slice(0, 40).concat("...")}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-sky-500 text-white rounded">
                            {item.type}
                          </span>
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

export default Category;
