import { useState,useEffect } from 'react'
import {TodoProvider} from './context'
import { TodoForm ,TodoItem} from './components'

function App() {
 const [todos,setTodos] = useState([])
 const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev,todo ])
 }
 
 const updateTodo = (id,todo)=>{
  setTodos((prev)=>prev.map((t)=>(t.id === id ? {...t,...todo} : t)))
 }
 const deleteTodo = (id)=>{
  setTodos((prev)=>prev.filter((t)=>t.id !== id))
 }
 const toggleComplete = (id)=>{
  setTodos((prev)=>prev.map((t)=>(t.id === id ? {...t,completed:!t.completed} : t)))
 }
 useEffect(()=>{
  // Load todos from localStorage on mount
  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  if(todos && todos.length>0) return;
  setTodos(storedTodos);
},[])

useEffect(()=>{
  // Save todos to localStorage whenever they change
  localStorage.setItem('todos', JSON.stringify(todos));
},[todos]);

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                         < div key={todo.id} className="w-full">
                            <TodoItem key={todo.id} todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
