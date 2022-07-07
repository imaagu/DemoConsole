import React from "react";

const Pagination = (props) => {
  const { currentPage, onPageChange, next, previous } = props;

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6 text-left">
          {previous !== null && (
            <button
              className="btn btn"
              style={{ backgroundColor: "#5c0a5c", color: "white" }}
              key={currentPage}
              onClick={() => onPageChange(-1)}
            >
              Prev.
            </button>
          )}
        </div>
        <div className="col-6 text-right ">
          {next !== null && (
            <button
              className="btn"
              style={{ backgroundColor: "#5c0a5c", color: "white" }}
              key={currentPage}
              onClick={() => onPageChange(1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
