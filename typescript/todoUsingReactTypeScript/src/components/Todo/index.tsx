import React from 'react';
import TodoItem from './TodoItem';

interface TodoList {
    topic: string;
}

const Todo: React.FC<TodoList> = (props) => {
    return (
        <div>
            <ol>
                <TodoItem title={props.topic} />
            </ol>
        </div>
    );
};

export default Todo;
