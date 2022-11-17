const tasks = [
  { id: 1, content: "zjeść obiad", done: false },
  { id: 2, content: "pójść na spacer", done: true },
];

const hideDoneTasks = false;


function App() {
  return (
    <main>
      <header className="header">
        <h1>Lista zadań</h1>
      </header>
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <form className="form">
          <input className="form__input" autofocus required placeholder="Co jest do zrobienia?" />
          <button className="form__button">Dodaj zadanie</button>
        </form>
      </section>
      <section className="section">
        <div className="section__container">
          <h2 className="section__header">Lista zadań</h2>
          <div className="listButtons"></div>
        </div>
        <ul className="list"></ul>
      </section>
    </main>
  );
}

export default App;
