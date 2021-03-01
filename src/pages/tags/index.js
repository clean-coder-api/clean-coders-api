import React from "react";
import AddTag from "./addTag";
import TagList from "./tagList";

const TagsWrapper = () => {
  return (
    <div className='tagsWrapper'>
      <AddTag />
      <TagList/>
    </div>
  );
};

export default TagsWrapper;
