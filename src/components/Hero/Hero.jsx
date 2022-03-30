import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../UI/Spinner/Spinner";
import Badge from "../Badge/Badge";
import { IMAGE_BASE_URL } from "../../config/config";
import { stringToSlug } from "../../config/helper";

const hero = (props) => {
  return props.loading ? (
    <section className="text-gray-700">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
            {props.random.title}
          </h1>
          {props.random.author === "n/a" ? null : (
            <p className="leading-relaxed">
              By{" "}
              <a
                href={props.random.authorUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sky-500"
              >
                {props.random.author}
              </a>
            </p>
          )}

          <div className="mt-2 flex space-x-2 justify-center">
            <Badge title={props.random.type} />
            <Badge title={props.random.pages} />
            <Badge title={props.random.size} />
            <Badge title={props.random.year} />
          </div>
          <p className="mb-2 mt-2 leading-relaxed">
            {props.random.description === "null"
              ? null
              : props.random.description}
          </p>
          <p className="mb-2 text-sm leading-relaxed">{props.random.license}</p>
          <div className="flex justify-center">
            <a
              href={props.random.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg"
            >
              {props.random.type === "web" ? "Open" : "Download"}
            </a>
            <Link
              to={{
                pathname: `/reader/${stringToSlug(props.random.title)}`,
                name: `${props.random.title}`,
                pdf: `${props.random.url}`,
              }}
              state={{ from: "the-page-id" }}
              className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
            >
              Read
            </Link>
          </div>
        </div>
        <div>
          <img
            src={`${IMAGE_BASE_URL}${props.random.cover}`}
            className="rounded-lg shadow-2xl w-52"
            alt="hero"
          />
        </div>
      </div>
    </section>
  ) : (
    <Spinner />
  );
};

export default hero;
