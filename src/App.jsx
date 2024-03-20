import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Notes from "./components/Notes/Notes";

export default function App() {
    return (
        <div id="app">
            {
                // <Counter />
                // <Todo />
                <Notes />
            }
        </div>
    );
};