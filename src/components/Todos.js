import React, { useState } from "react"; // Import Reacting and useState hook
import { connect } from "react-redux"; // Importing connect for Redux integration
import { addTodos } from "../redux/reducer"; // Importing addTodos action creator
import { GoPlus } from "react-icons/go"; // Importing Plus icon
import { motion } from "framer-motion"; // Importing for animations (optional)

// MapStateToProps to get data from Redux store  and it is optional
const mapStateToProps = (state) => {
  return {
    todos: state, // to access entire state if needed
  };
};

// MapDispatchToProps to dispatch actions 
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)), // Dispatch addTodos action
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState(""); // State for todo item text

  const handleChange = (e) => {
    setTodo(e.target.value); // Updating state on input change
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({ // Dispatch addTodo action with new todo object
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo(""); // Clear input after adding
    }
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)} // Handliing input change
        className="todo-input"
        value={todo} // Setting input value from state
      />
      <motion.button // Add button with hover animation 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()} // Calling add function on click
      >
        <GoPlus /> {/* Plus icon */} 
      </motion.button>
      <br />
    </div>
  );
};

// Connect Todos component with Redux store (necessary for dispatching actions)
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
