export default function TodoElement({task}) {
    return (
        <div className="todo">
            <p>{ task }</p>
            <div className="delete_button">Del</div>
        </div>
    )
}