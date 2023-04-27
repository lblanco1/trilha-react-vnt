import { useState } from "react";
import styles from "./CreateTask.module.css";
import { useAppContext } from "../../../../hooks/useAppContext";

const CreateTask = () => {
  const { setTasks } = useAppContext();
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setTaskName("");

    setTasks((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: taskName,
      },
    ]);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Criar Nova Tarefa"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default CreateTask;
