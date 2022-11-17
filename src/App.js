
function App() {
  return (
    <main>
      <header className="header">
        <h1>Lista zadań</h1>
      </header>
      <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <form className="form js-form">
          <input className="form__input js-newTask" autofocus required placeholder="Co jest do zrobienia?" />
            <button className="form__button">Dodaj zadanie</button>
        </form>
      </section>
      <section className="section">
        <div className="section__container">
          <h2 className="section__header">Lista zadań</h2>
          <div className="listButtons js-listButtons"></div>
        </div>
        <ul className="list js-list"></ul>
      </section>
    </main>
  );
}

export default App;
