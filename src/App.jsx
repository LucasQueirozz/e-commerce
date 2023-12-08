import styles from './App.module.css'
import InfoProdutoPage from './pages/InfoProdutoPage'
import Header from './components/header/Header'
import Alert from './components/assets/Alert'
import { BaseButton } from './components/assets/Componentes';

export default function App() {

  return (
    <>
      <Header />
      <main>
        <InfoProdutoPage />
      </main>
    </>
  )
}