import styled from "styled-components";
import "./App.css";
import MemoEditor from "./components/MemoEditor/MemoEditor";
import MemoList from "./components/MemoList/MemoList";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 40px;
`;

function App() {
  return (
    <Div>
      <MemoList />
      <MemoEditor />
    </Div>
  );
}

export default App;
