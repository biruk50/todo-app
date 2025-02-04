import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

import { useState, useEffect } from 'react';
function App() {
  const [todos, setTodos] = useState([])                
  //useState is a hook that allows you to have state variables in functional components
  const [selectedTab, setSelectedTab] = useState('Active');  
  function handleAddTodo(newtodo) {
    const newtodos = [...todos, { title: newtodo, completed: false }];
    setTodos(newtodos);
    saveToLocalStorage(newtodos); 
  }
  function handleDeleteTodo(index) {
    let newtodos = todos.filter((val, ind) => { return ind !== index });
    setTodos(newtodos);
    saveToLocalStorage(newtodos);
  }
  function handleCompleteTodo(index) {
    todos[index].completed = true;
    setTodos([...todos]);
    saveToLocalStorage([...todos])
  }

  function saveToLocalStorage(currentTodos) {

    localStorage.setItem('todo-app',JSON.stringify({ todos : currentTodos }));
  }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {return};
    let db=JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos);

  }, []);//when the dependencies array is empty, the callback function is only called once after the first render



  //<> is React.Fragment is an empty div
  return (
    <>
      <Header todos={todos} />
      <Tabs selectedTab={selectedTab}
        setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}
        selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
