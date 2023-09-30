import React from 'react';
import Todo from './components/Todo';

const data = [
    {
        id: Math.floor(Math.random() * 100),
        title: `I want to go to school`,
    },
    {
        id: Math.floor(Math.random() * 100),
        title: `I want to gym`,
    },
    {
        id: Math.floor(Math.random() * 100),
        title: `I want to travel`,
    },
    {
        id: Math.floor(Math.random() * 100),
        title: `I want to sleep`,
    },
];

const App: React.FC = () => {
    return (
        <div>
            {data.map((e, i) => {
                return <Todo key={i} topic={e.title} />;
            })}
        </div>
    );
};

export default App;
