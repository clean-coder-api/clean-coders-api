import React, { useState, useEffect } from "react";
import TimePicker from "../../../../../components/timePicker";
import moment from "jalali-moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TasksRow = ({ row, editRow, index }) => {
  const diffTime = moment.duration(row.endDate - row.startDate);
  const tags = useSelector((state) => state.tags.allTags);
  const [optionValue, setOptionValue] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setOptionValue(value);
    // this.handleSubmit(value);
    editRow({ ...row, optionValue: value });
  };

  return (
    <div className="row">
      <span>{index + 1}</span>
      <input
        value={row.description}
        onChange={(e) => editRow({ ...row, description: e.target.value })}
      />
      {tags.length > 0 ? (
        <select value={optionValue} onChange={handleChange}>
          <option value="">choose a tag</option>
          {tags.map((tag) => (
            <option value={tag.text}>{tag.text}</option>
          ))}
        </select>
      ) : (
        <Link to="/tags">add the first tag</Link>
      )}

      <TimePicker
        placeholder="start time"
        onChange={(value) => editRow({ ...row, startDate: value })}
      />
      <TimePicker
        placeholder="end time"
        onChange={(value) => editRow({ ...row, endDate: value })}
      />
      <span>
        {moment(
          `${Math.floor(diffTime.asHours())}:${Math.floor(
            diffTime.asMinutes()
          )}:${Math.floor(diffTime.asSeconds())}`,
          "H:m:s"
        ).format("HH:mm:ss")}
      </span>
    </div>
  );
};

export default TasksRow;
