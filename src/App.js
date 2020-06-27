import React from 'react';
import { motion } from 'framer-motion';
import logo from './logo.svg';
import './App.css';

const variants = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </motion.div>

        <motion.div
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          whileHover={{ scale: 2 }}
          whileTap={{ scale: 0.8 }}
        >
          <p>hello world</p>
        </motion.div>

        <motion.div
          animate={{
            scale: [0, 1, 2, 2, 3, 1, 0],
            rotate: [0, 90, 180, 90, 270, 0],
          }}
          transition={{ duration: 2 }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </motion.div>
      </header>
    </div>
  );
}

export default App;
