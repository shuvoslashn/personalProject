import React from 'react';
import Video from './components/Video';

const App = () => {
    return (
        <div>
            <Video
                title='video player'
                des='Lorem ipsum dolor sit amet consectetur adipiscing elit, at commodo potenti orci dictumst aliquet tortor, himenaeos nostra egestas sodales convallis et'
            />
            <Video
                title='audio player'
                des='Tempus euismod ridiculus tellus penatibus aenean quisque mattis pellentesque interdum sodales lobortis, curae dignissim sollicitudin enim rhoncus tortor faucibus posuere blandit'
            />
        </div>
    );
};

export default App;
