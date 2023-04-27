import { useAppContext } from "../../hooks/useAppContext";
import styles from "./TaskList.module.css";
import TaskItem from "./widgets/TaskItem";

const TaskList = () => {
  const { tasks } = useAppContext();

  return (
    <div className={styles.container}>
      {tasks.map((task) => (
        <TaskItem name={task.name} id={task.id} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
