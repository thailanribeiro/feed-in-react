import styles from "./Header.module.css"

import reactLogo from "../assets/feedreactlogo.svg";

console.log(reactLogo);

export function Header() {
  return (
    <header className={styles.header}>
      <img src={reactLogo} alt="React Logo" />
      <h1> React Feed</h1>
    </header>
  );
}