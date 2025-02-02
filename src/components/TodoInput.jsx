import {useState } from 'react';

export function TodoInput(props) {
    const { handleAddTodo } = props;
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <input value={inputValue} onChange={(event) => {
                setInputValue(event.target.value)          }
            } 
            placeholder="Add a new task" />
            <button onClick={() => {
                if (!inputValue) return;
                handleAddTodo(inputValue)
                setInputValue('');
                }}>  

                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}