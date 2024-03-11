Welcome to our comprehensive guide on creating a Todo List application using React! React, a JavaScript library developed by Facebook, is widely recognized for its efficiency and flexibility when it comes to building interactive user interfaces. In this tutorial, we’ll cover essential React concepts, including components, state management, props, event handling, and styling. By the end of this guide, you’ll have a fully functional Todo List app and a strong grasp of React fundamentals. Let’s dive in!

Prerequisites
Before we start building our Todo List app, make sure you have the following prerequisites in place:

- Basic knowledge of HTML, CSS, and JavaScript.
- Node.js and npm installed on your computer.
- A code editor like Visual Studio Code.
- A web browser for testing your app.

Step 1: Set Up the Project
Our first task is to set up the React project. This step involves creating the necessary project structure. Here’s how you can do it:

1. Create a React App:
   Open your terminal and navigate to your preferred directory. Run the following command to generate a new React app. Replace “todo-app” with your desired project name:

npx create-react-app todo-app
This command will create a directory named “todo-app” with all the initial code required for a React app.

2. Navigate to the Project Directory:
   Change your working directory to the “todo-app” folder:

cd todo-app 3. Start the Development Server:
Launch the development server with the following command:

npm start
This will open your React app, and you’ll see the default React starter page in your web browser at `http://localhost:3000`.

Step 2: Create the App Component
In this step, we create the App component, which serves as the entry point to our Todo List application.

import React from 'react';
import TodoList from './components/TodoList';
function App() {
return (

 <div className="App">
 <TodoList />
 </div>
 );
}
export default App;
Step 3: Create the TodoList Component
Now, let’s create the `TodoList` component, which is responsible for managing the list of tasks and handling task-related functionality.

import React, { useState } from ‘react’;
import TodoItem from ‘./TodoItem’;

function TodoList() {
const [tasks, setTasks] = useState([
{
id: 1,
text: 'Doctor Appointment',
completed: true
},
{
id: 2,
text: 'Meeting at School',
completed: false
}
]);

const [text, setText] = useState('');
function addTask(text) {
const newTask = {
id: Date.now(),
text,
completed: false
};
setTasks([…tasks, newTask]);
setText('');
}
function deleteTask(id) {
setTasks(tasks.filter(task => task.id !== id));
}
function toggleCompleted(id) {
setTasks(tasks.map(task => {
if (task.id === id) {
return {…task, completed: !task.completed};
} else {
return task;
}
}));
}
return (

 <div className="todo-list">
 {tasks.map(task => (
 <TodoItem
 key={task.id}
 task={task}
 deleteTask={deleteTask}
 toggleCompleted={toggleCompleted}
 />
 ))}
<input
 value={text}
 onChange={e => setText(e.target.value)}
 />
<button onClick={() => addTask(text)}>Add</button>
 </div>
 );
}
export default TodoList;
Step 4: Create the TodoItem Component
In this step, we create the `TodoItem` component, which represents an individual task in our Todo List.

import React from 'react';
function TodoItem({ task, deleteTask, toggleCompleted }) {
function handleChange() {
toggleCompleted(task.id);
}

return (

 <div className="todo-item">
 <input
 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<p>{task.text}</p>
<button onClick={() => deleteTask(task.id)}>
 X
 </button>
 </div>
 );
}
export default TodoItem;
These three components, `App`, `TodoList`, and `TodoItem`, work together to create a functional Todo List application in React. The `TodoList` component manages the state of the tasks, and the `TodoItem` component represents and handles individual tasks within the list.

Step 5: Styling
To enhance the visual appeal of your Todo List, you can apply some basic styling. Here’s an example of how you can style the todo items. In the `App.css` file, add the following styles:

.todo-item {
display: flex;
justify-content: space-between;
margin-bottom: 8px;
}
.todo-item p {
color: #888;
text-decoration: line-through;
}
Don’t forget to import the `App.css` in your `App.js` file to apply the styles globally.

import './App.css';
That’s it! You’ve successfully built a complete Todo List app with React. You’ve learned about React components, state management, hooks, props, event handling, and even a bit of styling. With this knowledge, you can further enhance your app by adding features like editing tasks, reordering with drag and drop, applying filters, or even integrating with a backend.

Final Thoughts
Mastering ReactJS and building a Todo List application from the ground up is just the beginning of your journey in the world of web development. With the solid foundation you’ve gained in React fundamentals, you’re now well-equipped to explore more complex applications, tackle real-world projects, and expand your skills further.

And if you’re looking to take your web development skills to the next level by integrating real-time chat and social features into your applications, consider exploring Amity’s chat SDK. Amity empowers your app with robust chat capabilities, making communication seamless and interactive. To delve deeper into the myriad features that Amity has to offer, don’t hesitate to explore further by clicking here. Whether you’re building a chat application or any other interactive project, Amity can be a valuable addition.

Thank you for joining us on this journey, and we wish you the very best in your React learning journey. Happy coding!
