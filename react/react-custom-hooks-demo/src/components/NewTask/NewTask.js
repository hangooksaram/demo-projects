import { useState } from "react";
import useHttpNoDependancy from "../hooks/use-http-noDependancy";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const createTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const enterTaskHandler = (taskText) => {
    sendTaskHandler(
      {
        url: "https://react-practice-c1306-default-rtdb.firebaseio.com//tasks.json",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          text: taskText,
        },
      },
      createTask.bind(null, taskText)
    );
  };
  const {
    isLoading,
    error,
    sendHttpRequest: sendTaskHandler,
  } = useHttpNoDependancy();

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
