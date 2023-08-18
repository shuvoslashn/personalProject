import React from 'react';
import Video from './components/Video';
import { dataset } from './data/dataset';

const App = () => {
    return (
        <div className='flex flex-wrap'>
            {dataset.map((e, i) => {
                return <Video key={i} title={e.title} des={e.des} views={e.views} />;
            })}
        </div>
    );
};

export default App;
