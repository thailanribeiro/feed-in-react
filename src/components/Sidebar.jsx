import {PencilLine} from '@phosphor-icons/react';


import styles from './sidebar.module.css';

export function Sidebar() {
  return (
    <aside
      className={styles.sidebar}>
      <img 
      className={styles.cover}
      src="https://images.unsplash.com/photo-1526374870839-e155464bb9b2?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      
      />

      <div className={styles.profile}>
        <img className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/102111932?v=4" 
        />

        <strong>
          Thailan Ribeiro
        </strong>
        <span>
          Web Developer
        </span>
      </div>

      <footer>
        <a href="#://">
          <PencilLine size={17} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}