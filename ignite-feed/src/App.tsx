import { Header } from "./components/Header"

import styles from './app.module.css';
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Yuri Weilemann" content="Esse feed é bem daora!" />
          <Post author="Felipe Lacerda" content="Podia ser melhor, hein!?" />
        </main>
      </div>
    </div>
  )
}

export default App