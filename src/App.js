 // Importing the stylesheet for the application
import "./css/main.css";
// Importing components
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
// Importing Framer Motion for animations which is used to for different motions.
import { motion } from "framer-motion";


function App() {
  return (
    //Main container element which contains all the components.
    <div className="App"> 
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        {/* Rendering the Todos component here */}
        <Todos /> 
        {/* Rendering the DisplayTodos component here */}
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

// Exporting the App component to be used by other components
export default App; 