import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/TodoItem.css";
import TodoItem from "./components/TodoItem";

function App() {
	const [input, setInput] = useState("");
	const [todo, setTodo] = useState([]);
	const local_storage_key = 'todo';

	useEffect(() => {
		const storeTodos = JSON.parse(localStorage.getItem(local_storage_key))
		if(storeTodos) setTodo(storeTodos);
	}, [])

	useEffect(() => {
		localStorage.setItem(local_storage_key, JSON.stringify(todo))
	}, [todo])

	const handleChange = (e) => {
		let value = e.target.value
		setInput(value);
	}

	const handleClick = (e) => {
		e.preventDefault();
		const id = todo.length ? todo[todo.length - 1].id + 1 : 1;
		
		input ? setTodo([...todo, {id: id, name: input}]) : console.log();
		setInput('');
	}

	const handleDelete = (id) => {
		const newTodo = [...todo]
		const todoItem = newTodo.filter(todo => todo.id !== id )
		
		setTodo(todoItem)
	}


	const changeUpdate = (updateData, id) => {
		const newTodo = [...todo]
		const todos = newTodo.find(todo => todo.id === id )
		todos.name = updateData;
		setTodo(newTodo)
	}

    return (
        <div className="App">
            <h1>React ToDo App</h1>
			<div>
				<input type='text' className="input" value={input} onChange={handleChange}/>
				<button onClick={handleClick}>Save</button>
				<div>
					{
						todo.map(todo => {
							return <TodoItem 
							key={todo.id}
							id={todo.id} 
							name={todo.name}
							handleDelete={handleDelete}
							changeUpdate={changeUpdate}/>
						})
					}
				</div>
			</div>
        </div>
    );
}

export default App;
