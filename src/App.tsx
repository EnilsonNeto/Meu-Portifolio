import { NavBar } from "./components/NavBar";
import { GlobalStyle } from './styles/global';
import { Home } from './components/Home';
import { Sobre } from "./components/Sobre";

export function App() {
  return (
    <div className="App">

      <NavBar />
      <Home />
      <Sobre />



      <GlobalStyle />

    </div>
  );
}

