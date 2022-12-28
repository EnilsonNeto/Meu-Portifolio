import { NavBar } from "./components/NavBar";
import { GlobalStyle } from './styles/global';
import { Home } from './components/Home';
import { Sobre } from "./components/Sobre";
import { Project } from "./components/Projetos";
import { Contato } from "./components/Contatos";
export function App() {
  return (
    <div className="App">

      <NavBar />
      <Home />
      <Sobre />
      <Project />
      <Contato />


      <GlobalStyle />

    </div>
  );
}

