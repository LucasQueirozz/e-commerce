import React from 'react';
import styles from './VendedorInfo.module.css';

export default function VendedorInfo({ vendedor }) {
  const { nome, nota, email, telefone } = vendedor;

  return (
    <div className={styles.cardContainer}>
      <img src="https://i.pinimg.com/736x/03/48/d1/0348d19dc99f0bf9a594decbfd70fb01.jpg" alt="Avatar do Vendedor" className={styles.avatar} />
      <h3 className={styles.info}>{nome}</h3>
      <p className={styles.info}>Nota: {nota}</p>
      <p className={styles.info}>Email: {email}</p>
      <p className={styles.info}>Telefone: {telefone}</p>
    </div>
  );
}