import React from "react";
import TasksRow from "./row";
import PropTypes from "proptypes";
const Main = ({ data, editRow, deleteItem }) => {
  // console.log(data);
  return (
    <main className="main">
      {data.map((D, i) => (
        <TasksRow
          key={"TasksRow" + i}
          deleteItem={deleteItem}
          index={i}
          editRow={(row) => editRow(i, row)}
          row={D}
        />
      ))}
    </main>
  );
};
Main.propTypes = {
  data: PropTypes.array,
  editRow: PropTypes.any,
  deleteItem: PropTypes.func,
};

export default Main;
