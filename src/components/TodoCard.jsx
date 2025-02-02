export function TodoCard(props) {
    const {todoIndex,todo ,handleDeleteTodo, handleCompleteTodo} = props;
 
    return (
        <div className="card todo-item"> 
            <p>{todo.title}</p>
            <div className="todo-button">
                <button onClick={ () => handleCompleteTodo(todoIndex)}
                    disabled={todo.completed }>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex);
                }}>
                    <h6>Delete</h6>
                </button> 
            </div>
        </div>
    )
}