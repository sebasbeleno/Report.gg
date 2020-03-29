import React from "react";

import Loader from "./Loader";
import Navbar from "../components/Navbar";
function PageLoading() {
  return (
    <div className="PageLoading">
      <Navbar />
      <Loader />

    </div>
  );
}

export default PageLoading;
