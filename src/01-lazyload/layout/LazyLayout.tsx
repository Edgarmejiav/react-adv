import React from "react";
import { Navigation } from "../routers/Navigation";

export const LazyLayout = () => {
  return (
    <div>
      {" "}
      <div>LazyLayout main</div> <Navigation />
    </div>
  );
};
export default LazyLayout;
