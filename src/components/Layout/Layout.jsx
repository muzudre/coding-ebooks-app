import React from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <>
    <Toolbar />
    <main>{props.children}</main>
  </>
);

export default layout;
