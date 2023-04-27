import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

import styles from "./App.module.css";
import AboutPage from "./pages/AboutPage";
import { AppContextProvider } from "./contexts/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <Header />
      <main>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </div>
      </main>
    </AppContextProvider>
  );
};

export default App;
