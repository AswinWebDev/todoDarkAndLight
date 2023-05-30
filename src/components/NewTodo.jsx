import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addArray } from "../store";
import CheckBox from "./CheckBox";
import { VeryLightGrayLight,VeryDarkDesaturatedBlueDark,LightGrayishBlueDark,VeryDarkGrayishBlue } from "../colors";

const NewTodoBox = styled.div`
  margin-top: 40px;
  padding: 0px;
  background-color: white;
  max-width: 700px;
  background-color: ${props=>props.darkMode?VeryLightGrayLight:VeryDarkDesaturatedBlueDark};


    `;
const FormTodo = styled.form`
display:flex;
align-items:center;
gap:10px;
padding:10px 20px;
max-width: 700px;
`;

const InputTodo = styled.input`
border: 0px solid #eaeaea;
font-size: 18px;
width: 95%;
background-color: ${props=>props.darkMode?VeryLightGrayLight:VeryDarkDesaturatedBlueDark};


  padding: 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: "Josefin Sans", sans-serif;
    color:${props=> props.darkMode?VeryDarkGrayishBlue:LightGrayishBlueDark};
  }
  &:not(:placeholder-shown) {
    font-family: "Josefin Sans", sans-serif;
    color:${props=> props.darkMode?VeryDarkGrayishBlue:LightGrayishBlueDark};
  }
`;
const NewTodo = ({darkMode}) => {

  const dispatch = useDispatch();

const handleSubmit = (e) => {
  e.preventDefault();
  e.target[0].value.length>=1 &&(
  dispatch(addArray({content:e.target[0].value,id:Math.floor(Math.random()*10000),status:true})))
  e.target[0].value = "";
};
  return (
    <NewTodoBox darkMode={darkMode}>
      <FormTodo onSubmit={handleSubmit}>
        <CheckBox status={true}/>
      <InputTodo type="text" placeholder="Create a new todo" darkMode={darkMode}></InputTodo>
      </FormTodo>
    </NewTodoBox>
  );
};

export default NewTodo;
