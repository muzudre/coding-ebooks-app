import React, { Component } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import { API_URL, IMAGE_BASE_URL } from "../../config/config";
import Badge from "../../components/Badge/Badge";

class Book extends Component {
  state = {
    book: [],
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
          book: result.filter(
            (x) => x.id === parseInt(this.props.match.params.bookId)
          ),
          loading: true,
        });
      })
      .catch((error) => console.log("Error:", error));
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <>
            {this.state.book.map((item, i) => {
              return (
                <section
                  key={i}
                  className="text-gray-700 body-font border-t border-gray-200"
                >
                  <div className="max-w-2xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                      <img
                        alt="feature"
                        className="object-cover object-center h-full w-full"
                        src={`${IMAGE_BASE_URL}${item.cover}`}
                      />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left">
                      <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="lg:col-span-2 lg:pr-8">
                          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-1xl">
                            {item.title}
                          </h1>
                        </div>

                        <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8">
                          <div className="mb-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm text-gray-900 font-medium">
                                By{" "}
                                <span className="text-sky-500">
                                  {item.author}
                                </span>
                              </h3>
                              <p className="text-sm font-medium text-gray-900">
                                <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-sky-500 text-white rounded uppercase">
                                  {item.type}
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="mt-2 flex space-x-2">
                            <Badge title={item.pages} />
                            <Badge title={item.size} />
                            <Badge title={item.year} />
                          </div>

                          <p className="mt-5 text-sm text-gray-600">
                            Infringement of intellectual property rights, we
                            encourage that you buy books and help authors. All
                            ebooks in this page is under open license.
                          </p>

                          <div className="mt-5">
                            <h2 className="text-sm font-medium text-gray-900">
                              Details
                            </h2>

                            <div className="mt-4 space-y-6">
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <div className="mt-5">
                            <h2 className="text-sm font-medium text-gray-900">
                              License
                            </h2>

                            <div className="mt-4 space-y-6">
                              <p className="text-sm text-gray-600">
                                {item.license}
                              </p>
                            </div>
                          </div>

                          <div className="mt-5">
                            <h2 className="text-sm font-medium text-gray-900">
                              Note
                            </h2>

                            <div className="mt-4 space-y-6">
                              <p className="text-sm text-gray-600">
                                All the books listed in this page ara freely
                                available, as they ara hosted on websites that
                                belong to the authors or the publishers.
                              </p>
                            </div>
                          </div>

                          <div className="mt-5">
                            <h2 className="text-sm font-medium text-gray-900">
                              Report
                            </h2>

                            <div className="mt-4 space-y-6">
                              <p className="text-sm text-gray-600">
                                Please report{" "}
                                <a href="/#" className="text-sky-500">
                                  here
                                </a>{" "}
                                if the book link to pdf or to website is not
                                working. We will check and fix it
                              </p>
                            </div>
                          </div>

                          <div className="mt-10">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-10 w-full bg-sky-500 border border-transparent rounded-lg py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-sky-400 hover:text-white"
                            >
                              {item.type === "web" ? "Open" : "Download"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </>
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

export default Book;
