import React from "react";
import Tag from "../tag";
import { useSelector } from "react-redux";

const TagList = (props) => {
  const tags = useSelector((state) => state.tags.allTags);
  return (
    <ul>
      {tags.map((tag) => (
        <Tag key={tag.id} title={tag.text} />
      ))}
      
    </ul>
  );
};
export default TagList;
