import CreateTask from "./widgets/CreateTask";
import TaskList from "../../components/TaskList";

import styles from "./HomePage.module.css";

import { useState } from "react";

const HomePage = () => {
  return (
    <section>
      <CreateTask />
      <TaskList />
    </section>
  );
};

export default HomePage;
