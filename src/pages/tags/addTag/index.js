import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/actions";

const AddTag = () => {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // add todo to redux
    dispatch(addTodo(inputText));
    setInputText("");
  };

  return (
    <form className='tagsBox' onSubmit={handleSubmit}>
      <input value={inputText} onChange={handleChange} />
      <button type="submit">Add Tag</button>
    </form>
  );
};
export default AddTag;
