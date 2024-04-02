// Importing configureStore function from @reduxjs/toolkit library.
// ConfigureStore is a function provided by the reduxjs toolkit library that simplifies the process of creating a Redux store.
import { configureStore } from "@reduxjs/toolkit";

// Importing the reducer function from the "./reducer" file 
import { reducer } from "./reducer";

// Creating a Redux store using configureStore
const store = configureStore({
  reducer: reducer, // Specifying the reducer function to manage application state
});

// Exporting the store as the default export
export default store;

// now let's connect this store to react app