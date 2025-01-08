// Passo 2: Definir as funções exportadas
export function Home() {
  return (
    <div>
      <h1>Bem-vindo à Home</h1>
    </div>
  );
}

export function Header() {
  return (
    <header>
      <h2>Este é o cabeçalho</h2>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <p>Este é o rodapé</p>
    </footer>
  );
}

export function Card() {
  return (
    <div>
      <h3>Eu sou um cartão!</h3>
      <p>Conteúdo do cartão...</p>
    </div>
  );
}

// Passo 4: Usar os componentes criados em outros diretórios
import { CardContainer } from "./components/Card";
import { HeaderContainer } from "./components/Header";
import { FooterContainer } from "./components/Footer";

export default function App() {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
      <FooterContainer />
    </div>
  );
}
