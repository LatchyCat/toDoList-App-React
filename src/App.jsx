import React from 'react';
import TodoList from './components/TodoList.jsx';

// import './App.css';

function App() {
  return (
    <>
    <div className={style.TitleBox}>
      <h1>Hellow world</h1>
    </div>

    <div className="App">
      <TodoList />
     </div>

    </>
  );
}

export default App;
