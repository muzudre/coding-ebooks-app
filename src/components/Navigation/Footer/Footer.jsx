import React from "react";
import Logo from "../../../assets/logo.png";

const footer = () => (
  <footer className="bg-gray-50 ">
    <div className=" px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div>
          <p className="max-w-xs mt-4 mb-4 text-sm text-gray-500">
            <img
              className="h-10 w-auto float-left m-2"
              src={Logo}
              alt="logo-footer"
            />
            Library of Coding eBooks it's an application for all coders from
            beginner to professional, it contains more than 100+ free coding
            ebook & programming ebooks for different levels whether you are a
            newbie or advanced you will find something that will help to start
            learning coding step by step or to increase your knowledge. This app
            contains a list of free e-books for programmers with a live search.
            With the simple design you can choose your best programming language
            to learn includes:
          </p>
          <img
            className="h-10 w-auto"
            src="https://mirrors.creativecommons.org/presskit/logos/cc.logo.svg"
            alt="creative-commons"
          />
          <p className="mt-4 text-xs text-gray-500">
            &copy; 2022 Library of Coding eBooks
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
