import style from '../css/TodoItem.module.css'

function TodoItem({ task, deleteTask, toggleCompleted }) {
  const textStyle = task.completed ? `${style.Text} ${style.Completed}` : style.Text;

  return (
    <div className={style.Box1}>
      <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
        <div className={style.Box2}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(task.id)} // Toggle when checkbox is clicked
            className={style.Checkbox}
          />
          <span className={textStyle}>
            {task.text}
          </span>
        </div>
        <div className={style.Box3}>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
