"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
//import { ITask } from '@/lib/types/todo'
//import TodoTask from '@/components/todo-task'

interface ITodo{
  id:number;
  task:string;
}

let nextId = 0;

const FileSection = () => {
    const [task, setTask] = useState<string>("")
    const [todoList, setTodoList] = useState<ITodo[]>([])

    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
      setTask(e.currentTarget.value)
    }

    const addTask = () =>{
  
        setTodoList([
          ...todoList,{id:nextId++, task:task}
        ])
      setTask("")
    }

    
  return (
    <div>
    <div className="flex place-items-center ">
      <Input 
      className="p-5 mt-4 w-60 ml-3"
      onChange={handleChange}
      />
      <Button 
      variant="outline" className='ml-4 mt-4'
      onClick={addTask}
      >Add</Button>
    </div>
    <ul className='m-3'>
        {todoList.map(todo=>(
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  )
}
export default FileSection;