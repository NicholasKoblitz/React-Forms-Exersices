import React from 'react';
import '../styles/App.css';
import BoxList from './BoxList';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <BoxList/>
      <TodoList/>
    </div>
  );
}

export default App;
