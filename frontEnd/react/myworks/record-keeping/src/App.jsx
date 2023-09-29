import Display from "./components/Display";
import Form from "./components/Form";
import Header from "./components/Header";

const App = () => {
    return (
        <div className='bg-zinc-900 text-zinc-400 w-full h-screen'>
            <Header />
            <Form />
        </div>
    );
};

export default App;
