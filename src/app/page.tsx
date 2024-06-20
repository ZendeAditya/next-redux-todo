"use client";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./Components/Todo";
export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
}
