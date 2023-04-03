import styled from "styled-components";
const Container = styled.div`
  width: 100px;
  background-color: red;
`;
const Item = styled.div`
  width: 50px;
  background-color: blue;
`;

const Test = () => {
  const testData = ["일", "이", "삼", "사", "오", "육"];
  return (
    <Container>
      {testData.map((a) => (
        <Item>{a}</Item>
      ))}
    </Container>
  );
};

export default Test;
