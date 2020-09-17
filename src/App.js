import React, { useEffect }from 'react';
import Todolist from './Todo/Todolist'
import Context from './context'
import AddTodo from './Todo/AddTodo'
import Loader from './loader'
import Modal from './Modal/Modal'


function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)


useEffect(() => {
     setTimeout(() =>{
       setLoading(false)
     }, 1000)
   })

function toggleTodo(id) {
  setTodos(
    todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  )
}

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))

}

function addTodo(title){
  setTodos(todos.concat([{
    title,
    id: Date.now(),
    completed:false
  }]))
}

  return (
    <Context.Provider value={{ removeTodo }}>
  <div className='wrapper'>
    <h1>To do list</h1>
    <Modal />
    <AddTodo onCreate={addTodo} />

    {loading && <Loader />}

    {todos.length ? ( 
    <Todolist todos={todos} onToggle={toggleTodo}/> ) 
    : (loading ? null : 
    <p>Добавьте дело!</p>
    )}
   
    </div>
    </Context.Provider>
  )
}

export default App;
