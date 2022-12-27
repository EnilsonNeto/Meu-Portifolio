import { Container } from './style';
import foto from './fundoFoto.jpg';

export function Home() {
    return (
        <Container>
            <div className="configure">
                <img src={foto} alt="" />
                <h3>Olá, me chamo</h3>
                <h2>Enilson Neto</h2>
                <p>Sou Desenvolvedor FullStack</p>
            </div>
        </Container>
    )
}