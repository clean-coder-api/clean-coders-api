import React, { useState } from "react";
import Cards from "./cards";
import Pagination from "./pagination";

function Peoples(props) {
  // const [currentPage, setCurrentPage] = useState(1);

  // Get current peoples
  const indexOfLastPeople = props.match.params.id * props.pageSize;
  const indexOfFirstPeople = indexOfLastPeople - props.pageSize;
  const currentPeoples = props.peoples.slice(
    indexOfFirstPeople,
    indexOfLastPeople
  );

  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <Cards peoples={currentPeoples} />
        <Pagination
          totalNumPages={props.totalNumPages}
          pageId={props.match.params.id}
        />
      </div>
    </div>
  );
}

export default Peoples;
