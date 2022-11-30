import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="listButtons">
            <button
                onClick={toggleHideDone}
                className="listButtons__button"
            >
                {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
                onClick={setAllDone}
                className="listButtons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;