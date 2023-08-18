import React from 'react';
import Video from './components/Video';
import { dataset } from './data/dataset';

const App = () => {
    return (
        <div className='flex flex-wrap m-5'>
            {dataset.map((e, i) => {
                return (
                    <Video
                        key={i}
                        title={e.title}
                        des={e.des}
                        views={e.views}
                        channel={e.channel}
                        verified={e.verified}
                        id={i}
                    />
                );
            })}
        </div>
    );
};

export default App;
