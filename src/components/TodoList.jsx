import { useState } from 'react';
import TodoItem from '../components/TodoItem.jsx';
import style from '../css/TodoList.module.css';



function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      completed: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      completed: false,
    },
  ]);


  const [text, setText] = useState('');

  function addTask(text) {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText('');
  }


  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }


  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    }));
  }

  return (

    <>
    <div className={style.Biggie}>
      <div className="todo-list">
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
        <div className={style.Box4}>
            <div className={style.BiggieBag1}>
              <input
                value={text}
                onChange={e => setText(e.target.value)}
              />
                    </div>
            </div>

        <div className={style.box5}> <button onClick={() => addTask(text)}>Add</button> </div>
      </div>
    </div>
    </>
  );
}

export default TodoList;
