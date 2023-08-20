import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import { API_URL, IMAGE_BASE_URL } from "../../config/config";

class Category extends Component {
  state = {
    books: [],
    searchString: "",
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
          filterBooks: result,
          loading: true,
        });
      })
      .catch((error) => console.log("Error:", error));
  };

  updateSearch(e) {
    this.setState({ searchString: e.target.value });
  }

  clearSearch = () => {
    this.setState({ searchString: "" });
  };

  render() {
    const filterData = this.state.searchString
      ? this.state.books.filter(
          (row) =>
            row.title
              .toLowerCase()
              .indexOf(this.state.searchString.toLowerCase()) > -1 &&
            row.description
              .toLowerCase()
              .indexOf(this.state.searchString.toLowerCase()) > -1
        )
      : this.state.books;

    return (
      <>
        {this.state.loading ? (
          <div>
            <div className="max-w-2xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                {this.props.location.title}
              </h2>
              <p>{this.props.location.desc}</p>
              <br />

              <div className="text-gray-400">
                <div className="max-w mx-auto py-3 px-2 border-b border-gray-300">
                  <div className="flex justify-between">
                    <div className="flex space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <input
                        onChange={(e) => this.updateSearch(e)}
                        type="text"
                        className="focus:outline-none"
                        placeholder="Search for books"
                        value={this.state.searchString}
                      />
                    </div>
                    <div className="flex items-center space-x-6">
                      <p className="hover:text-gray-900">
                        {filterData.length} Books
                      </p>
                      <span onClick={this.clearSearch}>
                        <svg
                          className="h-8 w-8 text-gray-400"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <line x1="18" y1="6" x2="6" y2="18" />{" "}
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {filterData.length <= 0 ? (
                <div className="flex items-center justify-center">
                  <div className="px-4 lg:py-12">
                    <div className="lg:gap-4 lg:flex">
                      <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                        <h1 className="font-bold text-sky-500 text-3xl">
                          Hmmm...
                        </h1>
                        <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                          We couldn't find any matches for "
                          <span className="text-sky-500">
                            {this.state.searchString}
                          </span>
                          "
                        </p>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                          Double check your search for any typos or spelling
                          errors - or try a different search term.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 xl:gap-x-12">
                  {filterData.map((item, i) => {
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
                            <span className={item.type === 'pdf' ? 'bg-red-500 text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded uppercase' : 'bg-sky-500 text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold text-white rounded uppercase'}>
                              {item.type}
                            </span>
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
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
