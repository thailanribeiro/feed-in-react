import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/sidebar";



export function App() {
  return (
    <div>
      <Header />

      <div 
      className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main> 

      </div>
    </div>
  )
}

