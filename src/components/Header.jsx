export function Header(props) {
    const { todos } = props;//destructuring
    const len=todos.length;

    const taskortasks = len !== 1 ? 'tasks' : 'task';
    return (
        <header>
            <h1>You have {len} open {taskortasks }</h1>
        </header>

    );
}