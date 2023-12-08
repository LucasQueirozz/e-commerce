import "./InfoProdutoPage.css";
import Produto from "../components/content/Produto";
import VendedorInfo from '../components/content/VendedorInfo';
import ProdutosRelacionados from '../components/content/ProdutosRelacionados';
import Comentarios from '../components/content/Comentarios';
import Perguntas from '../components/content/Perguntas';
import logoMarca from "../components/content/logoMarca.png";


export default function InfoProdutoPage() {

  const imgUrl = "https://images.pexels.com/photos/"
  const produto = {
    info: {
      nome: (
        <>
          <img src={logoMarca} alt="Logomarca" style={{ height: "70px", marginRight: "10px" }} />
        </>
      ),
      descricao: "Um smartphone avançado com ótimo desempenho e câmera de alta resolução.",
      preco: 999.99,
      nota: 4.5,
      imagens: [
        `${imgUrl}4386323/pexels-photo-4386323.jpeg`,
        `${imgUrl}1092644/pexels-photo-1092644.jpeg`,
        `${imgUrl}1092671/pexels-photo-1092671.jpeg`,
        `${imgUrl}887751/pexels-photo-887751.jpeg`
      ],
    },
    vendedor: {
      nome: "Rick Sanchez",
      nota: 2.1,
      email: "ricksanchez@morty.com",
      telefone: 552199999999
    },
    produtosRelacionados: [
      {
        nome: "iphone 15",
        preco: 2799.99,
        imagens: [
          `${imgUrl}4386323/pexels-photo-4386323.jpeg`,
        ],
      },
      {
        nome: "iphone 12",
        preco: 1599.99,
        imagens: [
          `${imgUrl}1092671/pexels-photo-1092671.jpeg`,
        ],
      },
      {
        nome: "iphone 11",
        preco: 1299.99,
        imagens: [
          `${imgUrl}887751/pexels-photo-887751.jpeg`,
        ],
      },
      {
        nome: "iphone 13",
        preco: 1799.99,
        imagens: [
          `${imgUrl}1092644/pexels-photo-1092644.jpeg`,
        ],
      },
    ],
    comentarios: [
      { nome: "Carlos", dataPublicacao: "2023-01-15", mensagem: "Ótimo smartphone, estou adorando!", nota: 4.8 },
      { nome: "Ana", dataPublicacao: "2023-02-02", mensagem: "Design elegante e desempenho poderoso.", nota: 4.5 },
      { nome: "Lucas", dataPublicacao: "2023-02-10", mensagem: "Câmera incrível, mas a bateria poderia durar mais.", nota: 4.0 },
      { nome: "Maria", dataPublicacao: "2023-03-05", mensagem: "Rápido e eficiente, recomendo!", nota: 4.7 },
      { nome: "Pedro", dataPublicacao: "2023-03-20", mensagem: "Preço um pouco alto, mas vale a pena.", nota: 4.2 },
      { nome: "Isabela", dataPublicacao: "2023-04-08", mensagem: "Funcionalidades avançadas, mas a interface poderia ser mais amigável.", nota: 3.8 },
      { nome: "João", dataPublicacao: "2023-05-02", mensagem: "Leve e fácil de usar, estou satisfeito.", nota: 4.5 },
      { nome: "Camila", dataPublicacao: "2023-06-15", mensagem: "Entrega rápida, produto em perfeitas condições.", nota: 5.0 },
      { nome: "Rafael", dataPublicacao: "2023-07-01", mensagem: "Atualizações frequentes mantêm o desempenho em alta.", nota: 4.6 },
      { nome: "Juliana", dataPublicacao: "2023-07-20", mensagem: "Boa relação custo-benefício.", nota: 4.3 }
    ],
    perguntas: [
      {
        nome: "Fernanda", 
        dataPublicacao: "2023-01-20", 
        pergunta: "Qual é a capacidade da bateria?", 
        resposta: "A bateria tem uma capacidade de 4000mAh."
      },
      { nome: "Gabriel", dataPublicacao: "2023-02-05", pergunta: "Esse modelo suporta carregamento sem fio?"},
      { nome: "Mariana", dataPublicacao: "2023-02-18", pergunta: "É resistente à água?", resposta: "Sim, o smartphone possui certificação IP68, sendo resistente à água e poeira." },
      { nome: "Carlos", dataPublicacao: "2023-03-10", pergunta: "Quantos megapixels tem a câmera frontal?", resposta: "A câmera frontal tem 20 megapixels." },
      { nome: "Juliana", dataPublicacao: "2023-03-25", pergunta: "Vem com fones de ouvido na caixa?", resposta: "Sim, o produto inclui fones de ouvido na embalagem." },
      { nome: "Rafael", dataPublicacao: "2023-04-12", pergunta: "Posso expandir a memória com um cartão SD?", resposta: "Infelizmente, este modelo não suporta expansão de memória via cartão SD." },
      { nome: "Luiza", dataPublicacao: "2023-05-05", pergunta: "Qual é o sistema operacional pré-instalado?", resposta: "O smartphone vem com o sistema operacional Android 12 pré-instalado." },
      { nome: "Gustavo", dataPublicacao: "2023-06-18", pergunta: "Existem opções de cores disponíveis?", resposta: "Sim, oferecemos o smartphone nas cores preto, branco e azul." },
      { nome: "Isabela", dataPublicacao: "2023-07-02", pergunta: "O produto tem garantia?", resposta: "Sim, o smartphone possui garantia de 1 ano contra defeitos de fabricação." },
      { nome: "Thiago", dataPublicacao: "2023-07-22", pergunta: "Qual é o prazo de entrega para a minha região?", resposta: "O prazo de entrega varia de acordo com a sua localização, geralmente entre 5 a 7 dias úteis." }
    ]
  };

  return (
    <>
      <Produto produto={produto.info} />
      <VendedorInfo vendedor={produto.vendedor} />
      <Comentarios comentarios={produto.comentarios} />
      <Perguntas perguntas={produto.perguntas} />
      <div className="produtos-relacionados-container">
      <ProdutosRelacionados produtos={produto.produtosRelacionados} />
      </div>
    </>
  )
}