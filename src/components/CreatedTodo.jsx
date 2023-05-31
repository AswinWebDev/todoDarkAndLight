import styled from "styled-components";
import {
  VeryLightGrayLight,
  VeryDarkBlueDark,
  LightGrayishBlue,
  DarkGrayishBlue,
  brightBlue,
  VeryDarkGrayishBlue,
  VeryDarkDesaturatedBlueDark,
} from "../colors";
import IconCross from "../assets/images/icon-cross.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteArray,
  toggleTodo,
  clearCompletedArray,
  sortArray,
} from "../store";
import { useRef, useState } from "react";
import CheckBox from "./CheckBox";

const CreatedTodoContainer = styled.div`
  margin-top: 20px;
  max-width: 700px;
  background-color: ${(props) =>
    props.darkMode ? VeryLightGrayLight : VeryDarkDesaturatedBlueDark};
  border-radius: 5px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1);
`;

const CreatedTodoData = styled.div`
  background-color: ${(props) =>
    props.darkMode ? VeryLightGrayLight : VeryDarkDesaturatedBlueDark};
  padding: 20px;
  max-width: 700px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  &:hover {
    .delete-icon {
      display: block;
    }
  }
`;
const TodoText = styled.div`
  font-family: "Josefin Sans", sans - serif;
  color: ${(props) =>
    props.darkMode ? VeryDarkGrayishBlue : LightGrayishBlue};
`;
const TodoTextCompleted = styled.div`
  font-family: "Josefin Sans", sans - serif;
  color: ${(props) =>
    props.darkMode ? LightGrayishBlue : VeryDarkGrayishBlue};
  text-decoration: line-through;
`;

const TodoFooter = styled.div`
  display: flex;
  color: ${(props) =>
    props.darkMode ? VeryDarkGrayishBlue : LightGrayishBlue};

  justify-content: space-between;
`;

const ItemsLeft = styled.div`
  padding: 20px;
  color: ${(props) =>
    props.darkMode ? LightGrayishBlue : VeryDarkGrayishBlue};
`;
const ClearCompleted = styled.div`
  padding: 20px;
  cursor: pointer;
  color: ${(props) =>
    props.darkMode ? LightGrayishBlue : VeryDarkGrayishBlue};
  &:hover {
    color: ${(props) => (props.darkMode ? VeryDarkBlueDark : LightGrayishBlue)};
  }
`;

const AllActiveCompleted = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  justify-content: center;
`;

const IconDelete = styled.img`
  display: none;
  margin-left: auto;
  cursor: pointer;
`;

const AllChild = styled.div`
  color: ${(props) =>
    props.allActiveCompletedState == "All" ? brightBlue : DarkGrayishBlue};
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.darkMode ? VeryDarkBlueDark : LightGrayishBlue)};
  }
`;
const ActiveChild = styled.div`
  color: ${(props) =>
    props.allActiveCompletedState == "Active" ? brightBlue : DarkGrayishBlue};
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.darkMode ? VeryDarkBlueDark : LightGrayishBlue)};
  }
`;
const CompletedChild = styled.div`
  color: ${(props) =>
    props.allActiveCompletedStatee == "Completed"
      ? brightBlue
      : DarkGrayishBlue};
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.darkMode ? VeryDarkBlueDark : LightGrayishBlue)};
  }
`;

// footer center child here //
const FooterCenterChildParentDesktop = styled.div`
 @media (max-width: 700px) {
  display:none;`;

const FooterCenterChildParentMobile = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
  margin-top: 20px;
  max-width: 700px;
  background-color: ${(props) =>
    props.darkMode ? VeryLightGrayLight : VeryDarkDesaturatedBlueDark};
  border-radius: 5px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.1);
`;

//   function here //
const CreatedTodo = ({ darkMode }) => {
  const [allActiveCompletedState, setAllActiveCompletedState] = useState("All");

  const FooterCenterChild = (
    <AllActiveCompleted>
      <AllChild
        allActiveCompletedState={allActiveCompletedState}
        darkMode={darkMode}
        onClick={() => {
          setAllActiveCompletedState("All");
        }}
      >
        All
      </AllChild>
      <ActiveChild
        allActiveCompletedState={allActiveCompletedState}
        darkMode={darkMode}
        onClick={() => {
          setAllActiveCompletedState("Active");
        }}
      >
        Active
      </ActiveChild>
      <CompletedChild
        allActiveCompletedState={allActiveCompletedState}
        darkMode={darkMode}
        onClick={() => {
          setAllActiveCompletedState("Completed");
        }}
      >
        Completed
      </CompletedChild>
    </AllActiveCompleted>
  );
  // array data //
  const arrayData = useSelector((state) => {
    return state.array;
  });
  // array data //

  // delete data //
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteArray(id));
  };
  // delete data //

  // All Active Completed //
  // All Active Completed //

  // no of items left //
  const noOfItemsLeft = arrayData.filter((item) => {
    return item.status === true;
  }).length;
  // no of items left //

  // ref for dragItem and dragOverItem //
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  // ref for dragItem and dragOverItem //

  const handleSort = () => {
    const newArray = [...arrayData];
    const [reorderedItem] = newArray.splice(dragItem.current, 1);
    newArray.splice(dragOverItem.current, 0, reorderedItem);
    dragItem.current = null;
    dragOverItem.current = null;
    dispatch(sortArray(newArray));
  };
  // handle drag events //
  // touch //
  // const handleTouchStart = (e, index) => {
  //   dragItem.current = index;
  // };

  // const handleTouchMove = (e, index) => {
  //   e.preventDefault();
  //   dragOverItem.current = index;
  // };

  // const handleTouchEnd = (e) => {
  //   handleSort();
  // };
  // touch //
  return (
    <div>
      <CreatedTodoContainer darkMode={darkMode}>
        {arrayData.map((item, index) => {
          return (
            <div
              key={item.id}
              draggable
              // onTouchStart={(e) => handleTouchStart(e, index)}
              // onTouchMove={(e) => handleTouchMove(e, index)}
              // onTouchEnd={handleTouchEnd}
              // onTouchCancel={() => {
              //   dragItem.current = null;
              //   dragOverItem.current = null;
              // }}
              onDragStart={(e) => (dragItem.current = index)}
              onDragEnter={(e) => (dragOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              {allActiveCompletedState === "All" && (
                <CreatedTodoData key={item.id} darkMode={darkMode}>
                  <div
                    onClick={() => {
                      dispatch(toggleTodo(item.id));
                    }}
                  >
                    <CheckBox status={item.status} />
                  </div>

                  {item.status === true ? (
                    <TodoText darkMode={darkMode}>{item.content}</TodoText>
                  ) : (
                    <TodoTextCompleted darkMode={darkMode}>
                      {item.content}
                    </TodoTextCompleted>
                  )}
                  <IconDelete
                    className="delete-icon"
                    src={IconCross}
                    alt="icon check"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  />
                </CreatedTodoData>
              )}
              {allActiveCompletedState === "Active" && item.status === true && (
                <CreatedTodoData key={item.id} darkMode={darkMode}>
                  <div
                    onClick={() => {
                      dispatch(toggleTodo(item.id));
                    }}
                  >
                    <CheckBox status={item.status} />
                  </div>
                  <TodoText darkMode={darkMode}>{item.content}</TodoText>
                  <IconDelete
                    className="delete-icon"
                    src={IconCross}
                    alt="icon check"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  />
                </CreatedTodoData>
              )}
              {allActiveCompletedState === "Completed" &&
                item.status === false && (
                  <CreatedTodoData key={item.id} darkMode={darkMode}>
                    <div
                      onClick={() => {
                        dispatch(toggleTodo(item.id));
                      }}
                    >
                      <CheckBox status={item.status} />
                    </div>
                    <TodoTextCompleted darkMode={darkMode}>
                      {item.content}
                    </TodoTextCompleted>
                    <IconDelete
                      className="delete-icon"
                      src={IconCross}
                      alt="icon check"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    />
                  </CreatedTodoData>
                )}
            </div>
          );
        })}

        {/* footer here */}
        <TodoFooter>
          <ItemsLeft darkMode={darkMode}>{noOfItemsLeft} items left</ItemsLeft>
          <FooterCenterChildParentDesktop>
            {FooterCenterChild}
          </FooterCenterChildParentDesktop>
          <ClearCompleted
            darkMode={darkMode}
            onClick={() => {
              dispatch(clearCompletedArray());
            }}
          >
            Clear Completed
          </ClearCompleted>
        </TodoFooter>
      </CreatedTodoContainer>
      <FooterCenterChildParentMobile darkMode={darkMode}>
        {FooterCenterChild}
      </FooterCenterChildParentMobile>
    </div>
  );
};

export default CreatedTodo;
