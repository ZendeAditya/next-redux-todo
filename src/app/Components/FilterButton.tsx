import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllCompleted } from "../redux/action";

type Props = {};

const FilterButton = (props: Props) => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: any) => state.filter);
  const handleFilter = (filter: any) => {
    dispatch(filterTodo(filter));
  };
  return (
    <div className="flex space-x-4 items-center">
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
        className="text-sm px-3 py-2 rounded border-gray-300 focus:outline-none"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>

      <button
        onClick={() => dispatch(markAllCompleted())}
        className="text-sm px-2 py-1 bg-purple-400 text-white ml-1 rounded"
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButton;
