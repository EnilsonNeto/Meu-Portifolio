import { Container } from "./style";

export function NavBar() {
    return (
        <Container>
            <div className="navBarAll">
                <nav>
                   <h1 id="Home">Enilson Neto.DEV</h1>
                   <button>&#9776;</button>
                    <ul>
                        <a href="#Home">Home</a>
                        <a href="#Sobre">Sobre</a>
                        <a href="#Project">Projetos</a>
                        <a href="#Contato">Contatos</a>
                    </ul>
                </nav>
            </div>
        </Container>
    );
}

