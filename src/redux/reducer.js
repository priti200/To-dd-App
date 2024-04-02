// Importing the createSlice function from the @reduxjs/toolkit library
// CreateSlice is a utility function that helps to create a slice of the Redux State containing the reducer function, action creators and initial
// state all in one place.
import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state of the todos slice as an empty array
const initialState = [];

// Creating a slice using createSlice below.
const addTodoReducer = createSlice({
  name: "todos", // Name of the slice 
  initialState, // Setting the initial state of the slice
  reducers: {
    // Defining reducers (Reducers are the functions that handle state updates based on actions)
    addTodos: (state, action) => {
      // Adding a new todo item to the state array
      state.push(action.payload); // Pushing the new todo from the action payload
      return state; // Returning the updated state
    },

    removeTodos: (state, action) => {
      // Filter out todos where the id doesn't match the action payload )
      return state.filter((item) => item.id !== action.payload);
    },

    updateTodos: (state, action) => {
      // Updating todo item based on the id and new item content
      return state.map((todo) => {
        if (todo.id === action.payload.id) { // Checking if the todo id matches
          return {
            ...todo, // Spreading the existing todo properties
            item: action.payload.item, // Updating the item property with the new content
          };
        }
        return todo; // Returning the unchanged todo if id doesn't match
      });
    },

    completeTodos: (state, action) => {
      // Toggling between the completed state of a todo based on the id
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo, // Spread the existing todo properties
            completed: !todo.completed, // Toggling the completed property assuming a boolean.
          };
        }
        return todo; // Returning the unchanged todo if id doesn't match
      });
    },
  },
});

// Exporting individual action creators from the reducer slice
export const { addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;

// Exporting the reducer function itself for use in the Redux store
export const reducer = addTodoReducer.reducer;
