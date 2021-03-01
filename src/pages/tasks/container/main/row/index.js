import React, { useState } from "react";
import TimePicker from "../../../../../components/timePicker";
import moment from "jalali-moment";
import { useSelector } from "react-redux";

const TasksRow = ({ row, editRow, index }) => {
  const diffTime = moment.duration(row.endDate - row.startDate);
  const tags = useSelector((state) => state.tags.allTags);
  const [optionValue, setOptionValue] = useState("");
  const handleChange = (e) => {
    console.log(" Selected!!");
    setOptionValue(e.target.value);
    editRow({ ...row, optionValue: e.target.value });
  };

  return (
    <div className="row">
      <span>{index + 1}</span>
      <input
        value={row.description}
        onChange={(e) => editRow({ ...row, description: e.target.value })}
      />
      <select value={optionValue} onChange={handleChange}>
        {tags.map((tag) => (
          <option value={tag.text}>{tag.text}</option>
        ))}
      </select>
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
