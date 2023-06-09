import styled from "styled-components";
import NewTodo from "./NewTodo";
import CreatedTodo from "./CreatedTodo";
import TodoLogo from "./TodoLogo";
import Darkmode from "./Darkmode";
import { DarkGrayishBlue, VeryDarkGrayishBlueDark26 } from "../colors";
const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translateX(-50%);
  max-width: 700px;
  @media (max-width: 1200px) {
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 1000px) {
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 500px) {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TodoLogoWithDarkMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ReorderListText = styled.div`
  margin-top: 40px;
  text-align: center;
  opacity: 0.9;
  color: ${(props) =>
    props.darkMode ? DarkGrayishBlue : VeryDarkGrayishBlueDark26};
  margin-bottom: 40px;
`;
const TodoBox = ({ darkMode, setDarkMode }) => {
  //   const NewTodo = styled.div``;
  //   const CreatedTodo = styled.div``;

  return (
    <Container>
      <TodoLogoWithDarkMode>
        <TodoLogo />
        <Darkmode darkMode={darkMode} setDarkMode={setDarkMode} />
      </TodoLogoWithDarkMode>
      <NewTodo darkMode={darkMode} />
      <CreatedTodo darkMode={darkMode} />
      <ReorderListText darkMode={darkMode}>
        Drag and drop to reorder list
      </ReorderListText>
    </Container>
  );
};

export default TodoBox;
