import React, { useState } from 'react';
import styles from './MenuGlobal.module.css';

const MenuGlobal = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.menuNav} ${menuOpen ? styles.show : ''}`}>
        <a className={`${styles.itemNav} ${styles.itemNavHome}`} href=''>Minha Loja</a>
        <a className={styles.itemNav} href=''>Produtos</a>
        <a className={styles.itemNav} href=''>Serviços</a>
        <a className={styles.itemNav} href=''>Sobre nós</a>
        <a className={styles.itemNav} href=''>Contatos</a>
      </nav>
    </div>
  );
};

export default MenuGlobal;