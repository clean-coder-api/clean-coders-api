import React from "react";
import { deleteTag } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const Tag = (props) => {
  const dispatch = useDispatch();

  const deleteOneTag = () => {
    dispatch(deleteTag(props.id));
  };

  return (
    <div className="oneTag">
      <li>{props.title}</li>
      <div>
        <button className="edit">Edit</button>
        <button className="delete" onClick={deleteOneTag}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Tag;
