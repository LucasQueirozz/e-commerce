import styles from './Produto.module.css';
import MediaCard from '../assets/MediaCard';
import Galeria from './Galeria';
import { BaseButton } from '../assets/Componentes';


export default function Produto(props) {

  const nome = props.produto.nome;
  const descricao = props.produto.descricao;
  const preco = props.produto.preco;
  const nota = props.produto.nota;
  const imagens = props.produto.imagens;

  const precoInvisivel = false;
  let estiloPreco =
    precoInvisivel
      ? styles.precoInvisivel
      : styles.precoProduto;

  return (
    <>
      <div>
        <h3 className={styles.cabecalhoProduto} >{nome}</h3>

        <Galeria imagens={imagens} />

        <p className={styles.descricaoProduto}>{descricao}</p>

        <div className={styles.painelCompra}>
          <p>{nota} / 5.0</p>
          <p className={estiloPreco}>R$ {preco}</p>
          <BaseButton type='sucesso'>Comprar</BaseButton>
        </div>
      </div>
    </>
  )
}