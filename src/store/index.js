import { configureStore } from "@reduxjs/toolkit";
import {addArray,deleteArray,toggleTodo,clearCompletedArray,sortArray,arrayReducer} from "./slices/arrayslice"
const store = configureStore({
    reducer:{
        array:arrayReducer,
    },
});

export {store,addArray,deleteArray,toggleTodo,clearCompletedArray,sortArray};