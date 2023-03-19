import { useContext, useRef, useState } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(TodosContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textRef.current!.value; // ref 값은 form 이 submit 되는 시점에서는 무조건 있기 때문에 !를 사용해도 됨
    if (enteredText.trim().length === 0) {
      return;
    }
    ctx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={textRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
