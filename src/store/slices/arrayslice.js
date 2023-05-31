import { createSlice } from "@reduxjs/toolkit";

const arraySlice = createSlice({
    name:"array",
    initialState:[
        {id:1,content:"hola",status:true},
        {id:2,content:"amigo",status:false},
        {id:3,content:"como",status:true},
        {id:4,content:"estas",status:false},
    ],
    reducers:{
        addArray(state,action){
           state.push(action.payload)
        },
    deleteArray(state, action) {
  const index = state.findIndex((item) => item.id === action.payload);
  if (index !== -1) {
    state.splice(index, 1);
  }
},
toggleTodo (state, action)  {
  const todo = state.find((item) => item.id === action.payload);
  if (todo) {
    todo.status = !todo.status;
  }
}
,
clearCompletedArray(state,action){
  // use filter to return a new array with only the items that are not completed
  return state.filter((item) => item.status);
},

sortArray(state,action){
  return action.payload;
}
    },
});
export const {addArray,deleteArray,toggleTodo,clearCompletedArray,sortArray} = arraySlice.actions;
export const arrayReducer = arraySlice.reducer;