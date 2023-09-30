import React from 'react';

interface TodoItemProps {
    title: string;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
    return <li>{props.title}</li>;
};

export default TodoItem;
