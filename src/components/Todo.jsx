import './Todo.css';
import TodoElement from './TodoElement';

export default function Todo() {
    return (
        <div id="todo_container">

            <div id="input_container">
                <input type="text" placeholder='Enter your task'/>
                <div id="add_button">Add</div>
            </div>

            <div id="todos">

                <TodoElement task="wash clothes" />

                <TodoElement task="wash utensils" />

                <TodoElement task="go to gym" />

                <TodoElement task="drink water"/>

            </div>

        </div>
    )
}