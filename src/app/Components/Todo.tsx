import React, { useState } from "react";

type Props = {};

import { BsSearch, BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/action";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
const Todo = (props: Props) => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const handleDispatch = (text: string) => {
    dispatch(addTodo(text));
  };
  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      handleDispatch(newTodoText.trim());
      setNewTodoText("");
    }
  };
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        TaskMaster - personal todo app
      </h2>
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(event) => setNewTodoText(event.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodo}
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
