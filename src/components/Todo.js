import React from "react";


const Todo = ({id, todo, removeTodo}) => {

    const handleRemove = (e) => {
        removeTodo(id)
    }

    return (
        <div id={id}>
            {todo}
            <button onClick={handleRemove}>X</button>
        </div>
    )
}

export default Todo;