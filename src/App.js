import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const getTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        // console.log(
        //   res.data.map((arr) => {
        //     return arr.title;
        //   })
        // );
        setTodo(
          res.data.map((arr) => {
            return arr.title;
          })
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <button onClick={getTodos}>get</button>

      {todo.map((todo, id) => {
        // console.log(id);
        // console.log(todo);
        return <p key={id}>{todo}</p>;
      })}

      {/* <p key={todo.id}>{todo}</p> */}
    </div>
  );
}

export default App;
