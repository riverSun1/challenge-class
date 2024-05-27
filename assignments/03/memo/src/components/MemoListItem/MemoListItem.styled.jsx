import styled from "styled-components";

export const Wrapper = styled.div`
  height: 56px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$isSelected ? "rgb(255, 224, 127)" : "rgb(255, 255, 255);"};
  margin: 10px;
  padding: 12px 24px;
  cursor: pointer;
`;
