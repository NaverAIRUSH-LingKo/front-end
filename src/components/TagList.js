import React from 'react';
import '../css/TagList.css';
import Tag from './Tag';


const TagList = ({ tags }) => {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
    </div>
  );
};


export default TagList;
