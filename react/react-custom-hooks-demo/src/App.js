import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttpUseCallback from "./components/hooks/use-http-useCallback";

function App() {
  const [tasks, setTasks] = useState([]);
  const transformTasks = useCallback((data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);
  const {
    error,
    isLoading,
    sendHttpRequest: fetchTasks,
  } = useHttpUseCallback(transformTasks);

  useEffect(() => {
    fetchTasks({
      url: "https://react-practice-c1306-default-rtdb.firebaseio.com//tasks.json",
      method: "get",
    });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
