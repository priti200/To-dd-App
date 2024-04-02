// Importing necessary libraries  like react, react-redux, framer-motion
import React, { useState } from "react";
import { connect } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "./TodoItem"; // Import TodoItem component for displaying individual todos

// Expected action creators from the reducer 
import { addTodos, completeTodos, removeTodos, updateTodos } from "../redux/reducer";

// Connecting to Redux store to access and update todo data
const mapStateToProps = (state) => {
  // Retrieve the entire todo state object from the store
  return {
    todos: state,
  };
};

// Connecting action creators to dispatch events that update the Redux store
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)), // Dispatch action to add a new todo
    removeTodo: (id) => dispatch(removeTodos(id)), // Dispatch action to remove a todo
    updateTodo: (obj) => dispatch(updateTodos(obj)), // Dispatch action to update a todo
    completeTodo: (id) => dispatch(completeTodos(id)), // Dispatch action to mark a todo as completed
  };
};

// DisplayTodos component - It manages the todo list display and interaction
const DisplayTodos = (props) => {
  // State variable to track the current sorting criteria (active, completed, all)
  const [sort, setSort] = useState("active");

  // Function to handle sorting button clicks and update the state
  const handleSortClick = (newSort) => {
    setSort(newSort);
  };

  return (
    <div className="displaytodos">
      <div className="buttons">
        {/* Buttons for filtering todos with optional Framer Motion animations */}
        <motion.button
          whileHover={{ scale: 1.1 }} // Scale up on hover (optional animation)
          whileTap={{ scale: 0.9 }} // Scale down on tap (optional animation)
          onClick={() => handleSortClick("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSortClick("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSortClick("all")}
        >
          All
        </motion.button>
      </div>

      <ul>
        <AnimatePresence>
          {/* Conditionally render todo items based on the current sorting criteria */}
          {props.todos.length > 0 && sort === "active" ? (
            // If todos exist and sort is 'active', render only non-completed items
            props.todos.map((item) => (
              <TodoItem
                key={item.id} // Using unique key for each todo item
                item={item} // Passing the todo data to the TodoItem component
                removeTodo={props.removeTodo} // Passing removeTodo action creator as a prop
                updateTodo={props.updateTodo} // Passing updateTodo action creator as a prop
                completeTodo={props.completeTodo} // Passing completeTodo action creator as a prop
              />
            ))
          ) : null}

          {/* Similar logic for rendering completed and all items */}
          {props.todos.length > 0 && sort === "completed" && (
            props.todos.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                updateTodo={props.updateTodo}
                completeTodo={props.completeTodo}
              />
            ))
          )}
          {props.todos.length > 0 && sort === "all" && (
            props.todos.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                updateTodo={props.updateTodo}
                completeTodo={props.completeTodo}
              />
            ))
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

// Connecting the component to Redux and export it for use in your application
export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos
);