import React, { useState } from "react";
import styled from "styled-components";

const Tag = () => {
  const initialTags = ["codeStates", "kimCoding"];

  const [tags, setTags] = useState(initialTags);

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((item, i) => i !== indexToRemove));
  };

  const addTag = (event) => {
    if (event.code === "Enter") {
      if (
        !tags.includes(event.target.value) &&
        !(event.target.value === null) &&
        !(event.target.value === "")
      ) {
        setTags(tags.concat([event.target.value]));
      }
    }
  };

  return (
    <TagsInput>
      <ul>
        {tags.map((tag, i) => (
          <li key={i}>
            <span>{tag}</span>
            <span onClick={() => removeTag(i)}> x</span>
          </li>
        ))}
      </ul>

      <input
        onKeyUp={(event) => {
          addTag(event);
        }}
      />
    </TagsInput>
  );
};

export default Tag;

const TagsInput = styled.div``;
