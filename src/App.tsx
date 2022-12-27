import { NavBar } from "./components/NavBar";
import { GlobalStyle } from './styles/global';
import { Home } from './components/Home';

export function App() {
  return (
    <div className="App">

      <NavBar />
      <Home />



      <GlobalStyle />

    </div>
  );
}

