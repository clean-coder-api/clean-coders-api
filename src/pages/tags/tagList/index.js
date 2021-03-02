import React from "react";
import Tag from "../tag";
import { useSelector } from "react-redux";

const TagList = (props) => {
  const tags = useSelector((state) => state.tags.allTags);
  return (
    <ul className='oneTagContainer'>
      {tags.map((tag) => (
        <Tag key={tag.id} title={tag.text} {...tag} />
      ))}
    </ul>
  );
};
export default TagList;
