import React from 'react';
import styles from './Perguntas.module.css';

export default function Perguntas({ perguntas }) {
  return (
    <div className={styles.container}>
      <h3>Perguntas</h3>
      {perguntas.map((perg, index) => (
        <div key={`pergunta_${index}`} className={styles.perguntaContainer}>
          <p className={styles.pergunta}>{perg.pergunta}</p>
          <p className={styles.dataPublicacao}>{perg.nome} - {perg.dataPublicacao}</p>
          <p className={styles.resposta}>{perg.resposta ?? "Sem resposta."}</p>
        </div>
      ))}
    </div>
  );
}
