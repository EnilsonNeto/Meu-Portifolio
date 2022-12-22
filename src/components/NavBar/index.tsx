import { Container } from "./style";

export function NavBar() {
    return (
        <Container>
            <div className="navBarAll">
                <nav>
                   <h1>Enilson Neto.DEV</h1>
                    <ul>
                        <a href="#"></a>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Contatos</a></li>
                    </ul>
                </nav>
            </div>
        </Container>
    );
}

