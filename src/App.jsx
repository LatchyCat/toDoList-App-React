import React from 'react';
import TodoList from './components/TodoList.jsx';
import ContentBox from './components/ContentBox.jsx';

// import './App.css';

function App() {
  return (
    <>

    <div className="App">
      <ContentBox>
        <TodoList />
      </ContentBox>
    </div>

    </>
  );
}

export default App;
