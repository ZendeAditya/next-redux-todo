import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "@/app/Components/TodoItem"
type Props = {};

const TodoList = (props: Props) => {
  const filteredTodos = useSelector((state: any) => {
    const todo = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todo.filter((todo: any) => {
      const matchFilter =
        (filter === "completed" && todo.Completed) ||
        (filter === "incompleted" && !todo.Completed) ||
        filter === "all";

      const matchSearchTerm = todo.text.toLowerCase().includes(searchTerm);
      return matchFilter && matchSearchTerm;
    });
  });
  console.log(filteredTodos)
  return <div>
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((todo:any, index:number) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  </div>;
};

export default TodoList;
