import React from "react";

const badge = (props) => {
  return !!props.title ? (
    <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 text-gray-700 rounded">
      {props.title}
    </span>
  ) : null;
};

export default badge;
