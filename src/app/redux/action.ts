import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_ALL_COMPLETED,
  MARK_INCOMPLETED,
  FITLER_TODO,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

export const markCompleted = (id: number) => ({
  type: MARK_COMPLETED,
  payload: {
    id,
  },
});

export const markIncompleted = (id: number) => ({
  type: MARK_INCOMPLETED,
  payload: {
    id,
  },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const filterTodo = (filter: string) => ({
  type: FITLER_TODO,
  payload: {
    filter,
  },
});

export const updateSearchTerm = (searchTerm: string) => ({
    type: UPDATE_SEARCH_TERM,
    payload: {
      searchTerm,
    },
  
});
