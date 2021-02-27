import React from "react";
import Cards from "./cards";
import Pagination from "./pagination";

function Peoples(props) {
  // Get current peoples
  const indexOfLastPeople = props.match.params.id * props.pageSize;
  const indexOfFirstPeople = indexOfLastPeople - props.pageSize;
  const currentPeoples = props.peoples.slice(
    indexOfFirstPeople,
    indexOfLastPeople
  );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <Cards loading={props.loading} peoples={currentPeoples} />
        <Pagination
          totalNumPages={props.totalNumPages}
          pageId={props.match.params.id}
        />
      </div>
    </div>
  );
}

export default Peoples;
