import { NavBar } from "./components/NavBar";
import { GlobalStyle } from './styles/global';
import { Home } from './components/Home';
import { Sobre } from "./components/Sobre";
import { Project } from "./components/Projetos";
export function App() {
  return (
    <div className="App">

      <NavBar />
      <Home />
      <Sobre />
      <Project />


      <GlobalStyle />

    </div>
  );
}

