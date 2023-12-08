import { useState } from 'react';
import styles from './Galeria.module.css';
import { BaseButton } from '../assets/Componentes';

export default function Galeria({ imagens }) {
  const [img, setImg] = useState(0);
  const quant = imagens.length;
  const ultimoIndice = quant-1;

  const passarProxima = () => {
    if (img < ultimoIndice) {
      setImg(img+1);
    } else {
      setImg(0);
    }
  }
  const passarAnterior = () => {
    if (img > 0) {
      setImg(img-1);
    } else {
      setImg(ultimoIndice);
    }
  }

  return (
    <div>
      <img 
        className={styles.imgProduto} 
        src={imagens[img]} />
      <div className={styles.imgControl}>
        <BaseButton  
          onClick={passarAnterior} >
          Anterior</BaseButton>
        {
          imagens.map((imagem, indice) => (
            <img 
              className={styles.imgMinGaleria}
              onClick={() => setImg(indice)}
              src={imagem}
              key={`galeria_imagem_${indice}`}/>
          ))
        }
        <BaseButton 
          onClick={passarProxima} >
          Próxima</BaseButton>
      </div>
    </div>
  )
}