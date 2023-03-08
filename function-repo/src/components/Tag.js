/* eslint-disable no-undef */
import React, { useState } from "react";
import styled from "@emotion/styled";

const Tag = () => {
  const [tagList, setTagList] = useState([]);

  // 새로운 태그 추가
  const addTags = (event) => {
    // 이미 추가되어 있는 태그라면 추가하지 않기 : filter 사용
    // 아무것도 입력하지 않은 상태로 Enter key 입력시 실행하지 않기

    const filtered = tagList.filter((el) => el === event.target.value);
    if (event.target.value !== "" && filtered.length === 0) {
      setTagList([...tagList, event.target.value]); // spread 문법 사용

      // 태그 추가되면 input 비우기
      event.target.value = "";
    }
  };

  // 태그 삭제
  const removeTag = (indexToRemove) => {
    setTagList(tagList.filter((_, i) => i !== indexToRemove));
  };

  return (
    <TagContainer>
      <TagBox>
        {tagList.map((item, i) => (
          <TagItem>
            <span>{item}</span>
            <Button onClick={() => removeTag(i)}>x</Button>
          </TagItem>
        ))}

        <TagInput
          type="text"
          placeholder="Press enter to add tags"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        ></TagInput>
      </TagBox>
    </TagContainer>
  );
};

export default Tag;

const TagContainer = styled.div`
  padding: 10px;
  height: 100vh;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  margin: 10px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  &:focus-within {
    border-color: purple;
  }
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: purple;
  border-radius: 5px;
  color: white;
  font-size: 13px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: purple;
  border: 1px solid purple;
`;

const TagInput = styled.input`
  display: inline-flex;
  min-width: 300px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`;
