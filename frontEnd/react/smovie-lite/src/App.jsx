import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleMovie from './pages/SingleMovie';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='movie/:id' element={<SingleMovie />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
