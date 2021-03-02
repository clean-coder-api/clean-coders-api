import React, { useState } from "react";
import { deleteTag, editTag, saveEdit,canselEdit } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const Tag = (props) => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState(props.text);
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const save = (event) => {
    event.preventDefault();
    dispatch(saveEdit(inputText, props.id));
  };
  const cansel = (event) => {
    event.preventDefault();
    dispatch(canselEdit(inputText, props.id));
  };

  const deleteOneTag = () => {
    dispatch(deleteTag(props.id));
  };
  const editOneTag = () => {
    dispatch(editTag(props.id));
  };

  return (
    <div>
      {props.edit ? (
        <div className="oneTag">
          <input value={inputText} onChange={handleChange} />
          <div>
            <button className="save" onClick={save}>
              save
            </button>
            <button className="cansel" onClick={cansel}>cansel</button>
          </div>
        </div>
      ) : (
        <div className="oneTag">
          <li>{props.text}</li>
          <div>
            <button className="edit" onClick={editOneTag}>
              Edit
            </button>
            <button className="delete" onClick={deleteOneTag}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tag;

