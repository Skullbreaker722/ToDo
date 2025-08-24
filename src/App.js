import "./App.css";
import { Header } from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState } from 'react'
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))


  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = todos[todos.length-1].sno+1;
    const myTodo={
      sno: sno,
      title:title,
      desc:desc,
    }
    console.log(myTodo);
    

  }
  const [todos, setTodos] = useState([
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
  ]);

  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
