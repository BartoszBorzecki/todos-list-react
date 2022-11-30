import "./style.css";

const Tasks = ({tasks, hideDone, removeTask}) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`taskList ${task.done && hideDone ? "taskList--hide" : ""}`}
            >
                <button className="taskList__button">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "taskList__content--done" : ""}`}>{task.content}</span>
                <button 
                className="taskList__button taskList__button--remove"
                onClick={() => removeTask(task.id)}
                > 🗑 </button>
            </li>
        ))}
    </ul>
);

export default Tasks;