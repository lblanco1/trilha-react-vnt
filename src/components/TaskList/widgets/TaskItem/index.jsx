import styles from "./TaskItem.module.css";

import { useAppContext } from "../../../../hooks/useAppContext";

const TaskItem = ({ name, id }) => {
  const { setTasks } = useAppContext();

  const handleRemove = () => {
    if (confirm("Deseja remover este item")) {
      setTasks((tasks) => tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className={styles.container}>
      <strong>{name}</strong>
      <button onClick={handleRemove}>-</button>
    </div>
  );
};

export default TaskItem;
