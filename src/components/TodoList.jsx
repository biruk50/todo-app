import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos ,selectedTab } = props;

    const filtertodo = selectedTab === 'All' ? todos :
        selectedTab === 'Active' ? todos.filter(todo => !todo.completed) :
        todos.filter(todo => todo.completed);
        
    return (
        <>
        {filtertodo.map((todo,todoIndex) => {
            return (
                <TodoCard key={todoIndex} todoIndex={todos.findIndex((val) => val.title===todo.title)}
                todo={todo}
                {...props}
                /> //{...props} has to be the last attribute
            )
        })}
        </>
    )
}