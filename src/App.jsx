import { useState } from "react";
// import "./App.css";
import TodoBox from "./components/TodoBox";
import BackgroundImage from "./components/BackgroundImage";
import styled, { createGlobalStyle } from "styled-components";
import TodoLogo from "./components/TodoLogo";
import CheckBox from "./components/CheckBox";
import { VeryDarkBlueDark, VeryLightGrayishBlue } from "./colors";

const GlobalStyle = createGlobalStyle`
body{
    font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  background-color: ${(props) =>
    props.darkMode ? VeryLightGrayishBlue : VeryDarkBlueDark};
}`;

const Container = styled.div`
  background-color: grey;
`;
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [json, setJson] = useState({});
  return (
    <Container>
      <GlobalStyle darkMode={darkMode} />
      <BackgroundImage darkMode={darkMode} />
      <TodoBox darkMode={darkMode} setDarkMode={setDarkMode} />
    </Container>
  );
};

export default App;
