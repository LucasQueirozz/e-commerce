import React from 'react';
import MediaCard from '../assets/MediaCard';

export default function ProdutosRelacionados(props) {
  const produtosRelacionados = props.produtos;

  return (
    <div>
      <h3>Produtos Relacionados</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {produtosRelacionados.map((produto, index) => (
          <MediaCard
            key={index}
            produto={{
              nome: produto.nome,
              descricao: produto.descricao, 
              preco: produto.preco,
              img: produto.imagens.length > 0 ? produto.imagens[0] : ''
            }}
            width={150}
          />
        ))}
      </div>
    </div>
  );
}