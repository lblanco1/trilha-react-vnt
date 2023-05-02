import { useState } from "react";
import styles from "./CreateTask.module.css";
import { useAppContext } from "../../../../hooks/useAppContext";
import { api } from "../../../../services/service";

const CreateTask = () => {
  const { setTasks } = useAppContext();
  const [taskName, setTaskName] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log('chamou o metodo')
    const { data: newTask } = await api.post("/tasks", {
       name: taskName
    })
    setTasks(prev => [...prev, newTask])
    setTaskName("")
 }

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
