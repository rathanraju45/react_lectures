import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Notes from "./components/Notes/Notes";
import Designations from "./components/Designations/Designations";
import Quiz from "./components/quiz/Quiz";

export default function App() {
    return (
        <div id="app">
            {
                // <Counter />
                // <Todo />
                // <Notes />
                // <Designations />
                <Quiz />
            }
        </div>
    );
};