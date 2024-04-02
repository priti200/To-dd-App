// Importing necessary libraries  like react, react-redux, framer-motion, react-icons
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  // Destructuring props to access item data and action creator functions
  const { item, updateTodo, removeTodo, completeTodo } = props;
// useRef hook to manage focus state of the textarea 
  const inputRef = useRef(true); // Initially disabled
// Function to toggle focus on the textarea for editing
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
// Function to handle updates on pressing Enter key in the textarea
  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          {" "}
          <AiFillEdit />{" "}
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          <IoClose />
        </motion.button>{" "}
      </div>
      {item.completed && <span className="completed">done</span>}
    </motion.li>
  );
};

export default TodoItem;