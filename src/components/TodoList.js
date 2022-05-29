import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';


const TodoList = () => {
    const INITIAL_STATE = [];

    const [todos, setTodos] = useState(INITIAL_STATE);

    const addTodo = (id, todo) => {
        setTodos(todos => [...todos, {id, todo}])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    return (
        <div>
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todos.map(todo => <Todo id={todo.id} todo={todo.todo} removeTodo={removeTodo} key={todo.id}/>)}
            </ul>
        </div>
    )
}

export default TodoList;