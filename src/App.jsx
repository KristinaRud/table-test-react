import Table from "./components/Table/Table";
import s from "./styles/App.module.scss"

const App = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Refferals-345</h1>
      <Table />
    </div>
  );
};

export default App;
