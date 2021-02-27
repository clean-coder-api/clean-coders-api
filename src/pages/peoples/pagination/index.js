import React from "react";
import { NavLink } from "react-router-dom";

function Pagination(props) {
  const renderPages = () => {
    let pagination = [];
    for (let i = 1; i <= props.totalNumPages; i++) {
      pagination.push(
        props.pageId === i.toString() ? (
          <a key={i} className="disabled-btn">
            {i}
          </a>
        ) : (
          <NavLink key={i} className="pagination-btn" to={"/peoples/" + i}>
            {i}
          </NavLink>
        )
      );
    }
    return pagination;
  };

  return (
    <div className="col col-md-8 m-3">
      <div className="row justify-content-center">{renderPages()}</div>
    </div>
  );
}

export default Pagination;
