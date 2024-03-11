import style from '../css/TodoItem.module.css'

function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <>
    <div className={style.Box1}>
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className={style.Box2}>
          <button
            className={style.ToggleButton}
            onClick={() => toggleCompleted(task.id)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </button>
      </div>
      <div className={style.Box3}>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
</div>
</>
  );
}

export default TodoItem;
