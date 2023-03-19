import React, { FormEvent, useRef } from "react";
interface NewTodoProps {
  onAddTodo: (text: string) => void;
}
const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);
  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    props.onAddTodo(textRef.current!.value);
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" ref={textRef} />
    </form>
  );
};

export default NewTodo;
