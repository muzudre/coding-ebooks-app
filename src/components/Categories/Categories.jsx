import React from "react";
import { Link } from "react-router-dom";

const categories = (props) => (
  <section className="text-gray-700 body-font border-t border-gray-200">
    <div className="max-w-2xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col w-full mb-10">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Categories
        </h1>
      </div>
      <div className="flex flex-wrap -m-2">
        {props.categories.map((item, i) => (
          <div key={i} className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <Link
              to={{
                pathname: `/category/${item.url}`,
                title: `${item.title}`,
                url: `${item.url}`,
                cover: `${item.cover}`,
                desc: `${item.desc}`,
              }}
              className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-gray-100"
            >
              <img
                alt={item.title}
                className="w-16 h-16  object-cover object-center flex-shrink-0 mr-4"
                src={item.cover}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  {item.title}
                </h2>
                <p className="text-gray-500">
                  {item.desc.slice(0, 40).concat("...")}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default categories;
