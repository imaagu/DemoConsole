import React from "react";
const Loader = () => {
  return (
    <div className="spinner-border" style={{ color: "#5c0a5c" }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
