import "./App.css";
import { Header } from './MyComponents/Header';
import Footer from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy vegetables",
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to buy clothes",
    },
    {
      sno: 3,
      title: "Go to the gym",
      desc: "You need to go to the gym to stay fit",
    }
  ];

  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
