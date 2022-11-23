import "./style.css";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <div className="listButtons">
            <button 
            className="section__button"
            disabled={props.tasks.some(({ done }) => !done)}
            >
                     {props.hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button 
            className="section__button"
            disabled={props.tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);



export default Buttons;