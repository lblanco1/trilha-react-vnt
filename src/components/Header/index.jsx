import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h3>
          ToDo<span>/react</span>
        </h3>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/">tarefas</Link>
          </li>
          <li>
            <Link to="/about">sobre</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
